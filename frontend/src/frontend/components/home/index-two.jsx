/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUp } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
// Import Images
import {
  Plat_form,
  Project_19,
  Reg_icon,
  logo_icon_01,
  Project_20,
  logo_icon_02,
  Project_21,
  Project_22,
  logo_icon_03,
  Project_23,
  Project_24,
  logo_icon_04,
  About_01,
  About_02,
  Location_01,
  Location_02,
  Location_03,
  Location_04,
  Location_05,
  Location_06,
  Location_07,
  Location_08,
  load_icon,
  hometwobanner,
  hometwobanner02,
  skillicon01,
  skillicon02,
  skillicon03,
  skillicon04,
  skillicon06,
  skillicon07,
  skillicon08,
  skillicon09,
  skillicon10,
  skillicon11,
  skillicon12,
  skillicon13,
  skillicon14,
  skillicon15,
  skillicon17,
  skillicon18,
  skillicon16,
  skillicon19,
  skillicon20,
  skillicon21,
  skillicon22,
  skillicon24,
  skillicon25,
  skillicon05,
  Great_icon_01,
  Great_icon_02,
  Great_icon_03,
  Great_icon_04,
  Avatar_21,
  Avatar_22,
  Avatar_23,
  Avatar_24,
  Avatar_25,
  Avatar_26,
  Avatar_27,
  Avatar_28,
} from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import HeaderTwo from "../header/headertwo";
// import config from "config"
import FooterTwo from "../footer/index-two";
import ReviewUser from "./slider/ReviewsUser";
import FeaturedBlog from "./slider/Featureblogs";
import TopHiringCompany1 from "./slider/TopHiringcompany1";
import CountUp from "react-countup";
import Select from "react-select";
// import Footer from "../footer/index"

const Home2 = () => {
  const [scroll, setScroll] = useState(true);

  const options = [
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
    document.body.classList.add("bg-two");
    return () => document.body.classList.remove("bg-two");
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
  //const history = useHistory();
  //const eventclick = () => { history.push("/project"); }
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
      <div className="main-wrapper">
        {/* Start Navigation */}
        {/* Header */}
        <HeaderTwo />
        {/* /Header */}
        <>
          {/* Home Banner */}
          <section className="section home-banner row-middle home-two">
            <div className="container">
              <div className="row align-items-center">
                <div className=" col-lg-6 col-md-12">
                  <div className="banner-content aos" data-aos="fade-up">
                    <div className="market-place">
                      <h3>With the world's #1 Developers Marketplace</h3>
                    </div>
                    <h1>
                      Get the perfect <br />
                      Developers &amp; Projects
                    </h1>
                    <form
                      className="form"
                      name="store"
                      id="store"
                      method="post"
                      action="/project"
                    >
                      <div className="form-inner">
                        <div className="input-group">
                          <span className="drop-detail borderless">
                            <Select
                              className="borderless"
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
                    <div className="home-count">
                      <ul className="nav">
                        <li className="course-count">
                          <h3>
                            <CountUp end={9207} duration={10} />
                          </h3>
                          <span className="list-count">
                            Freelance developers
                          </span>
                        </li>
                        <li className="course-count">
                          <h3>
                            <CountUp end={6000} duration={10} />+
                          </h3>

                          <span className="list-count">Projects Added</span>
                        </li>
                        <li className="course-count">
                          <h3>
                            <CountUp end={919207} duration={10} />
                          </h3>
                          <span className="list-count">Completed projects</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-5">
                  <div className="banner-two-img aos" data-aos="fade-up">
                    <img
                      src={hometwobanner}
                      className="img-fluid trusted-user-img aos"
                      data-aos="zoom-in"
                      alt="banner"
                      data-aos-duration={3000}
                    />
                    <img
                      src={hometwobanner02}
                      className="img-fluid best-marketing-img aos"
                      data-aos="zoom-in"
                      alt="banner"
                      data-aos-duration={3000}
                    />
                  </div>
                </div>
              </div>
              {/* <div class="banner-top-bottom">
                  <Link to="#bottom-scroll"><i class="feather-arrow-down"></i></Link>
                </div> */}
            </div>
          </section>
          {/* /Home Banner */}
        </>

        {/* Our Feature */}
        <section className="section update-project">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-two text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">
                    Recently Updated <span>Projects for you</span>
                  </h2>
                  <p>Get work done in over 60 different categories</p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Updated Item */}
              <div className="col-xl-3 col-md-6">
                <div className="aos" data-aos="fade-up">
                  <Link to="project" className="update-project-blk move-box ">
                    <div className="update-content">
                      <h6>Website design</h6>
                      <p>400 Projects Available</p>
                    </div>
                    <div className="update-icon-end">
                      <i className="fas fa-chevron-right" />
                    </div>
                  </Link>
                </div>
              </div>
              {/* /Updated Item */}
              {/* Updated Item */}
              <div className="col-xl-3 col-md-6">
                <div className="aos" data-aos="fade-up">
                  <Link to="project" className="update-project-blk move-box">
                    <div className="update-content">
                      <h6>Python</h6>
                      <p>60 Projects Available</p>
                    </div>
                    <div className="update-icon-end">
                      <i className="fas fa-chevron-right" />
                    </div>
                  </Link>
                </div>
              </div>
              {/* /Updated Item */}
              {/* Updated Item */}
              <div className="col-xl-3 col-md-6">
                <div className="aos" data-aos="fade-up">
                  <Link to="project" className="update-project-blk move-box">
                    <div className="update-content">
                      <h6>Photoshop</h6>
                      <p>221 Projects Available</p>
                    </div>
                    <div className="update-icon-end">
                      <i className="fas fa-chevron-right" />
                    </div>
                  </Link>
                </div>
              </div>
              {/* /Updated Item */}
              {/* Updated Item */}
              <div className="col-xl-3 col-md-6">
                <div className="aos" data-aos="fade-up">
                  <Link to="project" className="update-project-blk move-box">
                    <div className="update-content">
                      <h6>Android Apps</h6>
                      <p>40 Projects Available</p>
                    </div>
                    <div className="update-icon-end">
                      <i className="fas fa-chevron-right" />
                    </div>
                  </Link>
                </div>
              </div>
              {/* /Updated Item */}
              {/* Updated Item */}
              <div className="col-xl-3 col-md-6">
                <div className="aos" data-aos="fade-up">
                  <Link to="project" className="update-project-blk move-box">
                    <div className="update-content">
                      <h6>Software Architecture</h6>
                      <p>400 Projects Available</p>
                    </div>
                    <div className="update-icon-end">
                      <i className="fas fa-chevron-right" />
                    </div>
                  </Link>
                </div>
              </div>
              {/* /Updated Item */}
              {/* Updated Item */}
              <div className="col-xl-3 col-md-6">
                <div className="aos" data-aos="fade-up">
                  <Link to="project" className="update-project-blk move-box">
                    <div className="update-content">
                      <h6>Ecommerce</h6>
                      <p>400 Projects Available</p>
                    </div>
                    <div className="update-icon-end">
                      <i className="fas fa-chevron-right" />
                    </div>
                  </Link>
                </div>
              </div>
              {/* /Updated Item */}
              {/* Updated Item */}
              <div className="col-xl-3 col-md-6">
                <div className="aos" data-aos="fade-up">
                  <Link to="project" className="update-project-blk move-box">
                    <div className="update-content">
                      <h6>Banner Design</h6>
                      <p>400 Projects Available</p>
                    </div>
                    <div className="update-icon-end">
                      <i className="fas fa-chevron-right" />
                    </div>
                  </Link>
                </div>
              </div>
              {/* /Updated Item */}
              {/* Updated Item */}
              <div className="col-xl-3 col-md-6">
                <div className="aos" data-aos="fade-up">
                  <Link to="project" className="update-project-blk move-box">
                    <div className="update-content">
                      <h6>Link Building</h6>
                      <p>400 Projects Available</p>
                    </div>
                    <div className="update-icon-end">
                      <i className="fas fa-chevron-right" />
                    </div>
                  </Link>
                </div>
              </div>
              {/* /Updated Item */}
              {/* Updated Item */}
              <div className="col-xl-3 col-md-6">
                <div className="aos" data-aos="fade-up">
                  <Link to="project" className="update-project-blk move-box">
                    <div className="update-content">
                      <h6>JavaScript</h6>
                      <p>400 Projects Available</p>
                    </div>
                    <div className="update-icon-end">
                      <i className="fas fa-chevron-right" />
                    </div>
                  </Link>
                </div>
              </div>
              {/* /Updated Item */}
              {/* Updated Item */}
              <div className="col-xl-3 col-md-6">
                <div className="aos" data-aos="fade-up">
                  <Link to="project" className="update-project-blk move-box">
                    <div className="update-content">
                      <h6>Marketing</h6>
                      <p>400 Projects Available</p>
                    </div>
                    <div className="update-icon-end">
                      <i className="fas fa-chevron-right" />
                    </div>
                  </Link>
                </div>
              </div>
              {/* /Updated Item */}
              {/* Updated Item */}
              <div className="col-xl-3 col-md-6">
                <div className="aos" data-aos="fade-up">
                  <Link to="project" className="update-project-blk move-box">
                    <div className="update-content">
                      <h6>MYSQL</h6>
                      <p>400 Projects Available</p>
                    </div>
                    <div className="update-icon-end">
                      <i className="fas fa-chevron-right" />
                    </div>
                  </Link>
                </div>
              </div>
              {/* /Updated Item */}
              {/* Updated Item */}
              <div className="col-xl-3 col-md-6">
                <div className="aos" data-aos="fade-up">
                  <Link to="project" className="update-project-blk move-box">
                    <div className="update-content">
                      <h6>Illustration</h6>
                      <p>400 Projects Available</p>
                    </div>
                    <div className="update-icon-end">
                      <i className="fas fa-chevron-right" />
                    </div>
                  </Link>
                </div>
              </div>
              {/* /Updated Item */}
              <div className="col-xl-12">
                <div
                  className="more-project text-center aos"
                  data-aos="fade-up"
                >
                  <Link to="project" className="btn btn-primary">
                    View More Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Our Feature */}
        {/* Our Platform */}
        <section className="section platform">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="plat-form-img aos" data-aos="fade-up">
                  <img src={Plat_form} alt="Img" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="platform-group aos" data-aos="fade-up">
                  <h1>
                    Discover Project Around your Location{" "}
                    <span> In Our Platform</span>
                  </h1>
                  <h5>Get Inspired by Development Projects</h5>
                  <p>
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

        {/* /Our Platform */}
        {/* Feature */}
        <section className="section feature-project home-two-projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-two text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">
                    Featured <span>Projects</span> for you
                  </h2>
                  <p>We have over 2000+ Projects waiting for you</p>
                </div>
              </div>
            </div>
            <div className="row">
              {/*- Project Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                <div
                  className="project-item feature-project-item aos"
                  data-aos="fade-up"
                >
                  <div className="project-img">
                    <Link to="project">
                      <img src={Project_19} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="feature-content">
                    <div className="feature-time-blk">
                      <Link to="#" className="btn btn-primary green-active">
                        Full time
                      </Link>
                      <span>
                        <i className="far fa-clock me-1" /> 1 min ago
                      </span>
                    </div>
                    <h4>
                      <Link to="project">3D Renders and Amazon Product</Link>
                    </h4>
                    <ul className="feature-project-list nav">
                      <li>
                        <img src={Reg_icon} className="me-1" alt="icon" />
                        UI/UX Designer
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Germany
                      </li>
                    </ul>
                    <div className="feature-foot">
                      <div className="logo-company">
                        <Link to="project">
                          <img src={logo_icon_01} className="me-1" alt="icon" />
                          <span>AMAZE TECH</span>
                        </Link>
                      </div>
                      <Link to="project-details" className="bid-now">
                        Bid Now{" "}
                        <FiArrowRight className="feather-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                <div
                  className="project-item feature-project-item aos"
                  data-aos="fade-up"
                >
                  <div className="project-img">
                    <Link to="project">
                      <img src={Project_20} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="feature-content">
                    <div className="feature-time-blk">
                      <Link to="#" className="btn btn-primary sky-active">
                        Full time
                      </Link>
                      <span>
                        <i className="far fa-clock me-1" /> 10 min ago
                      </span>
                    </div>
                    <h4>
                      <Link to="project">
                        Web Development for a Shopify Store
                      </Link>
                    </h4>
                    <ul className="feature-project-list nav">
                      <li>
                        <img src={Reg_icon} className="me-1" alt="icon" />
                        Web Development
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Kentucky, USA
                      </li>
                    </ul>
                    <div className="feature-foot">
                      <div className="logo-company">
                        <Link to="project">
                          <img src={logo_icon_02} className="me-1" alt="icon" />
                          <span>PARK INC</span>
                        </Link>
                      </div>
                      <Link to="project-details" className="bid-now">
                        Bid Now{" "}
                        <FiArrowRight className="feather-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                <div
                  className="project-item feature-project-item aos"
                  data-aos="fade-up"
                >
                  <div className="project-img">
                    <Link to="project">
                      <img src={Project_21} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="feature-content">
                    <div className="feature-time-blk">
                      <Link to="#" className="btn btn-primary green-active">
                        Part time
                      </Link>
                      <span>
                        <i className="far fa-clock me-1" /> 5 min ago
                      </span>
                    </div>
                    <h4>
                      <Link to="project">
                        Website Design for a Consumer Shop
                      </Link>
                    </h4>
                    <ul className="feature-project-list nav">
                      <li>
                        <img src={Reg_icon} className="me-1" alt="icon" />
                        Angular Developer
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Delaware, USA
                      </li>
                    </ul>
                    <div className="feature-foot">
                      <div className="logo-company">
                        <Link to="project">
                          <img src={logo_icon_01} className="me-1" alt="icon" />
                          <span>AMAZE TECH</span>
                        </Link>
                      </div>
                      <Link to="project-details" className="bid-now">
                        Bid Now{" "}
                        <FiArrowRight className="feather-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                <div
                  className="project-item feature-project-item aos"
                  data-aos="fade-up"
                >
                  <div className="project-img">
                    <Link to="project">
                      <img src={Project_22} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="feature-content">
                    <div className="feature-time-blk">
                      <Link to="#" className="btn btn-primary green-active">
                        Full time
                      </Link>
                      <span>
                        <i className="far fa-clock me-1" /> 6 min ago
                      </span>
                    </div>
                    <h4>
                      <Link to="project">
                        UI/UX for Cryptocurrency Exchange
                      </Link>
                    </h4>
                    <ul className="feature-project-list nav">
                      <li>
                        <img src={Reg_icon} className="me-1" alt="icon" />
                        Flutter Development
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Germany
                      </li>
                    </ul>
                    <div className="feature-foot">
                      <div className="logo-company">
                        <Link to="project">
                          <img src={logo_icon_03} className="me-1" alt="icon" />
                          <span>AMAZE TECH</span>
                        </Link>
                      </div>
                      <Link to="project-details" className="bid-now">
                        Bid Now{" "}
                        <FiArrowRight className="feather-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                <div
                  className="project-item feature-project-item aos"
                  data-aos="fade-up"
                >
                  <div className="project-img">
                    <Link to="project">
                      <img src={Project_23} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="feature-content">
                    <div className="feature-time-blk">
                      <Link to="#" className="btn btn-primary sky-active">
                        Full time
                      </Link>
                      <span>
                        <i className="far fa-clock me-1" /> 2 min ago
                      </span>
                    </div>
                    <h4>
                      <Link to="project">
                        Landing Page Redesign / Sales Page
                      </Link>{" "}
                    </h4>
                    <ul className="feature-project-list nav">
                      <li>
                        <img src={Reg_icon} className="me-1" alt="icon" />
                        Web Development
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Kentucky, USA
                      </li>
                    </ul>
                    <div className="feature-foot">
                      <div className="logo-company">
                        <Link to="project">
                          <img src={logo_icon_02} className="me-1" alt="icon" />
                          <span>ABC SOFTWARE</span>
                        </Link>
                      </div>
                      <Link to="project-details" className="bid-now">
                        Bid Now{" "}
                        <FiArrowRight className="feather-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              {/*- Project Item  */}
              <div className="col-lg-4 col-md-6 col-sm-6 d-flex">
                <div
                  className="project-item feature-project-item aos"
                  data-aos="fade-up"
                >
                  <div className="project-img">
                    <Link to="project">
                      <img src={Project_24} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="feature-content">
                    <div className="feature-time-blk">
                      <Link to="#" className="btn btn-primary green-active">
                        Part time
                      </Link>
                      <span>
                        <i className="far fa-clock me-1" /> 1 min ago
                      </span>
                    </div>
                    <h4>
                      <Link to="project">Build a Coaching Website Product</Link>{" "}
                    </h4>
                    <ul className="feature-project-list nav">
                      <li>
                        <img src={Reg_icon} className="me-1" alt="icon" />
                        Angular Developer
                      </li>
                      <li>
                        <BiMap className="feather-map-pin me-1" />
                        Delaware, USA
                      </li>
                    </ul>
                    <div className="feature-foot">
                      <div className="logo-company">
                        <Link to="project">
                          <img src={logo_icon_04} className="me-1" alt="icon" />
                          <span>AMAZE TECH</span>
                        </Link>
                      </div>
                      <Link to="project-details" className="bid-now">
                        Bid Now{" "}
                        <FiArrowRight className="feather-arrow-right ms-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*- /Project Item  */}
              <div className="col-xl-12">
                <div
                  className="more-project text-center aos"
                  data-aos="fade-up"
                >
                  <Link to="project" className="btn btn-primary">
                    View More Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*- /Feature  */}

        {/* Feature Developer */}
        <section className="section feature-developer home-two-developers">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-two text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">
                    Featured <span>Developers</span>
                  </h2>
                  <p>We have over 1400+ Developers </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="feature-develop-blk aos" data-aos="fade-up">
                  <div className="developer-sub-blk">
                    <div className="img-developer">
                      <Link to="/developer-details">
                        <img src={Avatar_21} className="me-2" alt="Img" />
                      </Link>
                    </div>
                    <div className="developer-content">
                      <h4>
                        <Link to="/developer-details">Dran Gonzalez</Link>
                      </h4>
                      <p>React Developer</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0 (30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="hour-rate">
                    <ul className="nav">
                      <li>
                        <i className="feather-dollar-sign me-1" />
                        $34 Hourly
                      </li>
                      <li>
                        <i className="feather-map-pin me-1" />
                        Florida, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-develop-blk aos" data-aos="fade-up">
                  <div className="developer-sub-blk">
                    <div className="img-developer">
                      <Link to="/developer-details">
                        <img src={Avatar_22} className="me-2" alt="Img" />
                      </Link>
                    </div>
                    <div className="developer-content">
                      <h4>
                        <Link to="/developer-details">Nicole Black</Link>
                      </h4>
                      <p>Angular Developer</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0 (30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="hour-rate">
                    <ul className="nav">
                      <li>
                        <i className="feather-dollar-sign me-1" />
                        $32 Hourly
                      </li>
                      <li>
                        <i className="feather-map-pin me-1" />
                        Nevada, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-develop-blk aos" data-aos="fade-up">
                  <div className="developer-sub-blk">
                    <div className="img-developer">
                      <Link to="/developer-details">
                        <img src={Avatar_23} className="me-2" alt="Img" />
                      </Link>
                    </div>
                    <div className="developer-content">
                      <h4>
                        <Link to="/developer-details">Megan Torres</Link>
                      </h4>
                      <p>Java Developer</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0 (30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="hour-rate">
                    <ul className="nav">
                      <li>
                        <i className="feather-dollar-sign me-1" />
                        $24 Hourly
                      </li>
                      <li>
                        <i className="feather-map-pin me-1" />
                        Delaware, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-develop-blk aos" data-aos="fade-up">
                  <div className="developer-sub-blk">
                    <div className="img-developer">
                      <Link to="/developer-details">
                        <img src={Avatar_24} className="me-2" alt="Img" />
                      </Link>
                    </div>
                    <div className="developer-content">
                      <h4>
                        <Link to="/developer-details">Shan Morris</Link>
                      </h4>
                      <p>React Developer</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0 (30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="hour-rate">
                    <ul className="nav">
                      <li>
                        <i className="feather-dollar-sign me-1" />
                        $28 Hourly
                      </li>
                      <li>
                        <i className="feather-map-pin me-1" />
                        Florida, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-develop-blk aos" data-aos="fade-up">
                  <div className="developer-sub-blk">
                    <div className="img-developer">
                      <Link to="/developer-details">
                        <img src={Avatar_25} className="me-2" alt="Img" />
                      </Link>
                    </div>
                    <div className="developer-content">
                      <h4>
                        <Link to="/developer-details">Dran Gonzalez</Link>
                      </h4>
                      <p>React Developer</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0 (30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="hour-rate">
                    <ul className="nav">
                      <li>
                        <i className="feather-dollar-sign me-1" />
                        $34 Hourly
                      </li>
                      <li>
                        <i className="feather-map-pin me-1" />
                        Delaware, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-develop-blk aos" data-aos="fade-up">
                  <div className="developer-sub-blk">
                    <div className="img-developer">
                      <Link to="/developer-details">
                        <img src={Avatar_26} className="me-2" alt="Img" />
                      </Link>
                    </div>
                    <div className="developer-content">
                      <h4>
                        <Link to="/developer-details">Nicole Black</Link>
                      </h4>
                      <p>Angular Developer</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0 (30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="hour-rate">
                    <ul className="nav">
                      <li>
                        <i className="feather-dollar-sign me-1" />
                        $312 Hourly
                      </li>
                      <li>
                        <i className="feather-map-pin me-1" />
                        Nevada, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-develop-blk aos" data-aos="fade-up">
                  <div className="developer-sub-blk">
                    <div className="img-developer">
                      <Link to="/developer-details">
                        <img src={Avatar_27} className="me-2" alt="Img" />
                      </Link>
                    </div>
                    <div className="developer-content">
                      <h4>
                        <Link to="/developer-details">Megan Torres</Link>{" "}
                      </h4>
                      <p>Java Developer</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0 (30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="hour-rate">
                    <ul className="nav">
                      <li>
                        <i className="feather-dollar-sign me-1" />
                        $234 Hourly
                      </li>
                      <li>
                        <i className="feather-map-pin me-1" />
                        Delaware, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="feature-develop-blk aos" data-aos="fade-up">
                  <div className="developer-sub-blk">
                    <div className="img-developer">
                      <Link to="/developer-details">
                        <img src={Avatar_28} className="me-2" alt="Img" />
                      </Link>
                    </div>
                    <div className="developer-content">
                      <h4>
                        <Link to="/developer-details">Shan Morris</Link>
                      </h4>
                      <p>React Developer</p>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span className="average-rating">5.0 (30)</span>
                      </div>
                    </div>
                  </div>
                  <div className="hour-rate">
                    <ul className="nav">
                      <li>
                        <i className="feather-dollar-sign me-1" />
                        $28 Hourly
                      </li>
                      <li>
                        <i className="feather-map-pin me-1" />
                        Florida, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div
                  className="more-project text-center aos"
                  data-aos="fade-up"
                >
                  <Link to="/developer-details" className="btn btn-primary">
                    View More Freelancers
                  </Link>
                </div>
                <div
                  className="review-bottom text-center aos"
                  data-aos="fade-up"
                >
                  <div className="client-rate">
                    <h4>Clients rate our Data Processing Executives</h4>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="average-rating">5.0 (30)</span>
                    </div>
                    <p>from 4227 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Feature Developer */}

        {/* Top skill */}
        <section className="section top-skill">
          <div className="container">
            <div
              className="section-header section-header-two text-center aos"
              data-aos="fade-up"
            >
              <h2 className="header-title">
                Featured <span> Skills</span>
              </h2>
              <p>Get work done in over 1800 different categories </p>
            </div>
            <div className="row justify-content-center aos" data-aos="fade-up">
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon01} alt="Img" />
                  </div>
                  <span>Translation</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon02} alt="Img" />
                  </div>
                  <span>Research Writing</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon03} alt="Img" />
                  </div>
                  <span>Web Scraping</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon04} alt="Img" />
                  </div>
                  <span>Article Writing</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon05} alt="Img" />
                  </div>
                  <span>HTML 5</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon06} alt="Img" />
                  </div>
                  <span>Website Design</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon07} alt="Img" />
                  </div>
                  <span>Mobile Apps</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon08} alt="Img" />
                  </div>
                  <span>Android Apps</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon09} alt="Img" />
                  </div>
                  <span>Iphone Apps</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon10} alt="Img" />
                  </div>
                  <span>Software Architecture</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon11} alt="Img" />
                  </div>
                  <span>Graphic Design</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon12} alt="Img" />
                  </div>
                  <span>Logo Design</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon13} alt="Img" />
                  </div>
                  <span>Public Relations</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon14} alt="Img" />
                  </div>
                  <span>Proofreading</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon15} alt="Img" />
                  </div>
                  <span>Photoshop</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon16} alt="Img" />
                  </div>
                  <span>Technical Writing</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon17} alt="Img" />
                  </div>
                  <span>Blogging</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon18} alt="Img" />
                  </div>
                  <span>Internet Marketing</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon19} alt="Img" />
                  </div>
                  <span>eCommerce</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon20} alt="Img" />
                  </div>
                  <span>Data Entry</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon21} alt="Img" />
                  </div>
                  <span>Link Building</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon22} alt="Img" />
                  </div>
                  <span>C++ Programming</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon24} alt="Img" />
                  </div>
                  <span>C# Programming</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon13} alt="Img" />
                  </div>
                  <span>Content Writing</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon25} alt="Img" />
                  </div>
                  <span>Marketing</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Top skill */}

        {/* Great About */}
        <section className="section great-about">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-two text-center aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">
                    What's Great About <span>XGEN Freelancing Platform</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="great-blk aos" data-aos="fade-up">
                  <div className="great-icon">
                    <img src={Great_icon_01} alt="Img" />
                  </div>
                  <div className="great-content">
                    <h4>Browse portfolios</h4>
                    <p>
                      Find professionals you can trust by browsing their samples
                      of previous work and reading their profile reviews.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="great-blk aos" data-aos="fade-up">
                  <div className="great-icon">
                    <img src={Great_icon_02} alt="Img" />
                  </div>
                  <div className="great-content">
                    <h4>Fast bids</h4>
                    <p>
                      Receive obligation free quotes from our talented
                      freelancers fast. 80% of projects get bid on within 60
                      seconds.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="great-blk aos" data-aos="fade-up">
                  <div className="great-icon">
                    <img src={Great_icon_03} alt="Img" />
                  </div>
                  <div className="great-content">
                    <h4>Quality work</h4>
                    <p>
                      Receive obligation free quotes from our talented
                      freelancers fast. 80% of projects get bid on within 60
                      seconds.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="great-blk aos" data-aos="fade-up">
                  <div className="great-icon">
                    <img src={Great_icon_04} alt="Img" />
                  </div>
                  <div className="great-content">
                    <h4>Track progress</h4>
                    <p>
                      Keep up-to-date and on-the-go with our time tracker, and
                      mobile app. Always know what freelancers are up to.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Great About */}

        {/* About Project */}
        <section className="section about-project">
          <div className="about-position">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 d-flex">
                  <div className="about-it-blk w-100 aos" data-aos="fade-up">
                    <div className="about-it-img">
                      <Link to="javascript:void(0);">
                        <img className="img-fluid" src={About_01} alt="Img" />
                      </Link>
                    </div>
                    <div className="about-it-content text-center">
                      <h4>I need a developed Project</h4>
                      <p>
                        Get the perfect Developed project for your budget from
                        our creative community.
                      </p>
                      <div className="more-project text-center mt-0">
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
                <div className="col-md-6 d-flex">
                  <div className="about-it-blk w-100 aos" data-aos="fade-up">
                    <div className="about-it-img">
                      <Link to="javascript:void(0);">
                        <img className="img-fluid" src={About_02} alt="Img" />
                      </Link>
                    </div>
                    <div className="about-it-content text-center">
                      <h4>Find Your Next Great Job Opportunity!</h4>
                      <p>
                        Do you want to earn money, find unlimited clients and
                        build your freelance career?
                      </p>
                      <div className="more-project text-center mt-0">
                        <Link
                          to="/developer-details"
                          className="btn btn-primary start-bid"
                        >
                          Start Bidding
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /About Project */}

        {/* Job Location */}
        <section className="section job-location home-two-jobsec">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 mx-auto">
                <div
                  className="section-header section-header-two d-block text-center section-locate aos"
                  data-aos="fade-up"
                >
                  <h2 className="header-title">
                    Jobs By <span>Locations</span>
                  </h2>
                  <p>
                    Find your favourite jobs and get the benefits of yourself
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-md-4">
                <div className="job-locate-blk aos" data-aos="fade-up">
                  <div className="location-img">
                    <Link to="/project">
                      <img className="img-fluid" src={Location_01} alt="Img" />
                    </Link>
                  </div>
                  <div className="job-it-content">
                    <h6>Nevada, USA</h6>
                    <ul className="nav job-locate-foot">
                      <li>80 Companies</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="job-locate-blk aos" data-aos="fade-up">
                  <div className="location-img">
                    <Link to="/project">
                      <img className="img-fluid" src={Location_02} alt="Img" />
                    </Link>
                  </div>
                  <div className="job-it-content">
                    <h6>London, UK</h6>
                    <ul className="nav job-locate-foot">
                      <li>40 Companies</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="job-locate-blk aos" data-aos="fade-up">
                  <div className="location-img">
                    <Link to="/project">
                      <img className="img-fluid" src={Location_03} alt="Img" />
                    </Link>
                  </div>
                  <div className="job-it-content">
                    <h6>Bangalore, India</h6>
                    <ul className="nav job-locate-foot">
                      <li>50 Companies</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="job-locate-blk aos" data-aos="fade-up">
                  <div className="location-img">
                    <Link to="/project">
                      <img className="img-fluid" src={Location_04} alt="Img" />
                    </Link>
                  </div>
                  <div className="job-it-content">
                    <h6>Newyork, USA</h6>
                    <ul className="nav job-locate-foot">
                      <li>60 Companies</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="job-locate-blk aos" data-aos="fade-up">
                  <div className="location-img">
                    <Link to="/project">
                      <img className="img-fluid" src={Location_05} alt="Img" />
                    </Link>
                  </div>
                  <div className="job-it-content">
                    <h6>Paris, France</h6>
                    <ul className="nav job-locate-foot">
                      <li>80 Companies</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="job-locate-blk aos" data-aos="fade-up">
                  <div className="location-img">
                    <Link to="/project">
                      <img className="img-fluid" src={Location_06} alt="Img" />
                    </Link>
                  </div>
                  <div className="job-it-content">
                    <h6>Berlin, Germany</h6>
                    <ul className="nav job-locate-foot">
                      <li>50 Companies</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="job-locate-blk aos" data-aos="fade-up">
                  <div className="location-img">
                    <Link to="/project">
                      <img className="img-fluid" src={Location_07} alt="Img" />
                    </Link>
                  </div>
                  <div className="job-it-content">
                    <h6>Amsterdam, Netherland</h6>
                    <ul className="nav job-locate-foot">
                      <li>30 Companies</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-4">
                <div className="job-locate-blk aos" data-aos="fade-up">
                  <div className="location-img">
                    <Link to="/project">
                      <img className="img-fluid" src={Location_08} alt="Img" />
                    </Link>
                  </div>
                  <div className="job-it-content">
                    <h6>California, USA</h6>
                    <ul className="nav job-locate-foot">
                      <li>70 Companies</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div
                  className="more-project text-center aos aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <Link to="/project" className="btn btn-primary">
                    View More Locations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /Job Location */}
        {/* Review */}
        <ReviewUser />
        {/* / Review */}
        {/* Company Hire */}
        <TopHiringCompany1 />
        {/* / Company Hire */}
        {/* News */}
        <FeaturedBlog />
        {/* / News */}
        {/* News */}

        {/*Main Wrapper */}
        <FooterTwo />
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
        {/* Scroll Top */}
      </div>
    </>
  );
};
export default Home2;
