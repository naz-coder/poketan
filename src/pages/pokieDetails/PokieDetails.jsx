import React, { Component, useEffect, useState } from 'react'
import axios from 'axios';
import {PokieDetailsWrap} from "../pokieDetails/PokieDetailsStyle"
import AboutPokie from '../../components/aboutPokie/AboutPokie';
import PokieStat from '../../components/pokieStat/PokieStat';
import { useLocation, useParams } from 'react-router-dom';

const withParams = (Component) => {
  return (props) => <Component {...props} params={useParams}/>
}

const countOfZero = (z) =>{
  if(z > 9 && z <= 99){
    return "0";
  }else{
    if(z > 99)return "";
  }
  return "00";
}

const PokieDetails = () => {
  const [details, setDetails] = useState([]);
  const [error, setError] = useState(null);
  const {name} = useParams();

  useEffect(() => {
    fetchPokieDetails();
  }, [name]);


  const fetchPokieDetails = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon" + "/" + name).then((response) => {
      if(response.status >= 200 && response.status < 300){
          setDetails(response.data);
      }
    }).catch((error) => {
      if(error.response.status === 404){
        console.log("Error... Bad Request");
        setError("No Pokies Found!");
      }else{
        console.error("Error");
      }
    }); 
   };    
   
  if(details) {
    return (
      <PokieDetailsWrap>
          <div className="details-container">
          {/* <p>{pokie.name}</p> */}
            <div>
              {details.map((pokie) => {
                return(
                  <div className="imageCard">
                    <p>{pokie.name}</p>
                    <img src={pokie.url} alt={pokie.name} loading='lazy'/>
                  </div>
                )
              })}
            </div>
            <div className='poke-stat'>
              <AboutPokie/>
              <PokieStat/>
            </div>
          </div>
      </PokieDetailsWrap>
    )
  }else if (error){
    return <div className='error'>{error}</div>
  }else{
    return <div className='error'><h2>Loading...</h2></div>
  }
}

export default withParams(PokieDetails);