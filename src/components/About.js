import React from 'react'

function About() {
  return (
    <div className="container text-center my-3">
        <h3>WeatherGuide</h3>
        This webapp can be used to get the current weather data and 8-day daily forecast data of your city 
        <br />This app is made with <kbd>Reactjs</kbd> and <kbd>Bootstrap</kbd>
        <br />
        <p style={{textDecorationLine:"underline",margin:"2rem 0"}}>Note: The web app right now works for Indian cities only.</p> 
    </div>
  )
}

export default About
