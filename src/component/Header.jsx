import React, { useRef } from "react";
import { base_url } from "../utils/Constants";
import { logo } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { setSelection } from "../utils/browserSlice";

const Header=()=>{
    let time = new Date().toLocaleTimeString();
    const dispatch = useDispatch();
    const ref= useRef();
    const handleClick=(e)=>{
             console.log(e.target.value);
              dispatch(setSelection(e.target.value));
    }
    return (<>
    <div className="header" >
        <div>
        <ul className="nav-items">
            <li>
             <img src={logo} className="logo"></img>
            </li>
            <li>
               <button onClick={handleClick} value='ByPopular'>Popular Movies</button>
            </li>
            <li>
               <button onClick={handleClick} value='ByYear'> Movies Of the Year</button>
            </li>
            </ul>
            </div>
            {console.log(base_url)}
            <div className="dateHeader">
               {time}
            </div>
        
    </div>
    
    </>)
}
export default Header;