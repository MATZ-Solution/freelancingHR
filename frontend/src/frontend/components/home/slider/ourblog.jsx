/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Images
import { Blog_12, Blog_13, Blog_14 } from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";


const OurBlog = (props) => {

    //Aos
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true
        });

    }, []);


    return (
        <>
            {/* Blog */}
            <section className="section blog-tricks">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className="section-header text-center aos aos-init aos-animate"
                                data-aos="fade-up"
                            >
                                <h2 className="header-title">Featured Blogs</h2>
                                <p>Read Our Article To Get Tricks </p>
                            </div>
                        </div>
                    </div>
                    <div className="row aos aos-init aos-animate" data-aos="fade-up">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="grid-blog blog-two aos aos-init aos-animate"
                                data-aos="fade-up"
                            >
                                <div className="blog-image">
                                    <Link to="/blog-details">
                                        <img
                                            className="img-fluid"
                                            src={Blog_12}
                                            alt="Post Image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <div className="feature-time-blk">
                                        <span className="badge bg-pink d-flex align-items-center">
                                            <i className="feather-tag me-1" />
                                            Jobs
                                        </span>
                                        <span>
                                            <i className="feather-calendar me-1" /> 06 Oct, 2023
                                        </span>
                                    </div>
                                    <h3 className="blog-title mt-0">
                                        <Link to="/blog-details">
                                            Top 10 Resume Tips for Landing Your Dream Job
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="grid-blog blog-two aos aos-init aos-animate"
                                data-aos="fade-up"
                            >
                                <div className="blog-image">
                                    <Link to="/blog-details">
                                        <img
                                            className="img-fluid"
                                            src={Blog_13}
                                            alt="Post Image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <div className="feature-time-blk">
                                        <span className="badge bg-pink d-flex align-items-center">
                                            <i className="feather-tag me-1" />
                                            Jobs
                                        </span>
                                        <span>
                                            <i className="feather-calendar me-1" /> 06 Oct, 2023
                                        </span>
                                    </div>
                                    <h3 className="blog-title mt-0">
                                        <Link to="/blog-details">
                                            Navigating the Gig Economy: Freelancing and Side Hustles
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="grid-blog blog-two aos aos-init aos-animate"
                                data-aos="fade-up"
                            >
                                <div className="blog-image">
                                    <Link to="/blog-details">
                                        <img
                                            className="img-fluid"
                                            src={Blog_14}
                                            alt="Post Image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <div className="feature-time-blk">
                                        <span className="badge bg-pink d-flex align-items-center">
                                            <i className="feather-tag me-1" />
                                            Jobs
                                        </span>
                                        <span>
                                            <i className="feather-calendar me-1" /> 06 Oct, 2023
                                        </span>
                                    </div>
                                    <h3 className="blog-title mt-0">
                                        <Link to="/blog-details">
                                            Interview Success: How to Ace Common Interview Questions
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Blog */}
        </>

    )
}
export default OurBlog;