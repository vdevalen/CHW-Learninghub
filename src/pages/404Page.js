import React from 'react';
import '../style/404Page.css'; 
import Header from '../components/header';
import BackG2 from "../img/backG2.png"
import "../pages/home.css"
const Error404 = () => {
  return (
    <div className='e404Container'>
      <Header />
    <div className="error-container">
      
      <h1>404 - Page not found</h1>
      <p className='e404Text'>SORRY!! This section is under maintenance</p>
    </div>
    <div className='imgFooter404'>
    <div className='divContainerMain7'>          
           <img 
             className='backMain2'
             src={BackG2}
             alt="Logo2"    
           />
         </div> 
    </div>
   </div>
  );
};

export default Error404;
