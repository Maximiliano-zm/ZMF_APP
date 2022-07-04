import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import App from './App';
import Sign_In from './Component/sign-in';
import Sign_Up from './Component/sign-up';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/1' element={<Sign_In/>}/>
      <Route path='/2' element={<Sign_Up/>}/>
    </Routes>
    </BrowserRouter>    


);

