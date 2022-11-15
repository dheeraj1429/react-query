import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
   return (
      <div className=" flex space-x-4">
         <Link to={'/'}>
            <p>Home</p>
         </Link>
         <Link to={'/about'}>
            <p>About</p>
         </Link>
         <Link to={'/dynamic'}>
            <p>Dynamic</p>
         </Link>
         <Link to={'/pagination'}>
            <p>pagination</p>
         </Link>
         <Link to={'/infinity'}>
            <p>infinity</p>
         </Link>
      </div>
   );
}

export default Navbar;
