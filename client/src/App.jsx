import { useEffect, useState } from 'react'
import axios from 'axios'
import style from './app.module.css'

function App() {
  const keyApi = '282c885c813671f84ff97415ce72cc05'
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({})
  const [icon, setIcon] = useState()

  const getData = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${keyApi}`)
    setWeather(response.data)
  }
  useEffect(() => {
    getData()
  }, []);

  const getIcon = async () => {
    const response = await axios.get(`https://openweathermap.org/img/wn/04d@2x.png`)
    setIcon(response.data)
  }
  useEffect(() => {
    getIcon()
  }, []);
  // https://openweathermap.org/img/wn/10d@2x.png

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.search}>

          <button onClick={() => {
            setWeather({})
            setLocation('')
          }}>Reset</button>

          <input value={location} type="text" onChange={(e) => setLocation(e.target.value)} placeholder='enter location' />
          <button onClick={() => getData(location)}>Search</button>
        </div>
        <div className={style.container}>
          <div className={style.top}>
            <div className={style.location}>
              <p>{weather.name}</p>
            </div>
            <div className={style.temp}>
              {weather.main ? <h1>{weather.main.temp.toFixed()} °F</h1> : null}
            </div>
            <div className={style.description}>
              {weather.weather ? <p>{weather.weather[0].icon}</p> : null}
              {/* {weather.weather ? <p>{icon}</p> : null} */}

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

        </div>
      </div>


    </>
  )
}

export default App
