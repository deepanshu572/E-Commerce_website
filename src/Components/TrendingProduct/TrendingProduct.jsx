import React ,{useState} from 'react'
import './TrendingProduct.css'
import {Link} from "react-router-dom";
import menu from '../menu';

const TrendingProduct = () => {
  const [Product, setProduct] = useState(menu)

  return (
    <>
    <h2>Trending Products</h2> 
    <div className="trend-product">
    {
      Product.map((elem)=>{

        const {id , texture ,img ,price}= elem;
    return<Link style={{textDecoration:"none",color:"white"}} to={`/Product/${id}`} >     
          <div className="trend-box">
            <img src={img} alt="" />
            <p>{texture}</p>
            <p>{price}</p>
          </div>
       </Link>
      })
    }
   </div>
    </>
  )
}

export default TrendingProduct