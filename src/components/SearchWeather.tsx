import { useState } from "react"

const SearchWeather = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <form className='Search flex-row' action={`/search/${searchValue}`}>
        <div className="Search-input-wrapper">
            <input 
              type="text" 
              id="search-weather" 
              placeholder='Search here...' 
              autoComplete='off' 
              required
              onChange={(e) => setSearchValue(e.target.value.toLocaleLowerCase())}
            />
        </div>
        <input type="submit" />
    </form>
  )
}

export default SearchWeather