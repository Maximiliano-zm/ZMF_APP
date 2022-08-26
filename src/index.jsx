import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import App from './App';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import AnimationAOS from "./AnimationAOS";

//Animationsf
AnimationAOS();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>      
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>    
);
