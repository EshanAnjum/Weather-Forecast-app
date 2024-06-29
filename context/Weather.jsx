import { createContext, useContext ,useState} from "react";
import {GetWeatherDataForCity , GetWeatherDataForLocation} from "../Api"


export const WeatherContext = createContext(null);


//This function will give access to the context to any component that uses it.
export const useWeather = () => {
    return useContext(WeatherContext);
}




export const WeatherProvider = (props) => {
    const [data,setData] = useState(null);
    const [searchCity , setSearchCity] = useState(null);

    const fetchData = async () => {
        const response = await GetWeatherDataForCity(searchCity);
        setData(response);
    }
    
const fetchCurrentUserLocationData = ()=>{
    navigator.geolocation.getCurrentPosition((position) =>{
    console.log(position);
    GetWeatherDataForLocation(position.coords.accuracy.latitude , position.coords.longitude).
    then(data=>setData(data))
    });
};

    return (<WeatherContext.Provider 
    value={{searchCity,data,setSearchCity,fetchData,fetchCurrentUserLocationData}}>{props.children}
    </WeatherContext.Provider>
    )
}
