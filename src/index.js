import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import Navbar from './component/Navbar';
import News from './component/News';
import MoreInfo from './component/MoreInfo'; 
import TopAnime from './component/TopAnime'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/news' element={<News/>}></Route>
      <Route path='/topanimes' element={<TopAnime/>}></Route> 
      <Route path='/moreinfo/:mal_id' element={<MoreInfo/>}></Route>
    </Routes>
    </BrowserRouter> 
  </React.StrictMode>
); 