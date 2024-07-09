import style from './search.module.css'

function SearchForm() {
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState({})
    return <>
        <div className={style.search}>

            <button onClick={() => {
                setWeather({})
                setLocation('')
            }}>Reset</button>

            <input value={location} type="text" onChange={(e) => setLocation(e.target.value)} placeholder='enter location' />
            <button onClick={() => getData(location)}>Search</button>
        </div>
    </>
}
export default SearchForm