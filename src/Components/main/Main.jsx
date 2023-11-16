import React from 'react'
import { useProductContext } from '../Context/ProductContext';
import './Main.css'
import {Link} from "react-router-dom";

function Main() {

  const { menu } = useProductContext();
  // console.log(menu);

  
  return (
    <>
    <div className="main">
        <div className="cards" >

          {
          menu.map((elem)=>{

            const {id , texture ,img,price}= elem;

          return (
             <Link style={{textDecoration:"none",color:"white"}} to={`/Product/${id}`} key={id}>
            <div className="card1" >
              <div className="card-img">
                   <img src={img} alt="" />
              </div>
              <div className="card-details">
                 <p>{texture}</p>
                 <p>{"₹"+" "+price+" "+"only/-"}</p>
              </div>
            </div>
            </Link>
          )
         
            
       })} 
         
        </div>
    </div>
    </>
  )
}

export default Main