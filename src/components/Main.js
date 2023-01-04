import React, { useState, useContext} from 'react'
import locationContext from '../context/locationSetter/locContext';
import Forecast from './Forecast';
import Search from './Search';
import WeatherItem from './WeatherItem';

export default function Main() {
  const context = useContext(locationContext);
  const { locID,getLocID } = context;
  const [location, setLocation] = useState("");
  const onChange = (e)=>{
    setLocation(e.target.value);
  }
  const handleSubmitClick = ()=>{
    if (location){
      getLocID(location);
    }
    else{
      console.log("entry do bhai");
    }
  }
  return (
    <>
    <div className="container vw-100">
      <h2 className='text-center my-3'>Welcome to WeatherGuide
      </h2>
      <h4 className='text-center my-2'>Get current weather data of your city</h4>
      <Search onChange={onChange} handleSubmitClick={handleSubmitClick}/>
      <div>
        {<WeatherItem location={location} id={locID}/>}
        <Forecast/>
      </div>
    </div>
    </>
  )
}
