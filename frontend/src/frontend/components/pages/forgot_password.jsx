/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Logo, Logo_01 } from "../imagepath";
const ForgotPassword = (props) => {
  useEffect(() => {
    document.body.className = 'account-page';
    return () => { document.body.className = ''; }
  });
  return (
    <>
      {/* Page Content */}
      <div className="login-wrapper">
        <div className="content">
          <div className="container">
            {/* Login Content */}
            <div className="account-content">
              <div className="align-items-center justify-content-center">
                <div className="login-right">
                  <div className="login-header text-center">
                    <h2>Forgot Password</h2>
                    <h3>Please enter your email address</h3>
                  </div>
                  <form action="/dashboard">
                    <div className="input-block">
                      <label className="focus-label">Email Address <span className="label-star"> *</span></label>
                      <input type="text" className="form-control floating" />
                    </div>
                    <Link to="/dashboard" className="btn btn-primary w-100 btn-lg login-btn d-flex align-items-center justify-content-center mb-4" type="submit">Send Now<i className="feather-arrow-right ms-2" /></Link>
                    <div className="row">
                      <div className="col-sm-8 dont-have d-flex mt-0  align-items-center">Remember Password<Link to="/login" className="ms-2">Sign in?</Link></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /Login Content */}
          </div>
        </div>
      </div>

      {/* /Page Content */}

    </>
  )

}
export default ForgotPassword;