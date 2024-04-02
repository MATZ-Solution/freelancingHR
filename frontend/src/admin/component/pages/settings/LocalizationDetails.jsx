/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { favicon, logo } from "../imagepath";
import Sidebar from "../../../commoncomponent/sidebar";
import Select from "react-select";

const LocalizationDetails = () => {
  const state = [
    { value: 1, label: "15 May 2016" },
    { value: 2, label: "15/05/2016" },
    { value: 3, label: "15.05.2016" },
    { value: 4, label: "05/15/2016" },
    { value: 5, label: "2016/05/15" },
    { value: 6, label: "2016-05-15" },
  ];
  const options = [
    { value: 1, label: "(UTC +5:30) Antarctica/Palmer" },
    { value: 2, label: "(UTC+05:30) India" },
  ];
  const options1 = [
    { value: 1, label: "12 Hours" },
    { value: 2, label: "24 Hours" },
    { value: 3, label: "36 Hours" },
    { value: 4, label: "48 Hours" },
    { value: 5, label: "60 Hours" },
  ];
  const options2 = [
    { value: 1, label: "$" },
    { value: 2, label: "₹" },
    { value: 3, label: "£" },
    { value: 4, label: "€" },
  ];
  return (
    <>
      <div className="main-wrapper">
        <Sidebar />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-6">
                  <h3 className="page-title">Settings</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admin/index">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/admin/settings">Settings</Link>
                    </li>
                    <li className="breadcrumb-item active">Localization</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* Settings Menu */}
                <div className="settings-menu-links">
                  <ul className="nav nav-tabs menu-tabs">
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/settings">
                        General Settings
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link
                        className="nav-link"
                        to="/admin/localization-details"
                      >
                        Localization
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/payment-settings">
                        Payment Settings
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/email-settings">
                        Email Settings
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/social-settings">
                        Social Media Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/social-links">
                        Social Links
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/seo-settings">
                        SEO Settings
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/others-settings">
                        Others
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Settings Menu */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body pt-0">
                        <div className="card-header">
                          <h5 className="card-title">Localization Details</h5>
                        </div>
                        <form>
                          <div className="settings-form">
                            <div className="form-group">
                              <label>Time Zone</label>
                              <Select
                                className="select"
                                options={options}
                                placeholder="Select"
                              />
                            </div>
                            <div className="form-group">
                              <label>Date Format</label>
                              <Select
                                className="select"
                                options={state}
                                placeholder="Select"
                              />
                            </div>
                            <div className="form-group">
                              <label>Time Format</label>
                              <Select
                                className="select"
                                options={options1}
                                placeholder="Select"
                              />
                            </div>
                            <div className="form-group">
                              <label>Currency Symbol</label>

                              <Select
                                className="select"
                                options={options2}
                                placeholder="Select"
                              />
                            </div>
                            <div className="form-group mb-0">
                              <div className="settings-btns">
                                <button
                                  type="submit"
                                  className="btn btn-orange"
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}
      </div>
    </>
  );
};
export default LocalizationDetails;
