import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {AppModalOverlay} from './LandingStyle'
import mainLogo from '../../assets/mainLogo.png'
import appName from '../../assets/appName.png'
import TanList from "../tanList/TanList";


const Landing = () => {
  const [pagedata, setPagedata] = useState([]);
  const [store, setStore] = useState({query: '', list: []});

 useEffect(() => {
  axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) =>{
    console.log(pagedata);
    setPagedata(response.data.results);
    setStore({...store, list: response.data.results})
  }).catch((error) => {
    console.log(error);
  })
 }, [])

    // Search function which updates the state anytime a user types inside the search bar
  const searchHandler = (e) => {
    const results = pagedata.filter(data => {
      if(e.target.value === " ") return pagedata
      return data.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      setStore({
          query: e.target.value,
          list: results
      })
  } 

  return (
    <React.Fragment>
      <AppModalOverlay>
        <div className='modal-container'>
          <div className='head-section'>
          <div className='app-header'>
            <img src={mainLogo} className="app-logo"/> 
            <img src={appName} className="app-name"/> 
          </div>
          {/* <label>Enter Name or Number</label> */}
          <div className='poketan-search'>
          <input 
            type="search" 
            placeholder='Pokedex Name or Number' 
            value={store.query}
            onChange={searchHandler}
          />
          <button 
          // onClick={searchHandler}
          >Search</button>
          </div>
          </div>
          <div className='search-result'>
              <ul>
                {(store.query === "" 
                ? <div className="row">
                {store.list.map((data, index) => (
                  <div className='col-6 col-md-3'>
                  <TanList 
                    keyProps={index}
                    indexProps={index}
                    nameProps={data.name}
                  />
                  </div>
                ))}
                </div>
                : !store.list.length ? "Your search did not return any result" 
                : store.list.map(data => {
                  return (
                  <div>
                  <div className="">
                  {store.list.map((data, index) => (
                  <div className=''>
                    <TanList 
                    keyProps={index}
                    indexProps={index}
                    nameProps={data.name}
                    />
                  </div>
                ))}
                </div>
                  </div>
                  )
                }))}
              </ul>
          </div>
        </div>
      </AppModalOverlay>
    </React.Fragment>
  )
}

export default Landing;
