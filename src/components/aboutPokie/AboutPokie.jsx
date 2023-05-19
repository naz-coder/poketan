import React from 'react'
import { useEffect, useState } from 'react';
import {AboutPokieStyle} from "../aboutPokie/AboutPokieStyle"

const AboutPokie = ({pokemon}) => {
    const [able, setAble] = useState("");
    const {abilities, height, weight, base_experience, order} = pokemon;
  
    useEffect(() => {
      setAble(abilities?.map((ability) => ability.ability.name).join(", "));
    }, [abilities]);
  
    return (
      <AboutPokieStyle>
       <div className='info-section'>
          <h3  className='section-title'>About Pokies</h3>
          <ul>
            <li><b>{"Abilities: "}</b>{able}</li>
            <li><b>{"Height: "}</b>{height + "cm"}</li>
            <li><b>{"Weight: "}</b>{weight + "kg"}</li>
            <li><b>{"Base Experience: "}</b>{base_experience}</li>
            <li><b>{"Order: "}</b>{order}</li>
          </ul>
        </div>
      </AboutPokieStyle>
    );
}

export default AboutPokie