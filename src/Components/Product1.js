import React from 'react'
import Product from  './Product'
import Images from '../Images/download.jfif';
import Navbar from './Navbar';
import '../App.css';

const Product1 = () => {
  return (

 
      <div  className="App"><Product name="abc" img={Images} price="25000" descriprion="cjdknc cnikcn"/>
      <Product name="xyz" img={Images} price="25000" descriprion="cjdknc cnikcn"/>
      <Product name="pqr" img={Images} price="5000" descriprion="cjdknc cnikcn"/>
      <Product name="jkl" img={Images} price="35000" descriprion="cjdknc cnikcn"/>
      </div>
    
  )
}

export default Product1