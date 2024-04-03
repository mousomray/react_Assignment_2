import axios from 'axios';
import React, { useState } from 'react';
// For toast message
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const initialState = {
        name: "",
        email: "",
        mobile: "",
        password: ""
    };

    const [register, setregister] = useState(initialState); // Make usestate for initialstate
    const [error, setError] = useState({}) // Make usestate for error message 
    const navigate = useNavigate() // Navigate another page
    const [loading, setloading] = useState(false); // State for loading indicator

    // Create a Validation function which is to make validation on form field
    const validation = () => {

        let error = {} // I take error a blank object 

        // If name is not present
        if (!register.name) {
            error.name = "Name is Required"
        } else if (register.name.length < 3) {
            error.name = "Name must be atleast 3 characters"
        }

        // If email is not present
        if (!register.email) {
            error.email = "Email is Required"
        } else if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(register.email)
        ) {
            error.email = "Email should be abc@gmail.com"
        }

        // If phone is not present
        if (!register.mobile) {
            error.mobile = "Phone is Required";
        } else if (register.mobile.length !== 10) {
            error.mobile = "Phone number must be 10 characters";
        }

        // For password
        if (!register.password) {
            error.password = "Password is Required"
        } else if (register.password.length < 8) {
            error.password = "Password must be 8 characters"
        }

        return error
    }


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setregister({ ...register, [name]: value });

        // In handle I set required field for all form field with name attribute   
        if (name === "name") {
            if (value.length === 0) {
                setError({ ...error, name: "@Name is Required" })
                setregister({ ...register, name: "" })
            } else {
                setError({ ...error, name: "" })
                setregister({ ...register, name: value })
            }
        }

        // if (name === "email") {

        //     const pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

        //     if (value.length === 0) {
        //         setError({ ...error, email: "Email is required" })
        //     } else if (!value.match(pattern)) {
        //         setError({ ...error, email: "Email pattern should be abc@mail.com" })
        //     } else {
        //         setError({ ...error, [name]: "" })
        //     }
        // }

        if (name === "email") {
            if (value.length === 0) {
                setError({ ...error, email: "@Email is Required" })
                setregister({ ...register, email: "" })
            } else {
                setError({ ...error, email: "" })
                setregister({ ...register, email: value })
            }
        }

        if (name === "mobile") {
            if (value.length === 0) {
                setError({ ...error, mobile: "@Phone is Required" })
                setregister({ ...register, mobile: "" })
            } else {
                setError({ ...error, mobile: "" })
                setregister({ ...register, mobile: value })
            }
        }

        if (name === "password") {
            if (value.length === 0) {
                setError({ ...error, password: "Password is required" })
                setregister({ ...register, password: "" })
            } else {
                setError({ ...error, password: "" })
                setregister({ ...register, password: value })
            }
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        // Start loading
        setloading(true);

        let ErrorList = validation() // Call validation function in ErrorList variable 
        setError(validation())


        // Without giving valid All error message was showing


        if (Object.keys(ErrorList).length === 0) {
            const apiUrl = "https://restapinodejs.onrender.com/api/register";

            axios.post(apiUrl, register)
                .then((response) => {
                    console.log(response);
                    setregister(initialState);
                    toast.success(response.data.message);
                    setloading(false);
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                })
                .catch((error) => {
                    console.log(error.response.data);
                    const errorMessage = error.response.data.message;
                    toast.error(errorMessage);
                    setloading(false);
                })
        } else {
            setloading(false);
        }
    };

    return (
        <>
            <ToastContainer />

            {/* <!-- Contact Start --> */}
            <div class="container-fluid py-5">
                <div class="container py-5">
                    <div class="text-center mb-3 pb-3">
                        <h6 class="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Blog</h6>
                        <h1>Register</h1>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="contact-form bg-white" style={{ padding: '30px' }}>
                                <div id="success"></div>
                                <form name="sentMessage" id="contactForm" noValidate onSubmit={handleOnSubmit} method='post'>
                                    <div class="form-row">
                                        <div class="control-group col-sm-6">
                                            <input type="text" class="form-control p-4" id="name" name='name' placeholder="Your Name"
                                                required="required" data-validation-required-message="Please enter your name" onChange={handleOnChange} value={register.name} />
                                            <span style={{ color: 'red', display: 'block' }}> {error.name} </span>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="control-group col-sm-6">
                                            <input type="email" class="form-control p-4" id="email" name='email' placeholder="Your Email"
                                                required="required" data-validation-required-message="Please enter your email" onChange={handleOnChange} value={register.email} />
                                            <span style={{ color: 'red', display: 'block' }}> {error.email} </span>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <input type="tel" class="form-control p-4" id="subject" name='mobile' placeholder="Phone"
                                            required="required" data-validation-required-message="Please enter your phone number" onChange={handleOnChange} value={register.mobile} />
                                        <span style={{ color: 'red', display: 'block' }}> {error.mobile} </span>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group">
                                        <input type="password" class="form-control p-4" id="subject" placeholder="Password"
                                            required="required" name='password' data-validation-required-message="Please enter a valid password" onChange={handleOnChange} value={register.password} />
                                        <span style={{ color: 'red', display: 'block' }}> {error.password} </span>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="text-center">
                                        <button class="btn btn-primary py-3 px-4" type="submit" id="sendMessageButton">
                                            {loading ?
                                                <div className="spinner-border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                                :
                                                'Register'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}

        </>
    )
}

export default Register
