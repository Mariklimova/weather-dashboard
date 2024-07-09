import style from './weather.module.css'

function WeatherDisplay({weather}) {
   return <>
   <div className={style.container}>
          <div className={style.top}>
            <div className={style.location}>
              <p>{weather.name}</p>
            </div>
            <div className={style.temp}>
              {weather.main ? <h1>{(weather.main.temp-273.15).toFixed()} °C</h1> : null}
            </div>
            <div className={style.description}>
              {weather.weather ? <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} /> : null}

              {weather.weather ? <p>{weather.weather[0].main}</p> : null}
            </div>
          </div>

          {weather.name != undefined &&
            <div className={style.bottom}>
              <div className={style.feels}>
                {weather.main ? <p className={style.bold}>{(weather.main.feels_like-273.15).toFixed()} °С</p> : null}
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
   </> 
}
export default WeatherDisplay