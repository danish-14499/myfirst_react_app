import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import propTypes from 'prop-types'
import MyText from './Mytext';
import React, {useState} from 'react'
import About from './about';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"



function App() {
  const [mode,setMode]=useState('light');
  const ftoggle=()=>{
    if(mode==='dark'){
    setMode('light');
    document.body.style.backgroundColor="white";

    }
  else{
     setMode('dark');
    document.body.style.backgroundColor="#0a114b";

  }
}

  return (
   

    // <BrowserRouter>
    <div className="name">
      <Navbar  home="myhome" about="myabout" mode={mode} ftoggle={ftoggle}/>
      <MyText mode={mode}/>
      </div>
  //     {/* <Routes>
  //       <Route path="/" element={ <MyText mode={mode}/> } />
  //       <Route path="about" element={ <About/> } />
       
  //     </Routes>
  // </BrowserRouter> */}
     
    
   
  );
  
}

export default App;
// export default Router;
Navbar.propTypes={
   title:propTypes.string,
   home:propTypes.string
   

}
Navbar.defaultProps={
   title:"mynewapp"
}