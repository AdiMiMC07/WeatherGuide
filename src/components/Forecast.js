import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import locationContext from '../context/locationSetter/locContext'

const Forecast = () => {
    const weatherContext = useContext(locationContext)
    const { locID, dailyForecast, updateForecast } = weatherContext;
    useEffect(() => {
        if (locID) {
            updateForecast(locID);
        }
        // eslint-disable-next-line
    }, [locID])
    return (
        <>
            {dailyForecast.length !== 0 ? <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-2">
                    {dailyForecast.map((day,index) =>{
                        return <div className="col" key={index}>
                        <div className="card h-100" style={{backgroundImage:"linear-gradient(135deg,white 65%,#008effd6 40%)",backgroundPosition:"20% 80%"}}>
                            <div className="card-body">
                                <h5 className="card-title">{(new Date(day.date)).toDateString()}</h5>
                                <p className="card-text">{day.symbolPhrase}</p>
                                <p className="card-text">Cloudiness :{day.cloudiness} %</p>
                                <p className="card-text">Min/Max Temp : {day.minTemp} / {day.maxTemp} ˚C</p>
                                <p className="card-text">Min/Max Humidity : {day.minRelHumidity} / {day.maxRelHumidity} %</p>
                                <Link className="btn btn-primary" to={`/forecastitem/${index}`}>View Complete Forecast</Link>
                            </div>
                        </div>
                    </div>
                    })}
                </div>
            </div> : ""}
        </>
    )
}

export default Forecast