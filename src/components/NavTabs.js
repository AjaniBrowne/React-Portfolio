import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#About Us"
          onClick={() => handlePageChange('AboutUs')}
          
          className={currentPage === 'AboutUs' ? 'nav-link active' : 'nav-link'}
        >
         About Us
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact Us"
          onClick={() => handlePageChange('Contact')}
          
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
         Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Skills
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;