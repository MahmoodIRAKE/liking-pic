import React from "react";
import '../../utils/utils.css'
import './button.css'
const CustomButton=({text,callback,color,name})=>{
    
    return (<button className="flexing-center btn" onClick={(e)=>callback(e)} style={{borderColor:color}} name={name}>
              {text} 
           </button>)
}

export default CustomButton