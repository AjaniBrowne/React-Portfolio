import useState from 'react';
import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

const pageManager= (page) => {
  switch(page){
    case 'AboutUs':
      return <AboutUs/>;
      case 'Resume':
        return <Resume/>;
        case 'Portfoilo':
          return <Portfolio/>;
          case 'Contact':
            return <Contact/>;
            default: return '404';
  }
}
function App() {
  const [page,setPage] = useState('AboutUs');
  return (
    <div className="page-container">
      <div className= "content-wrap">
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {
          pageManager(page)
        }
        
        
        </p>
        </div>
      </div>
    <div>
      <Footer />
    </div>
    </div>
  );
}

export default App;
