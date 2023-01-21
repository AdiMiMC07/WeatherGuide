import React, { useState, useContext,useEffect } from 'react'
import locationContext from '../context/locationSetter/locContext';
import Alert from './Alert';
import Forecast from './Forecast';
import Search from './Search';
import WeatherItem from './WeatherItem';

export default function Main() {
  const context = useContext(locationContext);
  const { locID, getLocID, loading,alert,displayAlert } = context;
  const [location, setLocation] = useState("");
  let locationVal;
  let savedLocation = localStorage.getItem('location');
  const onChange = (e) => {
    locationVal = e.target.value;
  }
  let alertcopy = alert;
  const handleSubmitClick = () => {
    if (locationVal) {
      setLocation(locationVal);
      localStorage.setItem('location', locationVal);
      savedLocation = localStorage.getItem('location');
    }
    else {
      displayAlert("City can't be empty!","danger")
    }
  }
  useEffect(() => {
    if (location){
      getLocID(location);
      
    }
    //eslint-disable-next-line
  }, [location])
  
  return (
    <>
      <div className="container vw-100">
        <h2 className='text-center my-3'>Welcome to WeatherGuide
        </h2>
        <h4 className='text-center my-2'>Get current weather data of your city</h4>
        <Search location={locationVal} onChange={onChange} handleSubmitClick={handleSubmitClick} />
        <Alert alert={alert}/>
        {!loading? <div>
          <WeatherItem location={location} id={locID} />
          <Forecast />
        </div> : <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>}
      </div>
    </>
  )
}
