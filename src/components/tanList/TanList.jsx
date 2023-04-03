import React, { useState } from 'react';
import {TanListWrap} from '../tanList/TanListStyle';
import tan1 from '../../assets/tan1.png'

const TanList = (props) => {
  return (
    <React.Fragment>
      <TanListWrap>
        <div className="">
        <div className=''>
          <div className='' key={props.keyProps}>
            <div className='tan-card'>
                <div className='tan-image'>
                  <img src={tan1} loading="lazy"/>
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
