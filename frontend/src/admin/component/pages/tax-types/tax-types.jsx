import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../commoncomponent/sidebar";
const TaxTypes=()=>{
return(
<>
<Sidebar/>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-6">
            <h3 className="page-title">Settings</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="index">Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Tax Types</li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Page Header */}
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
                <Link to="tax-types" className="nav-link active">
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
                <Link to="delete-account" className="nav-link">
                  <i className="fas fa-ban" /> <span>Delete Account</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* /Settings Menu */}
        </div>
        <div className="col-xl-9 col-md-8">
          <div className="card card-table">
            <div className="card-body pt-0">
              <div className="card-header mb-4">
                <div className="row">
                  <div className="col">
                    <h5 className="card-title">Tax Types</h5>
                  </div>
                  <div className="col-auto">
                    <Link
                      to="#"
                      className="btn btn-outline-primary btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#add_tax"
                    >
                      Add New Tax
                    </Link>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-center table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Tax Name </th>
                      <th>Tax Percentage (%) </th>
                      <th>Status</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>VAT</td>
                      <td>14%</td>
                      <td>
                        <span className="badge bg-success-light">Active</span>
                      </td>
                      <td className="text-end">
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_tax"
                          className="btn btn-sm btn-white text-success me-2"
                        >
                          <i className="far fa-edit me-1" /> Edit
                        </Link>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_tax"
                          className="btn btn-sm btn-white text-danger"
                        >
                          <i className="far fa-trash-alt me-1" />
                          Delete
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>GST</td>
                      <td>30%</td>
                      <td>
                        <span className="badge bg-danger-light">Inactive</span>
                      </td>
                      <td className="text-end">
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_tax"
                          className="btn btn-sm btn-white text-success me-2"
                        >
                          <i className="far fa-edit me-1" /> Edit
                        </Link>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_tax"
                          className="btn btn-sm btn-white text-danger"
                        >
                          <i className="far fa-trash-alt me-1" />
                          Delete
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Tax Modal */}
      <div id="add_tax" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Tax</h5>
              <button type="button" className="close" data-bs-dismiss="modal">
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>
                    Tax Name <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>
                    Tax Percentage (%) <span className="text-danger">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>
                    Status <span className="text-danger">*</span>
                  </label>
                  <select className="form-control form-select">
                    <option>Pending</option>
                    <option>Approved</option>
                  </select>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Tax Modal */}
      {/* Edit Tax Modal */}
      <div id="edit_tax" className="modal custom-modal fade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Tax</h5>
              <button type="button" className="close" data-bs-dismiss="modal">
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>
                    Tax Name <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    defaultValue="VAT"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Tax Percentage (%) <span className="text-danger">*</span>
                  </label>
                  <input
                    className="form-control"
                    defaultValue="14%"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Status <span className="text-danger">*</span>
                  </label>
                  <select className="form-control form-select">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Tax Modal */}
      {/* Delete Tax Modal */}
      <div className="modal custom-modal fade" id="delete_tax" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-icon text-center mb-3">
                <i className="fas fa-trash-alt text-danger" />
              </div>
              <div className="modal-text text-center">
                <h2>Delete Tax</h2>
                <p>Are you sure want to delete?</p>
              </div>
            </div>
            <div className="modal-footer text-center">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Tax Modal */}
    </div>
  </div>
  {/* /Page Wrapper */}
</>
)
}
export default TaxTypes;