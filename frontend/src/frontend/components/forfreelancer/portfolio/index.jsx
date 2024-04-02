import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Sidebar } from "../sidebar";
import {
  Project_1,
  Project_2,
  Project_3,
  Project_4,
  Project_5,
  Project_6,
} from "../../imagepath";
const FreelancerPortfolio = () => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Page Content */}
      <div className="content content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="dashboard-sec freelance-favourites">
                <div className="page-title portfolio-title">
                  <h3 className="mb-0">Portfolio</h3>
                  <Link
                    className="btn btn-primary title-btn"
                    data-bs-toggle="modal"
                    to="#portfolio"
                  >
                    <i className="feather-plus" /> Add Portfolio
                  </Link>
                </div>

                <div className="pro-content pt-4 pb-4">
                  <div className="row">
                    <div className="col-sm-6 col-lg-4">
                      <div className="project-widget">
                        <div className="portfolio-img">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src={Project_1}
                          />
                          <div className="portfolio-live">
                            <div className="portfolio-content">
                              <Link
                                data-bs-toggle="modal"
                                to="#portfolio-edit"
                                className="port-icon me-2"
                              >
                                <i className="fas fa-pen" />
                              </Link>
                              <Link
                                data-bs-toggle="modal"
                                to="#delete_modal"
                                className="port-icon me-2"
                              >
                                <i className="fas fa-trash-alt" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="portfolio-detail">
                          <h3 className="pro-name">Razor Website Design</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="project-widget">
                        <div className="portfolio-img">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src={Project_2}
                          />
                          <div className="portfolio-live">
                            <div className="portfolio-content">
                              <Link
                                data-bs-toggle="modal"
                                to="#portfolio-edit"
                                className="port-icon me-2"
                              >
                                <i className="fas fa-pen" />
                              </Link>
                              <Link
                                data-bs-toggle="modal"
                                to="#delete_modal"
                                className="port-icon me-2"
                              >
                                <i className="fas fa-trash-alt" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="portfolio-detail">
                          <h3 className="pro-name">Transport Website</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="project-widget">
                        <div className="portfolio-img">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src={Project_3}
                          />
                          <div className="portfolio-live">
                            <div className="portfolio-content">
                              <Link
                                data-bs-toggle="modal"
                                to="#portfolio-edit"
                                className="port-icon me-2"
                              >
                                <i className="fas fa-pen" />
                              </Link>
                              <Link
                                data-bs-toggle="modal"
                                to="#delete_modal"
                                className="port-icon me-2"
                              >
                                <i className="fas fa-trash-alt" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="portfolio-detail">
                          <h3 className="pro-name">Wordpress Website</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="project-widget">
                        <div className="portfolio-img">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src={Project_4}
                          />
                          <div className="portfolio-live">
                            <div className="portfolio-content">
                              <Link
                                data-bs-toggle="modal"
                                to="#portfolio-edit"
                                className="port-icon me-2"
                              >
                                <i className="fas fa-pen" />
                              </Link>
                              <Link
                                data-bs-toggle="modal"
                                to="#delete_modal"
                                className="port-icon me-2"
                              >
                                <i className="fas fa-trash-alt" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="portfolio-detail">
                          <h3 className="pro-name">Mobile App</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="project-widget">
                        <div className="portfolio-img">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src={Project_5}
                          />
                          <div className="portfolio-live">
                            <div className="portfolio-content">
                              <Link
                                data-bs-toggle="modal"
                                to="#portfolio-edit"
                                className="port-icon me-2"
                              >
                                <i className="fas fa-pen" />
                              </Link>
                              <Link
                                data-bs-toggle="modal"
                                to="#delete_modal"
                                className="port-icon me-2"
                              >
                                <i className="fas fa-trash-alt" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="portfolio-detail">
                          <h3 className="pro-name">Healthcare Website</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="project-widget">
                        <div className="portfolio-img">
                          <img
                            className="img-fluid"
                            alt="User Image"
                            src={Project_6}
                          />
                          <div className="portfolio-live">
                            <div className="portfolio-content">
                              <Link
                                data-bs-toggle="modal"
                                to="#portfolio-edit"
                                className="port-icon me-2"
                              >
                                <i className="fas fa-pen" />
                              </Link>
                              <Link
                                data-bs-toggle="modal"
                                to="#delete_modal"
                                className="port-icon me-2"
                              >
                                <i className="fas fa-trash-alt" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="portfolio-detail">
                          <h3 className="pro-name">Injury Website</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="paginations list-pagination">
                        <li className="page-item">
                          <Link to="#">
                            <i className="feather-chevron-left" />
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="#" className="active">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="#">2</Link>
                        </li>
                        <li className="page-item">
                          <Link to="#">3</Link>
                        </li>
                        <li className="page-item">
                          <Link to="#">...</Link>
                        </li>
                        <li className="page-item">
                          <Link to="#">10</Link>
                        </li>
                        <li className="page-item">
                          <Link to="#">
                            <i className="feather-chevron-right" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Content */}

          {/* The Modal */}
          <div className="modal fade" id="portfolio">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4>Add Portfolio</h4>
                  <span className="modal-close">
                    <Link
                      to="javascript:void(0);"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="fa fa-times orange-text" />
                    </Link>
                  </span>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="modal-info">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="input-block">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="input-block">
                            <label className="form-label">Link</label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="input-block mb-0 d-flex last-group">
                            <div className="w-100">
                              <label className="form-label">Image</label>
                              <input
                                id="test"
                                type="text"
                                defaultValue=""
                                className="form-control"
                              />
                            </div>
                            <label className="file-upload image-upbtn">
                              Upload <input type="file" id="FileUpload1" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submit-section text-end">
                      <Link
                        data-bs-dismiss="modal"
                        className="btn btn-cancel submit-btn"
                      >
                        Cancel
                      </Link>
                      <button
                        type="submit"
                        data-bs-dismiss="modal"
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
          <div className="modal fade" id="portfolio-edit">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4>Edit Portfolio</h4>
                  <span className="modal-close">
                    <Link
                      to="javascript:void(0);"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="fa fa-times orange-text" />
                    </Link>
                  </span>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="modal-info">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="input-block">
                            <label className="form-label">Title</label>
                            <input
                              type="text"
                              defaultValue="Portfolio Name"
                              className="form-control"
                            />
                          </div>
                          <div className="input-block">
                            <label className="form-label">Link</label>
                            <input
                              type="text"
                              defaultValue="https://themeforest.net/item/tasklay-a-task-marketplace-for-freelancers/34742243"
                              className="form-control"
                            />
                          </div>
                          <div className="input-block mb-0 d-flex last-group">
                            <div className="w-100">
                              <label className="form-label">Image</label>
                              <input
                                id="test2"
                                type="text"
                                defaultValue="file:///C:/Users/DreamGuys/Downloads/bird-colorful-logo-gradient-vector/7.jpg"
                                className="form-control"
                              />
                            </div>
                            <label className="file-upload image-upbtn">
                              Upload <input type="file" id="FileUpload" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submit-section text-end">
                      <Link
                        data-bs-dismiss="modal"
                        className="btn btn-cancel submit-btn"
                      >
                        Cancel
                      </Link>
                      <button
                        type="submit"
                        data-bs-dismiss="modal"
                        className="btn btn-primary submit-btn"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="delete_modal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header small-modal">
                  <h4>Confirm to Delete Portfolio</h4>
                  <span className="modal-close">
                    <Link
                      to="javascript:void(0);"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="fa fa-times orange-text" />
                    </Link>
                  </span>
                </div>
                <div className="modal-body">
                  <div className="modal-info">
                    <p className="mb-0">
                      Are you sure you want to delete this portfolio?
                    </p>
                  </div>
                  <form>
                    <div className="submit-section text-end">
                      <Link
                        data-bs-dismiss="modal"
                        className="btn btn-cancel submit-btn"
                      >
                        Cancel
                      </Link>
                      <button
                        type="submit"
                        data-bs-dismiss="modal"
                        className="btn btn-primary submit-btn"
                      >
                        Delete
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FreelancerPortfolio;
