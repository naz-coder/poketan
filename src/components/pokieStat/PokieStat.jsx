import React from 'react'

const PokieStat = (props) => {
  const {stats} = props
  return (
    <div className='info-section'>
        <h3>Pokie Statistics</h3>
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
  )
}

export default PokieStat