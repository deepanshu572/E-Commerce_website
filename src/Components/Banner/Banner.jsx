import React,{useEffect ,useState} from 'react'

import './Banner.css'

function Banner() {
   
    // const [Trending, setTrending] = useState([])
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products?limit=10')
    //     .then(res=>res.json())
    //     .then(data=>setTrending(data))

    // }, [])
    
    
  return (
    <>
        <div className="banner">
            <div className="banner1">

           
             <div className="left">
                 <p>Creative harmonious living</p>
                 <p>RAOUF Products are all made to standard sizes so that you can mix and match them freely.</p>
                  <button>Shop Now</button>
            </div> 
            <div className="right">
              <img src="https://minimalist-e-commerce.vercel.app/static/media/banner1.021adea5caa612e7dea0.jpg" alt="" />
            </div>
            </div>
        </div>
        {/* <div className="banner-img">
            <p>Trending Now</p>
            <div className="banners">
     {/* {Trending.map((element)=>{
            console.log(element)
         return <div className="banner-card">
                    <img src={element.image} alt="" />
                   <p>{element.title}</p>
                   <p>733</p>
                 </div>
     })} */}
            {/* </div> */}
       
        {/* //  </div>  */}
    </>
  )
}

export default Banner