import React from 'react'
import { Outlet, Link } from "react-router-dom";

 const Navbar = () => {
  return (
    <div >
     <ul className='font-black flex justify-end gap-8 mx-16 my-4 '>
          <li>
            <Link to="/" >
              Home
            </Link>
          </li>
          <li>
            <Link to="/ower">
              Ower
            </Link>
          </li>
        </ul>
        <Outlet/>
    </div>
    
    
  )
}

export default Navbar