/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
// Import Images
import {
  About_img,
  About_01,
  Review_01,
  Review_02,
  Review_03,
  home_icon,
  Logo,
  About_1,
  about_us,
  about_us_1,
  great_1,
  great_2,
  great_3,
  great_4,
  abt_3,
  checks,
  count_icon_01,
  count_icon_02,
  count_icon_03,
  count_icon_04,
  job1,
} from "../imagepath";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import EmployerBreadcrumb from "../foremployers/common/employerBreadcrumb";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const Aboutus = () => {
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

  useEffect(() => {
    AOS.init({
      duration: 800,
      // easing: 'ease-in-out',
      offset: 200,
      once: true,
    });
  }, []);
  return (
    <>
      {/* Breadcrumb */}
      <EmployerBreadcrumb title="About Us" subtitle="About Us" />

      {/* /Breadcrumb */}
      {/* About */}
      <section className="section about">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-12 d-flex align-items-center aos"
              data-aos="fade-up"
            >
              <div className="about-content">
                <h2>About We’re on a mission to empowering Jobs worldwide.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                  modi, saepe hic esse maxime quasi, sapiente ex debitis quis
                  dolorum unde, neque quibusdam eveniet nobis enim porro
                  repudiandae nesciunt quidem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magni delectus soluta adipisci beatae ullam quisquam, quia
                  recusandae rem assumenda, praesentium porro sequi eaque
                  doloremque tenetur incidunt officiis explicabo optio
                  perferendis.
                </p>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="about-content-img aos" data-aos="zoom-in">
                <img src={about_us} className="img-fluid" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-img aos" data-aos="zoom-in">
                <img src={about_us_1} className="img-fluid" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About */}
      {/* Counter */}
      <section className="section projects">
        <div className="container">
          <div className="row row-gap">
            <div className="col-md-12 col-sm-12 col-12 mx-auto text-center">
              <div className="section-header aos  " data-aos="fade-up">
                <h2 className="header-title">What’s great about it?</h2>
                <p>All the features of XGEN Freelancing Platform below</p>
              </div>
            </div>
            {/* Feature Item */}
            <div
              className="col-xl-3 col-md-6 aos d-flex  "
              data-aos="zoom-in"
              data-aos-duration={1000}
            >
              <div className="feature-items d-flex align-items-center justify-content-center flex-column">
                <div className="feature-icon">
                  <img src={great_1} className="img-fluid" alt="Img" />
                </div>
                <div className="feature-content course-count text-center">
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
              className="col-xl-3 col-md-6 aos d-flex  "
              data-aos="zoom-in"
              data-aos-duration={1500}
            >
              <div className="feature-items d-flex align-items-center justify-content-center flex-column">
                <div className="feature-icon">
                  <img src={great_2} className="img-fluid" alt="Img" />
                </div>
                <div className="feature-content course-count text-center">
                  <h3>Fast Bids</h3>
                  <p>
                    Receive obligation free quotes from our talented freelancers
                    fast. 80% of projects get bid
                  </p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
            {/* Feature Item */}
            <div
              className="col-xl-3 col-md-6 aos d-flex  "
              data-aos="zoom-in"
              data-aos-duration={2000}
            >
              <div className="feature-items d-flex align-items-center justify-content-center flex-column">
                <div className="feature-icon">
                  <img src={great_3} className="img-fluid" alt="Img" />
                </div>
                <div className="feature-content course-count text-center">
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
              className="col-xl-3 col-md-6 aos d-flex  "
              data-aos="zoom-in"
              data-aos-duration={2500}
            >
              <div className="feature-items d-flex align-items-center justify-content-center flex-column">
                <div className="feature-icon">
                  <img src={great_4} className="img-fluid" alt="Img" />
                </div>
                <div className="feature-content course-count text-center">
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

      {/* Review */}
      <section className="section review">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="aos aos-init " data-aos="fade-up">
                <div className="demand-professional">
                  <h2>We unleash your business potential.</h2>
                  <p>
                    Through strategy, design, and planning we build brand
                    identities that connect with your template. We then
                    fine-tune a marketing plan that allows us to laser focus.
                  </p>
                </div>
                <div className="demand-post-job align-items-start">
                  <div className="demand-post-img">
                    <img src={checks} alt="Img" className="img-fluid" />
                  </div>
                  <div className="demand-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Est modi, saepe hic esse maxime quasi, sapiente ex debitis
                      quis dolorum unde, quibusdam eveniet nobis enim porro
                      repudiandae nesciunt quidem.
                    </p>
                  </div>
                </div>
                <div className="demand-post-job align-items-start">
                  <div className="demand-post-img">
                    <img src={checks} alt="Img" className="img-fluid" />
                  </div>
                  <div className="demand-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Est modi, saepe hic esse maxime quasi, sapiente ex debitis
                      quis dolorum unde, quibusdam eveniet nobis enim porro
                      repudiandae nesciunt quidem.
                    </p>
                  </div>
                </div>
                <div className="demand-post-job align-items-start">
                  <div className="demand-post-img">
                    <img src={checks} alt="Img" className="img-fluid" />
                  </div>
                  <div className="demand-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Est modi, saepe hic esse maxime quasi, sapiente ex debitis
                      quis dolorum unde, quibusdam eveniet nobis enim porro
                      repudiandae nesciunt quidem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="work-set-image">
                <div
                  className="recent-pro-img aos"
                  data-aos="zoom-in"
                  data-aos-duration={1000}
                >
                  <img src={abt_3} alt="Img" className="img-fluid " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* / Review */}
      {/* Agency */}
      <section className="section feature-count feature-count-three">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 mx-auto">
              <div
                className="section-header section-header-three feature-count-head aos  "
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
                className="feature-item freelance-count aos  "
                data-aos="fade-up"
              >
                <div className="feature-icon ">
                  <img src={count_icon_01} className="img-fluid" alt="Img" />
                </div>
                <div className="feature-content course-count">
                  <h3 className="counter-up">
                    <CountUp end={9207} duration={10} />
                  </h3>
                  <p>Freelance developers</p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
            {/* Feature Item */}
            <div className="col-xl-3 col-md-6">
              <div className="feature-item aos  " data-aos="fade-up">
                <div className="feature-icon">
                  <img src={count_icon_02} className="img-fluid" alt="Img" />
                </div>
                <div className="feature-content course-count">
                  <h3>
                    <span className="counter-up">
                      <CountUp end={6000} duration={10} />
                    </span>
                  </h3>
                  <p>Projects Added</p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
            {/* Feature Item */}
            <div className="col-xl-3 col-md-6">
              <div
                className="feature-item comp-project aos  "
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <img src={count_icon_03} className="img-fluid" alt="Img" />
                </div>
                <div className="feature-content course-count">
                  <h3 className="counter-up">
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
                className="feature-item comp-project aos  "
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <img src={count_icon_04} className="img-fluid" alt="Img" />
                </div>
                <div className="feature-content course-count">
                  <h3 className="counter-up">
                    <CountUp end={998} duration={10} />
                  </h3>
                  <p>Companies Registered</p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
          </div>
        </div>
      </section>

      <section className="section testimonial-section review-four">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-header text-center">
                <div className="section-line" />
                <h2 className="header-title">Client testimonials</h2>
                <p>
                  Learning communicate to global world and build a bright future
                  and career development, increase your skill with our histudy.
                </p>
              </div>
            </div>
          </div>
          <div id="testimonial-slider" className="owl-theme testimonial-slider">
            <OwlCarousel
              className="owl-theme review-slider owl-loaded owl-drag"
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
                </div>
                <div className="review-content">
                  <p className="ms-0">
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
                </div>
                <div className="review-content">
                  <p className="ms-0">
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
                </div>
                <div className="review-content">
                  <p className="ms-0">
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
                </div>
                <div className="review-content">
                  <p className="ms-0">
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
                  </div>
                </div>
              </div>
              {/* /Review Widget */}
            </OwlCarousel>
          </div>
        </div>
      </section>

      <section className="section job-register">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="register-job-blk">
                <div className="job-content-blk aos" data-aos="fade-up">
                  <h2>Find Your Next Great Job Opportunity!</h2>
                  <p>
                    Quisque pretium dolor turpis, quis blandit turpis semper ut.
                    Nam malesuada eros nec luctus laoreet.
                  </p>
                  <Link to="/register" className="btn all-btn">
                    Join Now
                  </Link>
                </div>
                <div
                  className="see-all mt-0 aos opportunity"
                  data-aos="zoom-in"
                >
                  <img src={job1} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Aboutus;
