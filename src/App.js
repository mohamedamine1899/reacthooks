import './App.css';
import { useState } from 'react';
import m from './assests/m';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';

function App() {
  const [movies , setMovies]=useState(m);
  const addMovie=(title ,description , rating, posterURL)=>{
    const newMovie={title ,description , rating, posterURL};
    setMovies(movies =>[...movies,newMovie]);
  };
  return (
    <div className="App">
    <AddMovie onAdd={addMovie}/>
     <MovieList movies={movies}/>
    </div>
  );
}

export default App;
