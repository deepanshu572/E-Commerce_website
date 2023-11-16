import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";

function Header() {
  return (
    <>
       <div className="container">
        <div className="box1"><p>Live Comfortably</p> 
        <Link  to="/ProductPage"
            > 
            <div className="img-overlay1">  </div>
            </Link>
 
             <img src="https://minimalist-e-commerce.vercel.app/static/media/home-img-1.3de7da0f1e4634169c62.jpg" alt="" />

          
        </div>
        <div className="box2"><p>Skincare</p>
        <Link  to="/ProductPage"
            > 
            <div className="img-overlay2">  </div>
            </Link>
           
            <img src="https://minimalist-e-commerce.vercel.app/static/media/home-img-2.4daa711cfda65062efd0.jpg" alt="" />   
        </div>
        <div className="box-wrap">
            <div className="box3">  <p>Kitchen</p>
            <Link  to="/ProductPage"
            > 
            <div className="img-overlay3">  </div>
            </Link> 
          
            <img src="https://minimalist-e-commerce.vercel.app/static/media/home-img-3.60734311499ba1dbbc41.jpg" alt="" /> 
        </div>
        <div className="box4"><p>Electronics</p> 
        <Link  to="/ProductPage"
            > 
            <div className="img-overlay4">  </div>
            </Link> 
           
           <img src="https://minimalist-e-commerce.vercel.app/static/media/home-img-4.672d1d0d7656e2a778f6.jpg" alt="" />
        </div>
        </div>
        
       </div>
    </>
  )
}

export default Header