import {useState,useEffect} from 'react'
import axios from 'axios'
import './Weather.css'

const Weather = () => {
    const [weather,setWeather]=useState(null);

    
useEffect(()=>{
    navigator.geolocation.getCurrentPosition(position=>{
        const {latitude,longitude}=position.coords;

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=e711f1d7c1a4fcbcc91b5722b4f65fbd`)
        .then(response =>{
            setWeather(response.data);

        })
        .catch(error =>{
            console.log("error fetching data",error)
        })
    })
},[])

if(!weather){
    return <div> Loading weather data...</div>
}

const weatherIconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
const date = new Date(weather.dt * 1000);
const formattedDate = date.toLocaleString();

  return (
 



    <div className="widget">
    <div className="left-panel panel">
      <div className="date">{formattedDate}</div>
      <div className="city">{weather.name}</div>
      <div className="temp">
        <img src={weatherIconUrl} alt={weather.weather[0].description} width="60" />
        {(weather.main.temp - 273.15).toFixed(2)}&deg;C
      </div>
    </div>

  </div>
  )
}

export default Weather