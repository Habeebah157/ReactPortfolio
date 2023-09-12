// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Components/HomePage/HomePage'
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SocialPage from './Components/SocialPage/SocialPage';
import ResumePage from './Components/ResumePage/ResumePage';

function App() {
  return (
    <>
   
    <BrowserRouter>
    
      <Routes>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path='/socials' element={<SocialPage/>}/>
        <Route path='/resume' element={<ResumePage/>}/>

      </Routes>

    </BrowserRouter></>
   
   
  )
}

export default App
