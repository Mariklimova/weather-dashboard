import { useState } from 'react';
import style from './search.module.css'

function SearchForm({ setLocation, setWeather, checkData, setCheckData }) {
    const [city, setCity] = useState('');


    return <>
        <div className={style.search}>

            <button onClick={() => {
                setWeather({});
                setCity('');
                setCheckData(true)
            }}>Reset</button>

            <input value={city} type="text" onChange={(e) => setCity(e.target.value)} placeholder='enter location' />
            <button onClick={() => setLocation(city)}>Search</button>

        </div>
        <div> {!checkData ? <p className={style.error}>I can't determine the location, try again</p> : null}</div>
    </>
}
export default SearchForm