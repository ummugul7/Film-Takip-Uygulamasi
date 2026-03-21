import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const ResultCard = ({movie}) => {

  const {watchedlist,watchlist, addMovieToWatchlist, addMovieToWatchedlist} = useContext(GlobalContext)

  const storedMovie = watchlist.find((o) => o.id === movie.id)
  const storedMovieWatched = watchedlist.find((o) => o.id === movie.id)
  return (
    <div className="result-card">
        <div className="poster-wrapper">
            {/* bu yol tmdbni n özel yolu poster için bunu kullanman gerekiyor  */}
            <img  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
            alt={`${movie.poster_path}`} />
        </div>

       <div className="info">
        <div className="deneme" >
          <h4 className="title">{movie.title}</h4>
          <h5 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h5>
          <h5 className="release-date">
            IMDB: <b>{movie.vote_average ? movie.vote_average.toFixed(1) : "-"}</b>
          </h5>
          <p>{movie.overview ? movie.overview.substring(0, 300) + "..." : "-"}</p>
        </div>
         <div className="controls">
          <button className="btn" 
            disabled={storedMovie || storedMovieWatched}
           onClick={()=> addMovieToWatchlist(movie)}
          >
            Add to Watchlis
          </button>
          <button
            className="btn"
            disabled={storedMovieWatched || storedMovie}
            onClick={()=> addMovieToWatchedlist(movie)}
            
          >
            Add to Watched
          </button>
        </div>
        
      </div>

    </div>
  )
}

export default ResultCard