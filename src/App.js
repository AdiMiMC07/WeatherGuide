import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import LocationState from './context/locationSetter/locState';
import {
  Routes,
  Route
} from 'react-router-dom';
import ForecastItem from './components/ForecastItem';
import About from './components/About';

function App() {
  return (
    <>
    <LocationState>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path="/forecastitem/:id" element={<ForecastItem/>}/>
      </Routes>
    </LocationState>
    </>
  );
}

export default App;
