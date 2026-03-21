import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieGrid from './MovieGrid'

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext)
  return <MovieGrid title="İzlenecek filmler" movies={watchlist} type="watchlist" />
}

export default Watchlist