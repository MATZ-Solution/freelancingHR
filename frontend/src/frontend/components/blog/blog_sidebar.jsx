import React from 'react';
import { Link } from 'react-router-dom';
// Import Images
import { Blog_thumb_01,Blog_thumb_02,Blog_thumb_03 } from "../imagepath"

const BlogSidebar =()=> {

        return(
            <>              
              {/* Latest Posts */}
              <div className=" pro-post widget-box post-widget" >
                <h4 className="pro-title">Latest Posts</h4>
                <div className="pro-content pt-0">
                  <ul className="latest-posts">
                    <li>
                      <div className="post-thumb">
                        <Link to="/blog-details">
                          <img
                            className="img-fluid"
                            src={Blog_thumb_03}
                            alt = ""
                          />
                        </Link>
                      </div>
                      <div className="post-info">
                        <h4>
                          <Link to="/blog-details">
                            XGEN Freelancing Platform - How to get job through online?
                          </Link>
                        </h4>
                        <Link to="#" className="posts-date">
                          <i className="far fa-calendar-alt" /> 2 May 2021
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <Link to="/blog-details">
                          <img
                            className="img-fluid"
                            src={Blog_thumb_02}
                            alt = ""
                          />
                        </Link>
                      </div>
                      <div className="post-info">
                        <h4>
                          <Link to="/blog-details">
                            People who completed NAND technology got job 90%{" "}
                          </Link>
                        </h4>
                        <Link to="#" className="posts-date">
                          <i className="far fa-calendar-alt" /> 3 May 2021
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <Link to="/blog-details">
                          <img
                            className="img-fluid"
                            src={Blog_thumb_01}
                            alt = ""
                          />
                        </Link>
                      </div>
                      <div className="post-info">
                        <h4>
                          <Link to="/blog-details">
                            There are many variations of passages
                          </Link>
                        </h4>
                        <Link to="#" className="posts-date">
                          <i className="far fa-calendar-alt" /> 4 May 2021
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Latest Posts */}
              {/* Categories */}
              <div className=" pro-post widget-box category-widget">
                <h4 className="pro-title">Blog Categories</h4>
                <div className="pro-content">
                  <ul className="category-link">
                    <li>
                      <a href="#" >Web Development</a>
                    </li>
                    <li>
                      <a href="#" >IT Consultancy</a>
                    </li>
                    <li>
                      <a href="#" >Email Marketing</a>
                    </li>
                    <li>
                      <a href="#" >Business Consulting</a>
                    </li>
                    <li>
                      <a href="#" >Apps Development</a>
                    </li>
                    <li>
                      <a href="#" >SEO Optimizations</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Categories */}
              {/* Tags */}
              <div className=" pro-post widget-box tags-widget">
                <h4 className="pro-title">Tags</h4>
                <div className="pro-content">
                  <ul className="tags">
                    <li>
                      <Link to="#" className="tag">
                        Employer
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="tag">
                        Student
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="tag">
                        Freelancer
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="tag">
                        Designer
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="tag">
                        Jobs
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="tag">
                        Developer
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="tag">
                        Coding
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="tag">
                        Skills
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="tag">
                        Knowledge
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="tag">
                        Node Js
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="tag">
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="tag">
                        Engineer
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="tag">
                        Online
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="tag">
                        Study
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="tag">
                        Project
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="tag">
                        Experience
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="tag">
                        Freshers
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Tags */}
              {/* Share Widget */}
              <div className="pro-post widget-box post-widget">
                <h3 className="pro-title">Share</h3>
                <div className="pro-content">
                  <Link to="#" className="share-icon">
                    <i className="fas fa-share-alt" /> Share
                  </Link>
                </div>
              </div>
              {/* /Share Widget */}           
            </>
        )
    }

export { BlogSidebar };