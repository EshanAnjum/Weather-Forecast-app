
//API call to get weather .
export const GetWeatherDataForCity = async(city)=>{
    console.log("here");
    const BaseUrl = "https://api.weatherapi.com/v1/current.json?key=6cc3e0e7a99e44edbf4161343241206"

    const response = await fetch(`${BaseUrl}&q=${city} &aqi=yes`)
    // console.log("res " ,response);
    return await response.json();
};


//API call to get current location weather data
export const GetWeatherDataForLocation = async(lat,lon)=>{
    console.log("here");
    const BaseUrl = "https://api.weatherapi.com/v1/current.json?key=6cc3e0e7a99e44edbf4161343241206"

    const response = await fetch(`${BaseUrl}&q=${lat},${lon} &aqi=yes`)
    // console.log("res " ,response);
    return await response.json();
};