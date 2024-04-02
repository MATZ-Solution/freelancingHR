/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Images
import AOS from "aos";
import "aos/dist/aos.css";
import { Blog_15, blog1, blog2 } from "../../imagepath";


const OurBlogFour = (props) => {

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
        <section className="section blog-article">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-four section-locate aos"
                  data-aos="fade-up"
                >
                  <div className="text-center">
                    <h2 className="header-title">Our Blog</h2>
                    <p>Read Our Article To Get Tricks </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row aos row-gap" data-aos="fade-up">
              <div className="col-lg-4 col-md-6">
                <div className="blog-article-group">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={Blog_15}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="article-Production">
                      <span>Production</span>
                    </div>
                    <div className="article-blog-content">
                      <span>
                        {" "}
                        <i className="feather-calendar" /> 13, Dec2022
                      </span>
                      <h4>
                        <Link to="/blog-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Amet.
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-article-group">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={blog1}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="article-Production">
                      <span>Jobs</span>
                    </div>
                    <div className="article-blog-content">
                      <span>
                        <i className="feather-calendar" />
                        12, Dec2022
                      </span>
                      <h4>
                        <Link to="/blog-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Amet.
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-article-group">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={blog2}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="article-Production">
                      <span>Production</span>
                    </div>
                    <div className="article-blog-content">
                      <span>
                        <i className="feather-calendar" />
                        10, Dec2022
                      </span>
                      <h4>
                        <Link to="/blog-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Amet.
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      
    )
}
export default OurBlogFour;