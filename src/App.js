import React, {useState} from 'react'
import './App.css';
import MovieSearch from './components/MovieSearch.js'
import Nominations from './components/Nominations.js'
import Form from './components/Form.js'

function App() {
    

    const [movies, setMovies] = useState([])

    const [nominated, setNominated] = useState([])

    const addNominatedList = (title) => {
      if(nominated.length <= 4) {
        setNominated([...nominated, title])
        console.log(nominated.length)     
      } else {
        alert("Sorry you can only nominate 5!");
      }
  }

  const removeFromNominatedList = (index) => setNominated(nominated.filter((currentValue,currentIndex) => currentIndex !== index))





  return (
    <div className="App">
      <h1>The Shoppies</h1>
        <Form movies={movies} setmovies={setMovies}/>
        <MovieSearch movies={movies} add={addNominatedList} nominated={nominated}/>
        <Nominations nominated={nominated} remove={removeFromNominatedList}/>

    </div>
  );
}

export default App;
