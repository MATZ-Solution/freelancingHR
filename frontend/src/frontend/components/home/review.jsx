/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import Owlcarousel from "react-owl-carousel";
import Slider from "react-slick";
// Import Images
import {
  Review_01,
  Review_02,
  bg3,
  theme1,
  theme2,
  theme3,
  theme4,
  theme5,
  theme6,
} from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import { Test_quote } from "../imagepath";
import { Review_03 } from "../imagepath";
const Reviews = () => {
  //Aos
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  const options = {
    items: 5,
    margin: 30,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      991: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };

  return (
    <>
      {/* Top Instructor */}
      <section className="section subscribe">
        <div className="bg-img">
          <img src={bg3} className="bg-img3" alt="img" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12 mx-auto ">
              <div
                className="section-header aos text-center"
                data-aos="fade-up"
              >
                <h2 className="header-title">
                  Subscribe To Get Discounts, Updates &amp; More
                </h2>
                <p>Monthly product updates, industry news and more!</p>
              </div>
            </div>
            <div className="subscribe-form aos " data-aos="fade-up">
              <input type="text" placeholder="Enter your Email" />
              <Link to="javascript:void(0);" className="btn btn-sub">
                Send
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End Developer */}

      {/* Review */}
      <section className="section testimonial-section review">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-header aos text-center"
                data-aos="fade-up"
              >
                <h2 className="header-title">Top Reviews</h2>
                <p>High Performing Developers To Your</p>
              </div>
            </div>
          </div>
          <div
            id="testimonial-slider"
            className="owl-theme testimonial-slider aos"
            data-aos="fade-up"
          >
            <Owlcarousel
              className="owl-theme testimonial-slider aos"
              {...options}
            >
              {/* Review Widget */}
              <div className="review-blog">
                <div className="review-top d-flex align-items-center">
                  <div className="review-img">
                    <Link to="/review">
                      <img
                        className="img-fluid"
                        src={Review_01}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="review-info">
                    <h3>
                      <Link to="/review">Durso Raeen</Link>
                    </h3>
                    <h5>Project Lead</h5>
                  </div>
                  <div className="test-quote-img">
                    <img className="img-fluid" src={Test_quote} alt="quote" />
                  </div>
                </div>
                <div className="review-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus
                    aenean.
                  </p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">4.7</span>
                  </div>
                </div>
              </div>

              {/* / Review Widget */}

              {/* Review Widget */}
              <div className="review-blog">
                <div className="review-top d-flex align-items-center">
                  <div className="review-img">
                    <Link to="/review">
                      <img
                        className="img-fluid"
                        src={Review_02}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="review-info">
                    <h3>
                      <Link to="/review">Camelia Rennesa</Link>
                    </h3>
                    <h5>Project Lead</h5>
                  </div>
                  <div className="test-quote-img">
                    <img className="img-fluid" src={Test_quote} alt="quote" />
                  </div>
                </div>
                <div className="review-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus
                    aenean.
                  </p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">4.8</span>
                  </div>
                </div>
              </div>
              {/* /Review Widget */}
              {/* Review Widget */}
              <div className="review-blog">
                <div className="review-top d-flex align-items-center">
                  <div className="review-img">
                    <Link to="/review">
                      <img
                        className="img-fluid"
                        src={Review_03}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="review-info">
                    <h3>
                      <Link to="/review">Brayan</Link>
                    </h3>
                    <h5>Team Lead</h5>
                  </div>
                  <div className="test-quote-img">
                    <img className="img-fluid" src={Test_quote} alt="quote" />
                  </div>
                </div>
                <div className="review-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus
                    aenean.
                  </p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">5.0</span>
                  </div>
                </div>
              </div>
              {/* /Review Widget */}
              {/* Review Widget */}
              <div className="review-blog">
                <div className="review-top d-flex align-items-center">
                  <div className="review-img">
                    <Link to="/review">
                      <img
                        className="img-fluid"
                        src={Review_02}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="review-info">
                    <h3>
                      <Link to="/review">Davis Payerf</Link>
                    </h3>
                    <h5>Project Lead</h5>
                  </div>
                  <div className="test-quote-img">
                    <img className="img-fluid" src={Test_quote} alt="quote" />
                  </div>
                </div>
                <div className="review-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus
                    aenean.
                  </p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">3.2</span>
                  </div>
                </div>
              </div>
              {/* /Review Widget */}
            </Owlcarousel>
            {/* /Review Widget */}
          </div>
        </div>
      </section>
      {/* / Review */}
      <section className="section projects">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 mx-auto">
              <div
                className="section-header text-center aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <h2 className="header-title">Trusted by the world’s best</h2>
                <p>Top companies</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <div
                className="best-company aos aos-init aos-animate"
                data-aos="fade-up"
              >
                <ul className="mb-0">
                  <li>
                    <div className="company-bestimg">
                      <img src={theme1} alt="img" />
                    </div>
                  </li>
                  <li>
                    <div className="company-bestimg">
                      <img src={theme2} alt="img" />
                    </div>
                  </li>
                  <li>
                    <div className="company-bestimg">
                      <img src={theme3} alt="img" />
                    </div>
                  </li>
                  <li>
                    <div className="company-bestimg">
                      <img src={theme4} alt="img" />
                    </div>
                  </li>
                  <li>
                    <div className="company-bestimg">
                      <img src={theme5} alt="img" />
                    </div>
                  </li>
                  <li>
                    <div className="company-bestimg">
                      <img src={theme6} alt="img" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export { Reviews };
