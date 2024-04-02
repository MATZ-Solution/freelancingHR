import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../commoncomponent/sidebar";
const DeleteAccount = () =>{
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
              <li className="breadcrumb-item active">Delete Account</li>
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
                <Link to="change-password" className="nav-link">
                  <i className="fas fa-unlock-alt" />{" "}
                  <span>Change Password</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="delete-account" className="nav-link active">
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
                <h5 className="card-title">Delete your account</h5>
              </div>
              {/* Form */}
              <form>
                <p className="card-text">
                  When you delete your account, you lose access to Kanakku
                  account services, and we permanently delete your personal
                  data.
                </p>
                <p className="card-text">
                  Are you sure you want to close your account?
                </p>
                <div className="form-group">
                  <div className="form-check form-checkbox">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="delete_account"
                    />
                    <label
                      className="form-check-label text-danger"
                      htmlFor="delete_account"
                    >
                      Confirm that I want to delete my account.
                    </label>
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
export default DeleteAccount;