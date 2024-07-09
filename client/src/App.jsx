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
    getData(location)
  }, []);


  return (
    <>
      <div className={style.wrapper}>
        <div className={style.search}>

          <button onClick={() => {
            setWeather({})
            setLocation('')
          }}>Reset</button>

          <input value={location} type="text" onChange={(e) => setLocation(e.target.value)} placeholder='enter location' />
          <button onClick={getData}>Search</button>
        </div>
        {/* <SearchForm setLocation={setLocation} setWeather={setWeather} getData={getData}/> */}

        {/* <div className={style.container}>
          <div className={style.top}>
            <div className={style.location}>
              <p>{weather.name}</p>
            </div>
            <div className={style.temp}>
              {weather.main ? <h1>{weather.main.temp.toFixed()} °F</h1> : null}
            </div>
            <div className={style.description}>
              {weather.weather ? <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} /> : null}

              {weather.weather ? <p>{weather.weather[0].main}</p> : null}
            </div>
          </div>

          {weather.name != undefined &&
            <div className={style.bottom}>
              <div className={style.feels}>
                {weather.main ? <p className={style.bold}>{weather.main.feels_like.toFixed()} °F</p> : null}
                <p>Feels Like</p>
              </div>
              <div className={style.humidity}>
                {weather.main ? <p className={style.bold}>{weather.main.humidity} %</p> : null}
                <p>Humidity</p>
              </div>
              <div className={style.wind}>
                {weather.main ? <p className={style.bold}>{weather.wind.speed.toFixed()} MPH</p> : null}
                <p>Wind Speed</p>
              </div>
            </div>
          }

        </div> */}
        <WeatherDisplay weather={weather}/>
      </div>


    </>
  )
}

export default App
