import React from "react";

const Shimmer = ()=>{
    return<>
    {Array(10).fill('').map((i,index)=>{
    <div className="tile" id={index}>

    </div>

    })
    }
    </>
}