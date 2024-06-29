import React from "react";
import { useWeather } from "../context/Weather";



const Input = ()=>{

    const weather = useWeather();
    // console.log(weather);
    return(
        <input className="input-field"
        // Automatically updates input  field value with the latest searchcity variable value.
        value={weather.searchCity} 
        //Looks for a onchange event and whenever input field value changes it automatically updates searchcity value
        onChange={(e) => weather.setSearchCity(e.target.value)}></input>
    )
}

export default Input;