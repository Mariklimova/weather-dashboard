import { useState } from 'react';
import style from './search.module.css'

function SearchForm({ setLocation, setWeather }) {
    const [city, setCity] = useState('');


    return <>
        <div className={style.search}>

            <button onClick={() => {
                setWeather({})
                setCity('')
            }}>Reset</button>

            <input value={city} type="text" onChange={(e) => setCity(e.target.value)} placeholder='enter location' />
            <button onClick={() => setLocation(city)}>Search</button>
        </div>
    </>
}
export default SearchForm