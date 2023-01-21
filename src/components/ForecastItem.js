import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import locationContext from '../context/locationSetter/locContext';
import sunriseAnimation from '../sunrise.png'
import sunsetAnimation from '../sunset.png'
import moonrise from '../moonrise.png'
import moonset from '../moonset.png'

import windAnimation from '../windAnimation.gif'

const ForecastItem = () => {
    const context = useContext(locationContext);
    const { dailyForecast, weatherIcon } = context;
    let { id } = useParams();
    const data = dailyForecast[id];
    if (data) {
        localStorage.setItem('forecast', JSON.stringify(data));
    }
    let savedForecast = JSON.parse(localStorage.getItem('forecast'));
    const capitaliseFirst = (word) => {
        const newType = (word.split(''))[0].toUpperCase();
        return newType.concat(word.slice(1, word.length));
    }

    return (
        <div className="container mt-3">
            {<div className="card mb-3 fci-card1">
                <div className="row g-0">
                    <div className="col-md-4">
                        {/* <img src="..." className="img-fluid rounded-start" alt="..." /> */}
                        <div className='main-weather-icon'>{weatherIcon[savedForecast.symbol.toString()]}</div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className='card-title'>{capitaliseFirst(localStorage.getItem('location'))}</h3>
                            <h4 className="card-text">{savedForecast.date}</h4>
                            <h5>{savedForecast.symbolPhrase}</h5>
                            <p className="card-text">Max / Min Temp : {savedForecast.maxTemp} / {savedForecast.minTemp} ˚C</p>
                            <p className="card-text">Max / Min Feel Like Temp : {savedForecast.maxFeelsLikeTemp} / {savedForecast.minFeelsLikeTemp}</p>
                            <p className="card-text">Max / Min Rel. Humidity : {savedForecast.maxRelHumidity} / {savedForecast.minRelHumidity}</p>
                            <p className="card-text">Cloudiness : {savedForecast.cloudiness}</p>
                            <p className="card-text">Precipitation Probability : {savedForecast.precipProb}</p>
                            <p className="card-text">UV Index : {savedForecast.uvIndex}</p>
                            <p className="card-text">Pressure : {savedForecast.pressure}</p>
                        </div>
                    </div>
                </div>
            </div>}
            {
                <div className="d-flex gap-1 w-100 flex-wrap justify-content-evenly">
                    <div className="card mb-3 flex-fill fci-cardgroup1__item">
                        <img src={sunriseAnimation} alt="" style={{ width: "50%", height: "50%", alignSelf: "center",marginTop:"0.7rem" }} />
                        <div className="card-body container">
                            <h5 className="card-title">Sunrise</h5>
                            <p className="card-text">Sunrise Time : {savedForecast.sunrise} am</p>
                        </div>
                    </div>
                    <div className="card mb-3 flex-fill fci-cardgroup1__item">
                        <img src={sunsetAnimation} alt="" style={{ width: "50%", height: "50%", alignSelf: "center",marginTop:"0.7rem" }} />
                        <div className="card-body">
                            <h5 className="card-title">Sunset</h5>
                            <p className="card-text">Sunset Time : {savedForecast.sunset} pm</p>
                        </div>
                    </div>
                    <div className="card mb-3 flex-fill fci-cardgroup1__item">
                        <img src={windAnimation} className="card-img-top" alt="..." style={{ width: "50%", height: "50%", alignSelf: 'center',marginTop:"0.7rem",mixBlendMode:"screen",filter:'invert(1)' }} />
                        <div className="card-body">
                            <h5 className="card-title">Wind</h5>
                            <p className="card-text">Max Wind Speed : {savedForecast.maxWindSpeed} m/s</p>
                            <p className="card-text">Wind Direction : {savedForecast.windDir} ˚</p>
                            <p className="card-text">Max Wind Gust : {savedForecast.maxWindGust} m/s</p>
                        </div>
                    </div>
                </div>
            }
            {
                <div className="d-flex gap-1 w-100 flex-wrap justify-content-evenly">
                    <div className="card mb-3 w-25 flex-fill fci-cardgroup2__item">
                        <img src={moonrise} alt="" style={{ width: "50%", height: "65%", alignSelf: "center",marginTop:"0.7rem" }} />
                        <div className="card-body container">
                            <h5 className="card-title">Moonrise</h5>
                            <p className="card-text">Moonrise Time : {savedForecast.moonrise} am</p>
                        </div>
                    </div>
                    <div className="card mb-3 w-25 flex-fill fci-cardgroup2__item">
                        <img src={moonset} alt="" style={{ width: "50%", height: "65%", alignSelf: "center",marginTop:"0.7rem" }} />
                        <div className="card-body">
                            <h5 className="card-title">Moonset</h5>
                            <p className="card-text">Moonset Time : {savedForecast.moonset} pm</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ForecastItem