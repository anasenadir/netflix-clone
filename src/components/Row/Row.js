import { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../helpers/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


const base_img_url = "https://image.tmdb.org/t/p/w500"; 
const Row = ({title , fetchURL , isLargeRow  ,globalIndexTrailer ,setGlobalIndexTrailer })=>{
    const [movies , setMovies] = useState([]);
    const [localRowTrailer , setlocalRowTrailer]  = useState(''); 
    const [trailerURL , setTrailerURL] = useState('');

    useEffect( () => {
        async function fetchData(){
            let response = await axios.get(fetchURL);
            setMovies(response.data.results);
        }
        fetchData();
    } , [fetchURL]);


    // compoaring the local component trailer with the global Component Trailer
    // to prevent playing more then one trailer at once 
    useEffect(()=>{
        if(globalIndexTrailer !== localRowTrailer){
            setTrailerURL('');
        }else{
            setTrailerURL(globalIndexTrailer);
        }
    } , [globalIndexTrailer ])

    const handlePlayFunc = (movie)=>{
        // search for a movie by name if name is exists
        // dispatch(setMovieTr(''));
        movieTrailer(movie?.name ||movie?.title || movie?.original_title || "").then((url)=>{
            /**
             * to understand what these clases ("URL" , "URLSearchParams") do;
             * example 1 : 
             * const params = new URL(https://www.youtube.com/watch?v=SafWyTuYRmc).search;
             * console.log(params) ==> v=SafWyTuYRmc  
             * 
             * example 2 :
             * const params = new URL(https://www.youtube.com/watch?v=XtMThy8QKqU&t=11128s).search;
             * console.log(params) ==> v=XtMThy8QKqU&t=11128s  
             * 
             * ================================================
             * example 1 :  
             * const param = new URLSearchParams(new URL(https://www.youtube.com/watch?v=SafWyTuYRmc).search)
             * console.log(param.get('v')) => SafWyTuYRmc
             * 
             * example 2: 
             * const param = new URLSearchParams(new URL(https://www.youtube.com/watch?v=SafWyTuYRmc&t=11128s).search)
             * console.log(param.get('t')) ==> 11128s
             */

            const urlParams = new URLSearchParams(new URL(url).search);
            // dispatch(setMovieTr(urlParams.get('v')));
            if(urlParams.get('v') == trailerURL){
                setGlobalIndexTrailer('')
                setlocalRowTrailer('')
            }else{
                setGlobalIndexTrailer(urlParams.get('v'))
                setlocalRowTrailer(urlParams.get('v'))
            }
        }).catch((e)=>console.log(e));
    }


    let opts = {
        height: 350,
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }
    return <div className="row">
        <h3 className="row__title">{title}</h3>

        <div className="row__posters">
            {movies.map((movie) =>{
                return <img 
                key={movie.id}
                // className={isLargeRow ? 'row__poster largRow' : 'row__poster'}
                className={`row__poster ${isLargeRow && 'largRow'}`}
                src={isLargeRow ? `${base_img_url}${movie.poster_path}` : `${base_img_url}${movie.backdrop_path}`} 
                alt={movie.title}
                onClick={()=>{handlePlayFunc(movie)}}
                />
            })}

        </div>
        {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
}


export  default Row;