import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route,Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Addsub from './components/Addsub';
import Section from './components/Section';

function App() {
  
  console.log("Inside app")
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path="/Welcome" element={<Welcome/>} /> 
        <Route path='/login' element={<Login/>} /> 
        <Route path='/Addsub' element={<Addsub/>}  />
        <Route path='/Section' element={<Section/>}  />



      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
