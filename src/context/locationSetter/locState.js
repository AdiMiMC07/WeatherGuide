import locationContext from './locContext'
import { useState } from 'react'

const LocationState = (props) => {
    const apikey = process.env.REACT_APP_WEATHER_API_KEY_2;
    const initialID = 0;
    const [locID, setlocID] = useState(initialID);
    const [weather, setWeather] = useState({});
    const [dailyForecast, setDailyForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState("");

    const weatherIcon = {
        d000: <i className="fa-solid fa-sun" style={{ color: "orange" }}></i>, d100: <i className="fa-regular fa-sun-cloud"></i>, d200: <i className="fa-regular fa-cloud-sun"></i>,
        d300: <i className="fa-regular fa-clouds-sun"></i>, d400: <i className="fa-solid fa-clouds"></i>, d500: <i className="fa-regular fa-sun-haze"></i>,
        d600: <i className="fa-solid fa-cloud-fog"></i>, d210: <i className="fa-regular fa-cloud-sun-rain"></i>, d220: "",
        d310: "", d320: "", d410: <i className="fa-regular fa-cloud-drizzle"></i>,
        d420: <i className="fa-solid fa-cloud-showers"></i>, d430: <i className="fa-solid fa-cloud-rain"></i>, d240: "",
        d340: "", d440: "", d211: "",
        d311: "", d411: "", d221: "",
        d321: "", d421: "",
    }
    const displayAlert = (message, type) => {
        setAlert({
            msg: message,
            alertType: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 1000);
    }

    const getLocID = async (location) => {
        try {
            setLoading(true);
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
            setLoading(false);
        } catch (err) {
            displayAlert("Unexpected Error Occured!!","danger");
            setInterval(() => {
                window.location.reload();
            }, 500);
        }
        finally {
            setLoading(false)
        }
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
    }
    return (
        <locationContext.Provider value={{ locID, alert,loading, dailyForecast, setDailyForecast, updateForecast, setlocID, weather, weatherIcon, setWeather, getLocID, updateWeather,displayAlert }}>
            {props.children}
        </locationContext.Provider>
    )
}
export default LocationState;
