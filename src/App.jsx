import { useState, useEffect } from 'react'
import './App.css'
import MovieDisplay from './componets/MovieDisplay'
import Form from './componets/Form'


function App() {
  const apikey = "5bafba99"

    //State to hold movie data
    const [movie, setMovie] = useState(null)

     //Function to getMovies

  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apikey}&t=${searchTerm}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  };
  useEffect(()=>{
    getMovie("Willy Wonka and the chocolate Factory")
  }, []);
  return (
    <div className="App">
    <Form moviesearch={getMovie}/>
    <MovieDisplay movie={movie} />
    </div>
    
  )
}

export default App
