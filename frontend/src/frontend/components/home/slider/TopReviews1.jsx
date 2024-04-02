import React, { useEffect } from "react";
// Import Images
import AOS from "aos";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { skillicon01, skillicon02, skillicon03, skillicon04, skillicon05, skillicon06, skillicon07, skillicon08, skillicon09, skillicon10, skillicon11, skillicon12, skillicon13, skillicon14, skillicon15, skillicon16, skillicon17, skillicon18, skillicon19, skillicon20, skillicon21, skillicon22, skillicon23, skillicon24, skillicon25 } from "../../imagepath";
const TopReviews1 = () => {
    //Aos
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true
        });
    }, []);

    return (
        <>
        {/* Top skill */}
        <section className="section top-skill top-skill-three">
          <div className="container">
            <div
              className="section-header section-header-three text-center aos"
              data-aos="fade-up"
            >
              <span className="badge title-badge">Skill Sets</span>
              <h2 className="header-title">
                Get work done in over 1800 different categories
              </h2>
            </div>
            <div className="row justify-content-center">
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
                  <span> Architecture</span>
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
                    <img src={skillicon23} alt="Img" />
                  </div>
                  <span>C# Programming</span>
                </div>
              </div>
              <div className="skill-custom-col">
                <div className="skills-feature">
                  <div className="skill-icon">
                    <img src={skillicon24} alt="Img" />
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
      </>
      
    )
}
export default TopReviews1;