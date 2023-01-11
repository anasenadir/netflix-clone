import Row from "../../components/Row/Row"
import requests from "../../helpers/requests"
import Banner  from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";

const Home = ()=>{
    const [globalIndexTrailer ,setGlobalIndexTrailer] = useState('');
    return (
        <div className="app">
            <Navbar />
            <Banner fetchURL={requests.fetchTopRated} />
            <Row  
            title="Tranding " 
            fetchURL={requests.fetchTrending}
            setGlobalIndexTrailer={setGlobalIndexTrailer} globalIndexTrailer={globalIndexTrailer}
            isLargeRow
            />
            <Row globalIndexTrailer={globalIndexTrailer} setGlobalIndexTrailer={setGlobalIndexTrailer} title="Action Movies " fetchURL={requests.fetchActionMovies}/>
            <Row globalIndexTrailer={globalIndexTrailer} setGlobalIndexTrailer={setGlobalIndexTrailer} title="Comedy Movies " fetchURL={requests.fetchComedyMovies}/>
            <Row globalIndexTrailer={globalIndexTrailer} setGlobalIndexTrailer={setGlobalIndexTrailer} title="Horro Movies" fetchURL={requests.fetchHorrorMovies}/>
            <Row globalIndexTrailer={globalIndexTrailer} setGlobalIndexTrailer={setGlobalIndexTrailer} title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
            <Row globalIndexTrailer={globalIndexTrailer} setGlobalIndexTrailer={setGlobalIndexTrailer} title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals}/>
            <Row globalIndexTrailer={globalIndexTrailer} setGlobalIndexTrailer={setGlobalIndexTrailer} title="Romantice Movies" fetchURL={requests.fetchRomanceMovies}/>
            <Row globalIndexTrailer={globalIndexTrailer} setGlobalIndexTrailer={setGlobalIndexTrailer} title="Top Rated" fetchURL={requests.fetchTopRated}/>
        </div>
    );
}



export default Home;