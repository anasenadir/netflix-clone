import { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../helpers/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

// icons
import { AiOutlineHeart ,AiTwotoneHeart , AiFillCaretDown } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
const Row = ({title , fetchURL , isLargeRow  ,globalIndexTrailer ,setGlobalIndexTrailer })=>{
    const base_img_url = "https://image.tmdb.org/t/p/w500"; 
    const [movies , setMovies] = useState([]);
    const [localRowTrailer , setlocalRowTrailer]  = useState(''); 
    const [trailerURL , setTrailerURL] = useState('');
    // ======================
    const [isFavoriteIconClicked  , setFavoriteClicked] = useState(false); 

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
    
    
    const handlePlayFunc = (e , movie)=>{
        // show the outline by default
        activeMovie(e , true);

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
                // hide the outline 
                activeMovie(e , false);
                
                setGlobalIndexTrailer('')
                setlocalRowTrailer('')
            }else{
                // show the outline
                activeMovie(e , true);


                setGlobalIndexTrailer(urlParams.get('v'));
                setlocalRowTrailer(urlParams.get('v'));
            }
        }).catch((e)=>{
            // hide the outline 
            activeMovie(e , false);
        });

        
    }

    // this function is for adding the outline when the user choosing a movie
    const activeMovie = (e , isNotTheSame) => {
        let movies = document.querySelectorAll('.active');
        // console.log(movies);
        movies.forEach((elem)=>{
            elem.classList.remove('active')
        })
        if(isNotTheSame){
            !e.target.offsetParent.classList.contains('active') ? e.target.offsetParent.classList.add('active') : e.target.offsetParent.classList.remove('active') ;
        }
    }

    let opts = {
        height: 350,
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }
    return <>
        <h3 className="row__title">{title}</h3>
        <Swiper 
                spaceBetween={10}
                slidesPerView={3}
                breakpoints={{
                    768: {
                        slidesPerView: 4,
                    },
                    900: {
                        slidesPerView: 6,
                    },
                    1200: {
                        slidesPerView: 8,
                    },
                    1600:{
                        slidesPerView: 10
                    }
                }}
                >
                {movies.map((movie) =>{
                    // return 
                    if(movie.backdrop_path){
                    return <SwiperSlide  key={movie.id} className="poster__wrapper" onClick={(e)=>{handlePlayFunc(e , movie)}}>

                        <img 
                        key={movie.id}
                        // className={isLargeRow ? 'row__poster largRow' : 'row__poster'}
                        className={`row__poster ${isLargeRow && 'largRow'}`}
                        src={isLargeRow ? `${base_img_url}${movie.poster_path}` : `${base_img_url}${movie.backdrop_path}`} 
                        alt={movie.title}
                        />
                        <AiFillCaretDown className="caret__down"/>
                    </SwiperSlide>
                    }
                })}
        {trailerURL && <YouTube videoId={trailerURL} className="youtube__video" opts={opts} />}
        </Swiper>
    </>
}


export  default Row;