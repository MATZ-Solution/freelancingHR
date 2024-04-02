/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Owlcarousel from "react-owl-carousel";

// Import Images
import {
  Plat_form_img1,
  load_icon,
  trusted1,
  trusted2,
  trusted3,
  trusted4,
  trusted5,
  great_1,
  great_2,
  great_3,
  great_4,
  project35,
  project36,
  project37,
  work4,
  recenticon,
  recenticon05,
  recenticon06,
  developer13,
  developer,
  developer14,
  dollardeveloper,
  developer15,
  developer16,
  counticon01,
  counticon02,
  counticon03,
  counticon04,
  oppurtunity,
  categoryimg1,
  categoryimg3,
  categoryimg4,
  categoryimg5,
  categoryimg2,
  Appstore,
  Googleplay,
} from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderFive from "../header/header-five";
import { Link } from "react-router-dom";
// import config from "config"
// import FooterFive from "../footer/index-five";
import OurBlog from "./slider/ourblog";
import TopReviewFive from "./slider/TopReviewFive";
import CountUp from "react-countup";
import { FiArrowUp } from "react-icons/fi";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Home5 = () => {
  const [scroll, setScroll] = useState(true);
  const currentYear = new Date().getFullYear();

  const options = [
    { value: 1, label: "Projects" },
    { value: 2, label: "Freelancers" },
  ];
  const values = {
    items: 5, // Change this to 5 to display 5 cards by default
    margin: 10,
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
        items: 5, // Change this to 5 to display 5 cards on screens wider than 1170px
      },
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  useEffect(() => {
    document.body.classList.add("home-page");
    return () => document.body.classList.remove("home-page");
  }, []);
  useEffect(() => {
    document.body.classList.add("bg-five");
    return () => document.body.classList.remove("bg-five");
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 150);
    });
    return () =>
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY > 150);
      });
  }, []);
  useEffect(() => {
    setTimeout(function () {
      $("#global-loader");
      setTimeout(function () {
        $("#global-loader").fadeOut("slow");
      }, 100);
    }, 500);
  }, []);

  return (
    <>
      <>
        {/* Loader */}
        <div id="global-loader">
          <div className="whirly-loader"> </div>
          <div className="loader-img">
            <img src={load_icon} className="img-fluid" alt="" />
          </div>
        </div>
        {/* Loader */}
        {/* Main Wrapper */}
        <div className="main-wrapper  home-five-wrapper">
          {/* Start Navigation */}
          {/* Header */}
          <HeaderFive />
          {/* /Header */}
          {/* Home Banner */}
          <section className="section home-banner home-five row-middle">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-12 ">
                  <div className="banner-blk-five justify-content-center">
                    <div
                      className="banner-content text-center aos"
                      data-aos="fade-up"
                    >
                      <h1>Get the Perfect Developers &amp; Projects</h1>
                      <p>With the world's #1 Developers Marketplace</p>
                      <form
                        className="form"
                        name="store"
                        id="store"
                        method="post"
                        action="/project"
                      >
                        <div className="form-inner">
                          <div className="input-group">
                            <span className="drop-detail">
                              <Select
                                className="select-borderless"
                                options={options}
                                placeholder="Projects"
                              />
                            </span>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Keywords"
                            />
                            <button
                              className="btn btn-primary sub-btn"
                              type="submit"
                            >
                              Search
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Home Banner */}

          <div className="trusted-by-section">
            <span>Trusted By :</span>
            <ul>
              <li>
                <img src={trusted1} alt="Img" />
              </li>
              <li>
                <img src={trusted2} alt="Img" />
              </li>
              <li>
                <img src={trusted3} alt="Img" />
              </li>
              <li>
                <img src={trusted4} alt="Img" />
              </li>
              <li>
                <img src={trusted5} alt="Img" />
              </li>
            </ul>
          </div>

          {/* Review */}
          <section className="project-by-category">
            <div className="container">
              <div className="row ">
                <div className="col-md-12 col-sm-12 col-12 mx-auto text-center">
                  <div
                    className="section-header aos aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <h2 className="header-title">
                      Browse Projects By Category
                    </h2>
                    <p>Get work done in over 60 different categories</p>
                  </div>
                </div>
              </div>
              <div
                id="testimonial-slider"
                className="category-slider-section"
                data-aos="fade-up"
              >
                <Owlcarousel
                  className="owl-theme blog-trick-five blog-slider aos"
                  {...values}
                >
                  {/* Review Widget */}

                  <div className="project-by-category-widget">
                    <Link to="/project" className="category-widget-img">
                      <img
                        src={categoryimg1}
                        className="img-fluid"
                        alt="slider-image"
                      />
                    </Link>
                    <div className="category-widget-content">
                      <h5>Social Media</h5>
                      <p className="mb-0">Reach our Customers</p>
                    </div>
                  </div>
                  <div className="project-by-category-widget">
                    <Link to="/project" className="category-widget-img">
                      <img
                        src={categoryimg2}
                        className="img-fluid"
                        alt="slider-image"
                      />
                    </Link>
                    <div className="category-widget-content">
                      <h5>SEO</h5>
                      <p className="mb-0">Unlock Growth Online</p>
                    </div>
                  </div>
                  <div className="project-by-category-widget">
                    <Link to="/project" className="category-widget-img">
                      <img
                        src={categoryimg3}
                        className="img-fluid"
                        alt="slider-image"
                      />
                    </Link>
                    <div className="category-widget-content">
                      <h5>Illustration</h5>
                      <p className="mb-0">Color Your Dream</p>
                    </div>
                  </div>
                  <div className="project-by-category-widget">
                    <Link to="/project" className="category-widget-img">
                      <img
                        src={categoryimg4}
                        className="img-fluid"
                        alt="slider-image"
                      />
                    </Link>
                    <div className="category-widget-content">
                      <h5>Translation</h5>
                      <p className="mb-0">Go Global</p>
                    </div>
                  </div>
                  <div className="project-by-category-widget">
                    <Link to="/project" className="category-widget-img">
                      <img
                        src={categoryimg5}
                        className="img-fluid"
                        alt="slider-image"
                      />
                    </Link>
                    <div className="category-widget-content">
                      <h5>Data Entry</h5>
                      <p className="mb-0">Learn Your Business</p>
                    </div>
                  </div>
                  <div className="project-by-category-widget">
                    <Link to="/project" className="category-widget-img">
                      <img
                        src={categoryimg1}
                        className="img-fluid"
                        alt="slider-image"
                      />
                    </Link>
                    <div className="category-widget-content">
                      <h5>Social Media</h5>
                      <p className="mb-0">Reach our Customers</p>
                    </div>
                  </div>
                  <div className="project-by-category-widget">
                    <Link to="/project" className="category-widget-img">
                      <img
                        src={categoryimg1}
                        className="img-fluid"
                        alt="slider-image"
                      />
                    </Link>
                    <div className="category-widget-content">
                      <h5>Social Media</h5>
                      <p className="mb-0">Reach our Customers</p>
                    </div>
                  </div>
                </Owlcarousel>
                {/* /Review Widget */}
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="home-five-section-btn">
                    <Link to="/project" className="btn btn-primary">
                      View all Categories
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* / Review */}

          {/* Need Job */}
          <section className="section projects">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-12 mx-auto text-center">
                  <div
                    className="section-header aos aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <h2 className="header-title">Need something done?</h2>
                    <p>XGEN Freelancing Platform is here to help you to get job completed</p>
                  </div>
                </div>
              </div>
              <div className="row row-gap">
                {/* Feature Item */}
                <div
                  className="col-xl-3 col-md-6 aos d-flex aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                >
                  <div className="feature-items">
                    <div className="feature-icon">
                      <img src={great_1} className="img-fluid" alt="Img" />
                    </div>
                    <div className="feature-content course-count">
                      <h3>Browse Portfolios</h3>
                      <p>
                        Find professionals you can trust by browsing their
                        samples of previous work .
                      </p>
                    </div>
                  </div>
                </div>
                {/* /Feature Item */}
                {/* Feature Item */}
                <div
                  className="col-xl-3 col-md-6 aos d-flex aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                >
                  <div className="feature-items ">
                    <div className="feature-icon">
                      <img src={great_2} className="img-fluid" alt="Img" />
                    </div>
                    <div className="feature-content course-count">
                      <h3>Fast Bids</h3>
                      <p>
                        Receive obligation free quotes from our talented
                        freelancers fast. 80% of projects get bid
                      </p>
                    </div>
                  </div>
                </div>
                {/* /Feature Item */}
                {/* Feature Item */}
                <div
                  className="col-xl-3 col-md-6 aos d-flex aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                >
                  <div className="feature-items ">
                    <div className="feature-icon">
                      <img src={great_3} className="img-fluid" alt="Img" />
                    </div>
                    <div className="feature-content course-count">
                      <h3>Quality Work</h3>
                      <p>
                        XGEN Freelancing Platform.com has by far the largest pool of quality
                        freelancers globally- over 50 million to choose from.
                      </p>
                    </div>
                  </div>
                </div>
                {/* /Feature Item */}
                {/* Feature Item */}
                <div
                  className="col-xl-3 col-md-6 aos d-flex aos-init aos-animate"
                  data-aos="zoom-in"
                  data-aos-duration={2500}
                >
                  <div className="feature-items ">
                    <div className="feature-icon">
                      <img src={great_4} className="img-fluid" alt="Img" />
                    </div>
                    <div className="feature-content course-count">
                      <h3>Track Progress</h3>
                      <p>
                        Keep up-to-date and on-the-go with our time tracker
                        Always know what freelancers are up to.
                      </p>
                    </div>
                  </div>
                </div>
                {/* /Feature Item */}
              </div>
            </div>
          </section>

          {/* Popular Projects */}
          <section className="section popular-projects-job">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-12 mx-auto text-center">
                  <div
                    className="section-header aos aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <h2 className="header-title">Popular Projects near you</h2>
                    <p>Bid and stary the new Jobs</p>
                  </div>
                </div>
              </div>
              <div className="row">
                {/*- Project Item  */}
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div
                    className="project-item project-popular-item aos"
                    data-aos="fade-up"
                  >
                    <div className="project-img">
                      <Link to="/project">
                        <img src={project35} alt="Img" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="feature-content">
                      <h4>
                        <Link to="/project">3D Renders and Amazon Product</Link>
                      </h4>
                      <ul className="feature-project-list nav">
                        <li>
                          <i className="feather-user me-1" />
                          UI/UX Designer
                        </li>
                        <li>$200</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*- /Project Item  */}
                {/*- Project Item  */}
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div
                    className="project-item project-popular-item aos"
                    data-aos="fade-up"
                  >
                    <div className="project-img">
                      <Link to="/project">
                        <img src={project36} alt="Img" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="feature-content">
                      <h4>
                        <Link to="/project">
                          Website Design for a Consumer Shop
                        </Link>
                      </h4>
                      <ul className="feature-project-list nav">
                        <li>
                          <i className="feather-user me-1" />
                          Web Development
                        </li>
                        <li>$350</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*- /Project Item  */}
                {/*- Project Item  */}
                <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div
                    className="project-item project-popular-item aos"
                    data-aos="fade-up"
                  >
                    <div className="project-img">
                      <Link to="/project">
                        <img src={project37} alt="Img" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="feature-content">
                      <h4>
                        <Link to="/project">
                          3D Renders and Amazon Product{" "}
                        </Link>
                      </h4>
                      <ul className="feature-project-list nav">
                        <li>
                          <i className="feather-user me-1" />
                          Php Development
                        </li>
                        <li>$99</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*- /Project Item  */}
                <div className="col-md-12">
                  <div className="home-five-section-btn">
                    <Link to="/project" className="btn btn-primary">
                      View More Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Popular Projects */}
          {/* Profesional Job */}
          <section className="section review">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="work-set-image">
                    <img src={work4} alt="Img" className="img-fluid " />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="aos " data-aos="fade-up">
                    <div className="demand-professional">
                      <h2>More than 50 million professionals on demand</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                    </div>
                    <div className="demand-post-job">
                      <div className="demand-post-img">
                        <img src={recenticon} alt="Img" className="img-fluid" />
                      </div>
                      <div className="demand-content">
                        <h6>Post a job</h6>
                        <p>
                          Publish the job posting on your selected platforms.
                          Follow the specific submission process for each
                          platform.
                        </p>
                      </div>
                    </div>
                    <div className="demand-post-job">
                      <div className="demand-post-img">
                        <img
                          src={recenticon05}
                          alt="Img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="demand-content">
                        <h6>Hire Freelancers</h6>
                        <p>
                          Depending on the platform, you can either wait for
                          freelancers to apply or invite specific freelancers to
                          submit proposals.
                        </p>
                      </div>
                    </div>
                    <div className="demand-post-job">
                      <div className="demand-post-img">
                        <img
                          src={recenticon06}
                          alt="Img"
                          className="img-fluid"
                        />
                      </div>
                      <div className="demand-content">
                        <h6>Get Work Done</h6>
                        <p>
                          Utilize productivity tools and apps to help you stay
                          organized, manage tasks, and set reminders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* /Profesional Job */}
          {/* Marketplace */}
          <section className="section market-place-join">
            <div className="container">
              <div className="market-place-bg">
                <div className="row">
                  <div className="col-md-6 d-flex align-items-center">
                    <div className="join-market-world aos" data-aos="fade-up">
                      <h2>Join World’s Best Marketplace for developers</h2>
                      <p>
                        Why hire people when you can simply integrate our
                        talented cloud workforce instead?
                      </p>
                      <div className="market-place-btn bidding-btn">
                        <Link
                          to="/project"
                          className="btn btn-primary market-project me-2"
                        >
                          Post a Project
                        </Link>
                        <Link
                          to="/project"
                          className="btn btn-primary project-post"
                        >
                          Start Bidding
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="join-platform-img aos" data-aos="fade-up">
                      <img
                        src={Plat_form_img1}
                        alt="Img"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Marketplace */}
          {/* Most Hired Developers */}
          <section className="most-hired-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-12 col-sm-12 col-12 mx-auto text-center">
                  <div
                    className="section-header aos aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <h2 className="header-title">Most Hired Developers</h2>
                    <p>
                      Work with talented people at the most affordable price
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="hired-developers aos" data-aos="fade-up">
                    <div className="hired-developers-img">
                      <Link to="/developer-details">
                        <img
                          src={developer13}
                          className="img-fluid"
                          alt="Img"
                        />
                      </Link>
                    </div>
                    <div className="hired-developers-img-content d-flex justify-content-between align-items-start">
                      <div>
                        <Link
                          data-toggle="modal"
                          to="#rating"
                          className="favourite color-active"
                        >
                          <i className="feather-heart" />
                        </Link>
                        <h4>
                          <Link to="/developer-details">Steven Picard</Link>
                        </h4>
                        <span>Angular Developer</span>
                        <h6>
                          <img src={developer} className="me-1" alt="Img" />
                          $32 /hr
                        </h6>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="hired-developers aos" data-aos="fade-up">
                    <div className="hired-developers-img">
                      <Link to="/developer-details">
                        <img
                          src={developer14}
                          className="img-fluid"
                          alt="Img"
                        />
                      </Link>
                    </div>
                    <div className="hired-developers-img-content d-flex justify-content-between align-items-start">
                      <div>
                        <Link
                          data-toggle="modal"
                          to="#rating"
                          className="favourite color-active"
                        >
                          <i className="feather-heart" />
                        </Link>
                        <h4>
                          <Link to="/developer-details">Aroon Merkel</Link>
                        </h4>
                        <span>Java Developer</span>
                        <h6>
                          <img
                            src={dollardeveloper}
                            className="me-1"
                            alt="Img"
                          />
                          $72 /hr
                        </h6>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="hired-developers aos" data-aos="fade-up">
                    <div className="hired-developers-img">
                      <Link to="/developer-details">
                        <img
                          src={developer15}
                          className="img-fluid"
                          alt="Img"
                        />
                      </Link>
                    </div>
                    <div className="hired-developers-img-content d-flex justify-content-between align-items-start">
                      <div>
                        <Link
                          data-toggle="modal"
                          to="#rating"
                          className="favourite color-active"
                        >
                          <i className="feather-heart" />
                        </Link>
                        <h4>
                          <Link to="/developer-details">Durso Raeen</Link>
                        </h4>
                        <span>React Developer</span>
                        <h6>
                          <img
                            src={dollardeveloper}
                            className="me-1"
                            alt="Img"
                          />
                          $452 /hr
                        </h6>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="hired-developers aos" data-aos="fade-up">
                    <div className="hired-developers-img">
                      <Link to="/developer-details">
                        <img
                          src={developer16}
                          className="img-fluid"
                          alt="Img"
                        />
                      </Link>
                    </div>
                    <div className="hired-developers-img-content d-flex justify-content-between align-items-start">
                      <div>
                        <Link
                          data-toggle="modal"
                          to="#rating"
                          className="favourite color-active"
                        >
                          <i className="feather-heart" />
                        </Link>
                        <h4>
                          <Link to="/developer-details">Andrew Jene</Link>
                        </h4>
                        <span>Html Developer</span>
                        <h6>
                          <img
                            src={dollardeveloper}
                            className="me-1"
                            alt="Img"
                          />
                          $63 /hr
                        </h6>
                      </div>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Most Hired Developers */}
          {/* FAQ */}
          <section className="faq-section-three" id="faq">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-12 mx-auto text-center">
                  <div
                    className="section-header aos aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <h2 className="header-title">Frequently Question Answer</h2>
                    <p>View all the questions, answered for users</p>
                  </div>
                </div>
              </div>
              <div className="row" id="accordionExample">
                <div className="col-lg-12">
                  <div className="faq-card aos  " data-aos="fade-up">
                    <h4 className="faq-title">
                      <Link
                        className="collapseds active"
                        data-bs-toggle="collapse"
                        to="#faqOne"
                        aria-expanded="true"
                      >
                        1. What are the costs to buy a house?
                      </Link>
                    </h4>
                    <div
                      id="faqOne"
                      className="card-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.Lorem ipsum dolor sit amet,
                      </p>
                    </div>
                  </div>
                  <div className="faq-card aos  " data-aos="fade-up">
                    <h4 className="faq-title">
                      <Link
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#faqtwo"
                        aria-expanded="false"
                      >
                        2. What are the costs to buy a house?
                      </Link>
                    </h4>
                    <div
                      id="faqtwo"
                      className="card-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.Lorem ipsum dolor sit amet,
                      </p>
                    </div>
                  </div>
                  <div className="faq-card aos  " data-aos="fade-up">
                    <h4 className="faq-title">
                      <Link
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#faqthree"
                        aria-expanded="false"
                      >
                        3. Do you have loan consultants?
                      </Link>
                    </h4>
                    <div
                      id="faqthree"
                      className="card-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.Lorem ipsum dolor sit amet,
                      </p>
                    </div>
                  </div>
                  <div className="faq-card aos  " data-aos="fade-up">
                    <h4 className="faq-title">
                      <Link
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#faqfour"
                        aria-expanded="false"
                      >
                        4. What are the costs to buy a house?
                      </Link>
                    </h4>
                    <div
                      id="faqfour"
                      className="card-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.Lorem ipsum dolor sit amet,
                      </p>
                    </div>
                  </div>
                  <div className="faq-card aos  " data-aos="fade-up">
                    <h4 className="faq-title">
                      <Link
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#faqfive"
                        aria-expanded="false"
                      >
                        5. What are the costs to buy a house?
                      </Link>
                    </h4>
                    <div
                      id="faqfive"
                      className="card-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.Lorem ipsum dolor sit amet,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /FAQ */}

          {/* Counter */}
          <section className="section feature-count feature-count-three">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12 col-12 mx-auto text-center">
                  <div
                    className="section-header aos aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <h2 className="header-title">Achievement We Have Earned</h2>
                    <p>
                      At Freelancer, we believe that talent is borderless and
                      opportunity should be too.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Counter */}
          <div className="count-sec">
            <div className="container">
              <div className="row">
                {/* Feature Item */}
                <div className="col-xl-3 col-md-6">
                  <div
                    className="feature-item freelance-count aos aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <div className="feature-icon ">
                      <img src={counticon01} className="img-fluid" alt="Img" />
                    </div>
                    <div className="feature-content course-count">
                      <h3>
                        <CountUp end={9207} duration={10} />
                      </h3>
                      <p>Freelance developers</p>
                    </div>
                  </div>
                </div>
                {/* /Feature Item */}
                {/* Feature Item */}
                <div className="col-xl-3 col-md-6">
                  <div
                    className="feature-item aos aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <div className="feature-icon">
                      <img src={counticon02} className="img-fluid" alt="Img" />
                    </div>
                    <div className="feature-content course-count">
                      <h3>
                        <CountUp end={6000} duration={10} />
                      </h3>
                      <p>Projects Added</p>
                    </div>
                  </div>
                </div>
                {/* /Feature Item */}
                {/* Feature Item */}
                <div className="col-xl-3 col-md-6">
                  <div
                    className="feature-item comp-project aos aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <div className="feature-icon">
                      <img src={counticon03} className="img-fluid" alt="Img" />
                    </div>
                    <div className="feature-content course-count">
                      <h3>
                        {" "}
                        <CountUp end={919207} duration={10} />
                      </h3>
                      <p>Completed projects</p>
                    </div>
                  </div>
                </div>
                {/* /Feature Item */}
                {/* Feature Item */}
                <div className="col-xl-3 col-md-6">
                  <div
                    className="feature-item comp-project aos aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <div className="feature-icon">
                      <img src={counticon04} className="img-fluid" alt="Img" />
                    </div>
                    <div className="feature-content course-count">
                      <h3>
                        <CountUp end={998} duration={10} />
                      </h3>
                      <p>Companies Registered</p>
                    </div>
                  </div>
                </div>
                {/* /Feature Item */}
              </div>
            </div>
          </div>

          {/* Review */}
          <TopReviewFive />
          {/* Review */}
          {/* Blog */}
          <OurBlog />
          {/* / Blog */}
          {/* Opportunity */}
          <section className="section job-registers">
            <div className="container position-relative job-register">
              <div className="float-img">
                <img src={oppurtunity} alt="img" />
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="register-job-blk">
                    <div
                      className="job-content-blk aos aos-init aos-animate"
                      data-aos="fade-up"
                    >
                      <h2>Find Your Next Great Job Opportunity!</h2>
                      <p>
                        Quisque pretium dolor turpis, quis blandit turpis semper
                        ut. Nam malesuada eros nec luctus laoreet.
                      </p>
                      <Link to="/register" className="btn all-btn">
                        Join Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Opportunity */}

          {/* Footer */}
          <footer className="footer footer-five">
            {/* /Footer Top Nav */}
            <div className="footer-top ">
              <div className="container">
                <div className="row">
                  <div className="col-lg-2 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Useful Links</h2>
                      <ul>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/blog-list">Blog</Link>
                        </li>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/register">Register</Link>
                        </li>
                        <li>
                          <Link to="/forgot-password">Forgot Password</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Help &amp; Support</h2>
                      <ul>
                        <li>
                          <Link to="#">Browse Candidates</Link>
                        </li>
                        <li>
                          <Link to="#">Employers Dashboard</Link>
                        </li>
                        <li>
                          <Link to="#">Job Packages</Link>
                        </li>
                        <li>
                          <Link to="#">Jobs Featured</Link>
                        </li>
                        <li>
                          <Link to="#">Post A Job</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Other Links</h2>
                      <ul>
                        <li>
                          <Link to="/freelancer-dashboard">Freelancers</Link>
                        </li>
                        <li>
                          <Link to="/freelancer-portfolio">
                            Freelancer Details
                          </Link>
                        </li>
                        <li>
                          <Link to="/project">Project</Link>
                        </li>
                        <li>
                          <Link to="/project-details">Project Details</Link>
                        </li>
                        <li>
                          <Link to="/post-project">Post Project</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Featured Catgeories</h2>
                      <ul>
                        <li>
                          <Link to="/project">Illustration</Link>
                        </li>
                        <li>
                          <Link to="/project">Link Building</Link>
                        </li>
                        <li>
                          <Link to="/project">Python Dev</Link>
                        </li>
                        <li>
                          <Link to="/project">Angular Dev</Link>
                        </li>
                        <li>
                          <Link to="/project">Node JS</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Subscribe</h2>
                      <div
                        className="banner-content aos aos-init aos-animate"
                        data-aos="fade-up"
                      >
                        <form
                          className="form"
                          name="store"
                          method="post"
                          action="/project"
                        >
                          <div className="form-inner">
                            <div className="input-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Your Email address....."
                              />
                              <button
                                className="btn btn-primary sub-btn"
                                type="submit"
                              >
                                <i className="fas fa-long-arrow-alt-right long-arrow" />
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="applicate-mobile-blk">
                        <h6 className="mb-3">Mobile Application</h6>
                      </div>
                      <div className="row g-2">
                        <div className="col-lg-4">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              src={Appstore}
                              alt="app-store"
                            />
                          </Link>
                        </div>
                        <div className="col-lg-4">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              src={Googleplay}
                              alt="google-play"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Footer Top */}
            {/* Footer Bottom */}
            <div className="footer-bottom">
              <div className="container">
                {/* Copyright */}
                <div className="copyright">
                  <div className="row">
                    <div className="col-md-12 col-lg-12 ">
                      <div className="footer-bottom-content">
                        <div className="copyright-text">
                          <p className="mb-0">
                            Copyright {currentYear} © XGEN Freelancing Platform. All right
                            reserved.
                          </p>
                        </div>
                        <ul>
                          <li>
                            <Link to="#" className="icon" target="_blank">
                              <i className="fab fa-facebook-f" />{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="icon" target="_blank">
                              <i className="fab fa-linkedin-in" />{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="icon" target="_blank">
                              <i className="fab fa-twitter" />{" "}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Copyright */}
              </div>
            </div>
            {/* /Footer Bottom */}
          </footer>
          {/* /Footer */}
        </div>

        {/* /Main Wrapper */}
        {/* Scroll Top */}
        <button
          className={
            scroll
              ? "scroll-top scroll-top-next scroll-to-target open"
              : "scroll-top scroll-top-next scroll-to-target"
          }
          data-target="html"
        >
          <span className="ti-angle-up">
            <FiArrowUp className="feather-arrow-up" />
          </span>
        </button>
        {/* /Scroll Top */}
      </>
    </>
  );
};
export default Home5;
