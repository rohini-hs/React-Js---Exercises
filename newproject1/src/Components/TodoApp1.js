
import React from "react";
function TodoApp1(props)
{
    return(
<div>
    <h3>Welcome to {props.weather.currentCity} Abhinav!</h3>
    <h3>{props.weather.description}</h3>
    <h3>{props.weather.temperature}</h3>
    <div>
        <h2>The weather in {props.weather.currentCity} is {props.weather.description} and temperature is {props.weather.temperature}</h2>
    </div>
    <div>
        <h3>{props.weather.arrayTodo.map((arraylist) =>(<h1>{arraylist}</h1>))}</h3>
    </div>
</div>
);
}
export default TodoApp1;