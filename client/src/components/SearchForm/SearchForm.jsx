import { useState } from 'react';
import style from './search.module.css'

function SearchForm({setLocation,setWeather,getData}) {
    const [city, setCity] = useState('');
    // const [weather, setWeather] = useState({})

    
    return <>
        <div className={style.search}>

            <button onClick={() => {
                setWeather({})
                setCity('')
            }}>Reset</button>

            <input value={location} type="text" onChange={(e) => setLocation(e.target.value)} placeholder='enter location' />
            <button onClick={getData}>Search</button>
        </div>
    </>
}
export default SearchForm