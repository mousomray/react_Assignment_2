import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from '../Common/Loader';

const Blog = () => {
    const [blog, setBlog] = useState([]);
    const [loading, setloading] = useState(true);


    const fetchData = async () => {
        try {
            const response = await axios.get('https://restapinodejs.onrender.com/api/allBlog');
            setBlog(response.data.data);
            setloading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setloading(false);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 2000);

    }, []);

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
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
                <div className="text-center mb-3 pb-3">
                    <h1>Blog</h1>
                </div>
                <div className="row">
                    {blog.map((item) => (
                        <div className="col-md-6 mb-4" key={item._id}>
                            <div className="package-item bg-white mb-2" style={{ width: '400px', height: '600px', margin: '0 auto' }}>
                                <img className="img-fluid" src={`https://restapinodejs.onrender.com/api/blog/image/${item._id}`} alt="" style={{ height: '225px', objectFit: 'cover', justifyContent: 'center', alignItems: 'center' }} />
                                <div className="p-4">

                                    <h3>{item?.title}</h3>
                                    <p

                                        dangerouslySetInnerHTML={{ __html: item?.postText.slice(0, 300) }}

                                    />
                                    <Link to={`/blogdetails/${item._id}`}>See more...</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
