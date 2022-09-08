import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import travelersguide from '../images/travelers guide.png';
import caninecollective from '../images/canine-collective.png';
import soleplane from '../images/soleplane.png'


export default function Portfolio() {
    return (
      <div >
        <h1>Coding Projects</h1>
        <figure>
           <a href="https://ajanibrowne.github.io/Traveler-s-Guide/"> <img src={travelersguide} width="200px" alt="travel agents"/></a>
        </figure>
        <figure>
            <a href="https://hidden-eyrie-39114.herokuapp.com/"> <img src={caninecollective} width="200px" alt="canine collective"/></a>
        </figure>
        <figure>
           <a href="https://sole-plane-official.herokuapp.com/"> <img src={soleplane} width="200px" alt="soleplane"/></a>
        </figure>
      </div>
    );
  }