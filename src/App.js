import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar/Navbar';
import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Link to="/Relatives">Relatives</Link>
      <Outlet />
    </div>
  )
}

export default App;
