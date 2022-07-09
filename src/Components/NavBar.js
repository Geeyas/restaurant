import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';

const NavBar = ({filterItem}) => {

  return (
    <>
      <nav className="navClass">
        
        <ul>
          <li><button onClick={() => filterItem("breakfast")}>Breakfast</button></li>
          <li><button onClick={() => filterItem("evening")}>Evening</button></li>
          <li><button onClick={() => filterItem("lunch")}>Lunch</button></li>
          <li><button onClick={() => filterItem("dinner")}>Dinner</button></li>
          
        </ul>
      </nav>
    </>
  )
}


export default NavBar