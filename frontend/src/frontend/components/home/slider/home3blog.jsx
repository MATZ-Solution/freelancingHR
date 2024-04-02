/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect } from "react";
// Import Images
import AOS from "aos";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Blog_21, Blog_22, Img_03, Img_04, Img_05, bloglist01, bloglist02, bloglist03 } from "../../imagepath";
import {Link} from 'react-router-dom'

const Blogs = () => {
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
  <section className="section news">
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 mx-auto">
          <div
            className="section-header section-header-three aos"
            data-aos="fade-up"
          >
            <span className="badge title-badge">Our Blog</span>
            <h2 className="header-title">Read Our Article</h2>
          </div>
        </div>
      </div>
      <div className="trend-slider row aos" data-aos="fade-up">
        <div className="col-lg-6 col-md-12">
          {/* Blog Post */}
          <div className="blog blog-trick aos" data-aos="fade-up">
            <div className="blog-image">
              <Link to="/blog-details">
                <img
                  className="img-fluid"
                  src={Blog_21}
                  alt="Post Image"
                />
              </Link>
            </div>
            <div className="blog-trick-content-main">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <ul className="entry-meta meta-item d-flex align-items-center mb-0">
                  <li>
                    <div className="post-author blog-hover-img">
                      <Link to="/developer-details">
                        <img src={Blog_22} alt="Post Author" />{" "}
                        <span> Rihana madonna</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <i className="feather-calendar" />
                    15 Jan 2023
                  </li>
                </ul>
                <div className="blog-text">
                  <span>
                    <i className="feather-grid me-2" />
                    Education
                  </span>
                </div>
              </div>
              <div className="blog-content blog-trick-content">
                <h3 className="blog-title">
                  <Link to="/blog-details">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet.
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae amet cras nulla
                  mi laoreet quis amet phasellus....
                </p>
              </div>
              <Link to="#" className="more-option">
                Learn More
                <i className="feather-arrow-right ms-2" />
              </Link>
            </div>
          </div>
          {/* Blog Post */}
        </div>
        <div className="col-lg-6 col-md-12">
          {/* Blog Post */}
          <div className="blog blog-trick aos" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-sm-4">
                <div className="blog-image blog-list-img">
                  <Link to="/blog-details">
                    <img
                      className="img-fluid"
                      src={bloglist01}
                      alt="Post Image"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="blog-trick-content-main blog-list-main">
                  <div className="blog-content blog-trick-content">
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Lorem ipsum dolor sit amet,{" "}
                      </Link>
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Vitae amet</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 mt-2">
                    <ul className="entry-meta meta-item d-flex align-items-center mb-0">
                      <li>
                        <div className="post-author blog-hover-img">
                          <Link to="/developer-details">
                            <img
                              src={Img_03}
                              alt="Post Author"
                            />{" "}
                            <span> Aidan Funnell</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <i className="feather-calendar" />
                        15 Jan 2023
                      </li>
                    </ul>
                  </div>
                  <Link to="#" className="more-option mt-0">
                    Learn More
                    <i className="feather-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Blog Post */}
          {/* Blog Post */}
          <div className="blog blog-trick aos" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-sm-4">
                <div className="blog-image blog-list-img">
                  <Link to="/blog-details">
                    <img
                      className="img-fluid"
                      src={bloglist02}
                      alt="Post Image"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="blog-trick-content-main blog-list-main">
                  <div className="blog-content blog-trick-content">
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Lorem ipsum dolor sit amet,{" "}
                      </Link>
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Vitae amet</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 mt-2">
                    <ul className="entry-meta meta-item d-flex align-items-center mb-0">
                      <li>
                        <div className="post-author blog-hover-img">
                          <Link to="/developer-details">
                            <img
                              src={Img_04}
                              alt="Post Author"
                            />{" "}
                            <span> Cameron Morley</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <i className="feather-calendar" />
                        15 Jan 2023
                      </li>
                    </ul>
                  </div>
                  <Link to="#" className="more-option mt-0">
                    Learn More
                    <i className="feather-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Blog Post */}
          {/* Blog Post */}
          <div className="blog blog-trick aos" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-sm-4">
                <div className="blog-image blog-list-img">
                  <Link to="/blog-details">
                    <img
                      className="img-fluid"
                      src={bloglist03}
                      alt="Post Image"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-sm-8">
                <div className="blog-trick-content-main blog-list-main">
                  <div className="blog-content blog-trick-content">
                    <h3 className="blog-title">
                      <Link to="/blog-details">
                        Lorem ipsum dolor sit amet,{" "}
                      </Link>
                    </h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Vitae amet</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 mt-2">
                    <ul className="entry-meta meta-item d-flex align-items-center mb-0">
                      <li>
                        <div className="post-author blog-hover-img">
                          <Link to="/developer-details">
                            <img
                              src={Img_05}
                              alt="Post Author"
                            />{" "}
                            <span> Amelie Hannah</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <i className="feather-calendar" />
                        15 Jan 2023
                      </li>
                    </ul>
                  </div>
                  <Link to="#" className="more-option mt-0">
                    Learn More
                    <i className="feather-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Blog Post */}
        </div>
        <div className="col-md-12">
          <div className="next-job-btn mt-3">
            <Link
              to="/blog-details"
              className="btn btn-primary next-register me-3"
            >
              View More Articles
              <i className="feather-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* / Blog */}
</>

    )
}
export default Blogs;