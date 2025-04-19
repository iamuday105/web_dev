import React from 'react'
import support from './Support'
import {useNavigate} from "react-router-dom";

function Labs() {
    const navigate = useNavigate();
    const naviagetHandler = () =>{

        navigate("/support");
    }
  return (
    <div>
    <p>labs</p>

      <button onClick={naviagetHandler}>move to next page</button>
    </div>

  
  )
}

export default Labs