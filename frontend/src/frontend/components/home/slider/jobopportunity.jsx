import React from 'react'
import {Link} from 'react-router-dom'

const JobOpportunity = () => {
  
  return (
    <>
  {/* App Version */}
  <section className="section next-job">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="job-next-blk text-center aos" data-aos="fade-up">
            <h2>Find Your Next Great Job Opportunity!</h2>
            <p>
              Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam
              malesuada eros nec luctus laoreet.{" "}
            </p>
            <div className="next-job-btn">
              <Link
                to ="/register"
                className="btn btn-primary next-register me-3"
              >
                Register XGEN Freelancing Platform
                <i className="feather-arrow-right ms-2" />
              </Link>
              <Link to ="/login" className="btn btn-primary next-sign">
                Post A Project
                <i className="feather-arrow-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /App Version */}
  <section className="faq-section-three" id="faq">
    <div className="container">
      <div
        className="section-header section-header-three text-center aos"
        data-aos="fade-up"
      >
        <span className="badge title-badge">FAQ’S</span>
        <h2 className="header-title">Frequently Question Answer </h2>
      </div>
      <div className="row" id="accordionExample">
        <div className="col-lg-6">
          <div className="faq-card aos aos-init aos-animate" data-aos="fade-up">
            <h4 className="faq-title">
              <Link
                className="collapseds active"
                data-bs-toggle="collapse"
                to ="#faqOne"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
          <div className="faq-card aos aos-init aos-animate" data-aos="fade-up">
            <h4 className="faq-title">
              <Link
                className="collapsed"
                data-bs-toggle="collapse"
                to ="#faqtwo"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
          <div className="faq-card aos aos-init aos-animate" data-aos="fade-up">
            <h4 className="faq-title">
              <Link
                className="collapsed"
                data-bs-toggle="collapse"
                to ="#faqthree"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
          <div className="faq-card aos aos-init aos-animate" data-aos="fade-up">
            <h4 className="faq-title">
              <Link
                className="collapsed"
                data-bs-toggle="collapse"
                to ="#faqfour"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
          <div className="faq-card aos aos-init aos-animate" data-aos="fade-up">
            <h4 className="faq-title">
              <Link
                className="collapsed"
                data-bs-toggle="collapse"
                to ="#faqfive"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="faq-card aos aos-init aos-animate" data-aos="fade-up">
            <h4 className="faq-title">
              <Link
                className="collapsed"
                data-bs-toggle="collapse"
                to ="#faqsix"
                aria-expanded="false"
              >
                {" "}
                6. What are the costs to buy a house?
              </Link>
            </h4>
            <div
              id="faqsix"
              className="card-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
          <div className="faq-card aos aos-init aos-animate" data-aos="fade-up">
            <h4 className="faq-title">
              <Link
                className="collapsed"
                data-bs-toggle="collapse"
                to ="#faqseven"
                aria-expanded="false"
              >
                7. What are the costs to buy a house?
              </Link>
            </h4>
            <div
              id="faqseven"
              className="card-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
          <div className="faq-card aos aos-init aos-animate" data-aos="fade-up">
            <h4 className="faq-title">
              <Link
                className="collapsed"
                data-bs-toggle="collapse"
                to ="#faqeight"
                aria-expanded="false"
              >
                {" "}
                8. What are the costs to buy a house?
              </Link>
            </h4>
            <div
              id="faqeight"
              className="card-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
          <div className="faq-card aos aos-init aos-animate" data-aos="fade-up">
            <h4 className="faq-title">
              <Link
                className="collapsed"
                data-bs-toggle="collapse"
                to ="#faqnine"
                aria-expanded="false"
              >
                9. What are the costs to buy a house?
              </Link>
            </h4>
            <div
              id="faqnine"
              className="card-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
          <div className="faq-card aos aos-init aos-animate" data-aos="fade-up">
            <h4 className="faq-title">
              <Link
                className="collapsed"
                data-bs-toggle="collapse"
                to ="#faqten"
                aria-expanded="false"
              >
                10. What are the costs to buy a house?
              </Link>
            </h4>
            <div
              id="faqten"
              className="card-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default JobOpportunity
