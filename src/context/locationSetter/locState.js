import locationContext from './locContext'
import { useState } from 'react'

const LocationState = (props) => {
    const apikey = process.env.REACT_APP_WEATHER_API_KEY_2;
    const initialID = 0;
    const [locID, setlocID] = useState(initialID);
    const [weather, setWeather] = useState({});
    const [dailyForecast, setDailyForecast] = useState([]);

    const getLocID = async (location) => {
        let locationID = await fetch(`https://foreca-weather.p.rapidapi.com/location/search/${location}?lang=en&country=in`, 
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${apikey}`,
                'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
            }
        }
        );
        let parsedData = await locationID.json();
        setlocID(parsedData.locations[0].id);
    }
    const updateWeather = async (location_Id) => {
        let weatherData = await fetch(`https://foreca-weather.p.rapidapi.com/current/${location_Id}?alt=0&tempunit=C&windunit=MS&tz=Europe%2FLondon&lang=en`,
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${apikey}`,
                'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
            }
        });
        let parsedData = await weatherData.json();
        setWeather(parsedData.current);
    }
    const updateForecast = async (location_Id) => {
        let forecastData = await fetch(`https://foreca-weather.p.rapidapi.com/forecast/daily/${location_Id}?alt=0&tempunit=C&windunit=MS&periods=8&dataset=full`,
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${apikey}`,
                'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
            }
        });
        let forecastDataJSON = await forecastData.json();
        setDailyForecast(forecastDataJSON.forecast);
        console.log(forecastDataJSON.forecast)
    }
    return (
        <locationContext.Provider value={{locID,dailyForecast,setDailyForecast,updateForecast,setlocID,weather,setWeather,getLocID,updateWeather}}>
            {props.children}
        </locationContext.Provider>
    )
}
export default LocationState;
