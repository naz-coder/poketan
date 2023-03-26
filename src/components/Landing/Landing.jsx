import React, {useState} from 'react';
import axios from 'axios';
import {AppModalOverlay} from './LandingStyle'
import mainLogo from '../../assets/mainLogo.png'
import appName from '../../assets/appName.png'
import TanList from "../tanList/TanList";


const Landing = () => {
  const [pagedata, setPagedata] = useState([]);
  // const [query, setQuery] = useState(" ");
  const [store, setStore] = useState({query: ' ', list: []});

  axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) =>{
      console.log(pagedata);
      setPagedata(response.data.results);
    })

    // Search function which updates the state anytime a user types inside the search bar
  const searchHandler = (e) => {
    const results = pagedata.filter(data => {
      if(e.target.value === " ") return pagedata
      return data.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      setStore({
          query: e.target.value,
          list: results
      })
    // setQuery(e.target.value);
  } 

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
            value={store.query}
            onChange={searchHandler}
          />
          <button 
          // onClick={searchHandler}
          >Search</button>
          </div>
          </div>
          <div className='search-result'>
              <ul>
                {(store.query === "" 
                ? <div className="row">
                {store.list.map((data, index) => (
                  <div className='col-6 col-md-3'>
                  <TanList 
                    keyProps={index}
                    indexProps={index}
                    nameProps={data.name}
                  />
                  </div>
                ))}
                </div>
                : !store.list.length ? "Your search did not return any result" 
                : store.list.map(data => {
                  return (
                  <div>
                    {/* <li key={data.name}>{data.name}</li> */}
                  <div className="">
                  {store.list.map((data, index) => (
                  <div className=''>
                    <TanList 
                    keyProps={index}
                    indexProps={index}
                    nameProps={data.name}
                    />
                  </div>
                ))}
                </div>
                  </div>
                  )
                }))}
              </ul>
          </div>
          
          {/* <div className="row">
          {store.list.map((data, index) => (
            <div className='col-6 col-md-3'>
              
            <TanList 
              keyProps={index}
              indexProps={index}
              nameProps={data.name}
            />
            </div>
          ))}
          </div> */}
        </div>
      </AppModalOverlay>
    </React.Fragment>
  )
}

export default Landing;

// return (
//   <React.Fragment>
//     <AppModalOverlay>
//       <div className='modal-container'>
//         <div className='head-section'>
//         <div className='app-header'>
//           <img src={mainLogo} className="app-logo"/> 
//           <img src={appName} className="app-name"/> 
//         </div>
//         {/* <label>Enter Name or Number</label> */}
//         <div className='poketan-search'>
//         <input 
//           type="search" 
//           placeholder='Pokedex Name or Number' 
//           value={store.query}
//           onChange={searchHandler}
//         />
//         <button 
//         // onClick={searchHandler}
//         >Search</button>
//         </div>
//         </div>
//         <div className='search-result'>
//             <ul>
//               {(store.query === "" ? "No match found!" : !store.list.length ? "Your search did not return any result" : store.list.map(data => {
//                 return <li key={data.name}>{data.name}</li>
//               }))}
//             </ul>
//         </div>
        
//         <div className="row">
//         {store.list.map((data, index) => (
//           <div className='col-6 col-md-3'>
            
//           <TanList 
//             keyProps={index}
//             indexProps={index}
//             nameProps={data.name}
//           />
//           </div>
//         ))}
//         </div>
//       </div>
//     </AppModalOverlay>
//   </React.Fragment>
// )

// import React, {useState} from 'react';
// import axios from 'axios';
// import {AppModalOverlay} from './LandingStyle'
// import mainLogo from '../../assets/mainLogo.png'
// import appName from '../../assets/appName.png'
// import TanList from "../tanList/TanList";


// const Landing = () => {
//   const [pagedata, setPagedata] = useState([]);
//   const [query, setQuery] = useState(" ");
//   const [store, setStore] = useState({query: ' ', list: []});

//   axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) =>{
//       console.log(pagedata);
//       setPagedata(response.data.results);
//     })

//     // Search function
//   const searchHandler = (e) => {
//     const result = tans.filter(data => {
//       if(e.target.value === " ") return tans
//       return data.nameProps.toLowerCase().includes(e.target.value.toLowerCase())
//       })
//       setStore({
//           query: e.target.value,
//           list: results
//       })
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
//             value={store.query}
//             onChange={searchHandler}
//           />
//           <button 
//           // onClick={searchHandler}
//           >Search</button>
//           </div>
//           </div>
//           <div className='search-result'>
//               <ul>
//                 {(store.query === " " ? "No match found!" : !store.list.length ? "Your search did not return any result" : store.list.map)}
//               </ul>
//           </div>
//           <div className="row">
//           {pagedata.map((data, index) => (
//             <div className='col-6 col-md-3'>
              
//             <TanList 
//               keyProps={index}
//               indexProps={index}
//               nameProps={data.name}
//             />
//             </div>
//           ))}
//           </div>
//         </div>
//       </AppModalOverlay>
//     </React.Fragment>
//   )
// }

// export default Landing;

