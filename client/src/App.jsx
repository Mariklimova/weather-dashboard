import { useEffect, useState } from 'react'
import axios from 'axios'
import style from './app.module.css'

function App() {
  const keyApi = '282c885c813671f84ff97415ce72cc05'
  const [cityName, setCityName] = useState('');
  const [weather, setWeather] = useState({})

  const getData = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keyApi}`)
    setWeather(response.data)
  }

  useEffect(() => {
    getData()
  }, [cityName]);

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
              <p>65°F</p>
            </div>
            <div className={style.humidity}>
              <p>20%</p>
            </div>
            <div className={style.wind}>
              12 MPH
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
