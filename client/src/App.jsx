import { useEffect, useState } from 'react'
import axios from 'axios'
import style from './app.module.css'

function App() {
  const keyApi = '282c885c813671f84ff97415ce72cc05'
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState({})

  const getData = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${keyApi}`)
    setWeather(response.data)
    console.log(response.data);
  }

  useEffect(() => {
    getData()
  }, [location]);

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.top}>
            <div className={style.location}>
              <p>Dallas</p>
            </div>
            <div className={style.temp}>
              <h1>60°F</h1>
            </div>
            <div className={style.description}>
              <p>Clouds</p>
            </div>
          </div>
          <div className={style.button}>
            <div className={style.feels}>
              <p className={style.bold}>65°F</p>
              <p>Feels Like</p>
            </div>
            <div className={style.humidity}>
              <p className={style.bold}>20%</p>
              <p>Humidity</p>
            </div>
            <div className={style.wind}>
             <p className={style.bold}>12 MPH</p>
             <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
      {/* <input type="text" onChange={(e) => setCityName(e.target.value)} placeholder='enter city ​​name' value={cityName} />
      <button onClick={() => setWeather(cityName)}>Search</button>
      <button>Reset</button> */}

    </>
  )
}

export default App
