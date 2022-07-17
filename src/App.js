import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar/Navbar';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {
  const linkstyle = {
    color: "black",
    backgroundColor: "rgba(211,211,211,255)",
    padding: "10px 25px",
    textAlign: "center",
    borderRadius: "40px",
    marginTop: "14px",
    display: "inline-block"
  }
  const featureStyle = {
    color: "black",
    backgroundColor: "rgba(211,211,211,255)",
    padding: "10px 25px",
    textAlign: "center",
    borderRadius: "40px",
    marginTop: "14px",
    display: "inline-block"
  }
  return (
    <div className='container'>
      <div className="row">
      <div className='col-12'>
        <Navbar />
      </div>
      </div>
      <div className="row d-flex justify-content-center">
      <div className='entity'>
      <Link to="/Relatives" style={linkstyle} >Relatives</Link>
      <Link to="/UnderContruction" style={linkstyle} >Tenents</Link>
      <Link to="/UnderContruction" style={linkstyle} >Room</Link>
      <Link to="/UnderContruction" style={linkstyle} >Furnitures</Link> 
      </div>
      </div>
      <div className="row" id='feature-button'>
      
      </div>
      <Outlet />
    </div>
  )
}

export default App;
