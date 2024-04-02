import React, { useEffect } from "react";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Blog_12, Blog_13, Blog_14 } from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
const FeaturedBlog = () => {
  //Aos
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      {/* News */}
      <section className="section blog-tricks">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-header section-header-two text-center aos"
                data-aos="fade-up"
              >
                <h2 className="header-title">
                  Featured <span>Blogs</span>
                </h2>
                <p>Read Our Article To Get Tricks </p>
              </div>
            </div>
          </div>
          <div className="row aos" data-aos="fade-up">
            <div className="col-lg-4 col-md-6">
              <div className="grid-blog blog-two aos" data-aos="fade-up">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img className="img-fluid" src={Blog_12} alt="Post Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="feature-time-blk">
                    <span className="badge bg-pink d-flex align-items-center">
                      <i className="feather-tag me-1" />
                      Jobs
                    </span>
                    <span>
                      <i className="far fa-calendar me-1" /> 06 Oct, 2023
                    </span>
                  </div>
                  <h3 className="blog-title mt-0">
                    <Link to="/blog-details">
                      Top 10 Resume Tips for Landing Your Dream Job
                    </Link>
                  </h3>
                  <p>
                    Customize your resume for each job application. Highlight
                    skills and experiences that align...
                  </p>
                  <div className="blog-read">
                    <Link to="/blog-details">
                      Read More <i className="fas fa-arrow-right ms-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="grid-blog blog-two aos" data-aos="fade-up">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img className="img-fluid" src={Blog_13} alt="Post Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="feature-time-blk">
                    <span className="badge bg-pink d-flex align-items-center">
                      <i className="feather-tag me-1" />
                      Jobs
                    </span>
                    <span>
                      <i className="far fa-calendar me-1" /> 06 Oct, 2023
                    </span>
                  </div>
                  <h3 className="blog-title mt-0">
                    <Link to="/blog-details">
                      Navigating the Gig Economy: Freelancing and Side Hustles
                    </Link>
                  </h3>
                  <p>
                    Start by evaluating your skills, interests, and passions.
                    What are you good at, and what...
                  </p>
                  <div className="blog-read">
                    <Link to="/blog-details">
                      Read More <i className="fas fa-arrow-right ms-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="grid-blog blog-two aos" data-aos="fade-up">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img className="img-fluid" src={Blog_14} alt="Post Image" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="feature-time-blk">
                    <span className="badge bg-pink d-flex align-items-center">
                      <i className="feather-tag me-1" />
                      Jobs
                    </span>
                    <span>
                      <i className="far fa-calendar me-1" /> 06 Oct, 2023
                    </span>
                  </div>
                  <h3 className="blog-title mt-0">
                    <Link to="/blog-details">
                      Interview Success: How to Ace Common Interview Questions
                    </Link>
                  </h3>
                  <p>
                    Select a weakness that is not a critical skill for the job
                    and discuss how you&apos;ve been working...
                  </p>
                  <div className="blog-read">
                    <Link to="/blog-details">
                      Read More <i className="fas fa-arrow-right ms-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* / News */}
    </>
  );
};
export default FeaturedBlog;
