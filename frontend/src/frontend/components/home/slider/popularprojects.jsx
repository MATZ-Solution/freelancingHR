/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {  Project_29, Project_30, Project_31, Reg_icon } from '../../imagepath';
import AOS from "aos";
import "aos/dist/aos.css";

const PopularProjects = () => {
    //Aos

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true
        });

    }, []);

    const options = {
        items: 6,
        // startposition:0,
        margin: 30,
        dots: false,
        nav: true,
        smartSpeed: 2000,
        navText: [
            '<i class="fas fa-arrow-left"></i>',
            '<i class="fas fa-arrow-right"></i>'
        ],
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    };

    return(
<>
  {/* Popular Projects */}
  <section className="section popular-projects">
    <div className="container">
    <div className="row">
						<div className="col-md-12 col-sm-12 col-12 mx-auto">
							<div className="section-header  section-locate aos" data-aos="fade-up">
								<div>
									<h2 className="header-title">Popular Projects near you  </h2>
									<p>Bid and stary the new Jobs </p>
								</div>
								
							</div>
						</div>
					</div>
      <div
        id="popular-slider"
        className="owl-theme popular-slider developers-slider aos"
        data-aos="fade-up"
      >
        <OwlCarousel className="owl-theme popular-slider developers-slider aos" data-aos="fade-up"{...options}>
        <div className="popular-group">
          <div className="blog-image">
            <Link to="project">
              <img
                className="img-fluid"
                src={Project_29}
                alt="Post Image"
              />
            </Link>
          </div>
          <div className="popular-content-blk">
            <div className="head-popular">
              <h4>
                <Link to="project">UI/UX for Cryptocurrency Exchange</Link>
              </h4>
              <p>
                <img
                  src={Reg_icon}
                  className="me-2"
                  alt="icon"
                />
                Web Development
              </p>
            </div>
            <div className="popular-list-box">
              <ul className="nav">
                <li>Figma</li>
                <li>Adobe Xd</li>
              </ul>
              <h4>
                $80 - $180<span>/hour</span>
              </h4>
            </div>
            <p className="popular-foot">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae architecto eveniet, dolor quo repellendus pariatur
            </p>
          </div>
        </div>
        <div className="popular-group">
          <div className="blog-image">
            <Link to="project">
              <img
                className="img-fluid"
                src={Project_30}
                alt="Post Image"
              />
            </Link>
          </div>
          <div className="popular-content-blk">
            <div className="head-popular">
              <h4>
                <Link to="project">Website Design for a Consumer Shop</Link>
              </h4>
              <p>
                <img
                  src={Reg_icon}
                  className="me-2"
                  alt="icon"
                />
                Angular Development
              </p>
            </div>
            <div className="popular-list-box">
              <ul className="nav">
                <li>Angular</li>
              </ul>
              <h4>
                $40 - $80<span>/hour</span>
              </h4>
            </div>
            <p className="popular-foot">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae architecto eveniet, dolor quo repellendus pariatur
            </p>
          </div>
        </div>
        <div className="popular-group">
          <div className="blog-image">
            <Link to="project">
              <img
                className="img-fluid"
                src={Project_31}
                alt="Post Image"
              />
            </Link>
          </div>
          <div className="popular-content-blk">
            <div className="head-popular">
              <h4>
                <Link to="project">Build a Coaching Website Product </Link>
              </h4>
              <p>
                <img
                  src={Reg_icon}
                  className="me-2"
                  alt="icon"
                />
                Node JS Development
              </p>
            </div>
            <div className="popular-list-box">
              <ul className="nav">
                <li>Figma</li>
                <li>Node JS</li>
              </ul>
              <h4>
                $60 - $120<span>/hour</span>
              </h4>
            </div>
            <p className="popular-foot">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae architecto eveniet, dolor quo repellendus pariatur
            </p>
          </div>
        </div>
        <div className="popular-group">
          <div className="blog-image">
            <Link to="project">
              <img
                className="img-fluid"
                src={Project_30}
                alt="Post Image"
              />
            </Link>
          </div>
          <div className="popular-content-blk">
            <div className="head-popular">
              <h4>
                <Link to="project">Website Design for a Consumer Shop</Link>
              </h4>
              <p>
                <img
                  src={Reg_icon}
                  className="me-2"
                  alt="icon"
                />
                Angular Development
              </p>
            </div>
            <div className="popular-list-box">
              <ul className="nav">
                <li>Angular</li>
              </ul>
              <h4>
                $40 - $80<span>/hour</span>
              </h4>
            </div>
            <p className="popular-foot">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae architecto eveniet, dolor quo repellendus pariatur
            </p>
          </div>
        </div>
        <div className="popular-group">
          <div className="blog-image">
            <Link to="project">
              <img
                className="img-fluid"
                src={Project_29}
                alt="Post Image"
              />
            </Link>
          </div>
          <div className="popular-content-blk">
            <div className="head-popular">
              <h4>
                <Link to="project">UI/UX for Cryptocurrency Exchange</Link>
              </h4>
              <p>
                <img
                  src={Reg_icon}
                  className="me-2"
                  alt="icon"
                />
                Web Development
              </p>
            </div>
            <div className="popular-list-box">
              <ul className="nav">
                <li>Figma</li>
                <li>Adobe Xd</li>
              </ul>
              <h4>
                $80 - $180<span>/hour</span>
              </h4>
            </div>
            <p className="popular-foot">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae architecto eveniet, dolor quo repellendus pariatur
            </p>
          </div>
        </div>
        <div className="popular-group">
          <div className="blog-image">
            <Link to="project">
              <img
                className="img-fluid"
                src={Project_31}
                alt="Post Image"
              />
            </Link>
          </div>
          <div className="popular-content-blk">
            <div className="head-popular">
              <h4>
                <Link to="project">Build a Coaching Website Product </Link>
              </h4>
              <p>
                <img
                  src={Reg_icon}
                  className="me-2"
                  alt="icon"
                />
                Node JS Development
              </p>
            </div>
            <div className="popular-list-box">
              <ul className="nav">
                <li>Figma</li>
                <li>Node JS</li>
              </ul>
              <h4>
                $60 - $120<span>/hour</span>
              </h4>
            </div>
            <p className="popular-foot">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae architecto eveniet, dolor quo repellendus pariatur
            </p>
          </div>
        </div>
        </OwlCarousel>
      </div>
    </div>
  </section>
  {/* /Popular Projects */}
</>

    )
}
export default PopularProjects;