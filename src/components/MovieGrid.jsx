import React from 'react'
import MovieCard from './MovieCard'

const MovieGrid = ({ title, movies ,type}) => {
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h2 className="heading">{title}</h2>
          <div className="count-pill">
            {movies.length} {movies.length < 2 ? "Movie" : "Movies"}
          </div>
        </div>
        {movies.length > 0 ? (
          <div className="movie-grid">
            {movies.map((movie) => (
              //burdaki key prop'u React'in her bir elemanı benzersiz olarak tanımlaması için kullanılır. Bu, React'in hangi öğelerin değiştiğini, eklendiğini veya kaldırıldığını daha iyi anlamasına yardımcı olur ve böylece performansı artırır.
              <MovieCard key={movie.id} movie={movie} type={type} />
            ))}
          </div> 
        )
         :(<h2 className="no-movies">Listenizde film yok</h2>) }
      </div>
    </div>
  )
}

export default MovieGrid