import React from "react";
import s from "./Home.module.css";
import { clear } from "./../index";
import { GetCardType } from "./../index";
import Cards from "react-credit-cards";
import { useState } from "react";
import validator from "validator";
import 'react-credit-cards/es/styles-compiled.css';
const Home = (props) => {

  const [data, setData] = useState({  
    cvc: "",  
    expiry: "",  
    name: "",  
    number: "" 
});
const handleInputChange = (e) => {  
setData({   
      ...data,   
      [e.target.name]: e.target.value  
}); 
};  

return (  
<div className = {s.creditcard}>   

<Cards    
cvc={data.cvc}    
expiry={data.expiry}    
focus={data.focus}    
name={data.name}    
number={data.number}   
/> 

  
    <form action="">  
    <div  className = {s.allfields}>
    <input     
           type="number"     
           name="number"     
           placeholder="Card Number "     
           onChange={handleInputChange}    
        />
    <input     
           type="number"     
           name="cvc"     
           placeholder="CVC"     
           onChange={handleInputChange}    
        />    
        <div className = {s.dis}>
        <input     
           type="text"     
           name="expiry"       
           placeholder="MM/YY"     
           onChange={handleInputChange}    
         />    
        <input     
           type="text"     
           name="name"     
           placeholder="Your Name"     
           onChange={handleInputChange}    
        />   


        </div>
        
        <input
         type = "submit" value = "Pay"/> 
        </div>  
       
    </form>  
</div> 
);
}
export default Home;
