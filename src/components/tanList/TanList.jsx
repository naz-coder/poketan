import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {TanListWrap} from '../tanList/TanListStyle';
// import tan1 from '../../assets/tan1.png'

const TanList = (props) => {
  // const [photo, setPhoto] = useState([]);

  // Photo variable and loop
  // var photoNum = 1;   
  // var url = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${photoNum.toString().padStart(3, '0')}.png`;

  for(  let p=1; p<20; p++){
  var photoNum = 1;   
  photoNum++;
  var url = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${photoNum.toString().padStart(3, '0')}.png`;
  }


  
  return (
    <React.Fragment>
      <TanListWrap>
        <div className="">
        <div className=''>
          <div className='tan-card-container' key={props.keyProps}>
            <div className='tan-card'>
                <div className='tan-image'>
                  <img src={url} loading="lazy"/>
                </div>
                <div className='tan-number'>#{props.indexProps}</div>
                <div className='tan-name'>{props.nameProps}</div>
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
