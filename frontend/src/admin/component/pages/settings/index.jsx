/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { favicon, logo } from "../imagepath";
import Sidebar from "../../../commoncomponent/sidebar";
import Select from "react-select";

const Settings = () => {
  const optionsSelect = [
    { value: 1, label: "California" },
    { value: 2, label: "Tasmania" },
    { value: 3, label: "Auckland" },
    { value: 4, label: "Marlborough" },
  ];

  const stateOptions = [
    { value: 1, label: "Select" },
    { value: 2, label: "India" },
    { value: 3, label: "London" },
    { value: 4, label: "France" },
    { value: 5, label: "USA" },
  ];
  return (
    <>
      <div className="main-wrapper">
        <Sidebar />
        {/* Hello world */}
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
                    <li className="breadcrumb-item active">General Settings</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Settings Menu */}
            <div className="settings-menu-links">
              <ul className="nav nav-tabs menu-tabs">
                <li className="nav-item active">
                  <Link className="nav-link" to="/admin/settings">
                    General Settings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/localization-details">
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
                      <h5 className="card-title">Website Basic Details</h5>
                    </div>
                    <form>
                      <div className="settings-form">
                        <div className="form-group">
                          <label>
                            Website Name <span className="star-red">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Website Name"
                          />
                        </div>
                        <div className="form-group">
                          <p className="settings-label">
                            Logo <span className="star-red">*</span>
                          </p>
                          <div className="settings-btn">
                            <input
                              type="file"
                              accept="image/*"
                              name="image"
                              id="file"
                              className="hide-input"
                            />
                            <label htmlFor="file" className="upload">
                              <FeatherIcon icon="upload" />
                            </label>
                          </div>
                          <h6 className="settings-size">
                            Recommended image size is <span>150px x 150px</span>
                          </h6>
                          <div className="upload-images">
                            <img src={logo} alt="Image" />
                            <Link to="#" className="btn-icon logo-hide-btn">
                              <i>
                                <FeatherIcon icon="x-circle" />
                              </i>
                            </Link>
                          </div>
                        </div>
                        <div className="form-group">
                          <p className="settings-label">
                            Favicon <span className="star-red">*</span>
                          </p>
                          <div className="settings-btn">
                            <input
                              type="file"
                              accept="image/*"
                              name="image"
                              id="file"
                              className="hide-input"
                            />
                            <label htmlFor="file" className="upload">
                              <FeatherIcon icon="upload" />
                            </label>
                          </div>
                          <h6 className="settings-size">
                            Recommended image size is{" "}
                            <span>16px x 16px or 32px x 32px</span>
                          </h6>
                          <h6 className="settings-size mt-1">
                            Accepted formats: only png and ico
                          </h6>
                          <div className="upload-images upload-size">
                            <img src={favicon} alt="Image" />
                            <Link to="#" className="btn-icon logo-hide-btn">
                              <i>
                                <FeatherIcon icon="x-circle" />
                              </i>
                            </Link>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-5 col-md-6">
                            <div className="form-group">
                              <div className="status-toggle d-flex justify-content-between align-items-center">
                                <p className="mb-0">RTL</p>
                                <input
                                  type="checkbox"
                                  id="status_1"
                                  className="check"
                                />
                                <label
                                  htmlFor="status_1"
                                  className="checktoggle"
                                >
                                  checkbox
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-0">
                          <div className="settings-btns">
                            <button type="submit" className="btn btn-orange">
                              Update
                            </button>
                            <button type="submit" className="btn btn-grey">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body pt-0">
                    <div className="card-header">
                      <h5 className="card-title">Address Details</h5>
                    </div>
                    <form>
                      <div className="settings-form">
                        <div className="form-group">
                          <label>
                            Address Line 1 <span className="star-red">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Address Line 1"
                          />
                        </div>
                        <div className="form-group">
                          <label>
                            Address Line 2 <span className="star-red">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Address Line 2"
                          />
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                City <span className="star-red">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                State/Province{" "}
                                <span className="star-red">*</span>
                              </label>
                              <Select
                                className="select"
                                options={optionsSelect}
                                placeholder="Selected"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Zip/Postal Code{" "}
                                <span className="star-red">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>
                                Country <span className="star-red">*</span>
                              </label>
                              <Select
                                className="select"
                                options={stateOptions}
                                placeholder="Select"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-group mb-0">
                          <div className="settings-btns">
                            <button type="submit" className="btn btn-orange">
                              Update
                            </button>
                            <button type="submit" className="btn btn-grey">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* /Settings */}
          </div>
        </div>
        {/* /Page Wrapper */}
      </div>
    </>
  );
};
export default Settings;
