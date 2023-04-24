import React, { useState } from 'react'
import {SearchBarWrap} from "../searchBar/SearchBarStyle"

const SearchBar = ({onSearch}) => {
  const [searchItem, setSearchItem] = useState("");

  const inputChangeHandler = (e) => {
    const searchItem = e.target.value;
    setSearchItem(searchItem);
    onSearch(searchItem);
  }


  return (
        <SearchBarWrap>
        <div className='poketan-search'>
          <input 
            type='text'
            placeholder='Pokie Name or Code' 
            value={searchItem}
            onChange={inputChangeHandler}
          />
          {/* <button onClick={() => onSearch(searchItem)}>Search</button> */}
          </div>
        </SearchBarWrap>
  )
}

export default SearchBar
