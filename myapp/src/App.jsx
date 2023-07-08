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
import { useState } from 'react';
import Type2UseEffect from './components/Type2UseEffect';
import Type3UseEffectt from './components/Type3UseEffectt';
import Type4UseEffectt from './components/Type4UseEffectt';
import Params1 from './components/01-07-2023/Params1';
import SingleProduct from './components/01-07-2023/SingleProduct';
import StyledCombo from './components/01-07-2023/StyledCombo';
import Wrapper from './components/01-07-2023/Wrapper';
import DeclerativeWay from './components/01-07-2023/DeclerativeWay';
import Map from './components/01-07-2023/Map';

import SinglePro from './components/02-07/SinglePro';
import Xyz from './components/02-07/Xyz';
import DynamicClasses from './components/04-07/DynamicsClaases';
import DynamicStyles from './components/04-07/DynamicsStyle';
import ChildernProp from './components/04-07/ChildrenProp';
import FormOne from './components/06-07-2023/FormOne';
import FormSingleState from './components/08-07/FormSingleState';
import UseCallback from './components/08-07/UseCallback';


function App() {
  const [myUsers, setMyUsers] = useState(["Rahul", "Krishan", "Manoj"])

  // console.log("Inside app")
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='usecallback' element={<UseCallback/>} />
        <Route exact path='form-single-state' element={<FormSingleState />} />
        <Route exact path='form-one' element={<FormOne/>} />
        <Route exact path='children-prop' element={<ChildernProp/>} />
        <Route exact path='dynamic-style' element={< DynamicStyles/>} />
        <Route exact path='dynamics-class' element={<DynamicClasses />} />
       <Route exact path='xyz' element={<Xyz/>} /> 
        <Route exact path='/signle-pro/:id' element={<SinglePro/>} />
         <Route exact path='/map' element={<Map myUsers={myUsers}setMyUsers={setMyUsers} myName={"Santosh"} kuchbhi={["ROCKY", "POOJA", "MEGHA"]} />} />
       <Route exact path='/declerative-way' element={<DeclerativeWay/>} />
      <Route exact path='/wrappper' element={<  Wrapper/>} />
       <Route exact path='/styled-combo' element={<StyledCombo/>} />
        <Route exact path='/single-product/:swaraj' element={<SingleProduct/>} />
        <Route exact path="/Params1"  element={<Params1/>} />
        <Route exact path="/Type-4-Useeffect" element={<Type4UseEffectt/>} />
        <Route exact path="/Type-3-Useeffect" element ={<Type3UseEffectt/>} />
      <Route exact path="/Type-2-useffect" element={<Type2UseEffect/>} /> 
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
