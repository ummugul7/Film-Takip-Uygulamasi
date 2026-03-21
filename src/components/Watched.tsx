import MovieGrid from "./MovieGrid"
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Watched = () => {
  const { watchedlist } = useContext(GlobalContext)
  return <MovieGrid title="İzlenenler" movies={watchedlist} type="watched" />
}

export default Watched