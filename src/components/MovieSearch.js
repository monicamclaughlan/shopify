import React from 'react';

const MovieSearch = ({movies, add, nominated}) => {
    let list = []
    if (movies && movies.length > 2) {
        list = movies.map((m, i) => { 
            if (nominated.includes(m.Title)){
                return ( 
                    <ul>
                        <li>{m.Title} ({m.Year})</li>
                        <button type="button" disabled>Nominated</button>
                    </ul>
                )
            }else { 
                return ( 
                    <ul>
                        <li>{m.Title} ({m.Year}) </li> 
                        <button onClick={() => add(m.Title)}>Nominate</button>                       
                    </ul>
                )

            }
            
        })
    }
        return (
            <div className="movies">
            {list}
            </div>
            ) 
       

}

export default MovieSearch
