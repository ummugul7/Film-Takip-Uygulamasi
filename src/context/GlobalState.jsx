import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
{/* create context tanımı verinin her yerden erişebileceiğini tanımlar  */}
export const GlobalContext = createContext();
{/*intialstate başlangıç değeri  */}
const initialState = {
    watchlist : localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],  
    watchedlist : localStorage.getItem("watchedlist") ? JSON.parse(localStorage.getItem("watchedlist")) : [],  
}


export const GlobalProvider = (props) => {
    const [state,dispatch] = useReducer(AppReducer,initialState)
    
     useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
    }, [state.watchlist])  

     useEffect(() => {
    localStorage.setItem("watchedlist", JSON.stringify(state.watchedlist))
    }, [state.watchedlist])
    {/*buradaki bu movie değerini result cardan alacağız  */}
    const addMovieToWatchlist = (movie) => {
        dispatch({type:"ADD_MOVIE_TO_WATCHLIST", payload:movie}) 
    }

    const removeMovieFromWatchlist = (id) => {
        dispatch({type:"REMOVE_MOVIE_TO_WATCHLIST", payload:id}) 
    }
    
    const addMovieToWatchedlist = (movie) => {
        dispatch({type:"ADD_MOVIE_TO_WATCHEDLIST", payload:movie}) 
    }

    const moveToWatchlist = (movie) => {
        dispatch({type:"MOVE_TO_WATCHLIST", payload:movie})
    }

     const removeMovieFromWatched = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id });
  };
    
    return (
        
        <GlobalContext.Provider value={{
           watchlist: state.watchlist,
           watchedlist: state.watchedlist,
          addMovieToWatchlist,
          removeMovieFromWatchlist,
          addMovieToWatchedlist,
          moveToWatchlist,
          removeMovieFromWatched,

        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
