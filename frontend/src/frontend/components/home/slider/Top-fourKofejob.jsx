/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
// Import Images
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Review_01, Review_02, Review_03 } from "../../imagepath";

const TopReviewFour = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const settings = {
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
      992: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };

  return (
    <section className="section testimonial-section review review-four">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header aos text-center" data-aos="fade-up">
              <h2 className="header-title">Client testimonials</h2>
              <p>
                Learning communicate to global world and build a bright future
                and career development, increase your skill with our histudy.
              </p>
            </div>
          </div>
        </div>
        <div
          id="testimonial-two"
          className="owl-theme testimonial-slider aos"
          data-aos="fade-up"
        >
          <OwlCarousel
            {...settings}
            className="owl-theme testimonial-two testimonial-slider aos"
            data-aos="fade-up"
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
                </div>
              </div>
            </div>
            {/* /Review Widget */}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};
export default TopReviewFour;
