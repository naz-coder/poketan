import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AboutPokie from '../../components/aboutPokie/AboutPokie';
import PokieStat from '../../components/pokieStat/PokieStat';
import {PokieDetailsStyle} from "../pokieDetails/PokieDetailsStyle"

function zeroCount(i) {
  if (i > 9 && i <= 99) {
    return "0";
  } else {
    if (i > 99) return "";
  }
  return "00";
}

const PokieDetails =() => {
  const [pokemon, setPokemon] = useState("");
  const [error, setError] = useState("");
  const {name} = useParams();
  
  useEffect(() =>{
    async function getPokemon(){
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        console.log(response.data);
        setPokemon(response.data);
      } catch (error) {
        if (error.response.status === 404) {
          console.log("Error.... Bad request");
          setError("No Pokemon found");
        } else {
          console.error("Error");
        }
      }
    } 
    getPokemon();
  }, [])
  return (
    <React.Fragment>
      <PokieDetailsStyle>
      <div>
        <div className="pokie-description">
        <div>
        <p className="pokie-name">{pokemon.name}</p>
        <hr></hr>
        </div>
        <div className="detailsCard">
        <div className="pokie-details-image-holder">
        <img
            src={"https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/" + zeroCount(pokemon.id) + pokemon.id + ".png"}
            alt={"Pokie Image"}
            className="pokie-details-image"
          />
        </div>
        <div>
          <AboutPokie pokemon={pokemon}/>
          <PokieStat stats={pokemon.stats}/>
        </div>

        </div>
        </div>
      </div>
    </PokieDetailsStyle>
    </React.Fragment>
  );
}
export default PokieDetails;
