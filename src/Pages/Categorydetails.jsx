import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Common/Loader'


const Categorydetails = () => {

    const { id } = useParams();

    const [cat, setcat] = useState([]);
    const [loading, setloading] = useState(true);

    const getData = async () => {
        const response = await axios.get(`https://restapinodejs.onrender.com/api/category/post/${id}`)
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
            {/* <!-- Packages Start --> */}
            <div class="container-fluid py-5">
                <div class="container pt-5 pb-3">
                    <div class="text-center mb-3 pb-3">
                        <h1>Category Post</h1>
                    </div>
                    <div class="row">
                        {cat?.map((item) => {
                            return (
                                <div class="col-md-12 mb-4">
                                    <div class="package-item bg-white mb-2">

                                        <div class="p-4">
                                            <h1>{item?.title}</h1>
                                            <p

                                                dangerouslySetInnerHTML={{ __html: item?.postText }}

                                            />
                                            <p className="card-text">Likes: {item.likes}</p>
                                            <p className="card-text">Unlikes: {item.unlikes}</p>
                                            <p className="card-text"> post Updated: {item.updatedAt}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* <!-- Packages End --> */}
        </>
    )
}

export default Categorydetails
