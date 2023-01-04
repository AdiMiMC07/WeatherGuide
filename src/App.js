import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import LocationState from './context/locationSetter/locState';

function App() {
  return (
    <>
    <LocationState>
      <Navbar />
      <Main/>
    </LocationState>
    </>
  );
}

export default App;
