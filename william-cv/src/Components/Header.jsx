import React from 'react';
import { Link } from 'react-router-dom';

function Header()
{
    return(

      <nav>
        <Link to="/">Home</Link>               | 
        <Link to="/about">About Me</Link>      | 
        <Link to="/education">Education</Link> | 
        <Link to="/projects">Projects</Link>   | 
        <Link to="/resume">Resume</Link>       | 
        <Link to="/self-learning">Self Learning</Link>
      </nav>
    );
}
export default Header;
