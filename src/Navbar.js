import React from 'react'
import './App.css';

export default function Navbar() {
  return (
    <div className='mainnav'>
      <div className='tittel'>
        <h1>Featured Listed Propertys</h1><br/>
        <div>Real state can be boought,sold,leased,or rented,and can be a <br/>valuable investment opportunity.The value of real estate can be... </div>
        </div>
      <div className='nav-b'>
       <div className='nav-b2'> <button className='btn1' >New York</button><button  className='btn1'>Mumbai</button><button className='btn1'>Paris</button><button className='btn2'>London</button></div>
      <div> <button className='btn3'>View All <i class="bi bi-arrow-right"></i> </button></div>
      </div>
      
    </div>
  )
}
