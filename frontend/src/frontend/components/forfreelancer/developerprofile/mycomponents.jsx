import React from "react";
import { Link } from "react-router-dom";
import { Project_11_1, Project_8, Project_9, Project_Copy } from "../../imagepath";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
const Mycomponents = () => {
    return (
        <>
            <Gallery>
                {/* Project Tab Content */}
                <div
                    className="pro-post project-widget widget-box project-gallery"
                    id="project"
                >
                    <h3 className="pro-title">PROJECTS</h3>
                    <div className="pro-content">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div className="project-widget">
                                    <div className="pro-image">
                                        <Item
                                            original={Project_8}
                                            thumbnail={Project_8}
                                            width="200"
                                            height="200"
                                        >

                                            {({ ref, open }) => (
                                                <Link to="/developer-profile" onClick={open}>
                                                    <img
                                                        ref={ref}
                                                        className="img-fluid"
                                                        alt="User Image"
                                                        src={Project_8}
                                                    />
                                                </Link>
                                            )}

                                        </Item>
                                    </div>
                                    <div className="project-footer">
                                        <div className="d-flex align-items-center">
                                            <div className="pro-detail">
                                                <h3 className="pro-name">Education</h3>
                                                <p className="pro-designation">Web design</p>
                                            </div>
                                            <div className="view-image">
                                                <Link to="project">
                                                    <i className="fas fa-arrow-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div className="project-widget">
                                    <div className="pro-image">
                                        <Item
                                            original={Project_9}
                                            thumbnail={Project_9}
                                            width="200"
                                            height="200"
                                        >

                                            {({ ref, open }) => (
                                                <Link to="/developer-profile" onClick={open}>
                                                    <img
                                                        ref={ref}
                                                        className="img-fluid"
                                                        alt="User Image"
                                                        src={Project_9}
                                                    />
                                                </Link>
                                            )}

                                        </Item>
                                    </div>
                                    <div className="project-footer">
                                        <div className="d-flex align-items-center">
                                            <div className="pro-detail">
                                                <h3 className="pro-name">Photoshoot</h3>
                                                <p className="pro-designation">Web design</p>
                                            </div>
                                            <div className="view-image">
                                                <Link to="project">
                                                    <i className="fas fa-arrow-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div className="project-widget">
                                    <div className="pro-image">
                                        <Item
                                            original={Project_Copy}
                                            thumbnail={Project_Copy}
                                            width="200"
                                            height="200"
                                        >

                                            {({ ref, open }) => (
                                                <Link to="/developer-profile" onClick={open}>
                                                    <img
                                                        ref={ref}
                                                        className="img-fluid"
                                                        alt="User Image"
                                                        src={Project_Copy}
                                                    />
                                                </Link>
                                            )}

                                        </Item>
                                    </div>
                                    <div className="project-footer">
                                        <div className="d-flex align-items-center">
                                            <div className="pro-detail">
                                                <h3 className="pro-name">Electrical</h3>
                                                <p className="pro-designation">Web design</p>
                                            </div>
                                            <div className="view-image">
                                                <Link to="project">
                                                    <i className="fas fa-arrow-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <div className="project-widget">
                                    <div className="pro-image">
                                         <Item
                                            original={Project_11_1}
                                            thumbnail={Project_11_1}
                                            width="200"
                                            height="200"
                                        >
                                            {({ ref, open }) => (
                                                <Link to="/developer-profile" onClick={open}>
                                                    <img
                                                        ref={ref}
                                                        className="img-fluid"
                                                        alt="User Image"
                                                        src={Project_11_1}
                                                    />
                                                </Link>
                                            )}
                                        </Item>
                                    </div>
                                    <div className="project-footer">
                                        <div className="d-flex align-items-center">
                                            <div className="pro-detail">
                                                <h3 className="pro-name">Project name</h3>
                                                <p className="pro-designation">Web design</p>
                                            </div>
                                            <div className="view-image">
                                                <Link to="project">
                                                    <i className="fas fa-arrow-right" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <Link to="project" className="btn more-btn">
                                    View more{" "}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Project Tab Content */}
            </Gallery>
        </>
    )
}
export default Mycomponents;