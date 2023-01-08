import { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../helpers/axios";
import requests from "../../helpers/requests";


const Row = ({title , fetchURL , isLargeRow})=>{
    const [movies , setMovies] = useState([]);
    const base_img_url = "https://image.tmdb.org/t/p/w500"; 

    useEffect( () => {
        async function fetchData(){
            let response = await axios.get(fetchURL);
            // console.log(response);
            setMovies(response.data.results);
        }

        fetchData();
    } , [fetchURL]);
    // console
    return <div className="row">
        <h3 className="row__title">{title}</h3>

        <div className="row__posters">
            {movies.map((movie) =>{
                return <img 
                key={movie.id}
                // className={isLargeRow ? 'row__poster largRow' : 'row__poster'}
                className={`row__poster ${isLargeRow && 'largRow'}`}
                src={isLargeRow ? `${base_img_url}${movie.poster_path}` : `${base_img_url}${movie.backdrop_path}`} 
                alt={movie.title}/>
                
            })}
        </div>
    </div>
}


export  default Row;