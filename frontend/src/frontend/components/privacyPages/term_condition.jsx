/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from "react-router-dom";
const TermsCondition = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bread-crumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <div className="breadcrumb-list">
                <h3>TERMS &amp; CONDITIONS</h3>
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html"> Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Terms &amp; Conditions
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}

      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="terms-content">
                <div className="terms-text">
                  <h4>Welcome to XGEN Freelancing Platform</h4>
                  <p>
                    Thanks for using our products and services ("Services"). The
                    Services are provided by Pixeel Ltd. ("XGEN Freelancing Platform"), located at 153
                    Williamson Plaza, Maggieberg, MT 09514, England, United Kingdom.
                  </p>
                  <p>
                    By using our Services, you are agreeing to these terms. Please
                    read them carefully.
                  </p>
                  <p>
                    Our Services are very diverse, so sometimes additional terms or
                    product requirements (including age requirements) may apply.
                    Additional terms will be available with the relevant Services,
                    and those additional terms become part of your agreement with us
                    if you use those Services.
                  </p>
                </div>
                <div className="terms-text">
                  <h4>1. Using our services</h4>
                  <p>
                    You must follow any policies made available to you within the
                    Services.
                  </p>
                  <p>
                    Don't misuse our Services. For example, don't interfere with our
                    Services or try to access them using a method other than the
                    interface and the instructions that we provide. You may use our
                    Services only as permitted by law, including applicable export
                    and re-export control laws and regulations. We may suspend or
                    stop providing our Services to you if you do not comply with our
                    terms or policies or if we are investigating suspected
                    misconduct.
                  </p>
                  <p>
                    Using our Services does not give you ownership of any
                    intellectual property rights in our Services or the content you
                    access. You may not use content from our Services unless you
                    obtain permission from its owner or are otherwise permitted by
                    law. These terms do not grant you the right to use any branding
                    or logos used in our Services. Don't remove, obscure, or alter
                    any legal notices displayed in or along with our Services.
                  </p>
                </div>
                <div className="terms-text">
                  <h4>A. Personal Data that we collect about you.</h4>
                  <p>
                    Personal Data is any information that relates to an identified
                    or identifiable individual. The Personal Data that you provide
                    directly to us through our Sites will be apparent from the
                    context in which you provide the data. In particular:
                  </p>
                  <p>
                    When you register for a XGEN Freelancing Platform account we collect your full
                    name, email address, and account log-in credentials.
                  </p>
                  <p>
                    When you fill-in our online form to contact our sales team, we
                    collect your full name, work email, country, and anything else
                    you tell us about your project, needs and timeline.
                  </p>
                  <p>
                    When you use the "Remember Me" feature of XGEN Freelancing Platform Checkout, we
                    collect your email address, payment card number, CVC code and
                    expiration date.
                  </p>
                  <p>
                    When you respond to XGEN Freelancing Platform emails or surveys we collect your
                    email address, name and any other information you choose to
                    include in the body of your email or responses. If you contact
                    us by phone, we will collect the phone number you use to call
                    XGEN Freelancing Platform. If you contact us by phone as a XGEN Freelancing Platform User, we may
                    collect additional information in order to verify your identity.
                  </p>
                </div>
                <div className="terms-text">
                  <h4>
                    B. Information that we collect automatically on our Sites.
                  </h4>
                  <p>
                    We also may collect information about your online activities on
                    websites and connected{" "}
                  </p>
                  <p>
                    These Terms will be applied fully and affect to your use of this
                    Website. By using this Website, you agreed to accept all terms
                    and conditions written in here. You must not use this Website if
                    you disagree with any of these Website Standard Terms and
                    Conditions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 theiaStickySidebar">
              <div className="card list-widget">
                <div className="card-header">
                  <h4 className="card-title">All List</h4>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <Link to="#">1. Using our services</Link>
                      <ul>
                        <li>
                          <Link to="#">A. Personal Data that we collect about you</Link>
                        </li>
                        <li>
                          <Link to="#">
                            B. Information that we collect automatically on our
                            Sites
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="list-group-item">
                      <Link to="#">2. Privacy and copyright protection</Link>
                    </li>
                    <li className="list-group-item">
                      <Link to="#">3. Your content in our services</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  )

}
export default TermsCondition;