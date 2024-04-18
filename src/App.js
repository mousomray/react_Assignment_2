import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Blog from './Pages/Blog'
import Blogdetails from './Pages/Blogdetails'
import Category from './Pages/Category'
import Categorydetails from './Pages/Categorydetails'
import Home from './Pages/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {

  // Create a function for Private Routing
  const PrivateRouting = ({ children }) => {
    const token = localStorage.getItem("auth") || sessionStorage.getItem("auth");
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }

  const private_routing = [
    {
      path: '/',
      component: <Home />
    },
    {
      path: '/blog',
      component: <Blog />
    },
    {
      path: '/blogdetails/:id',
      component: <Blogdetails />
    },
    {
      path: '/category',
      component: <Category />
    },
    {
      path: '/categorydetails/:id',
      component: <Categorydetails />
    },
  ]

  const public_routing = [
    {
      path: '/login',
      component: <Login />
    },
    {
      path: 'register',
      component: <Register />
    }
  ]

  return (
    <>
      <ToastContainer />

      <Router>
        <Routes>
          {
            private_routing.map((routing) => {
              return (
                <>
                  <Route path={routing.path} element={<PrivateRouting>{routing.component}</PrivateRouting>} />
                </>
              )
            })
          }

          {
            public_routing.map((routing) => {
              return (
                <>
                  <Route path={routing.path} element={routing.component} />
                </>
              )
            })
          }
        </Routes>
      </Router>




    </>
  )
}

export default App
