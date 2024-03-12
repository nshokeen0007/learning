import React from "react"
import { Link } from "react-router-dom";
function Headers(){
    return(
        <>
     <nav>
     <div >
        <ul className="d-flex gy-2 list-none">
          <li className="pe-5">
            <Link to="/">Home</Link>
          </li>
          <li className="pe-5">
            <Link to="/singup">send data</Link>
          </li>
          <li className="pe-5">
            <Link to="/getdata">get</Link>
          </li>
        </ul>
      </div>
      </nav>
        
        </>
    )
}

export default Headers;