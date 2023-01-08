const API_KEY = 'a4f1df66dd983b206664b4fc71cc3b5b';



const requests = {
    fetchTrending : `/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals : `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28` , 
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}


export default requests;