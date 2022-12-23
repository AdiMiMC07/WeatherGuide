import React,{useState,useEffect} from 'react'
import image from './cloudy.jpg'
export default function Main(props) {
  const apikey = process.env.REACT_APP_WEATHER_API_KEY;
  const [weather, setWeather] = useState({});
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${apikey}`,
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  const updateWeather = async () => {
    let weatherData = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options);
    let parsedData = await weatherData.json();
    console.log(parsedData)
    setWeather(parsedData);
  }
  useEffect(() => {
    updateWeather();
    // eslint-disable-next-line
  },[])
  return (
    <>
      <div className='container'>
        <div className="card text-bg-dark">
          <img src={image} className="card-img" alt="..." style={{height: "30rem"}}/>
            <div className="card-img-overlay">
              <h5 className="card-title fs-1">{props.city}</h5>
              <p className="card-text fs-2">{weather.temp} C</p>
              <p className="card-text fs-5">Feels Like : {weather.feels_like} C</p>
              <p className="card-text fs-5">Max / Min : {weather.max_temp} C / {weather.min_temp} C</p>
            </div>
        </div>
        {/* <button onClick={updateWeather}>Click it</button> */}
      </div>
    </>
  )
}
