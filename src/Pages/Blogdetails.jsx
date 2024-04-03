import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Common/Loader';

const Blogdetails = () => {

    const { id } = useParams();

    const [blog, setblog] = useState([]);
    const [loading, setloading] = useState(true);

    const getData = async () => {
        const response = await axios.get(`https://restapinodejs.onrender.com/api/blogdetails/${id}`)
        setblog(response.data.data);
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
            {/* <!-- Packages Start --> */}
            <div class="container-fluid py-5">
                <div class="container pt-5 pb-3">
                    <div class="text-center mb-3 pb-3">
                        <h1>Blog Details</h1>
                    </div>
                    <div class="row">

                        <div class="col-md-12 mb-4">
                            <div class="package-item bg-white mb-2">
                                <img className="img-fluid" src={`https://restapinodejs.onrender.com/api/blog/image/${id}`} alt="" style={{ margin: '0 auto', display: 'block', width: '100%' }} />

                                <div class="p-4">
                                    <h1>{blog?.title}</h1>
                                    <p

                                        dangerouslySetInnerHTML={{ __html: blog?.postText }}

                                    />
                                    <p className="card-text">Likes: {blog.likes}</p>
                                    <p className="card-text">Unlikes: {blog.unlikes}</p>
                                    <p className="card-text"> post Updated: {blog.updatedAt}</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            {/* <!-- Packages End --> */}

        </>
    )
}

export default Blogdetails
