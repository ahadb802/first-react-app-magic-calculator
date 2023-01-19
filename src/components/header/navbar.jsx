import React from 'react';
import './navbar.css';

const Navbar = () => (
  <nav>
    <div className="container">
      <h3>Math Magician</h3>
      <ul className="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/calculator">Calculator</a>
        </li>
        <li>
          <a href="/Quotes">Quotes</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
