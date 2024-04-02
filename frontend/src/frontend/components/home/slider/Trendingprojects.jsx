/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import Owlcarousel from "react-owl-carousel";
// import Slider from "react-slick";
// Import Images
import {
  Project_25,
  Project_26,
  Project_27,
  Review_01,
  Review_02,
  bg3,
  theme1,
  theme2,
  theme3,
  theme4,
  theme5,
  theme6,
} from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import { Test_quote } from "../../imagepath";
import { Review_03 } from "../../imagepath";
// import { bg3 } from "../../imagepath";
const Trendingproject = () => {
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
    dots: true,
    nav: false,
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
      {/* Review */}
      <section className="section trend-projects trend-projects-three">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 mx-auto">
              <div
                className="section-header section-header-three aos"
                data-aos="fade-up"
              >
                <span className="badge title-badge">Trending Projects</span>
                <h2 className="header-title">Recently Update jobs for you</h2>
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
              <div className="project-item trend-project-item">
                <div className="project-img">
                  <Link to="/project">
                    <img src={Project_25} alt="Img" className="img-fluid" />
                  </Link>
                </div>
                <div className="trend-project-content">
                  <div className="star-rated">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="average-rating">5.0</span>
                    </div>
                    <Link to="#" className="select-favourite">
                      <i className="fa-regular fa-bookmark" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/project">UI/UX for Cryptocurrency Exchange</Link>
                  </h4>
                  <ul className="trend-project-list">
                    <li>
                      <i className="feather-user me-1" />
                      Web Development
                    </li>
                    <li>
                      <i className="feather-map-pin me-1" />
                      Delaware, USA
                    </li>
                  </ul>
                  <div className="trend-rate">
                    <ul className="nav">
                      <li>
                        <span>$200</span>
                      </li>
                      <li>
                        <Link to="#">
                          Learn More
                          <i className="feather-arrow-right ms-2" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="project-item trend-project-item">
                <div className="project-img">
                  <Link to="/project">
                    <img src={Project_26} alt="Img" className="img-fluid" />
                  </Link>
                </div>
                <div className="trend-project-content">
                  <div className="star-rated">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="average-rating">5.0</span>
                    </div>
                    <Link to="#" className="select-favourite">
                      <i className="fa-regular fa-bookmark" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/project">
                      Website Design for a Consumer Shop
                    </Link>
                  </h4>
                  <ul className="trend-project-list">
                    <li>
                      <i className="feather-user me-1" />
                      Anugular Development
                    </li>
                    <li>
                      <i className="feather-map-pin me-1" />
                      Delaware, USA
                    </li>
                  </ul>
                  <div className="trend-rate">
                    <ul className="nav">
                      <li>
                        <span>$100</span>
                      </li>
                      <li>
                        <Link to="#">
                          Learn More
                          <i className="feather-arrow-right ms-2" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="project-item trend-project-item">
                <div className="project-img">
                  <Link to="/project">
                    <img src={Project_27} alt="Img" className="img-fluid" />
                  </Link>
                </div>
                <div className="trend-project-content">
                  <div className="star-rated">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="average-rating">5.0</span>
                    </div>
                    <Link to="#" className="select-favourite">
                      <i className="fa-regular fa-bookmark" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/project">
                      Landing Page Redesign / Sales Page Redesign
                    </Link>
                  </h4>
                  <ul className="trend-project-list">
                    <li>
                      <i className="feather-user me-1" />
                      Web Development
                    </li>
                    <li>
                      <i className="feather-map-pin me-1" />
                      Delaware, USA
                    </li>
                  </ul>
                  <div className="trend-rate">
                    <ul className="nav">
                      <li>
                        <span>$150</span>
                      </li>
                      <li>
                        <Link to="#">
                          Learn More
                          <i className="feather-arrow-right ms-2" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="project-item trend-project-item">
                <div className="project-img">
                  <Link to="/project">
                    <img src={Project_26} alt="Img" className="img-fluid" />
                  </Link>
                </div>
                <div className="trend-project-content">
                  <div className="star-rated">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="average-rating">5.0</span>
                    </div>
                    <Link to="#" className="select-favourite">
                      <i className="fa-regular fa-bookmark" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/project">
                      Build a Coaching Website Product Store images
                    </Link>
                  </h4>
                  <ul className="trend-project-list">
                    <li>
                      <i className="feather-user me-1" />
                      SEO Analyst
                    </li>
                    <li>
                      <i className="feather-map-pin me-1" />
                      Delaware, USA
                    </li>
                  </ul>
                  <div className="trend-rate">
                    <ul className="nav">
                      <li>
                        <span>$200</span>
                      </li>
                      <li>
                        <Link to="#">
                          Learn More
                          <i className="feather-arrow-right ms-2" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="project-item trend-project-item">
                <div className="project-img">
                  <Link to="/project">
                    <img src={Project_26} alt="Img" className="img-fluid" />
                  </Link>
                </div>
                <div className="trend-project-content">
                  <div className="star-rated">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="average-rating">5.0</span>
                    </div>
                    <Link to="#" className="select-favourite">
                      <i className="fa-regular fa-bookmark" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/project">
                      Website Design for a Consumer Shop
                    </Link>
                  </h4>
                  <ul className="trend-project-list">
                    <li>
                      <i className="feather-user me-1" />
                      Anugular Development
                    </li>
                    <li>
                      <i className="feather-map-pin me-1" />
                      Delaware, USA
                    </li>
                  </ul>
                  <div className="trend-rate">
                    <ul className="nav">
                      <li>
                        <span>$100</span>
                      </li>
                      <li>
                        <Link to="#">
                          Learn More
                          <i className="feather-arrow-right ms-2" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="project-item trend-project-item">
                <div className="project-img">
                  <Link to="/project">
                    <img src={Project_27} alt="Img" className="img-fluid" />
                  </Link>
                </div>
                <div className="trend-project-content">
                  <div className="star-rated">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="average-rating">5.0</span>
                    </div>
                    <Link to="#" className="select-favourite">
                      <i className="fa-regular fa-bookmark" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/project">
                      Landing Page Redesign / Sales Page Redesign
                    </Link>
                  </h4>
                  <ul className="trend-project-list">
                    <li>
                      <i className="feather-user me-1" />
                      Web Development
                    </li>
                    <li>
                      <i className="feather-map-pin me-1" />
                      Delaware, USA
                    </li>
                  </ul>
                  <div className="trend-rate">
                    <ul className="nav">
                      <li>
                        <span>$300</span>
                      </li>
                      <li>
                        <Link to="#">
                          Learn More
                          <i className="feather-arrow-right ms-2" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="project-item trend-project-item">
                <div className="project-img">
                  <Link to="/project">
                    <img src={Project_26} alt="Img" className="img-fluid" />
                  </Link>
                </div>
                <div className="trend-project-content">
                  <div className="star-rated">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="average-rating">5.0</span>
                    </div>
                    <Link to="#" className="select-favourite">
                      <i className="fa-regular fa-bookmark" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/project">
                      Build a Coaching Website Product Store images
                    </Link>
                  </h4>
                  <ul className="trend-project-list">
                    <li>
                      <i className="feather-user me-1" />
                      SEO Analyst
                    </li>
                    <li>
                      <i className="feather-map-pin me-1" />
                      Delaware, USA
                    </li>
                  </ul>
                  <div className="trend-rate">
                    <ul className="nav">
                      <li>
                        <span>$250</span>
                      </li>
                      <li>
                        <Link to="#">
                          Learn More
                          <i className="feather-arrow-right ms-2" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="project-item trend-project-item">
                <div className="project-img">
                  <Link to="/project">
                    <img src={Project_25} alt="Img" className="img-fluid" />
                  </Link>
                </div>
                <div className="trend-project-content">
                  <div className="star-rated">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="average-rating">5.0</span>
                    </div>
                    <Link to="#" className="select-favourite">
                      <i className="fa-regular fa-bookmark" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/project">UI/UX for Cryptocurrency Exchange</Link>
                  </h4>
                  <ul className="trend-project-list">
                    <li>
                      <i className="feather-user me-1" />
                      Web Development
                    </li>
                    <li>
                      <i className="feather-map-pin me-1" />
                      Delaware, USA
                    </li>
                  </ul>
                  <div className="trend-rate">
                    <ul className="nav">
                      <li>
                        <span>$200</span>
                      </li>
                      <li>
                        <Link to="#">
                          Learn More
                          <i className="feather-arrow-right ms-2" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="project-item trend-project-item">
                <div className="project-img">
                  <Link to="/project">
                    <img src={Project_26} alt="Img" className="img-fluid" />
                  </Link>
                </div>
                <div className="trend-project-content">
                  <div className="star-rated">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="average-rating">5.0</span>
                    </div>
                    <Link to="#" className="select-favourite">
                      <i className="fa-regular fa-bookmark" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/project">
                      Website Design for a Consumer Shop
                    </Link>
                  </h4>
                  <ul className="trend-project-list">
                    <li>
                      <i className="feather-user me-1" />
                      Anugular Development
                    </li>
                    <li>
                      <i className="feather-map-pin me-1" />
                      Delaware, USA
                    </li>
                  </ul>
                  <div className="trend-rate">
                    <ul className="nav">
                      <li>
                        <span>$200</span>
                      </li>
                      <li>
                        <Link to="#">
                          Learn More
                          <i className="feather-arrow-right ms-2" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="project-item trend-project-item">
                <div className="project-img">
                  <Link to="/project">
                    <img src={Project_26} alt="Img" className="img-fluid" />
                  </Link>
                </div>
                <div className="trend-project-content">
                  <div className="star-rated">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="average-rating">5.0</span>
                    </div>
                    <Link to="#" className="select-favourite">
                      <i className="fa-regular fa-bookmark" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/project">
                      Build a Coaching Website Product Store images
                    </Link>
                  </h4>
                  <ul className="trend-project-list">
                    <li>
                      <i className="feather-user me-1" />
                      SEO Analyst
                    </li>
                    <li>
                      <i className="feather-map-pin me-1" />
                      Delaware, USA
                    </li>
                  </ul>
                  <div className="trend-rate">
                    <ul className="nav">
                      <li>
                        <span>$300</span>
                      </li>
                      <li>
                        <Link to="#">
                          Learn More
                          <i className="feather-arrow-right ms-2" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="project-item trend-project-item">
                <div className="project-img">
                  <Link to="/project">
                    <img src={Project_26} alt="Img" className="img-fluid" />
                  </Link>
                </div>
                <div className="trend-project-content">
                  <div className="star-rated">
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="average-rating">5.0</span>
                    </div>
                    <Link to="#" className="select-favourite">
                      <i className="fa-regular fa-bookmark" />
                    </Link>
                  </div>
                  <h4>
                    <Link to="/project">
                      Website Design for a Consumer Shop
                    </Link>
                  </h4>
                  <ul className="trend-project-list">
                    <li>
                      <i className="feather-user me-1" />
                      Anugular Development
                    </li>
                    <li>
                      <i className="feather-map-pin me-1" />
                      Delaware, USA
                    </li>
                  </ul>
                  <div className="trend-rate">
                    <ul className="nav">
                      <li>
                        <span>$200</span>
                      </li>
                      <li>
                        <Link to="#">
                          Learn More
                          <i className="feather-arrow-right ms-2" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Owlcarousel>
            {/* /Review Widget */}
          </div>
        </div>
      </section>
      {/* / Review */}
    </>
  );
};
export default Trendingproject;
