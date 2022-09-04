import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Portfolio() {
    return (
      <div className = 'bg-danger'>
        <h1>Coding Projects</h1>
        <figure>
           <a href="https://ajanibrowne.github.io/Traveler-s-Guide/"> <img src="./group project.jpeg" width="200px" alt="travel agents"/></a>
        </figure>
        <figure>
            <a href="https://hidden-eyrie-39114.herokuapp.com/"> <img src="./canine-collective.png" width="200px" alt="canine collective"/></a>
        </figure>
      </div>
    );
  }