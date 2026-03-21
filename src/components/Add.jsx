import React, { useContext } from 'react'
import { useState } from 'react'
import ResultCard from './ResultCard';
import { GlobalContext } from '../context/GlobalState';

const Add = () => {
  const{ummugulcaglar} =useContext(GlobalContext)
  const[query , setQuery] = React.useState("")
  const [results, setResults] = useState([]);
  function onChange(e) { 
    setQuery(e.target.value);

  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&query=${e.target.value}&language=en-US&page=1`)
.then(res => res.json())
.then(data => {if (!data.errors) {
          setResults(data.results);
          
        } else {
          setResults([]);
        }
});
}

  return ( 
    <div className="add-page">
      <div className="container">
         <div className="add-content">
          <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" />
          <div className="titles"><h1>Hoş geldiniz</h1><h2>
              Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
            </h2></div>
            <div className="input-wrapper">
              <input type="text"  value={query} onChange={onChange} placeholder="Film,Dizi,Kişi ara ..." />
            </div>
            {results.length > 0 && (
              <ul className="results"> 
              {results.map((movie) => (
              
                <li key ={movie.id}>
                  <ResultCard movie={movie} />
                </li>
                
            ))}

              </ul>
            )}
            
          </div>
      </div>
    </div>
  )
}

export default Add