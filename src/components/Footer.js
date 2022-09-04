import React from 'react';

function Footer() {
    return (
      <div className="Footer">  
        <div className= "container">
            <div className="row">
          <p>
          Ajani Browne UCF Bootcamp Student
          </p>
          <ul>
            <li><a href="mailto:ajanibrowne@yahoo.com">Email</a></li>
            <li><a href="https://github.com/AjaniBrowne" target ='_blank'>Github</a></li>
        </ul>
          <img src={''} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
    );
  }

  export default Footer;