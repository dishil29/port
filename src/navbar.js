import './index.css';
import { Link } from "react-router-dom";
import React from 'react';

const Navbar = () => {
  return (  
    <nav className="nav"> 
    <span>Portfolio</span>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/project">Projects</Link>
      <Link to="/skill">Skills</Link>
      <Link to="/contact">Contacts</Link>
    </div>
  </nav>
  );
}
 
export default Navbar;