import React from "react";
import { useWeather } from "../context/Weather";


const Card = (props)=>{
    const weather = useWeather();
    return(
        <div className="card">
            <h2>{props.info}</h2>
            <img src={weather?.data?.current?.condition?.icon}></img>
            <h2>{weather.data?.current?.temp_c}</h2>
            <h5>{weather.data?.location?.name},{weather.data?.location?.region},{weather.data?.location?.country}</h5>
        </div>
    )
}

export default Card;