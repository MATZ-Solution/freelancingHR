/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Slider_01,
  Slider_02,
  Market_place,
  Top_icon,
  load_icon,
  banner01,
  banner02,
  banner03,
  counticon01,
  counticon02,
  counticon03,
  counticon04,
  reviewuser02,
  userquates,
  reviewuser03,
  Category_01,
  Category_09,
  Category_02,
  Category_10,
  Category_03,
  Category_11,
  Category_04,
  Category_12,
  Category_05,
  Category_13,
  Category_06,
  Category_14,
  Category_07,
  Category_15,
  Category_08,
} from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderThree from "../header/header-three";
import FooterThree from "../footer/index-three";
import TrendingProject from "./slider/Trendingprojects";
import FeaturedDevelopers from "./slider/Featureddevelopers";
import TopReviews1 from "./slider/TopReviews1";
import Blogs from "./slider/home3blog";
import Slider from "react-slick";
import CountUp from "react-countup";
import JobOpportunity from "./slider/jobopportunity";
import Select from "react-select";
import TrustedCompanies from "./slider/trustedCompanies";
// import TrustedCompanies from "./slider/trustedCompanies";

const Home3 = () => {
  const [scroll, setScroll] = useState(true);
  const option = [
    { value: 1, label: "Projects" },
    { value: 2, label: "Freelancers" },
  ];

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
    document.body.classList.add("bg-three");
    return () => document.body.classList.remove("bg-three");
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
  const options = {
    dots: true,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: false,
    touchMove: false,
    vertical: true,
    verticalScrolling: true,
    speed: 1000,
    autoplaySpeed: 2000,
    useTransform: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
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
      <div className="main-wrapper">
        {/* Start Navigation */}
        {/* Header */}
        <HeaderThree />
        {/* /Header */}
        {/* Home Banner  */}
        <div className="home-banner home-three">
          <div className="dot-slider slider">
            {/* Banner Images */}
            <Slider
              className="owl-theme testimonial-slider aos"
              data-aos="fade-up"
              {...options}
            >
              <div className="profile-widget-slide">
                <div className="slide-pro-img">
                  <Link to="#">
                    <img className="img-fluid" src={Slider_01} alt="" />
                  </Link>
                </div>
              </div>
              {/* /Banner Images */}
              {/* Banner Images */}
              <div className="profile-widget-slide">
                <div className="slide-pro-img">
                  <Link to="#">
                    <img className="img-fluid " src={Slider_02} alt="" />
                  </Link>
                </div>
              </div>
              {/* /Banner Images */}
              {/* Banner Images */}
              <div className="profile-widget-slide">
                <div className="slide-pro-img">
                  <Link to="#">
                    <img className="img-fluid" src={Slider_01} alt="" />
                  </Link>
                </div>
              </div>
              {/* /Banner Images */}
              {/* Banner Images */}
              <div className="profile-widget-slide">
                <div className="slide-pro-img">
                  <Link to="#">
                    <img className="img-fluid" src={Slider_02} alt="" />
                  </Link>
                </div>
              </div>
            </Slider>
            {/* Banner Images */}
          </div>
          <div className="container">
            <div className="banner-kofe">
              <div className="banner-content aos" data-aos="fade-up">
                <h5>With the world's #1 Developers Marketplace</h5>
                <h1>
                  The Largest Online Learning{" "}
                  <span> Platform For Drive Your</span> Career.
                </h1>
                <p>
                  We are experienced in educationl platform and skilled
                  strategies for the success of our online learning.
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
                          className="select"
                          options={option}
                          placeholder="Projects"
                        />
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="What are you looking for"
                      />
                      <button className="btn btn-primary sub-btn" type="submit">
                        Search{" "}
                      </button>
                    </div>
                  </div>
                </form>
                <div className="banner-join-users">
                  <ul>
                    <li>
                      <Link to="#">
                        <img src={banner01} alt="Img" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={banner02} alt="Img" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src={banner03} alt="Img" />
                      </Link>
                    </li>
                  </ul>
                  <div className="join-user-content">
                    <h6>Join Over 4000+ Students</h6>
                    <span>Register to the Online courses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <HomeSliderBanner /> */}
        {/* Home Banner */}

        {/* Different Categories */}
        <section className="section different-categories">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-three section-locate aos"
                  data-aos="fade-up"
                >
                  <div>
                    <span className="badge title-badge">
                      Projects By Category
                    </span>
                    <h2 className="header-title">
                      Get work done in over 60 different categories
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div
                  className="different-categories-blk aos"
                  data-aos="fade-up"
                >
                  <div className="differ-img">
                    <img src={Category_01} alt="Img" />
                  </div>
                  <div className="differ-img-right">
                    <img src={Category_09} alt="Img" />
                  </div>
                  <div className="differ-content">
                    <h6>Angular Development</h6>
                    <p>
                      Web development, UI/UX development, Module development
                      &amp; more
                    </p>
                    <div className="category-foot">
                      <span>840 Projects</span>
                      <Link to="/project">
                        <i className="feather-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div
                  className="different-categories-blk aos"
                  data-aos="fade-up"
                >
                  <div className="differ-img">
                    <img src={Category_02} alt="Img" />
                  </div>
                  <div className="differ-img-right">
                    <img src={Category_10} alt="Img" />
                  </div>
                  <div className="differ-content">
                    <h6>Python Development</h6>
                    <p>
                      Web development, UI/UX development, Module development
                      &amp; more
                    </p>
                    <div className="category-foot">
                      <span>640 Projects</span>
                      <Link to="/project">
                        <i className="feather-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div
                  className="different-categories-blk aos"
                  data-aos="fade-up"
                >
                  <div className="differ-img">
                    <img src={Category_03} alt="Img" />
                  </div>
                  <div className="differ-img-right">
                    <img src={Category_11} alt="Img" />
                  </div>
                  <div className="differ-content">
                    <h6>Node JS Development</h6>
                    <p>
                      Web development, UI/UX development, Module development
                      &amp; more
                    </p>
                    <div className="category-foot">
                      <span>240 Projects</span>
                      <Link to="/project">
                        <i className="feather-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div
                  className="different-categories-blk aos"
                  data-aos="fade-up"
                >
                  <div className="differ-img">
                    <img src={Category_04} alt="Img" />
                  </div>
                  <div className="differ-img-right">
                    <img src={Category_12} alt="Img" />
                  </div>
                  <div className="differ-content">
                    <h6>PHP Development</h6>
                    <p>
                      Web development, UI/UX development, Module development
                      &amp; more
                    </p>
                    <div className="category-foot">
                      <span>840 Projects</span>
                      <Link to="/project">
                        <i className="feather-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div
                  className="different-categories-blk aos"
                  data-aos="fade-up"
                >
                  <div className="differ-img">
                    <img src={Category_05} alt="Img" />
                  </div>
                  <div className="differ-img-right">
                    <img src={Category_13} alt="Img" />
                  </div>
                  <div className="differ-content">
                    <h6>Illustration</h6>
                    <p>
                      Web development, UI/UX development, Module development
                      &amp; more
                    </p>
                    <div className="category-foot">
                      <span>340 Projects</span>
                      <Link to="/project">
                        <i className="feather-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div
                  className="different-categories-blk aos"
                  data-aos="fade-up"
                >
                  <div className="differ-img">
                    <img src={Category_06} alt="Img" />
                  </div>
                  <div className="differ-img-right">
                    <img src={Category_14} alt="Img" />
                  </div>
                  <div className="differ-content">
                    <h6>Link Building</h6>
                    <p>
                      Web development, UI/UX development, Module development
                      &amp; more
                    </p>
                    <div className="category-foot">
                      <span>540 Projects</span>
                      <Link to="/project">
                        <i className="feather-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div
                  className="different-categories-blk aos"
                  data-aos="fade-up"
                >
                  <div className="differ-img">
                    <img src={Category_07} alt="Img" />
                  </div>
                  <div className="differ-img-right">
                    <img src={Category_15} alt="Img" />
                  </div>
                  <div className="differ-content">
                    <h6>Android Apps</h6>
                    <p>
                      Web development, UI/UX development, Module development
                      &amp; more
                    </p>
                    <div className="category-foot">
                      <span>640 Projects</span>
                      <Link to="/project">
                        <i className="feather-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div
                  className="different-categories-blk aos"
                  data-aos="fade-up"
                >
                  <div className="differ-img">
                    <img src={Category_08} alt="Img" />
                  </div>
                  <div className="differ-img-right">
                    <img src={Category_14} alt="Img" />
                  </div>
                  <div className="differ-content">
                    <h6>MYSQL</h6>
                    <p>
                      Web development, UI/UX development, Module development
                      &amp; more
                    </p>
                    <div className="category-foot">
                      <span>140 Projects</span>
                      <Link to="/project">
                        <i className="feather-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div
                  className="more-project text-center aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Link to="/project" className="btn btn-primary">
                    View More Projects
                    <i className="feather-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /Different Categories */}

        {/* Marketplace */}
        <section className="section best-marketplace">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div
                  className="market-place-group section-header-three aos"
                  data-aos="fade-up"
                >
                  <span className="badge title-badge">About Us</span>
                  <h2>Join World’s Best Marketplace for developers</h2>
                  <p>
                    Why hire people when you can simply integrate our talented
                    cloud workforce instead?
                  </p>
                  <ul className="market-list-out">
                    <li>
                      <i className="fa-solid fa-circle-check me-2" /> It’s free
                      and easy to post a job.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check me-2" /> We've got
                      freelancers for jobs of any size or budget, across 1800+
                      skills.
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check me-2" /> Only pay
                      for work when it has been completed and you're 100%
                      satisfied.{" "}
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check me-2" /> Our
                      talented team of recruiters can help you find the best
                      freelancer.
                    </li>
                  </ul>
                  <div className="market-place-btn">
                    <Link
                      to="/project"
                      className="btn btn-primary market-project me-2"
                    >
                      Post a Project
                      <i className="feather-arrow-right ms-2" />
                    </Link>
                    <Link
                      to="/developer-details"
                      className="btn btn-primary market-developer"
                    >
                      Find Developers
                      <i className="feather-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="markrt-place-img aos" data-aos="fade-up">
                  <img src={Market_place} className="img-fluid" alt="Img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Marketplace */}

        <TrustedCompanies />

        {/* Trending Projects */}
        <TrendingProject />
        {/* Trending Projects */}

        {/* Our Feature */}
        <section className="section feature-count feature-count-three">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 mx-auto">
                <div
                  className="section-header section-header-three feature-count-head aos"
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
            <div className="row section-bottom-cards">
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div
                  className="feature-item freelance-count aos"
                  data-aos="fade-up"
                >
                  <div className="feature-icon ">
                    <img src={counticon01} className="img-fluid" alt="Img" />
                  </div>
                  <div className="feature-content course-count">
                    <h3>
                      {" "}
                      <CountUp end={9207} duration={10} />{" "}
                    </h3>
                    <p>Freelance developers</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div className="feature-item aos" data-aos="fade-up">
                  <div className="feature-icon">
                    <img src={counticon02} className="img-fluid" alt="Img" />
                  </div>
                  <div className="feature-content course-count">
                    <h3>
                      {" "}
                      <CountUp end={6000} duration={10} />{" "}
                    </h3>

                    <p>Projects Added</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div
                  className="feature-item comp-project aos"
                  data-aos="fade-up"
                >
                  <div className="feature-icon">
                    <img src={counticon03} className="img-fluid" alt="Img" />
                  </div>
                  <div className="feature-content course-count">
                    <h3>
                      {" "}
                      <CountUp end={919207} duration={10} />{" "}
                    </h3>

                    <p>Completed projects</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-xl-3 col-md-6">
                <div
                  className="feature-item comp-project aos"
                  data-aos="fade-up"
                >
                  <div className="feature-icon">
                    <img src={counticon04} className="img-fluid" alt="Img" />
                  </div>
                  <div className="feature-content course-count">
                    <h3>
                      {" "}
                      <CountUp end={998} duration={10} />{" "}
                    </h3>
                    <p>Companies Registered</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
            </div>
          </div>
        </section>
        {/* /Our Feature */}

        {/* Feature Projects */}
        <FeaturedDevelopers />

        {/* Review */}
        <section className="section review-people review-people-three">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div
                  className="section-header section-header-three text-center aos"
                  data-aos="fade-up"
                >
                  <span className="badge title-badge">Testimonials</span>
                  <h2 className="header-title">What our User Says</h2>
                </div>
              </div>
            </div>
            <div className="trend-slider aos row" data-aos="fade-up">
              <div className="col-lg-4 col-md-6">
                <div className="review-blog user-review">
                  <div className="review-top ">
                    <div className="review-img mx-auto">
                      <Link to="/review">
                        <img
                          className="img-fluid"
                          src={reviewuser03}
                          alt="Post Image"
                        />
                      </Link>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">5.0(45)</span>
                    </div>
                  </div>
                  <div className="review-content text-center">
                    <p>
                      I've been using [Your Product/Service] for a year now, and
                      it has exceeded my expectations. The quality and
                      functionality are unmatched, and it has made my life so
                      much easier.
                    </p>
                  </div>
                  <div className="quate text-center d-flex justify-content-center">
                    <img src={userquates} alt="Img" />
                  </div>
                  <div className="review-info text-center">
                    <h3>
                      <Link to="/review">Durso Raeen</Link>
                    </h3>
                    <h5>Project Lead</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="review-blog user-review">
                  <div className="review-top ">
                    <div className="review-img mx-auto">
                      <Link to="/review">
                        <img
                          className="img-fluid"
                          src={reviewuser02}
                          alt="Post Image"
                        />
                      </Link>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">5.0(30)</span>
                    </div>
                  </div>
                  <div className="review-content text-center">
                    <p>
                      I had a problem with [Specific Issue], and the support
                      team at [Your Company] went above and beyond to resolve
                      it. Their dedication to customer satisfaction is truly
                      impressive.
                    </p>
                  </div>
                  <div className="quate text-center d-flex justify-content-center">
                    <img src={userquates} alt="Img" />
                  </div>
                  <div className="review-info text-center">
                    <h3>
                      <Link to="/review">Durso Raeen</Link>
                    </h3>
                    <h5>Project Lead</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="review-blog user-review">
                  <div className="review-top ">
                    <div className="review-img mx-auto">
                      <Link to="/review">
                        <img
                          className="img-fluid"
                          src={reviewuser03}
                          alt="Post Image"
                        />
                      </Link>
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">5.0(13)</span>
                    </div>
                  </div>
                  <div className="review-content text-center">
                    <p>
                      I encountered an issue with [Your Product], and the
                      customer support team provided a quick and effective
                      solution. I'm impressed by their responsiveness.
                    </p>
                  </div>
                  <div className="quate text-center d-flex justify-content-center">
                    <img src={userquates} alt="Img" />
                  </div>
                  <div className="review-info text-center">
                    <h3>
                      <Link to="/review">Durso Raeen</Link>
                    </h3>
                    <h5>Project Lead</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* / Review */}

        <TopReviews1 />
        <JobOpportunity />
        <Blogs />
        {/* / Blog */}

        <FooterThree />
        {/* /Main Wrapper */}
        {/* Scroll Top */}
        <button
          className={
            scroll
              ? "scroll-top scroll-to-target open"
              : "scroll-top scroll-to-target"
          }
          data-target="html"
        >
          <span className="ti-angle-up">
            <img src={Top_icon} className="img-fluid" alt="" />
          </span>
        </button>
        {/* Scroll Top */}
      </div>
    </>
  );
};
export default Home3;
