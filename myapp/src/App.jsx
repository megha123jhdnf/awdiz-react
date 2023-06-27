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
import Type1UseEffect from './components/Type1UseEffect';

function App() {
  
  console.log("Inside app")
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route exact path="/Type-1-useffect" element={<Type1UseEffect/>} /> 
      <Route exact path='/' element={<Home/>} /> 
        <Route exact path="/Welcome" element={<Welcome/>} /> 
        <Route exact path='/login' element={<Login/>} /> 
        <Route exact path='/Addsub' element={<Addsub/>}  />
        <Route exact path='/Section' element={<Section/>}  />



      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
