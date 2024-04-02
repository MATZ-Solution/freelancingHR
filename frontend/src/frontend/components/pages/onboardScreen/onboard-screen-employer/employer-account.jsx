/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { checks, select_04, select_05 } from "../../../imagepath";
const AccountEmp = ({ nextTabEmp, show }) => {
  return (
    <>
      <div
        className="text-center on-board select-account group-select"
        style={{ display: show ? "none" : "block" }}
      >
        <div className="select-type">
          <div className="account-onborad onboard-head">
            <h2>Select Account Type</h2>
            <p>Don’t worry, this can be changed later.</p>
            <div className="select-box d-flex justify-content-center">
              <input
                defaultChecked="checked"
                id="freelance"
                type="radio"
                name="credit-card"
                defaultValue="visa"
              />
              <label
                className="employee-level free-lance-img accounts_type"
                data-id="freelance"
                htmlFor="freelance"
              >
                <Link to="/onboard-screen">
                  <img src={select_04} alt="Img" className="img-fluid" />
                  <span>Freelancer</span>
                </Link>
              </label>
              <input
                id="employee"
                className="accounts_type"
                type="radio"
                name="credit-card"
                defaultValue="mastercard"
              />
              <label
                className="employee-level employee-img accounts_type"
                data-id="employee"
                htmlFor="employee"
              >
                <Link to="/onboard-screen-employer">
                  <img src={checks} alt="Img" className="checks-set" />
                  <img src={select_05} alt="Img" className="img-fluid" />
                  <span>Employer</span>
                </Link>
              </label>
            </div>
          </div>
          <input
            className="btn next_btn btn-primary btn-get"
            name="next"
            type="button"
            defaultValue="Next"
            onClick={nextTabEmp}
          />
        </div>
      </div>
    </>
  );
};

export default AccountEmp;
