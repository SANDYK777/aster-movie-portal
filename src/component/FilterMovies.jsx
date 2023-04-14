import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/browserSlice";

const FilterMovies=(props)=>{
    const dispatch = useDispatch();
    const handleRemove =(e)=>{
        dispatch(removeItem(e.target.value));
    }
    console.log(props.movie);
    return(<>
      <div className="filtermovieTile">
    {props.movie.map(i=>
    
     <div className="tile">
                <button className="removeButton" onClick={handleRemove} value={i}>Remove</button>
            <img src ={`https://www.themoviedb.org/t/p/w220_and_h330_face/`+i.poster_path}/>
          <h2>{i.original_title}</h2>
          <span>{i.overview}</span>

        </div>
     )
    }
    </div>
     </>)

    }

export default FilterMovies;