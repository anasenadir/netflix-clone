import Row from "./Row/Row"
import requests from "../helpers/requests"
import Banner  from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";

const Index = ()=>{
    return (
        <div className="app">
            <Navbar />
            <Banner fetchURL={requests.fetchTopRated} />
            <Row  
            title="Tranding " 
            fetchURL={requests.fetchTrending}
            isLargeRow
            />
            <Row  title="Action Movies " fetchURL={requests.fetchActionMovies}/>
            <Row  title="Comedy Movies " fetchURL={requests.fetchComedyMovies}/>
            <Row  title="Horro Movies" fetchURL={requests.fetchHorrorMovies}/>
            <Row  title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
            <Row  title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals}/>
            <Row  title="Romantice Movies" fetchURL={requests.fetchRomanceMovies}/>
            <Row  title="Top Rated" fetchURL={requests.fetchTopRated}/>
        </div>
    );
}



export default Index;