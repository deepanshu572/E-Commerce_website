import React from 'react'
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Main from '../main/Main';
import './Home.css'
// import Cart from '../cart/Cart';

function Home() {

  
  
  return (
    <>
    {/* <Cart/> */}
    <Header/>
    <p className="card-para">Products we are proud of</p>
    <Main/>
    <Banner/>
    </>
  )
}

export default Home
