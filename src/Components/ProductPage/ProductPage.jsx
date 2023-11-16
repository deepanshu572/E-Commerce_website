import React  ,{useState}from 'react'
import './Product.css'
import {Link} from "react-router-dom";
import { useProductContext } from '../Context/ProductContext';

function ProductPage() {
  const { menu } = useProductContext();
  // console.log(menu);
  
    const [Product, setProduct] = useState(menu)
    const filterItems =(categItem)=>{
      const UpdateItems = menu.filter((curelem)=>{
            return curelem.category === categItem;
      })
      setProduct(UpdateItems);
    }
  return (
    <div>
        <div className="Product-nav">
            <div className="pro-nav1">
            <Link  to="/"
            > 
           <p><i className="fa-solid fa-angle-left"></i> Home</p>
            </Link>   
                 <p>Trending Products</p>
            </div>
            <div className="categories" >
            <button type="button" onClick={()=> setProduct(menu)} >All</button>
            <button type="button" onClick={()=> filterItems('lamp')} >Lamps</button>
            <button type="button" onClick={()=> filterItems('chair')} >chair</button>
            <button type="button" onClick={()=> filterItems('kitchen')} >kitchen</button>
            <button type="button" onClick={()=> filterItems('furniture')} >furniture</button>
            <button type="button" onClick={()=> filterItems('skin-care')} >Skin Care</button>
            <button type="button" onClick={()=> filterItems('electronic')} >Electronics</button>
            </div>
        </div>
        <div className="main2">
        <div className="cards2" >

          {
          Product.map((elem)=>{

            const {id , texture ,img ,price}= elem;

          return (
             <Link style={{textDecoration:"none",color:"white"}} to={`/Product/${id}`} >
            <div className="card2" key={id}>
              <div className="card-img2">
                   <img src={img} alt="" />
              </div>
              <div className="card-details2">
                 <p>{texture}</p>
                 <p>{"₹"+" "+price+" "+"only/-"}</p>
              </div>
            </div>
            </Link>
          )
         
            
       })} 
         
        </div>
    </div>
    </div>
  )
}

export default ProductPage