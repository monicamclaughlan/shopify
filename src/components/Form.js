import React from 'react'

const Form = ({setmovies, movies}) => {

    const apiKey = "5008485";
    const handleChange = async (event) => { 
        movies = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${event.target.value}`)
        const data = await movies.json()
        setmovies(data.Search);
    }

   
    return (
        <div className="form">
            <p>Movie Title</p>
            <form>
                <input 
                type="text" 
                name="searchterm" 
                placeholder="Search by Movie Title"
                onChange={handleChange}
                />
               
            </form>
        </div>
    )
}

export default Form
