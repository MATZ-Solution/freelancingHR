/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon } from "../../imagepath";
import { Sidebar } from "../sidebar";
import { Table } from "antd";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
import Select from "react-select";
import DatePicker from "react-datepicker";
import TextEditor from "../dashboard/texteditor";
const Task = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (date) => {
    setDate(date);
  };
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  const options = [
    { value: "creatingLogo", label: "Creating a Logo Concept" },
    { value: "design", label: "Design" },
    { value: "development", label: "Development" },
  ];
  const status = [
    { value: "InProgress", label: "InProgress" },
    { value: "Completed", label: "Completed" },
    { value: "Pending", label: "Pending" },
  ];
  const milestone = [
    { value: "Select", label: "Select" },
    { value: "Research", label: "Research" },
    { value: "Design", label: "Design" },
    { value: "Development", label: "Development" },
  ];

  const data = [
    {
      id: 1,
      TaskName: "Website Designer Required",
      Milestones: "Research",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
      Status: "Completed",
      Action: "",
    },
    {
      id: 2,
      TaskName: "Create desktop applications",
      Milestones: "Research",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
      Status: "Pending",
      Action: "",
    },
    {
      id: 3,
      TaskName: "PHP, Javascript Projects",
      Milestones: "Research",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
      Status: "Completed",
      Action: "",
    },
    {
      id: 4,
      TaskName: "Website Designer Required",
      Milestones: "Research",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
      Status: "Pending",
      Action: "",
    },
    {
      id: 5,
      TaskName: "Swift / SwiftUI Developer",
      Milestones: "Research",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
      Status: "Completed",
      Action: "",
    },
    {
      id: 6,
      TaskName: "Full-stack Developer",
      Milestones: "Research",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...",
      Status: "Completed",
      Action: "",
    },
  ];
  const columns = [
    {
      title: "Task Name",
      dataIndex: "TaskName",
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.TaskName.length - b.TaskName.length,
    },
    {
      title: "Milestone",
      dataIndex: "Milestones",
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.Milestones.length - b.Milestones.length,
    },
    {
      title: "Description",
      dataIndex: "Description",
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.Description.length - b.Description.length,
    },

    {
      title: "Status",
      dataIndex: "Status",
      render: (text, record) => (
        <span
          className={
            record.Status === "Pending"
              ? "badge badge-pill bg-warning-light"
              : record.Status === "Completed"
                ? "badge badge-pill bg-success-light"
                : ""
          }
        >
          {text}
        </span>
      ),
      sorter: (a, b) => a.Status.length - b.Status.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div>
          <div className="action">
            <Link data-bs-toggle="modal" to="#edit-milestone" className="me-2">
              <i className="feather-edit-2" />
            </Link>
            <Link to="#" className="me-2">
              <i className="feather-trash-2" />
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.actions.length - b.actions.length,
    },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Main Wrapper */}
      <div className="main-wrapper">
        {/* Start Navigation */}

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
                      <Link className="nav-link" to="/milestones">
                        Milestones
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/tasks">
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
                        <h4 className="mb-0">Task</h4>
                        <Link
                          to="#add-milestone"
                          className="login-btn btn-primary"
                          data-bs-toggle="modal"
                        >
                          Add Task
                        </Link>
                      </div>
                      <div className="table-responsive table-box manage-projects-table">
                        <Table
                          pagination={{
                            total: data.length,
                            showTotal: (total, range) =>
                              `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                            showSizeChanger: true,
                            onShowSizeChange: onShowSizeChange,
                            itemRender: itemRender,
                          }}
                          className="table role"
                          style={{ overflowX: "auto" }}
                          columns={columns}
                          dataSource={data}
                          rowKey={(record) => record.id}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* project list */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Footer */}
        <footer className="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className=" col-lg-4 col-md-12">
                  <div className="footer-bottom-logo">
                    <Link to="/index" className="menu-logo">
                      <img
                        src="assets/img/logo.svg"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </Link>
                    <p>
                      We’re always in search for talented and motivated people.
                      Don’t be shy introduce yourself!
                    </p>
                    <ul>
                      <li>
                        <Link to="#">
                          <i
                            className="fa-brands fa-facebook-f"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i
                            className="fa-brands fa-twitter"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i
                            className="fa-brands fa-instagram"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i
                            className="fa-brands fa-linkedin"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    </ul>
                    <Link to="#" className="btn btn-connectus">
                      Contact with us
                    </Link>
                  </div>
                </div>
                <div className=" col-lg-8 col-md-12">
                  <div className="row">
                    <div className="col-xl-3 col-md-6">
                      <div className="footer-widget footer-menu">
                        <h2 className="footer-title">Useful Links</h2>
                        <ul>
                          <li>
                            <Link to="/about">
                              <i className="fas fa-angle-right me-1" />
                              About Us
                            </Link>
                          </li>
                          <li>
                            <Link to="/blog-list">
                              <i className="fas fa-angle-right me-1" />
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link to="/login">
                              <i className="fas fa-angle-right me-1" />
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link to="/register">
                              <i className="fas fa-angle-right me-1" />
                              Register
                            </Link>
                          </li>
                          <li>
                            <Link to="/forgot-password">
                              <i className="fas fa-angle-right me-1" />
                              Forgot Password
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="footer-widget footer-menu">
                        <h2 className="footer-title">Help &amp; Support</h2>
                        <ul>
                          <li>
                            <Link to="#">
                              <i className="fas fa-angle-right me-1" />
                              Browse Candidates
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fas fa-angle-right me-1" />
                              Employers Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fas fa-angle-right me-1" />
                              Job Packages
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fas fa-angle-right me-1" />
                              Jobs Featured
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fas fa-angle-right me-1" />
                              Post A Job
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="footer-widget footer-menu">
                        <h2 className="footer-title">Other Links</h2>
                        <ul>
                          <li>
                            <Link to="/freelancer-dashboard">
                              <i className="fas fa-angle-right me-1" />
                              Freelancers
                            </Link>
                          </li>
                          <li>
                            <Link to="/freelancer-portfolio">
                              <i className="fas fa-angle-right me-1" />
                              Freelancer Details
                            </Link>
                          </li>
                          <li>
                            <Link to="/project">
                              <i className="fas fa-angle-right me-1" />
                              Project
                            </Link>
                          </li>
                          <li>
                            <Link to="/project-details">
                              <i className="fas fa-angle-right me-1" />
                              Project Details
                            </Link>
                          </li>
                          <li>
                            <Link to="/post-project">
                              <i className="fas fa-angle-right me-1" />
                              Post Project
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="footer-widget footer-menu">
                        <h2 className="footer-title">Connect With Us</h2>
                        <ul>
                          <li>
                            <Link to="/freelancer-chats">
                              <i className="fas fa-angle-right me-1" />
                              Chat
                            </Link>
                          </li>
                          <li>
                            <Link to="/faq">
                              <i className="fas fa-angle-right me-1" />
                              Faq
                            </Link>
                          </li>
                          <li>
                            <Link to="/freelancer-review">
                              <i className="fas fa-angle-right me-1" />
                              Reviews
                            </Link>
                          </li>
                          <li>
                            <Link to="/privacy-policy">
                              <i className="fas fa-angle-right me-1" />
                              Privacy Policy
                            </Link>
                          </li>
                          <li>
                            <Link to="/term-condition">
                              <i className="fas fa-angle-right me-1" />
                              Terms of use
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Footer Top */}
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="container">
              {/* Copyright */}
              <div className="copyright">
                <div className="row">
                  <div className="col-md-12">
                    <div className="copyright-text text-center">
                      <p className="mb-0">
                        Copyright {currentYear} © XGEN Freelancing Platform. All right reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Copyright */}
            </div>
          </div>
          {/* /Footer Bottom */}
        </footer>
        {/* /Footer */}
        {/* The Modal */}
        <div className="modal fade edit-proposal-modal" id="add-milestone">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add New Task</h4>
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
                      <div className="col-md-12">
                        <div className="input-block">
                          <label className="form-label">TaskName</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block">
                          <label className="form-label">Milestone</label>

                          <Select
                            className="select"
                            options={milestone}
                            placeholder="Select an option"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block">
                          <label className="form-label">Due date</label>
                          <div className="cal-icon">
                            <DatePicker
                              selected={date}
                              onChange={handleChange}
                              className="form-control datetimepicker"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-block">
                          <label className="form-label">Description</label>
                          <TextEditor />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-block">
                          <label className="form-label">Status</label>
                          <Select
                            className="select"
                            options={status}
                            placeholder="Select an option"
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
        {/* The Modal */}
        <div className="modal fade edit-proposal-modal" id="edit-milestone">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Task</h4>
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
                      <div className="col-md-12">
                        <div className="input-block">
                          <label className="form-label">TaskName</label>
                          <input
                            className="form-control"
                            type="text"
                            defaultValue="Adding New Logo Concept"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block">
                          <label className="form-label">Milestone</label>
                          <Select
                            className="select"
                            options={options}
                            placeholder="Select an option"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block custom-date-picker">
                          <label className="form-label">Due date</label>
                          <div className="cal-icon">
                            <DatePicker
                              selected={date}
                              onChange={handleChange}
                              className="form-control datetimepicker"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-block">
                          <label className="form-label">Description</label>
                          <TextEditor />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-block">
                          <label className="form-label">Status</label>
                          <Select
                            className="select"
                            options={status}
                            placeholder="Select an option"
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

      {/* /Main Wrapper */}
    </>
  );
};
export default Task;
