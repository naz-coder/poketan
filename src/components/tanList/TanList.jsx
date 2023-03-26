import React, { useState } from 'react';
// import axios from 'axios';
import {TanListWrap} from '../tanList/TanListStyle';
import tan1 from '../../assets/tan1.png'

const TanList = (props) => {
  return (
    <React.Fragment>
      <TanListWrap>
        <div className="">
        <div className=''>
          {/* {props.map((data, index) => ())} */}
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


// import React, { useState } from 'react';
// import axios from 'axios';
// import {TanListWrap} from '../tanList/TanListStyle';
// import tan1 from '../../assets/tan1.png'

// const TanList = () => {
//   const [pagedata, setPagedata] = useState([]);

//   axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) =>{
//       console.log(pagedata);
//       setPagedata(response.data.results);
//     })
  
//   return (
//     <React.Fragment>
//       <TanListWrap>
//         <div className="">
//         <div className='row'>
//           {pagedata.map((data, index) => (
//             <div className='col-6 col-md-3' key={index}>
//             <div className='tan-card'>
//                 <div className='tan-image'>
//                   <img src={tan1}/>
//                 </div>
//                 <div className='tan-number'>#{index}</div>
//                 <div className='tan-name'>{data.name}</div>
//                 <div className='card-button'>
//                     <button className='button-1'>Grass</button>
//                     <button className='button-2'>Poison</button>
//                 </div>
//             </div>
//           </div>
//           ))}          
//         </div>
//         </div>
//       </TanListWrap>
//     </React.Fragment>
//   )
// }

// export default TanList
