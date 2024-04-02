import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../commoncomponent/sidebar";
const ChangePassword = () =>{
    return(
<>
<Sidebar/>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      <div className="page-header">
        <div className="row">
          <div className="col-sm-6">
            <h3 className="page-title">Settings</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="index">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Change Password</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-md-4">
          {/* Settings Menu */}
          <div className="widget settings-menu">
            <ul>
              <li className="nav-item">
                <Link to="settings" className="nav-link">
                  <i className="far fa-user" /> <span>Profile Settings</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="tax-types" className="nav-link">
                  <i className="far fa-check-square" /> <span>Tax Types</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="change-password" className="nav-link active">
                  <i className="fas fa-unlock-alt" />{" "}
                  <span>Change Password</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="delete-account" className="nav-link">
                  <i className="fas fa-ban" /> <span>Delete Account</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* /Settings Menu */}
        </div>
        <div className="col-xl-9 col-md-8">
          <div className="card">
            <div className="card-body pt-0">
              <div className="card-header mb-4">
                <h5 className="card-title">Change Password</h5>
              </div>
              {/* Form */}
              <form>
                <div className="row form-group">
                  <label
                    htmlFor="current_password"
                    className="col-sm-3 col-form-label input-label"
                  >
                    Current Password
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="current_password"
                      placeholder="Enter current password"
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <label
                    htmlFor="new_password"
                    className="col-sm-3 col-form-label input-label"
                  >
                    New Password
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="new_password"
                      placeholder="Enter new password"
                    />
                    <div className="progress progress-md mt-2">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "2%" }}
                        aria-valuenow={2}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
                <div className="row form-group">
                  <label
                    htmlFor="confirm_password"
                    className="col-sm-3 col-form-label input-label"
                  >
                    Confirm new password
                  </label>
                  <div className="col-sm-9">
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="confirm_password"
                        placeholder="Confirm your new password"
                      />
                    </div>
                    <h5>Password requirements:</h5>
                    <p className="mb-2">
                      Ensure that these requirements are met:
                    </p>
                    <ul className="list-unstyled small">
                      <li>Minimum 8 characters long - the more, the better</li>
                      <li>At least one lowercase character</li>
                      <li>At least one uppercase character</li>
                      <li>At least one number, symbol</li>
                    </ul>
                  </div>
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
              {/* /Form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* /Main Wrapper */}
</>
    )
}
export default ChangePassword;