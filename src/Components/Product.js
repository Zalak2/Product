import React from 'react'
import '../App.css';
const Product = (props) => {
  return (
    <div className="card"> 
    <h1>{props.name}</h1> 
     <img src={props.img} />
    <h2>Price= {props.price}</h2>
    <p>{props.descriprion}</p>
    </div>
  )
}

export default Product