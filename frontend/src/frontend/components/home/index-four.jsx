/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Import Images
import {
  Avatar_1,
  Avatar_2,
  Avatar_3,
  load_icon,
  happyyoungman,
  categoriesicon1,
  categoriesicon7,
  categoriesicon3,
  categoriesicon4,
  categoriesicon5,
  categoriesicon6,
  categoriesicon8,
  great_1,
  great_2,
  great_3,
  great_4,
  platform1,
  Avatar_12,
  great_5,
  great_6,
  great_7,
  great_8,
  location1,
  location2,
  location4,
  location3,
  marketplace1,
  marketplace2,
  marketplace3,
  faqs,
} from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderFour from "../header/header-four";
// import config from "config"
import FooterFour from "../footer/index-four";
import TopReviewFour from "./slider/Top-fourKofejob";
import OurBlogFour from "./slider/Ourblog-four";
import PopularProjects from "./slider/popularprojects";
import CountUp from "react-countup";
import { FiArrowUp } from "react-icons/fi";
import Select from "react-select";
import DevelopersFour from "./slider/developers";
import CompanyHire from "./slider/companyHireFour";
const Home4 = () => {
  const [scroll, setScroll] = useState(true);
  const options = [
    { value: 1, label: "Projects" },
    { value: 2, label: "Freelancers" },
  ];

  //Aos

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
    document.body.classList.add("bg-four");
    return () => document.body.classList.remove("bg-four");
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
      {/* Loader */}
      <div id="global-loader">
        <div className="whirly-loader"> </div>
        <div className="loader-img">
          <img src={load_icon} className="img-fluid" alt="" />
        </div>
      </div>
      {/* Loader */}
      {/* Main Wrapper */}
      <div className="main-wrapper home-four-wrapper">
        {/* Start Navigation */}
        {/* Header */}
        <HeaderFour />
        {/* /Header */}
        {/* Home Banner */}
        <section className="section home-banner home-four row-middle">
          <div className="banner-float-img">
            <img src={happyyoungman} alt="banner-image" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8 col-lg-6">
                <div className="banner-blk-four aos" data-aos="fade-up">
                  <div className="banner-content">
                    <div className="banner-note">
                      <h5 className="mb-0">
                        With the world's #1 Developers Marketplace
                      </h5>
                    </div>
                    <h1>
                      XGEN Freelancing Platform is a Community <br />
                      for Freelancers
                    </h1>
                    <p>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat.
                    </p>
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
            <div className="coplete-job aos" data-aos="fade-right">
              <div className="complete-icon me-2">
                <i className="feather-briefcase" />
              </div>
              <div className="complete-content course-count">
                <h3>
                  + <CountUp end={21} duration={8} /> K
                </h3>
                <p>Jobs Completed</p>
              </div>
            </div>
            <div className="fullstack-blk aos" data-aos="fade-up">
              <div className="fullstacker-img">
                <img src={Avatar_12} className="img-fluid" alt="Img" />
                <span className="stacker-active">
                  <i className="fas fa-check-circle" />
                </span>
              </div>
              <div className="fullstacker-name">
                <h4>Chambers</h4>
                <p>Full stack developer</p>
              </div>
              <div className="rating">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star" />
                <span className="average-rating">5.0 (50 Review)</span>
              </div>
            </div>
            <div className="register-profesion aos" data-aos="fade-right">
              <div className="avatar-group">
                <div className="avatar avatar-xs group_img group_header">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Avatar_1}
                  />
                </div>
                <div className="avatar avatar-xs group_img group_header">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Avatar_2}
                  />
                </div>
                <div className="avatar avatar-xs group_img group_header">
                  <img
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src={Avatar_3}
                  />
                </div>
              </div>
              <div className="profesion-content course-count">
                <p>Join Over 4000+ Students</p>
                <span>Register to the Online courses</span>
              </div>
            </div>
          </div>
        </section>
        {/* /Home Banner */}

        {/* Browse Categories */}
        <section className="section browse-categories">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-four section-locate aos"
                  data-aos="fade-up"
                >
                  <div className="text-center">
                    <h2 className="header-title">
                      Browse Projects By Category
                    </h2>
                    <p>Get work done in over 60 different categories</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="browse-categories-content">
              <div className="row row-gap aos" data-aos="fade-up">
                <div
                  className="col-lg-3 col-md-6 col-12 aos  "
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                >
                  <div className="popular-catergories">
                    <div className="popular-catergories-img">
                      <span>
                        <img src={categoriesicon1} alt="img" />
                      </span>
                    </div>
                    <div className="popular-catergories-content">
                      <h5>Development &amp; IT</h5>
                      <Link to="#">958 Skills</Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-12 aos  "
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                >
                  <div className="popular-catergories">
                    <div className="popular-catergories-img">
                      <span>
                        <img src={categoriesicon7} alt="img" />
                      </span>
                    </div>
                    <div className="popular-catergories-content">
                      <h5>Design &amp; Creative</h5>
                      <Link to="#">515 Skills</Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-12 aos  "
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                >
                  <div className="popular-catergories">
                    <div className="popular-catergories-img">
                      <span>
                        <img src={categoriesicon3} alt="img" />
                      </span>
                    </div>
                    <div className="popular-catergories-content">
                      <h5>Digital Marketing</h5>
                      <Link to="#">486 Skills</Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-12 aos  "
                  data-aos="zoom-in"
                  data-aos-duration={2500}
                >
                  <div className="popular-catergories">
                    <div className="popular-catergories-img">
                      <span>
                        <img src={categoriesicon4} alt="img" />
                      </span>
                    </div>
                    <div className="popular-catergories-content">
                      <h5>Writing &amp; Translation</h5>
                      <Link to="#">956 Skills</Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-12 aos  "
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                >
                  <div className="popular-catergories">
                    <div className="popular-catergories-img">
                      <span>
                        <img src={categoriesicon5} alt="img" />
                      </span>
                    </div>
                    <div className="popular-catergories-content">
                      <h5>Music &amp; Video</h5>
                      <Link to="#">662 Skills</Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-12 aos  "
                  data-aos="zoom-in"
                  data-aos-duration={1500}
                >
                  <div className="popular-catergories">
                    <div className="popular-catergories-img">
                      <span>
                        <img src={categoriesicon6} alt="img" />
                      </span>
                    </div>
                    <div className="popular-catergories-content">
                      <h5>Video &amp; Animation</h5>
                      <Link to="#">226 Skills</Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-12 aos  "
                  data-aos="zoom-in"
                  data-aos-duration={2000}
                >
                  <div className="popular-catergories">
                    <div className="popular-catergories-img">
                      <span>
                        <img src={categoriesicon7} alt="img" />
                      </span>
                    </div>
                    <div className="popular-catergories-content">
                      <h5>Engineering &amp; Architecture</h5>
                      <Link to="#">756 Skills</Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 col-12 aos  "
                  data-aos="zoom-in"
                  data-aos-duration={2500}
                >
                  <div className="popular-catergories">
                    <div className="popular-catergories-img">
                      <span>
                        <img src={categoriesicon8} alt="img" />
                      </span>
                    </div>
                    <div className="popular-catergories-content">
                      <h5>Finance &amp; Accounting</h5>
                      <Link to="#">958 Skills</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-four-viewall">
              <Link to="/project" className="home-four-viewall-btn">
                View all Categories
              </Link>
            </div>
          </div>
        </section>
        {/* /Browse Categories */}

        <section className="section projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto text-center">
                <div className="section-header aos " data-aos="fade-up">
                  <h2 className="header-title">What’s great about it?</h2>
                  <p>All the features of XGEN Freelancing Platform below</p>
                </div>
              </div>
            </div>
            <div className="row row-gap">
              {/* Feature Item */}
              <div
                className="col-xl-3 col-md-6 aos d-flex"
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
                      Find professionals you can trust by browsing their samples
                      of previous work .
                    </p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div
                className="col-xl-3 col-md-6 aos d-flex"
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
                className="col-xl-3 col-md-6 aos d-flex"
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
                className="col-xl-3 col-md-6 aos d-flex"
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
                      Keep up-to-date and on-the-go with our time tracker Always
                      know what freelancers are up to.
                    </p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
            </div>
          </div>
        </section>

        {/* Update */}
        <section className="section feature-counts">
          <div className="container">
            <div className="row">
              <div className="col-12 aos " data-aos="fade-up">
                <div className="register-job-blk">
                  <div
                    className="job-content-blk text-center aos  "
                    data-aos="fade-up"
                  >
                    <h2>Want to Get Special Offers &amp; Updates?</h2>
                    <p>
                      Quisque pretium dolor turpis, quis blandit turpis semper
                      ut. Nam malesuada eros nec luctus laoreet.
                    </p>
                  </div>
                  <div className="home-four-viewall">
                    <Link to="/register" className="home-four-viewall-btn">
                      Register XGEN Freelancing Platform{" "}
                      <i className="feather-arrow-right ms-2" />
                    </Link>
                    <Link to="/post-project" className="home-four-viewall-btn">
                      Post a Project
                      <i className="feather-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Update */}

        {/* Feature Developers */}

        <DevelopersFour />

        {/* Marketplace */}
        <section className="section join-marketplace">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="markrt-place-img aos" data-aos="fade-up">
                  <img src={platform1} className="img-fluid" alt="Img" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 d-flex align-items-center">
                <div
                  className="market-place-group join-place-blk aos"
                  data-aos="fade-up"
                >
                  <h2>Join World’s Best Marketplacevfor developers</h2>
                  <p>
                    Why hire people when you can simply integrate our talented
                    cloud workforce instead?
                  </p>
                  <ul className="market-list-out">
                    <li>
                      <i className="fa-solid fa-circle-check" /> It’s free and
                      easy to post a job.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" /> We've got
                      freelancers for jobs of any size or budget, across 1800+
                      skills.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" /> Only pay for
                      work when it has been completed and you're 100% satisfied.{" "}
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" /> Our talented
                      team of recruiters can help you find the best freelancer.
                    </li>
                  </ul>
                  <div className="market-place-btn">
                    <Link
                      to="/project"
                      className="btn btn-primary market-project me-2"
                    >
                      Post a Project
                    </Link>
                    <Link
                      to="/developer-details"
                      className="btn btn-primary market-developer"
                    >
                      Find Developers
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Marketplace */}
        {/* Popular Projects */}
        <PopularProjects />
        {/* Popular Projects */}
        {/* Our Feature */}
        <section className="section projects">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 mx-auto">
                <div
                  className="section-header text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">What’s great about it?</h2>
                  <p>All the features of XGEN Freelancing Platform below</p>
                </div>
              </div>
            </div>
            <div className="row row-gap">
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div className="great-card aos" data-aos="fade-up">
                  <div className="feature-icon mb-0 me-3">
                    <img src={great_5} className="img-fluid" alt="Img" />
                  </div>
                  <div className="feature-content course-count text-start">
                    <h4 className="counter-up">9,207</h4>
                    <p>Freelance developers</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div className="great-card  aos" data-aos="fade-up">
                  <div className="feature-icon mb-0 me-3">
                    <img src={great_6} className="img-fluid" alt="Img" />
                  </div>
                  <div className="feature-content course-count text-start">
                    <h4>
                      <span className="counter-up">6000 </span> +
                    </h4>
                    <p>Projects Added</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div className="great-card  aos" data-aos="fade-up">
                  <div className="feature-icon mb-0 me-3">
                    <img src={great_7} className="img-fluid" alt="Img" />
                  </div>
                  <div className="feature-content course-count text-start">
                    <h4 className="counter-up">919,207</h4>
                    <p>Completed projects</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div className="great-card  aos" data-aos="fade-up">
                  <div className="feature-icon mb-0 me-3">
                    <img src={great_8} className="img-fluid" alt="Img" />
                  </div>
                  <div className="feature-content course-count text-start">
                    <h4 className="counter-up">998</h4>
                    <p>Companies Registered</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
            </div>
          </div>
        </section>
        {/* /Our Feature */}
        {/* Job Location */}
        <section className="section review">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header d-block  section-locate aos"
                  data-aos="fade-up"
                >
                  <div className="text-center">
                    <h2 className="header-title">Jobs by Location</h2>
                    <p>
                      Find your favourite jobs and get the benefits of yourself
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-gap">
              <div className="col-xl-3 col-md-4 aos" data-aos="fade-up">
                <div className="blog-article-group job-loc">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={location1}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="article-blog-content">
                      <span> Nevada, USA</span>
                      <h4>
                        <Link to="/blog-details">40 Companies</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 aos" data-aos="fade-up">
                <div className="blog-article-group job-loc">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={location2}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="article-blog-content">
                      <span> London, UK</span>
                      <h4>
                        <Link to="/blog-details">52 Companies</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 aos" data-aos="fade-up">
                <div className="blog-article-group job-loc">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={location3}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="article-blog-content">
                      <span>Bangalore, India</span>
                      <h4>
                        <Link to="/blog-details">77 Companies</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4 aos" data-aos="fade-up">
                <div className="blog-article-group job-loc">
                  <div className="blog-image">
                    <Link to="/blog-details">
                      <img
                        className="img-fluid"
                        src={location4}
                        alt="Post Image"
                      />
                    </Link>
                    <div className="article-blog-content">
                      <span>New York, USA</span>
                      <h4>
                        <Link to="/blog-details">85 Companies</Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Job Location */}
        {/* Say Review */}
        <TopReviewFour />
        {/* /Say Review Two */}
        {/* Platform Location */}
        <section className="section platform-location">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="row">
                  <div className="col-md-6 flex-fill">
                    <div className="markrt-place-img aos" data-aos="fade-up">
                      <img src={marketplace1} className="img-fluid" alt="Img" />
                    </div>
                  </div>
                  <div className="col-md-6 flex-fill">
                    <div className="d-flex flex-column row-gap">
                      <div className="markrt-place-img aos" data-aos="fade-up">
                        <img
                          src={marketplace2}
                          className="img-fluid"
                          alt="Img"
                        />
                      </div>
                      <div className="markrt-place-img aos" data-aos="fade-up">
                        <img
                          src={marketplace3}
                          className="img-fluid"
                          alt="Img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 d-flex align-items-center">
                <div className="market-place-group aos" data-aos="fade-up">
                  <h2>
                    Discover Project Around
                    <span className="platform-head">
                      your Location in Our Platform
                    </span>
                  </h2>
                  <p>Get Inspired by Development Projects</p>
                  <p className="platform-pasage">
                    We Provide Stable Service With Experts Freelancers around
                    the globe, are looking for work and provide the best they
                    have .Experience state-of-the-art marketplace platform with
                    the XGEN Freelancing Platform. We combine the experience of our global
                    community around the globe for a best marketplace theme.
                  </p>
                  <div className="market-place-btn platform-btn">
                    <Link
                      to="/project"
                      className="btn btn-primary market-project me-2"
                    >
                      View Projects
                    </Link>
                    <Link
                      to="/project"
                      className="btn btn-primary project-post"
                    >
                      Post a Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Platform Location */}

        {/* /Popular Projects */}
        {/* Company Hire */}
        {/* Company Hire */}
        <CompanyHire />
        {/* / Company Hire */}
        {/* / Company Hire */}
        {/* Faq */}
        <section className="faq-section-three bg-white" id="faq">
          <div className="container">
            <div
              className="section-header section-header-three text-center aos  "
              data-aos="fade-up"
            >
              <span className="badge title-badge">FAQ’S</span>
              <h2 className="header-title">Frequently Question Answer </h2>
            </div>
            <div className="row" id="accordionExample">
              <div className="col-lg-6">
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
              <div className="col-lg-6">
                <div className="faq-imgs">
                  <img src={faqs} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog */}
        <OurBlogFour />
        <FooterFour />
        {/* Scroll Top */}
        <button
          className={
            scroll
              ? "scroll-top scroll-top-next scroll-to-target open"
              : "scroll-top-next scroll-to-target"
          }
          data-target="html"
        >
          <span className="ti-angle-up">
            <FiArrowUp className="feather-arrow-up" />
          </span>
        </button>
        {/* /Scroll Top */}
      </div>
    </>
  );
};
export default Home4;
