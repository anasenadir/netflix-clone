import React, { useEffect, useState } from 'react'
import axios from '../../helpers/axios';
import { IoAddOutline , IoPlaySharp } from "react-icons/io5";
import "./Banner.css";


const Banner = ({fetchURL}) => {
    const [movie , setMovie] = useState([]);
    const [overviewLength , setOverviewLingth] = useState(0);
    const base_img_url = "https://image.tmdb.org/t/p/w500"; 

    useEffect(()=>{
        async function fetchMovie(){
            let response = await axios.get(fetchURL);
            setMovie(
                response.data.results[ 
                    Math.floor(Math.random() * response.data.results.length)
                ]
            );
            setOverviewLingth(
                response.data.results[ 
                    Math.floor(Math.random() * response.data.results.length)
                ].overview.length
            );
        }
        fetchMovie();

    } , [setOverviewLingth])


    // console.log(movie.overview.length < 180 ?movie.overview : movie.overview.slice(0 , 180) + " ...");
    // console.log(overviewLength);

    return (
        <header className='banner'
        style={{
            backgroundSize:"cover",
            backgroundImage: `url(${base_img_url}${movie.backdrop_path})`,
            backgroundRepeat:'no-repeat',
            backgroundPosition: "center"
        }}
        >
            <div className='banner__content'>
                <h3 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h3>
                <div className='d-flex'>
                    <button className='btns'><IoPlaySharp  style={{marginRight:5}}/> Play</button>
                    <button className='btns'><IoAddOutline style={{marginRight:5}}/> My List</button>
                </div>
                <p className='banner__overview'>{movie.overview}</p>
            </div>
        </header>
    )
}



export default Banner ;
