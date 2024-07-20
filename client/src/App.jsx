import { useEffect, useState } from 'react'
import axios from 'axios'
import style from './app.module.css'
import SearchForm from './components/SearchForm/SearchForm';
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay';


const keyApi = '282c885c813671f84ff97415ce72cc05'

function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({})


  const getData = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${keyApi}`)
    setWeather(response.data);
  }

  useEffect(() => {
    getData()
  }, [location]);


  return (
    <>
      <SearchForm setLocation={setLocation} setWeather={setWeather} />
      <WeatherDisplay weather={weather} />
    </>
  )
}

export default App
