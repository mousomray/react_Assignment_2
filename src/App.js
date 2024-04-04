import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Common/Nav'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Blog from './Pages/Blog'
import Blogdetails from './Pages/Blogdetails'
import Category from './Pages/Category'
import Categorydetails from './Pages/Categorydetails'
import Home from './Pages/Home'
import Footer from './Common/Footer'
import About from './Pages/About'

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogdetails/:id' element={<Blogdetails />} />
          <Route path='/category' element={<Category />} />
          <Route path='/categorydetails/:id' element={<Categorydetails />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
