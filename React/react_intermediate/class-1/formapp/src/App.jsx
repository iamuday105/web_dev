import React from 'react'
import {Routes,Route, Link, NavLink} from 'react-router-dom';
import Home from './components/home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
     <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/support">Support</NavLink>
        </li>
        <li>
          <NavLink to="/labs">Labs</NavLink>
        </li>
     
       
      </ul>
     </nav>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/support" element = {<Support/>}/>
        <Route path="about" element = {<About/>}/>
        <Route path="/labs" element = {<Labs/>}/>
        <Route path="*" element = {<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App

































// import { useState } from 'react'
// import './App.css'

// function App() {
//   // const [firstName, setFirstName] = useState("");
//   // const [lastName, setLastName] = useState("");
  
//   // const  changeFirstnameHandler= (event)=>  {
//   //   console.log("printing first name");
//   //   setFirstName(event.target.value);
//   // }
//   // const  changeLastnameHandler= (event)=>  {
//   //   console.log("printing last name");
//   //   setLastName(event.target.value);
//   // }

// const [formData, setFormData] =useState(
//   {
//     firstName:"",
//     lastName:"",
//     email:"",
//     comments:"",
//     isVisible: true,
//     mode:"",
//     favCar:""

//   }
// )
// console.log(formData);
// const changeHandler = (event) =>{
//   const {name, value, checked, type} = event.target
//   setFormData(prevFormData =>{
//     return{
//       ...prevFormData,
//       // [event.target.name]: event.target.value,
//       [name]: type === "checkbox"? checked: value,
//     }
//   })
// }

//   return (
//     <div className='App'>
//       <form>
//         <input name='firstName' type='text' placeholder='first name ' onChange={changeHandler}
//         value={formData.firstName}
//         />
//       <br/> <br/>
//         <input name='lastName' type='text' placeholder='last name ' onChange={changeHandler}
//           value={formData.lastName}
//         />
//         <br/><br/>
//         <input name='email' type='email' placeholder='Email' onChange={changeHandler}
//           value={formData.email}
//         />
//         <br/><br/>
//         <textarea name='comments' placeholder='comment' onChange={changeHandler}
//           value={formData.comments}
//         />
//         <br/><br/>
//         <input name='isVisible' type='checkbox' placeholder='comment' onChange={changeHandler}
//           checked={formData.isVisible}
//           id='isVisible'
//         />
//         <label htmlFor='isVisible'>Am I visible ?</label>
//         <br/><br/>

//         <input name='mode' type='radio' placeholder='comment' onChange={changeHandler}
       
//           value="Oline-mode"
//           id='Oline-mode'
//           checked ={formData.mode === "Oline-mode"}
//         />
//         <label htmlFor='Oline-mode'>Am I Oline-mode ?</label>
//         <br/><br/>

//         <input name='mode' type='radio' placeholder='comment' onChange={changeHandler}
        
//           value="Offline-mode"
//           id='Offline-mode'
//           checked ={formData.mode === "Offline-mode"}
//         />
//         <label htmlFor='Offline-mode'>Am I Offline-mode ?</label>
//         <br/><br/>

//         <select 
//           name='favCar'
//           id="favCar"
//            value={formData.favCar}
//            onChange={changeHandler}
//         >
//         <option value="scarpio">scarpio</option>
//         <option value="fortuner">fortuner</option>
//         <option value="alto">alto</option>
//         <option value="legender">legender</option>
//         <option value="defender">defender</option>

//         </select>
        
       



//         {/* <p>{formData}</p> */}
      
//       </form>
//     </div>
//   )
// }

// export default App
