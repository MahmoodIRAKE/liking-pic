
import React, { useEffect } from "react";
import './img.css'
import { getDog } from "../../api/dogsApi";
const CustomeImage=({counter,zeroState,likes,dislikes})=>{
    const [src,setSrc]=React.useState(null);
    const [lastCounter,setCounter]=React.useState(-1)

    useEffect(()=>{
        async function getData(){
        if(counter>lastCounter){
           setSrc(await getDog())
           setCounter(counter)
        }
      }
      getData();
    }, [counter, lastCounter])


 if(counter===10){
   return  <div className="flexing-center col">
       <h1>Likes: {likes}</h1>
       <h1>Dislikes: {dislikes}</h1>
       <button onClick={()=>{zeroState(); setCounter(-1)}}>Start Over</button>
   </div> 
 }

 if(!src){
     return <div className="img-container"> Loading ...</div>
 }
 return(<div className="img-container" style={{backgroundImage:`url(${src})`}}>
     </div>)
}
export default CustomeImage;