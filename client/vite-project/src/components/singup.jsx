import { useEffect,useState } from "react";
import { Navigate } from "react-router-dom";


const Singup=()=>{

    const[data,setdata]=useState({
        firstname:'',email:''
    });
    return(
        <>
        <div className="container bg-success">
        <h1>Sign Up</h1>
      
            <label>Name</label>
         
            <input type="text" name="firstname" onChange={handleInputs}/>
        
            <label>Email Address:</label>
            
            <input type="email" name="email" onChange={handleInputs} />
            <button className="data" onClick={postdata}>submit</button>
          
            </div>
        </>
    )
}

export default Singup;