import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loader from '../Common/Loader'
import Layout from '../Common/Layout'

const Category = () => {

    const [cat, setcat] = useState([]);
    const [loading, setloading] = useState(true);

    const getData = async () => {
        const response = await axios.get('https://restapinodejs.onrender.com/api/showallcategory')
        setcat(response.data.data);
        setloading(false);
    }
    useEffect(() => {
        setTimeout(() => {
            getData();
        }, 2000);
    }, [])

    if (loading) {
        return (
            <>
                <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Loader />
                </h1>
            </>
        );
    }

    return (
        <>
            <Layout>
                <div className="container-md mt-5">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th style={{ fontSize: '25px' }}>Category</th>
                                    <th style={{ fontSize: '25px' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cat.map((item) => {
                                        return (
                                            <>
                                                <tr key={item._id}>
                                                    <td>{item.category}</td>
                                                    <td><Link to={`/categorydetails/${item._id}`}>See Details</Link></td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Category
