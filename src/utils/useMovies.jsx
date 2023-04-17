import React, { useEffect, useState } from "react";
import { bearer_token ,base_url,yearly_release_url} from "./Constants";
import { useSelector } from "react-redux";

const useMovies=()=>{

    const selectionType = useSelector((store)=>store.browsingHistory.selectBy);

    const [movies,setMovies]= useState();
    let url ='';
    const getMovies = async()=>{
      url =selectionType!=='ByPopular'? yearly_release_url:base_url+"/discover/movie?sort_by=popularity.desc";
     
        console.log(url);
        let movies= await fetch(url,{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                "authorization":`Bearer ${bearer_token}`
            }
        });
        let movieList = await movies.json();
        setMovies(movieList);

    }
    useEffect(()=>{
        getMovies();
     },[selectionType])


    // const getToken= async()=>{
    //     let data = await fetch(token_url);
    //     let json = await data.json();
    //     setToken(json['request_token'])
    //     console.log("here",token);


    // }
    // //getToken().then(e=>authenticate());
    // const authenticate= async()=>{
    //     if(token!==null)
    //     {
    //      let auth = await fetch(authentication_url/token+`?redirect_to=?request_token=${token}&approved=true`);
    //      //let json = await auth.json();
    //      let session_key = await fetch(session_key_url,
    //         {
    //             method:"POST",
    //             headers:{
    //                 "Content-Type":"application/json",
    //             },
    //             body: JSON.stringify({
    //                 "request_token": token
    //               })
    //         });
    //      let awaitkey = await session_key.json();
    //       console.log("awaitkey",awaitkey);
    //     }
    // }
    
    // useEffect(()=>{
    //     getToken();
    
    // })
    // useEffect(()=>{
    //     authenticate();
    // },[])



    return movies;
}
export default useMovies;