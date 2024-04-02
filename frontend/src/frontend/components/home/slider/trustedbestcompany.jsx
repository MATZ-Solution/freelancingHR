/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
// Import Images
import { Company_logo_01, Company_logo_02, Company_logo_03, Company_logo_04, Company_logo_05, Company_logo_06, Review_01, Review_02, Review_03 } from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const TrustedBestCompany = () => {
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
                items: 6
            }
        }
    };
    return (
        <>
            <section className="section top-company-four">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-header text-center aos" data-aos="fade-up">
                                <h5>Trusted by the world’s best Company</h5>
                            </div>
                        </div>
                        <div id="trust-company-slider" className="owl-theme trust-slider developers-slider aos" data-aos="fade-up">

                            <OwlCarousel className="owl-theme trust-slider developers-slider aos" data-aos="fade-up"{...options}>

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
                </div>
            </section>
            {/* / Review */}
        </>
    )

}
export default TrustedBestCompany;