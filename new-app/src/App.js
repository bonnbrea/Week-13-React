import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';

function  App() {
  return (
   <div className="App">
      <Navbar/>
      <br>
      </br>
      <h3 className='text'>Login</h3>
      <br>
      </br>
      <Login/>
    </div>
  );
}
export default App;
