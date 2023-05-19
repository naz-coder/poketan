import React from 'react'
import {PokieStatStyle} from "../pokieStat/PokieStatStyle"

const PokieStat = (props) => {
  const {stats} = props
  return (
    <PokieStatStyle>
      <div className='info-section'>
        <h3 className='section-title'>Pokie Statistics</h3>
        {stats? (
          <ul>{stats.map((stat, index) => (
            <li key={index}>
              <div><b>{stat.stat.name}</b></div>
              <progress value={stat.base_stat} max="100"></progress>
            </li>
          ))}</ul>
        ):(
          <h1>{"Not available"}</h1>
        )}
    </div>
    </PokieStatStyle>
  )
}

export default PokieStat