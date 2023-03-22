import React, { useState } from 'react';
import axios from 'axios';
import {TanListWrap} from '../tanList/TanListStyle';
import tan1 from '../../assets/tan1.png'

const TanList = () => {
  const [tans, setTans] = useState([]);
  const tansHandler = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) =>{
      console.log(response)
      setTans(response.data.results[0])
    })
  }
  
  return (
    <React.Fragment>
      <TanListWrap>
        {/* <div className='col-6 col-md-3'> */}
        <div className="">
          <button onClick={tansHandler}>Poke</button>
          {tans}
        <div className='row'>
          <div className='col-6 col-md-3'>
            <div className='tan-card'>
                <div className='tan-image'>
                  <img src={tan1}/>
                </div>
                <div className='tan-number'>#0001</div>
                <div className='tan-name'>Bulbasaur</div>
                <div className='card-button'>
                    <button className='button-1'>Grass</button>
                    <button className='button-2'>Poison</button>
                </div>
            </div>
          </div>
          <div className='col-6 col-md-3'>
            <div className='tan-card'>
                <div className='tan-image'>
                  <img src={tan1}/>
                </div>
                <div className='tan-number'>#0001</div>
                <div className='tan-name'>Bulbasaur</div>
                <div className='card-button'>
                    <button className='button-1'>Grass</button>
                    <button className='button-2'>Poison</button>
                </div>
            </div>
          </div>
          <div className='col-6 col-md-3'>
            <div className='tan-card'>
                <div className='tan-image'>
                  <img src={tan1}/>
                </div>
                <div className='tan-number'>#0001</div>
                <div className='tan-name'>Bulbasaur</div>
                <div className='card-button'>
                    <button className='button-1'>Grass</button>
                    <button className='button-2'>Poison</button>
                </div>
            </div>
          </div>
          <div className='col-6 col-md-3'>
            <div className='tan-card'>
                <div className='tan-image'>
                  <img src={tan1}/>
                </div>
                <div className='tan-number'>#0001</div>
                <div className='tan-name'>Bulbasaur</div>
                <div className='card-button'>
                    <button className='button-1'>Grass</button>
                    <button className='button-2'>Poison</button>
                </div>
            </div>
          </div>
          
        </div>
        </div>
      </TanListWrap>
    </React.Fragment>
  )
}

export default TanList
