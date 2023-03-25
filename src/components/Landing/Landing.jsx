import React, {useState} from 'react';
import axios from 'axios';
import {AppModalOverlay} from './LandingStyle'
import mainLogo from '../../assets/mainLogo.png'
import appName from '../../assets/appName.png'
import TanList from "../tanList/TanList";


const Landing = () => {
  const [pagedata, setPagedata] = useState([]);
  const [tans, setTans] = useState(" ");

  axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) =>{
      console.log(pagedata);
      setPagedata(response.data.results);
    })

  // const tansData = tans.localeCompare(() => (
  //   // <li key={name.replace(" ", "").toLowerCase()}>
  //     <TanList
  //         {props}
  //     />
  //   // </li>
  // ));
  // const [totalData, setTotalData] = useState(" ");

  // const searchHandler = (e) => {
  //   let value = e.target.value.toLowerCase();
  //   let result = [];
  //   console.log(value);  
  //   result = totalData.filter((data) => {
  //       return data.index.search(value) != -1;
  //   })
  //   setTotalData(result);
  // } 

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
            // onChange={data.value}
          />
          <button 
          // onClick={searchHandler}
          >Search</button>
          </div>
          </div>

          {pagedata.map((data, index) => (
            <TanList 
              keyProps={index}
              indexProps={index}
              nameProps={data.name}
            />
          ))}

        </div>
      </AppModalOverlay>
    </React.Fragment>
  )
}

export default Landing;


// import React, {useState} from 'react';
// import {AppModalOverlay} from './LandingStyle'
// import mainLogo from '../../assets/mainLogo.png'
// import appName from '../../assets/appName.png'
// import TanList from "../tanList/TanList";


// const Landing = ({data}) => {
//   const [totalData, setTotalData] = useState(" ");

//   const searchHandler = (e) => {
//     let value = e.target.value.toLowerCase();
//     let result = [];
//     console.log(value);  
//     result = totalData.filter((data) => {
//         return data.index.search(value) != -1;
//     })
//     setTotalData(result);
//   } 

//   return (
//     <React.Fragment>
//       <AppModalOverlay>
//         <div className='modal-container'>
//           <div className='head-section'>
//           <div className='app-header'>
//             <img src={mainLogo} className="app-logo"/> 
//             <img src={appName} className="app-name"/> 
//           </div>
//           {/* <label>Enter Name or Number</label> */}
//           <div className='poketan-search'>
//           <input 
//             type="search" 
//             placeholder='Pokedex Name or Number' 
//             onChange={data.value}
//           />
//           <button onClick={searchHandler}>Search</button>
//           </div>
//           </div>
//           <TanList/>
//         </div>
//       </AppModalOverlay>
//     </React.Fragment>
//   )
// }

// export default Landing;
