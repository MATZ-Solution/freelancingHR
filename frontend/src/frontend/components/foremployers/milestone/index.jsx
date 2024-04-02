/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from "../sidebar";
import DatePicker from "react-datepicker";

const Milestone = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (date) => {
    setDate(date);
  };
  const [date1, setDate1] = useState(new Date());
  const handleChange1 = (date) => {
    setDate1(date);
  };
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  const data = [
    {
      id: 1,
      name: "Research",
      budget: "$60",
      progress: "25%",
      style: "25%",
      startdate: "02th October 2023",
      enddate: "31th October 2023",
      paid: "Paid",
      bg1: "badge badge-pill bg-success-light",
      actions: "Initiate",
      bg: "btn btn-request",
    },
    {
      id: 2,
      name: "Design",
      budget: "$50",
      progress: "50%",
      style: "50%",
      startdate: "15th October 2023",
      enddate: "18th October 2023",
      paid: "Paid",
      bg1: "badge badge-pill bg-success-light",
      actions: "Initiate",
      bg: "btn btn-request",
    },
    {
      id: 3,
      name: "Research",
      budget: "$60",
      progress: "75%",
      style: "75%",
      startdate: "20th October 2023",
      enddate: "31th October 2023",
      paid: "UnPaid",
      bg1: "badge badge-pill bg-danger-light",
      actions: "Initiate",
      bg: "btn btn-request",
    },
    {
      id: 4,
      name: "Development",
      budget: "$60",
      progress: "60%",
      style: "60%",
      startdate: "05th October 2023",
      enddate: "12th October 2023",
      paid: "Unpaid",
      bg1: "badge badge-pill bg-danger-light",
      actions: "Initiate",
      bg: "btn btn-request",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => <span>{text}</span>,
      sorter: (a, b) => a.name.length - name.length,
    },
    {
      title: "Budget",
      dataIndex: "budget",
      render: (text, record) => <span>{text}</span>,
      sorter: (a, b) => a.budget.length - b.budget.length,
    },
    {
      title: "Progress",
      dataIndex: "progress",
      render: (text, record) => (
        <div>
          <p className="mb-0 orange-text text-center">{text}</p>
          <div className="progress progress-md mb-0">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: record.style }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ),
      sorter: (a, b) => a.progress.length - b.progress.length,
    },

    {
      title: "Start Date",
      dataIndex: "startdate",
      render: (text, record) => <span>{text}</span>,
      sorter: (a, b) => a.startdate.length - b.startdate.length,
    },
    {
      title: "End date",
      dataIndex: "enddate",
      render: (text, record) => <span>{text}</span>,
      sorter: (a, b) => a.enddate.length - b.enddate.length,
    },
    {
      title: "Paid",
      dataIndex: "paid",
      render: (text, record) => <span className={record.bg1}>{text}</span>,
      sorter: (a, b) => a.paid.length - b.paid.length,
    },

    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, redord) => (
        <Link
          to="#success-milestone"
          data-bs-toggle="modal"
          className="btn-btn-requested"
        >
          {text}
        </Link>
      ),
      sorter: (a, b) => a.actions.length - b.actions.length,
    },
  ];

  return (
    <>
      <div className="main-wrapper">
        {/* Page Content */}
        <div className="content">
          <div className="container">
            <div className="row">
              {/* sidebar */}
              <div className="col-xl-3 col-md-4 theiaStickySidebar">
                <StickyBox offsetTop={20} offsetBottom={20}>
                  <Sidebar />
                </StickyBox>
              </div>
              {/* /sidebar */}
              <div className="col-xl-9 col-lg-8">
                <div className="page-title">
                  <h3>Manage Projects</h3>
                </div>
                <nav className="user-tabs mb-4">
                  <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li className="nav-item">
                      <Link className="nav-link" to="/view-project-detail">
                        Overview &amp; Discussions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/milestones">
                        Milestones
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/tasks">
                        Tasks
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/files">
                        Files
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/project-payment">
                        Payments
                      </Link>
                    </li>
                  </ul>
                </nav>

                {/* project list */}
                <div className="my-projects-view">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="title-head d-flex justify-content-between align-items-center mb-4">
                        <h4 className="mb-0">Milestones</h4>
                        <Link
                          to="#add-milestone"
                          className="login-btn btn-primary"
                          data-bs-toggle="modal"
                        >
                          Add Milestone
                        </Link>
                      </div>
                      <div className="table-responsive table-box manage-projects-table">
                        <table className="table table-center table-hover datatable no-sort">
                          <thead className="thead-pink">
                            <tr>
                              <th>Name</th>
                              <th>Budget</th>
                              <th>Progress</th>
                              <th>Start date</th>
                              <th>Due date</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Logo Design</td>
                              <td>$2222</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="progress progress-md mb-0">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "45%" }}
                                      aria-valuenow={45}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <p className="mb-0 orange-text text-center ms-3">
                                    45%
                                  </p>
                                </div>
                              </td>
                              <td>29 Sep 2023</td>
                              <td>29 Sep 2023</td>
                              <td>
                                <span className="badge badge-pill bg-danger-light">
                                  Unpaid
                                </span>
                              </td>
                              <td>
                                <div className="action-table-data">
                                  <Link
                                    to="#"
                                    className="btn btn-request disabled"
                                  >
                                    Initiate
                                  </Link>
                                  <Link
                                    to="#view-milestone"
                                    data-bs-toggle="modal"
                                    className="view-icon me-2"
                                  >
                                    <i className="feather-eye me-1" />
                                    View
                                  </Link>
                                  <div>
                                    <select className="select">
                                      <option value="">Select</option>
                                      <option value="">Approved</option>
                                      <option value="">On Hold</option>
                                      <option value="">Cancelled</option>
                                    </select>
                                  </div>
                                  <div className="edit-delete-action">
                                    <Link
                                      to="#edit-milestone"
                                      className="me-2"
                                      data-bs-toggle="modal"
                                    >
                                      <i className="feather-edit-2" />
                                    </Link>
                                    <Link to="#">
                                      <i className="feather-trash-2" />
                                    </Link>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Create desktop applications</td>
                              <td>$5762</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="progress progress-md mb-0">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <p className="mb-0 orange-text text-center ms-3">
                                    50%
                                  </p>
                                </div>
                              </td>
                              <td>25 Sep 2023</td>
                              <td>25 Sep 2023</td>
                              <td>
                                <span className="badge badge-pill bg-danger-light">
                                  Unpaid
                                </span>
                              </td>
                              <td>
                                <div className="action-table-data">
                                  <Link
                                    to="#success-milestone"
                                    data-bs-toggle="modal"
                                    className="btn btn-request"
                                  >
                                    Initiate
                                  </Link>
                                  <Link
                                    to="#view-milestone"
                                    data-bs-toggle="modal"
                                    className="view-icon me-2"
                                  >
                                    <i className="feather-eye me-1" />
                                    View
                                  </Link>
                                  <div>
                                    <select className="select">
                                      <option value="">Select</option>
                                      <option value="">Approved</option>
                                      <option value="">On Hold</option>
                                      <option value="">Cancelled</option>
                                    </select>
                                  </div>
                                  <div className="edit-delete-action">
                                    <Link to="#" className="me-2">
                                      <i className="feather-edit-2" />
                                    </Link>
                                    <Link to="#">
                                      <i className="feather-trash-2" />
                                    </Link>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>PHP, Javascript Projects </td>
                              <td>$4879</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="progress progress-md mb-0">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "100%" }}
                                      aria-valuenow={100}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <p className="mb-0 orange-text text-center ms-3">
                                    100%
                                  </p>
                                </div>
                              </td>
                              <td>17 Sep 2023</td>
                              <td>17 Sep 2023</td>
                              <td>
                                <span className="badge badge-pill bg-success-light">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <div className="action-table-data">
                                  <Link
                                    to="#"
                                    className="btn btn-request disabled"
                                  >
                                    Initiate
                                  </Link>
                                  <Link
                                    to="#view-milestone"
                                    data-bs-toggle="modal"
                                    className="view-icon me-2"
                                  >
                                    <i className="feather-eye me-1" />
                                    View
                                  </Link>
                                  <div>
                                    <select className="select">
                                      <option value="">Select</option>
                                      <option value="">Approved</option>
                                      <option value="">On Hold</option>
                                      <option value="">Cancelled</option>
                                    </select>
                                  </div>
                                  <div className="edit-delete-action">
                                    <Link
                                      to="#edit-milestone"
                                      className="me-2"
                                      data-bs-toggle="modal"
                                    >
                                      <i className="feather-edit-2" />
                                    </Link>
                                    <Link to="#">
                                      <i className="feather-trash-2" />
                                    </Link>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Website Designer Required </td>
                              <td>$3651</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="progress progress-md mb-0">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "50%" }}
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <p className="mb-0 orange-text text-center ms-3">
                                    50%
                                  </p>
                                </div>
                              </td>
                              <td>11 Sep 2023</td>
                              <td>11 Sep 2023</td>
                              <td>
                                <span className="badge badge-pill bg-danger-light">
                                  Unpaid
                                </span>
                              </td>
                              <td>
                                <div className="action-table-data">
                                  <Link
                                    to="#"
                                    className="btn btn-request disabled"
                                  >
                                    Initiate
                                  </Link>
                                  <Link
                                    to="#view-milestone"
                                    data-bs-toggle="modal"
                                    className="view-icon me-2"
                                  >
                                    <i className="feather-eye me-1" />
                                    View
                                  </Link>
                                  <div>
                                    <select className="select">
                                      <option value="">Select</option>
                                      <option value="">Approved</option>
                                      <option value="">On Hold</option>
                                      <option value="">Cancelled</option>
                                    </select>
                                  </div>
                                  <div className="edit-delete-action">
                                    <Link
                                      to="#edit-milestone"
                                      className="me-2"
                                      data-bs-toggle="modal"
                                    >
                                      <i className="feather-edit-2" />
                                    </Link>
                                    <Link to="#">
                                      <i className="feather-trash-2" />
                                    </Link>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Swift / SwiftUI Developer</td>
                              <td>$2789</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="progress progress-md mb-0">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "100%" }}
                                      aria-valuenow={100}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <p className="mb-0 orange-text text-center ms-3">
                                    100%
                                  </p>
                                </div>
                              </td>
                              <td>05 Sep 2023</td>
                              <td>05 Sep 2023</td>
                              <td>
                                <span className="badge badge-pill bg-success-light">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <div className="action-table-data">
                                  <Link
                                    to="#"
                                    className="btn btn-request disabled"
                                  >
                                    Initiate
                                  </Link>
                                  <Link
                                    to="#view-milestone"
                                    data-bs-toggle="modal"
                                    className="view-icon me-2"
                                  >
                                    <i className="feather-eye me-1" />
                                    View
                                  </Link>
                                  <div>
                                    <select className="select">
                                      <option value="">Select</option>
                                      <option value="">Approved</option>
                                      <option value="">On Hold</option>
                                      <option value="">Cancelled</option>
                                    </select>
                                  </div>
                                  <div className="edit-delete-action">
                                    <Link
                                      to="#edit-milestone"
                                      className="me-2"
                                      data-bs-toggle="modal"
                                    >
                                      <i className="feather-edit-2" />
                                    </Link>
                                    <Link to="#">
                                      <i className="feather-trash-2" />
                                    </Link>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Full-stack Developer </td>
                              <td>$7853</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="progress progress-md mb-0">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "100%" }}
                                      aria-valuenow={100}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <p className="mb-0 orange-text text-center ms-3">
                                    100%
                                  </p>
                                </div>
                              </td>
                              <td>01 Sep 2023</td>
                              <td>01 Sep 2023</td>
                              <td>
                                <span className="badge badge-pill bg-success-light">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <div className="action-table-data">
                                  <Link
                                    to="#"
                                    className="btn btn-request disabled"
                                  >
                                    Initiate
                                  </Link>
                                  <Link
                                    to="#view-milestone"
                                    data-bs-toggle="modal"
                                    className="view-icon me-2"
                                  >
                                    <i className="feather-eye me-1" />
                                    View
                                  </Link>
                                  <div>
                                    <select className="select">
                                      <option value="">Select</option>
                                      <option value="">Approved</option>
                                      <option value="">On Hold</option>
                                      <option value="">Cancelled</option>
                                    </select>
                                  </div>
                                  <div className="edit-delete-action">
                                    <Link
                                      to="#edit-milestone"
                                      className="me-2"
                                      data-bs-toggle="modal"
                                    >
                                      <i className="feather-edit-2" />
                                    </Link>
                                    <Link to="#">
                                      <i className="feather-trash-2" />
                                    </Link>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* project list */}
              </div>
            </div>
            {/* /Page Content */}
            {/* The Modal */}
            <div className="modal fade" id="file">
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="title-head d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">Milestones</h4>
                    <Link
                      to="#add-milestone"
                      className="login-btn btn-primary"
                      data-bs-toggle="modal"
                    >
                      Add Milestone
                    </Link>
                  </div>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="modal-info">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Milestone Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Budget</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Start Date</label>
                            <DatePicker
                              selected={date}
                              onChange={handleChange}
                              className="form-control datetimepicker"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>End Date</label>
                            <input
                              type="text"
                              className="form-control datetimepicker"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Progress</label>
                            <div className="slidecontainer">
                              <input
                                type="range"
                                min={1}
                                max={100}
                                defaultValue={50}
                                className="rangslider"
                                id="myRange"
                              />
                              <p className="text-muted">
                                Progress <span id="demo" /> %
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Description</label>
                            <textarea
                              className="form-control"
                              rows={5}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submit-section text-end">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* The Modal */}
          <div
            className="modal fade edit-proposal-modal success-modal"
            id="success-milestone"
          >
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header justify-content-end">
                  <span className="modal-close">
                    <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                      <i className="feather-x" />
                    </Link>
                  </span>
                </div>
                <div className="modal-body">
                  <div className="success-msg-content text-center">
                    <h4>Payment Initiated Successfully</h4>
                    <p>
                      You will be notified when payment is credited to your
                      account
                    </p>
                    <Link
                      to="/manage-projects"
                      className="btn btn-primary mt-3"
                    >
                      Go to Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /The Modal */}
          {/* The Modal */}
          <div className="modal fade edit-proposal-modal" id="add-milestone">
            <div className="modal-dialog modal-dialog-centered modal-md">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Add Milestone</h4>
                  <span className="modal-close">
                    <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                      <i className="feather-x" />
                    </Link>
                  </span>
                </div>
                <div className="modal-body">
                  <form action="#">
                    <div className="modal-info">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="input-block">
                            <label className="form-label">Milestone name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="input-block">
                            <label className="form-label">Amount</label>
                            <input type="text" className="form-control" />
                            <span className="input-group-text">$</span>
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="input-block">
                            <label className="form-label">Start Date</label>
                            <DatePicker
                              selected={date}
                              onChange={handleChange}
                              className="form-control datetimepicker"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <div className="input-block">
                            <label className="form-label">End Date</label>
                            <DatePicker
                              selected={date1}
                              onChange={handleChange1}
                              className="form-control datetimepicker"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-block">
                            <label className="form-label">Description</label>
                            <textarea
                              className="form-control summernote"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submit-section text-end">
                      <Link to="#" className="btn btn-cancel">
                        Cancel
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /The Modal */}
        </div>
      </div>
    </>
  );
};
export default Milestone;
