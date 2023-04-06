import React from 'react'

const Home = () => {
 const shoot=()=>{
  alert("gret shoot");
 };
return (
    <div><h1>Home</h1>
    <button onClick={shoot}>Take shoot</button>    
    </div>
  )
}

export default Home