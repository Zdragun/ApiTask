import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import Fetcher from '../components/Fetcher';
import DetailedJob from '../components/DetailedJob'
  
const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Fetcher/>} />
            <Route path='/detailedJob' element={<DetailedJob />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation;