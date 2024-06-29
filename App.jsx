import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";
import { useEffect } from "react";

function App(){
    const weather = useWeather();
    console.log(weather);

    useEffect(()=>{
        weather.fetchCurrentUserLocationData()
    },[]);


    //Approach 1 to handle refresh button (not used)
    const HandleRefreshButton = () =>{
        weather.setSearchCity(()=> " ")
    }


    return(
        <div className= "App">
            <h1>Weather forecast</h1>
            <Input/>
            <Button onClick = {weather.fetchData} value = "Search"/> 
            <Card info = "Current Weather"/>
           
            {/* <Button onClick={() => {weather.fetchCurrentUserLocationData() ; HandleRefreshButton()}} value="Refresh"/> */}



            <Button onClick={() => {weather.fetchCurrentUserLocationData() ; weather.setSearchCity(()=>"")}} value="Refresh"/>


        </div>
    );
}

export default App;