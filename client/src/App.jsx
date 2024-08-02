import { useEffect, useState } from 'react'
import axios from 'axios'
// import style from './app.module.css'
import SearchForm from './components/SearchForm/SearchForm';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';


const keyApi = '282c885c813671f84ff97415ce72cc05'

function App() {
  const [location, setLocation] = useState(localStorage.getItem('nameCity') || '');
  const [weather, setWeather] = useState({});
  const [checkData, setCheckData] = useState(true);



  const getData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${keyApi}`);
      localStorage.setItem('nameCity', location)
      setWeather(response.data);
      setCheckData(true);

    } catch (error) {
      setCheckData(false);

    }
  }

  useEffect(() => {
    getData()
  }, [location]);


  return (
    <>
      <SearchForm setLocation={setLocation} setWeather={setWeather} checkData={checkData} setCheckData={setCheckData} />

      {checkData ? <WeatherDisplay weather={weather} /> : null}
    </>
  )
}

export default App
