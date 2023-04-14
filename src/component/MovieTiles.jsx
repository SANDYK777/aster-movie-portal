import React from "react";
import { logo } from "../utils/Constants";
const MovieTiles=(props)=>{
    return(
   
        <>
        <div className="tile">
            <img src ={`https://www.themoviedb.org/t/p/w220_and_h330_face/`+props.movie.poster_path} alt='No Image Found'/>
          <h2>{props.movie.original_title}</h2>
          <h2>Rated {props.movie.vote_average}/10</h2>
          <span>{props.movie.overview}</span>

        </div>
        </>
    )
}

export default MovieTiles;