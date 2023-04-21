import React, { useState } from 'react'
import {SearchBarWrap} from "../searchBar/SearchBarStyle"
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");

  const searchInputHandler = (e) => {
    setSearchItem(e.target.value)
  }

  const navigate = useNavigate();
  const formHandler = () => {
    navigate("/pokie/" + searchItem.toLowerCase())
  }

  return (
    <React.Fragment>
        <SearchBarWrap>
        <form onSubmit={formHandler}>
          {" "}
        <div className='poketan-search'>
          <input 
            type='text'
            placeholder='Pokie Name or Code' 
            value={searchItem}
            onChange={searchInputHandler}
          />
          <button type='submit'>Search</button>
          </div>
          </form>
        </SearchBarWrap>
    </React.Fragment>
  )
}

export default SearchBar