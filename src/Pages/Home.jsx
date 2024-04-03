import React from 'react'

const Home = () => {
    return (
        <>
            {/* <!-- Carousel Start --> */}
            <div class="container-fluid p-0">
                <div id="header-carousel" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="w-100" src="img/carousel-1.jpg" alt="Image" style={{ height: '500px' }} />
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style={{ maxWidth: '900px' }}>
                                    <h4 class="text-white text-uppercase mb-md-3">Blog</h4>
                                    <h1 class="display-3 text-white mb-md-4">Welcome to my Blogs</h1>
                                    <a href="" class="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="img/carousel-2.jpg" alt="Image" />
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style={{ maxWidth: '900px' }}>
                                    <h4 class="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                                    <h1 class="display-3 text-white mb-md-4">Discover Amazing Places With Us</h1>
                                    <a href="" class="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div class="btn btn-dark" style={{ width: '45px', height: '45px' }}>
                            <span class="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div class="btn btn-dark" style={{ width: '45px', height: '45px' }}>
                            <span class="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
            </div>
            {/* <!-- Carousel End --> */}

            {/* <!-- Destination Start --> */}
            <div class="container-fluid py-5 mt-5">
                <div class="container pt-5 pb-3">
                    <div class="text-center mb-3 pb-3">
                        <h6 class="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Blogs</h6>
                        <h1>Some blogs</h1>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="destination-item position-relative overflow-hidden mb-2">
                                <img class="img-fluid" src="img/destination-1.jpg" alt="" />

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="destination-item position-relative overflow-hidden mb-2">
                                <img class="img-fluid" src="img/destination-2.jpg" alt="" />

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="destination-item position-relative overflow-hidden mb-2">
                                <img class="img-fluid" src="img/destination-3.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="destination-item position-relative overflow-hidden mb-2">
                                <img class="img-fluid" src="img/destination-4.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="destination-item position-relative overflow-hidden mb-2">
                                <img class="img-fluid" src="img/destination-5.jpg" alt="" />
                                
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <div class="destination-item position-relative overflow-hidden mb-2">
                                <img class="img-fluid" src="img/destination-6.jpg" alt="" />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Destination Start --> */}


        </>
    )
}

export default Home
