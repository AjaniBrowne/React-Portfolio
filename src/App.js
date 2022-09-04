import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import PortfolioContainer from './components/PortfolioContainer'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <div className="page-container">
      <div className= "content-wrap">
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        
        <PortfolioContainer/>
       
        </div>
      </div>
    <div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
