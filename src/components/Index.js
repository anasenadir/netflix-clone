import Row from "./Row/Row"
import requests from "../helpers/requests"
import { Banner } from "./Banner/Banner";

const Index = ()=>{
    return (
        <div>
            <Banner />
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