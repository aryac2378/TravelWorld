import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ThankYou from '../../pages/ThankYou'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import SearchResultList from '../../pages/SearchResultList'
import TourDetails from '../../pages/TourDetails'
import Tours1 from '../../pages/Tours1'
import About from '../../pages/About'
const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/about' element={<About/>}/>
         <Route path='/tours' element={<Tours1/>} />
         <Route path='/tours/:id' element={<TourDetails/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/thank-you' element={<ThankYou/>} />
         <Route path='/tours/search' element={<SearchResultList/>} />
      </Routes>
   )
}

export default Routers