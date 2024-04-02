/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { FileLogo, home_icon, managefile, managefile02, managefile03, managefile04, managefile05, managefile06 } from "../../imagepath";
import { Sidebar } from '../sidebar';
//import { Table } from "antd";
//import { itemRender, onShowSizeChange } from "../../paginationfunction"
import "../../antdstyle.css"
const File = () => {
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
  const data = [
    {
      id: 1,
      filepreview: "",
      title: "Image for Section background",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      status: "Readmore",
      bg: "read-text",
      type: "Png",
      Size: "20KB",
      action: "",
    },
    {
      id: 2,
      filepreview: "",
      title: "Image for Footer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      status: "Readmore",
      bg: "read-text",
      type: "Png",
      Size: "22KB",
      action: "",

    },
    {
      id: 3,
      filepreview: "",
      title: "Image for Login",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      status: "Readmore",
      bg: "read-text",
      type: "Png",
      Size: "12KB",
      action: "",
    },
  ];
  const columns = [
    {
      title: "File Preview",
      dataIndex: "filepreview",
      render: (text, record) => (
        <div>
          <img
            src={FileLogo}
            className="img-fluid"
            alt="Logo"
          />{text}
        </div>
      ),
      sorter: (a, b) => a.filepreview.length - b.filepreview.length,
    },
    {
      title: "Title",
      dataIndex: "title",
      render: (text, record) => (
        <div>{text}</div>
      ),
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (text, record) => (
        <div>
          <p className="mb-0">{record.description}</p><Link to="#" className="read-text">{record.status}</Link>
        </div>
      ),
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: "Type",
      dataIndex: "type",
      render: (text, record) => (
        <div>{text}</div>
      ),
      sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: "Size",
      dataIndex: "Size",
      render: (text, record) => (
        <div>{text}</div>
      ),
      sorter: (a, b) => a.Size.length - b.Size.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div>
          <div className="action">
            <Link
              to=""
              className="file-circle me-2"
            >
              <i className="fas fa-cloud-download-alt" />
            </Link>
            <Link
              data-bs-toggle="modal"
              to="#edit-file"
              className="file-circle me-2"
            >
              <i className="fas fa-pen" />
            </Link>
            <Link
              to=""
              className="file-circle"
            >
              <i className="fas fa-trash-alt" />
            </Link>
          </div>
        </div>
      ),
      sorter: (a, b) => a.actions.length - b.actions.length,
    },
  ];

  return (
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
                    <Link className="nav-link" to="/tasks">
                      Tasks
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/files">
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
                      <h4 className="mb-0">Files</h4>
                      <Link
                        to="#add-milestone"
                        className="login-btn btn-primary"
                        data-bs-toggle="modal"
                      >
                        Add Files
                      </Link>
                    </div>
                    <div className="table-responsive table-box manage-projects-table">
                      <table className="table table-center table-hover datatable no-sort">
                        <thead className="thead-pink">
                          <tr>
                            <th>File Preview</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Size</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src={managefile}
                                alt="Img"
                              />{" "}
                            </td>
                            <td>Website Designer Required </td>
                            <td>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do...
                            </td>
                            <td>Png</td>
                            <td>20 KB</td>
                            <td>
                              <div className="action-table-data">
                                <div className="edit-delete-action m-0">
                                  <Link
                                    to="#"
                                    className="download-icon me-2"
                                  >
                                    <i className="feather-download" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="download-icon"
                                  >
                                    <i className="feather-trash-2" />
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={managefile02}
                                alt="Img"
                              />{" "}
                            </td>
                            <td>Create desktop applications </td>
                            <td>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do...
                            </td>
                            <td>Jpg</td>
                            <td>2 MB</td>
                            <td>
                              <div className="action-table-data">
                                <div className="edit-delete-action m-0">
                                  <Link
                                    to="#"
                                    className="download-icon me-2"
                                  >
                                    <i className="feather-download" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="download-icon"
                                  >
                                    <i className="feather-trash-2" />
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={managefile03}
                                alt="Img"
                              />{" "}
                            </td>
                            <td>PHP, Javascript Projects</td>
                            <td>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do...
                            </td>
                            <td>Jpg</td>
                            <td>12 KB</td>
                            <td>
                              <div className="action-table-data">
                                <div className="edit-delete-action m-0">
                                  <Link
                                    to="#"
                                    className="download-icon me-2"
                                  >
                                    <i className="feather-download" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="download-icon"
                                  >
                                    <i className="feather-trash-2" />
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={managefile04}
                                alt="Img"
                              />{" "}
                            </td>
                            <td>Website Designer Required</td>
                            <td>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do...
                            </td>
                            <td>Png</td>
                            <td>25 KB</td>
                            <td>
                              <div className="action-table-data">
                                <div className="edit-delete-action m-0">
                                  <Link
                                    to="#"
                                    className="download-icon me-2"
                                  >
                                    <i className="feather-download" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="download-icon"
                                  >
                                    <i className="feather-trash-2" />
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={managefile05}
                                alt="Img"
                              />{" "}
                            </td>
                            <td>Swift / SwiftUI Developer </td>
                            <td>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do...
                            </td>
                            <td>Jpg</td>
                            <td>50 KB</td>
                            <td>
                              <div className="action-table-data">
                                <div className="edit-delete-action m-0">
                                  <Link
                                    to="#"
                                    className="download-icon me-2"
                                  >
                                    <i className="feather-download" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="download-icon"
                                  >
                                    <i className="feather-trash-2" />
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src={managefile06}
                                alt="Img"
                              />{" "}
                            </td>
                            <td>Full-stack Developer</td>
                            <td>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do...
                            </td>
                            <td>Png</td>
                            <td>38 KB</td>
                            <td>
                              <div className="action-table-data">
                                <div className="edit-delete-action m-0">
                                  <Link
                                    to="#"
                                    className="download-icon me-2"
                                  >
                                    <i className="feather-download" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="download-icon"
                                  >
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
        </div>
      </div>
      {/* /Page Content */}
    
  {/* The Modal */}
  <div className="modal fade edit-proposal-modal" id="add-milestone">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Add New File</h4>
          <span className="modal-close">
           <Link
              to="#"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="feather-x" />
            </Link>
          </span>
        </div>
        <div className="modal-body">
          <form action="#">
            <div className="modal-info">
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <div className="pro-form-img">
                    <div className="profile-pic">Profile Photo</div>
                    <div className="upload-files">
                      <label className="file-upload image-upbtn ">
                        <i className="feather-upload me-1" />
                        Upload Photo <input type="file" />
                      </label>
                      <span>
                        For better preview recommended size is 450px x 450px.
                        Max size 5mb.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input-block">
                    <label className="form-label">Title</label>
                    <input className="form-control" type="text" />
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
              <button type="submit" className="btn btn-primary submit-btn">
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

  )
}
export default File;