import { useState } from "react"
export default function Counter(){
    const [count,setCount]=useState(0)
  

    function clickIncrease(){
      if (count < 20)
        {
                setCount(count + 1);
        }
    }

    function Clickdecrease(){
        if (count > 0){
        setCount(count -1);
        }
    }
    
    return(
        <div>
        
       <h3 style={{color : count>10?'red':'green'}}> Count Value is : {count}</h3>
       <button onClick={clickIncrease}> Increment</button>
        
        <button onClick={Clickdecrease}>Decrement</button>
       
        </div>
    )
}