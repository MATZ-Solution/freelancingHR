/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { mail } from "../../imagepath";
const Completeing = ({ prevTab5 }) => {
  return (
    <>
      <div className="field-card">
        <div className="account-onborad complte-board back-home pb-0">
          <img src={mail} className="img-fluid" alt="icon" />
          <h2>Email Verification</h2>
          <h3>We have send a verification link to info@email.com </h3>
          <p>Click on the link to complete the verification Process</p>
          <p>You might need to check your Spam folder</p>
          <Link to="#" className="link-danger">
            <i className="feather-refresh-cw me-2 " /> Resend Email
          </Link>
        </div>

        <div className="text-center">
          <input
            className="btn btn-prev prev_btn btn-back"
            name="next"
            type="button"
            defaultValue="Back"
            onClick={prevTab5}
          />
        </div>
      </div>
    </>
  );
};
export default Completeing;
