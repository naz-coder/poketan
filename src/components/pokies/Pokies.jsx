import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {PokiesWrap} from "../pokies/PokiesStyle"
import SearchBar from '../searchBar/SearchBar';

// const PokieCard = lazy (() => import ("../"))

// Pagination condition
var offset = 0;
const countOfZero = (z) =>{
  if(z > 9 && z <= 99){
    return "0";
  }else{
    if(z > 99)return "";
  }
  return "00";
}

const Pokies = () => {
  const [pagedata, setPagedata] = useState([]);
  const [child, setChild] = useState(1);
  const update = () => {setChild(Math.random())};

  // Page buttons logic
  const previousPage = () => {
    if(offset > 9){
    // if(offset >= 20){
      offset = offset - 20;
      getPokies();
    }
  };

  const nextPage = () => {
    offset = offset + 20;
    getPokies();
  };

const getPokies = () => {
  axios.get("https://pokeapi.co/api/v2/pokemon" + "?limit=20&offset=" + offset).then((response) =>{
    if(response.status >= 200 && response.status < 300){
      const {results} = response.data;
      let newPokies = [];
      var imgId = offset;
      let zero = "00";

      results.forEach((pokie, index) => {
      imgId++;
      index++;
      zero = countOfZero(imgId);
      let pokieObject = {
        id: index,
        url: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/" + zero + imgId + ".png",
        name: pokie.name,
      };
      newPokies.push(pokieObject);
    })
    setPagedata(newPokies);
    update();
  }}).catch((error) => {
    console.log(error);
  })
 }; 
 
 useEffect(() => {getPokies()}, [])

  return (
    <React.Fragment>
      <PokiesWrap>
        <div className="pokies-outter" key={child}>
          {pagedata ? (
            <div className="mains">
              <SearchBar/>
              <div className='pokie-card' >
            {pagedata.map((pokie) => {
                return(
                  <div className='tan-card' key={pokie.id}>
                <div className='tan-image'>
                  <img src={pokie.url} alt={pokie.name}/>
                </div>
                {/* <div className='tan-number'>00{pokie.id}</div> */}
                <div className='tan-name'>{pokie.name}</div>
                <div className='card-button'>
                    <button className='button-1'>Grass</button>
                    <button className='button-2'>Poison</button>
                </div>
                </div>
                )
            })}
          </div>
          <div className="paginate">
            {offset > 0 ? (
              <div className='page-btn'><button  onClick={previousPage}>{'<< Prev'}</button></div>
            ):(<div></div>)
            }
            {offset < 1000 ? (
              <div className='page-btn'><button onClick={nextPage}>{'Next >>'}</button></div>
            ):(<div></div>)
            }
          </div>
          </div>
          ):(
            <h1>{"Loading"}</h1>
          )
          }
        </div>
      </PokiesWrap>
    </React.Fragment>
  )
}

export default Pokies;
