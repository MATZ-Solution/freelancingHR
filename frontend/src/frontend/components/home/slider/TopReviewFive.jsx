/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
// Import Slick Slider
import Slider from "react-slick";
// Import Images
import { Avatar_1, Avatar_2, Avatar_3, Avatar_4, Avatar_5, Avatar_6, quote_02 } from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
const TopReviewFive = (props) => {

    //Aos
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true
        });

    }, []);

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    //i dont seem to need this
    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);


    return (
        <>
            {/* Review */}
            <section className="section review-five">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-12 mx-auto">
                            <div
                                className="section-header text-center aos"
                                data-aos="fade-up"
                            >
                                <h2 className="header-title">Top Review</h2>
                                <p>People love to come again for XGEN Freelancing Platform </p>
                            </div>
                        </div>
                    </div>
                    <div className="offset-xl-1 col-xl-10">
                        <div className="slid-review-group">
                            <div
                                className="slider say-about slider-for aos"
                                data-aos="fade-up"
                            >
                                <Slider className="slider click say-about slider-for aos" data-aos="fade-up" asNavFor={nav2} ref={slider1}>
                                    <div>
                                        <div className="testimonial-all d-flex justify-content-center">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="img-reviews">
                                                        <div className="review-quote">
                                                            <img src={quote_02} alt="" />
                                                        </div>
                                                        <img src={Avatar_6} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="testimonial-two-head ">
                                                        <h3>George Wells</h3>
                                                        <span>Product Designer</span>
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur. Nam nulla
                                                            velit ullamcorper tellus arcu ligula id nulla vitae.
                                                            Sed laoreet turpis elementum egestas vestibulum
                                                            lacinia a. Faucibus varius condimentum adipiscing
                                                            Lorem ipsum dolor sit amet consectetur. Nam nulla
                                                            velit ullamcorper tellus arcu ligula id nulla vitae.
                                                            Sed laoreet turpis elementum egestas vestibulum
                                                            lacinia a. Faucibus varius condimentum adipiscing{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="testimonial-all d-flex justify-content-center">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="img-reviews">
                                                        <div className="review-quote">
                                                            <img src={quote_02} alt="" />
                                                        </div>
                                                        <img src={Avatar_2} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="testimonial-two-head ">
                                                        <h3>Timothy Smith</h3>
                                                        <span>Product Designer</span>
                                                        <p>
                                                            Nam nulla velit ullamcorper tellus arcu ligula id
                                                            nulla vitae.Lorem ipsum dolor sit amet consectetur.
                                                            Sed laoreet turpis elementum egestas vestibulum
                                                            lacinia a. Faucibus varius condimentum adipiscing
                                                            Lorem ipsum dolor sit amet consectetur. Nam nulla
                                                            velit ullamcorper tellus arcu ligula id nulla vitae.
                                                            Sed laoreet turpis elementum egestas vestibulum
                                                            lacinia a. Faucibus varius condimentum adipiscing{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="testimonial-all d-flex justify-content-center">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="img-reviews">
                                                        <div className="review-quote">
                                                            <img src={quote_02} alt="" />
                                                        </div>
                                                        <img src={Avatar_3} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="testimonial-two-head ">
                                                        <h3>Janet Paden</h3>
                                                        <span>Product Designer</span>
                                                        <p>
                                                            Faucibus varius condimentum adipiscingLorem ipsum
                                                            dolor sit amet consectetur. Nam nulla velit
                                                            ullamcorper tellus arcu ligula id nulla vitae. Sed
                                                            laoreet turpis elementum egestas vestibulum lacinia a.
                                                            Faucibus varius condimentum adipiscing Lorem ipsum
                                                            dolor sit amet consectetur. Nam nulla velit
                                                            ullamcorper tellus arcu ligula id nulla vitae. Sed
                                                            laoreet turpis elementum egestas vestibulum lacinia a.{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="testimonial-all d-flex justify-content-center">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="img-reviews">
                                                        <div className="review-quote">
                                                            <img src={quote_02} alt="" />
                                                        </div>
                                                        <img src={Avatar_4} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="testimonial-two-head ">
                                                        <h3>James Douglas</h3>
                                                        <span>Product Designer</span>
                                                        <p>
                                                            Nam nulla velit ullamcorper tellus arcu ligula id
                                                            nulla vitae.Lorem ipsum dolor sit amet consectetur.
                                                            Sed laoreet turpis elementum egestas vestibulum
                                                            lacinia a. Faucibus varius condimentum adipiscing
                                                            Lorem ipsum dolor sit amet consectetur. Nam nulla
                                                            velit ullamcorper tellus arcu ligula id nulla vitae.
                                                            Sed laoreet turpis elementum egestas vestibulum
                                                            lacinia a. Faucibus varius condimentum adipiscing{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="testimonial-all d-flex justify-content-center">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="img-reviews">
                                                        <div className="review-quote">
                                                            <img src={quote_02} alt="" />
                                                        </div>
                                                        <img src={Avatar_5} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-9">
                                                    <div className="testimonial-two-head ">
                                                        <h3>Timothy Smith</h3>
                                                        <span>Product Designer</span>
                                                        <p>
                                                            Faucibus varius condimentum adipiscingLorem ipsum
                                                            dolor sit amet consectetur. Nam nulla velit
                                                            ullamcorper tellus arcu ligula id nulla vitae. Sed
                                                            laoreet turpis elementum egestas vestibulum lacinia a.
                                                            Faucibus varius condimentum adipiscing Lorem ipsum
                                                            dolor sit amet consectetur. Nam nulla velit
                                                            ullamcorper tellus arcu ligula id nulla vitae. Sed
                                                            laoreet turpis elementum egestas vestibulum lacinia a.{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                        <Slider
                            asNavFor={nav1}
                            ref={slider2}
                            slidesToShow={3}
                            slidesToScroll={1}
                            arrows={false}
                            swipeToSlide={false}
                            focusOnSelect={true}
                            className=" slider client-img slider-nav aos "
                            data-aos="fade-up"
                        >
                            <div className="testimonial-thumb">
                                <img src={Avatar_1} alt="" />
                            </div>
                            <div className="testimonial-thumb">
                                <img src={Avatar_2} alt="" />
                            </div>
                            <div className="testimonial-thumb">
                                <img src={Avatar_3} alt="" />
                            </div>
                            <div className="testimonial-thumb">
                                <img src={Avatar_4} alt="" />
                            </div>
                            <div className="testimonial-thumb">
                                <img src={Avatar_5} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div >
    </section >
    {/* Review */ }
    </>
  )
}
export default TopReviewFive;


