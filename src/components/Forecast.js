import React, { useEffect, useContext } from 'react'
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
            <div>Forecast</div>
            {dailyForecast.length !== 0 ? <div className='container'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {dailyForecast.map(day =>{
                        return <div className="col">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{(new Date(day.date)).toDateString()}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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