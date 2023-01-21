import React, { useEffect, useContext } from 'react'
import locationContext from '../context/locationSetter/locContext'

const WeatherItem = (props) => {
    const weatherContext = useContext(locationContext)
    const { locID, weather, updateWeather,weatherIcon } = weatherContext;
    useEffect(() => {
        if (locID) {
            updateWeather(locID);
        }
        // eslint-disable-next-line
    }, [locID])
    const capitaliseFirst = (word) => {
        const newType = (word.split(''))[0].toUpperCase();
        return newType.concat(word.slice(1, word.length));
    }
    return (
        <>
            {(Object.keys(weather)).length !== 0 ? <div className="container vw-100">
                <div className="card text-bg-dark default-image-nobs">
                    <div className="card-img-overlay ms-3">
                        <div className="d-flex">
                            <h5 className="card-title fs-1 me-2">{localStorage.getItem('location') === "" ? "" : capitaliseFirst(localStorage.getItem('location'))}</h5>
                            <div className='display-weather-icon'>{weatherIcon[weather.symbol.toString()]}</div>
                        </div>
                        <p className="card-text fs-2">{weather.symbolPhrase ? weather.symbolPhrase : ""}</p>
                        <p className="card-text fs-3">{weather.temperature ? weather.temperature : ""}˚C</p>
                        <p className="card-text fs-5">Feels Like : {weather.feelsLikeTemp ? weather.feelsLikeTemp : ""}˚C</p>
                        <p className="card-text fs-5">Cloudiness : {weather.cloudiness ? weather.cloudiness + "%" : "no clouds"}</p>
                    </div>
                </div>
                <div className="d-flex my-3 gap-1 flex-wrap">
                    <div className="card shadow rounded flex-fill" id="card-d">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <h5 className="card-title fs-3 me-3">DewPoint</h5>
                                <span className="material-symbols-outlined">
                                    dew_point
                                </span>
                            </div>
                            <p className="card-text">{weather.dewPoint ? weather.dewPoint : ""} ˚</p>

                        </div>
                    </div>
                    <div className="card shadow rounded flex-fill" id="card-h">
                        <div className="card-body">
                            <div className="d-flex align-items-center">
                                <h5 className="card-title fs-3 me-3">Humidity</h5>
                                <span className="material-symbols-outlined">
                                    humidity_percentage
                                </span>
                            </div>
                            <p className="card-text">{weather.relHumidity ? weather.relHumidity : "0"} %</p>

                        </div>
                    </div>
                    <div className="card shadow rounded flex-fill" id="card-vb">
                        <div className="card-body">
                            <div className="d-flex align-items-center">

                                <h5 className="card-title fs-3 me-3">Visibility</h5>
                                <i className="fa-solid fa-eye"></i>
                            </div>
                            <p className="card-text">{weather.visibility ? weather.visibility : "0"} metres</p>
                        </div>
                    </div>
                    <div className="card shadow rounded flex-fill" id="card-uv">
                        <div className="card-body">
                            <div className="d-flex align-items-center">

                                <h5 className="card-title fs-3 me-3">UV Index</h5>
                                <i className="fa-regular fa-sun"></i>
                            </div>
                            <p className="card-text">{weather.uvIndex ? weather.uvIndex : "0"}</p>
                        </div>
                    </div>
                    <div className="card shadow rounded flex-fill" id="card-w">
                        <div className="card-body">
                            <div className="d-flex align-items-center">

                                <h5 className="card-title fs-3 me-3">Wind</h5>
                                <i className="fa-solid fa-wind"></i>
                            </div>
                            <p className="card-text"><strong>Wind speed</strong>: {weather.windSpeed ? weather.windSpeed : ""} m/s</p>
                            <p className="card-text"><strong>Wind Direction</strong>: {weather.windDir ? weather.windDir : ""}˚ {weather.windDirString ? weather.windDirString : ""}</p>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title fs-3 me-3">Pressure</h5>
                                <p className="card-text">{weather.pressure ? weather.pressure : "0"} hPa</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <h5 className="card-title fs-3 me-3">Precipitation</h5>
                                <p className="card-text">{weather.preciProb ? weather.preciProb : "0"} %</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                : <div className='default-image-nobs d-none'></div>}

        </>
    )
}
export default WeatherItem;