import React from 'react'

export default function Main(props) {
  const apikey = process.env.REACT_APP_WEATHER_API_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${props.apikey}`,
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  return (
    <div>Main</div>
  )
}
