import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/Authcontext' // Import useAuth from Authcontext.jsx
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Nav = () => {

    const [auth, setAuth] = useAuth() // Create custom hook for Auth

    // Make handle for Logout
    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ''
        })
        localStorage.removeItem('auth')
        setTimeout(() => {
            toast.success('Successfully logout')
        }, 200);
    }

    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div class="container-fluid bg-light pt-3 d-none d-lg-block">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div class="d-inline-flex align-items-center">
                                <p><i class="fa fa-envelope mr-2"></i>info@example.com</p>
                                <p class="text-body px-3">|</p>
                                <p><i class="fa fa-phone-alt mr-2"></i>+012 345 6789</p>
                            </div>
                        </div>
                        <div class="col-lg-6 text-center text-lg-right">
                            <div class="d-inline-flex align-items-center">
                                <a class="text-primary px-3" href="">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a class="text-primary px-3" href="">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a class="text-primary px-3" href="">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a class="text-primary px-3" href="">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a class="text-primary pl-3" href="">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar Start --> */}
            <div class="container-fluid position-relative nav-bar p-0">
                <div class="container-lg position-relative p-0 px-lg-3" style={{ zIndex: '9' }}>
                    <nav class="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                        <a href="" class="navbar-brand">
                            <h1 class="m-0 text-primary"><span class="text-dark">BLO</span>GS</h1>
                        </a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                            <div class="navbar-nav ml-auto py-0">
                                <Link to="/" class="nav-item nav-link">Home</Link>
                                <Link to="/blog" class="nav-item nav-link">Blog</Link>
                                <Link to="/category" class="nav-item nav-link">Categories</Link>
                                {
                                    !auth.user ? (
                                        <>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/login">Login</Link>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li class="nav-item">
                                                <Link class="nav-link"><b>User : </b>{auth.user.name}</Link>
                                            </li>
                                            <li class="nav-item">
                                                <Link onClick={handleLogout} class="nav-link" to="/login">Logout </Link>
                                            </li>
                                        </>
                                    )
                                }

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}
        </>
    )
}

export default Nav
