import React, { useEffect, useState } from "react";
import useMovies from "../utils/useMovies";
import MovieTiles from "./MovieTiles";
import {useSelector,useDispatch} from 'react-redux';
import { addItem, itemCount, removeItem } from "../utils/browserSlice";
import FilterMovies from "./FilterMovies";
//import {Formik,Form,Field,ErroMessage} from 'formik';


const Body=()=>{
let movie_list = useMovies();
const [searchtxt,setSearchTxt]= useState();
const browserHistory=useSelector((store)=>store.browsingHistory.browesedMovies)
const dispatch = useDispatch()

const handleClick=(e)=>{
    console.log(searchtxt);
    if(movie_list && searchtxt)
    {
        movie_list.results.map((i,index)=>{
            
            if(i.original_title.toLowerCase().includes(searchtxt.toLowerCase()))
            {
                console.log("movie",browserHistory)

                if(!browserHistory.some(i=>i.id===movie_list.results[index].id))
                  {
                  dispatch(addItem(movie_list.results[index]));
                  console.log("movie",browserHistory)

                }
            }
        
        })
    }
}
return(
    <>
    
<div className="search-container">
      <input 
      type="text"
     className="search-inputs" 
      placeholder="Search"
      value={searchtxt}
      onChange={e=> {setSearchTxt(e.target.value)}}
      >
      </input>
     <br></br>
      <button className="search-btn" onClick={handleClick}>Search</button>

    </div>
   
{ movie_list ? 
   ( <div>
    <br></br>
 {browserHistory.length>0?<FilterMovies movie={browserHistory} ></FilterMovies>:""}

    <div className="movieTile">

        {
           movie_list.results.map(i=>

            <MovieTiles movie={i}></MovieTiles>
            
            )
        }
    </div>
    </div>):""
    
    }
  
 </>)
}
export default Body;