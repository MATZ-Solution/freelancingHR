/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Images
import { Company_logo_01, Company_logo_02, Company_logo_03, Company_logo_04, Company_logo_05, Company_logo_06, Review_01, Review_02, Review_03 } from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TopHiringCompany = (props) => {

    //Aos
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true
        });

    }, []);



    const options = {
        loop: true,
        margin: 10,
        items: 1,
        dots: false,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },

            550: {
                items: 3
            },
            700: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    };



    return (
        <>
            {/* Review */}
            <section className="section top-company">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center aos " data-aos="fade-up">
                            <div className="section-header">
                                <h6>Top Hiring Company</h6>
                            </div>
                        </div>
                        <OwlCarousel className="owl-theme" {...options}>

                            <div className="company-logos ">
                                <img src={Company_logo_01} alt="" />
                            </div>
                            <div className="company-logos ">
                                <img src={Company_logo_02} alt="" />
                            </div>
                            <div className="company-logos ">
                                <img src={Company_logo_03} alt="" />
                            </div>
                            <div className="company-logos ">
                                <img src={Company_logo_04} alt="" />
                            </div>
                            <div className="company-logos ">
                                <img src={Company_logo_05} alt="" />
                            </div>
                            <div className="company-logos ">
                                <img src={Company_logo_06} alt="" />
                            </div>
                            <div className="company-logos ">
                                <img src={Company_logo_03} alt="" />
                            </div>
                            <div className="company-logos ">
                                <img src={Company_logo_02} alt="" />
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            {/* / Review */}
        </>
    )

}
export default TopHiringCompany;





