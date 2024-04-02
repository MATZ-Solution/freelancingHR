import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";

import Select from "react-select";
import EmployerBreadcrumb from "../../foremployers/common/employerBreadcrumb";
import FreelancerSidebar from "../../foremployers/common/freelancerSidebar";
import { company_img1, company_img2, company_img3, company_img4, company_img5, default_logo } from "../../imagepath";

const ProjectList = () => {
 
  const optionsSelect = [
    { value: 1, label: "Relevance" },
    { value: 2, label: "Rating" },
    { value: 3, label: "Latest" },
    { value: 4, label: "Free" },
  ];

  return (
    <>
      {/* Breadcrumb */}     
      <EmployerBreadcrumb title="Project List" subtitle="Projects"/>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                {/* Search Filter */}
              <FreelancerSidebar/>
                {/* /Search Filter */}
              </StickyBox>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
             
           <div className="sort-tab develop-list-select">
  <div className="row align-items-center">
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
      <div className="d-flex align-items-center">
        <div className="freelance-view">
          <h4>Found 9 Results</h4>
        </div>
      </div>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-sm-end">
      <div className="sort-by">
      <Select
        className="select "
        options={optionsSelect}
        placeholder="Sort by (Default)"
      />
      </div>
      <ul className="list-grid d-flex align-items-center">
        <li><Link to="/project" ><i className="fas fa-th-large" /></Link></li>
        <li><Link to="/project-list" className="favour-active"><i className="fas fa-list" /></Link></li>
      </ul>
    </div>
  </div>
            </div>

          


<div>
  <div className="bootstrap-tags text-start pl-0 d-none">
    <span className="badge badge-pill badge-skills">UI/UX ProjectList <span className="tag-close" data-role="remove"><i className="fas fa-times" /></span></span> 
    <span className="badge badge-pill badge-skills">USA <span className="tag-close" data-role="remove"><i className="fas fa-times" /></span></span> 
    <span className="badge badge-pill badge-skills">Hourly <span className="tag-close" data-role="remove"><i className="fas fa-times" /></span></span> 
    <span className="badge badge-pill badge-skills">0-1 years <span className="tag-close" data-role="remove"><i className="fas fa-times" /></span></span>
    <span className="badge badge-pill badge-skills">USD <span className="tag-close" data-role="remove"><i className="fas fa-times" /></span></span>
  </div>
  <div className="list-book-mark book-mark favour-book">
  <div className="row">
    <div className="col-lg-12">
      <div className=" project-list-card">
        <Link to="#" className="add-fav-list"><i className="fa-regular fa-heart" /></Link>
        <div className="company-detail-image">
          <img src={default_logo} className="img-fluid" alt="logo" />
        </div>
        <div>
          <div className="company-title">
            <p>UI/UX Developer</p>
            <h4>Website Designer Required For Directory Theme</h4>
          </div>
          <div className="company-splits">
            <div>
              <div className="company-address">
                <ul>
                  <li>
                    <i className="feather-map-pin" />Los Angels
                  </li>
                  <li>
                    <i className="feather-calendar" />Posted just now
                  </li>
                  <li>
                    <i className="feather-file-2" />1 Proposal
                  </li>
                </ul>
              </div>
              <div className="company-description">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              </div>
              <div className="company-description">
                <div className="tags">
                  <Link to="#"><span className="badge badge-pill badge-design">After Effects</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Illustrator</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Whiteboard</span></Link>
                </div>
              </div>
            </div>
            <div className="company-split-price">
              <h5>$35-$350</h5>
              <h6>Price : Fixed</h6>
              <Link to="/project-details" className="btn btn-submits">Submit Proposal</Link>
            </div>
          </div>
        </div>	
      </div>
      <div className=" project-list-card">
        <Link to="#" className="add-fav-list"><i className="fa-regular fa-heart" /></Link>
        <div className="company-detail-image">
          <img src={company_img1} className="img-fluid" alt="logo" />
        </div>
        <div>
          <div className="company-title">
            <p>UI/UX Developer</p>
            <h4>Create desktop applications with source PHP</h4>
          </div>
          <div className="company-splits">
            <div>
              <div className="company-address">
                <ul>
                  <li>
                    <i className="feather-map-pin" />Florida, USA
                  </li>
                  <li>
                    <i className="feather-calendar" />Posted 1 day ago
                  </li>
                  <li>
                    <i className="feather-file-2" />76 Proposal
                  </li>
                </ul>
              </div>
              <div className="company-description">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              </div>
              <div className="company-description">
                <div className="tags">
                  <Link to="#"><span className="badge badge-pill badge-design">After Effects</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Illustrator</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Whiteboard</span></Link>
                </div>
              </div>
            </div>
            <div className="company-split-price">
              <h5>$40-$350</h5>
              <h6>Price : Fixed</h6>
              <Link to="/project-details" className="btn btn-submits">Submit Proposal</Link>
            </div>
          </div>
        </div>	
      </div>
      <div className=" project-list-card">
        <Link to="#" className="add-fav-list"><i className="fa-regular fa-heart" /></Link>
        <div className="company-detail-image">
          <img src={company_img2} className="img-fluid" alt="logo" />
        </div>
        <div>
          <div className="company-title">
            <p>UI/UX Developer</p>
            <h4>PHP, Javascript Projects for Beginners</h4>
          </div>
          <div className="company-splits">
            <div>
              <div className="company-address">
                <ul>
                  <li>
                    <i className="feather-map-pin" />Alabama, USA
                  </li>
                  <li>
                    <i className="feather-calendar" />Posted 15 days ago
                  </li>
                  <li>
                    <i className="feather-file-2" />15 Proposal
                  </li>
                </ul>
              </div>
              <div className="company-description">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              </div>
              <div className="company-description">
                <div className="tags">
                  <Link to="#"><span className="badge badge-pill badge-design">After Effects</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Illustrator</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Whiteboard</span></Link>
                </div>
              </div>
            </div>
            <div className="company-split-price">
              <h5>$45-$650</h5>
              <h6>Price : Fixed</h6>
              <Link to="/project-details" className="btn btn-submits">Submit Proposal</Link>
            </div>
          </div>
        </div>	
      </div>
      <div className=" project-list-card">
        <Link to="#" className="add-fav-list"><i className="fa-regular fa-heart" /></Link>
        <div className="company-detail-image">
          <img src={company_img3} className="img-fluid" alt="logo" />
        </div>
        <div>
          <div className="company-title">
            <p>UI/UX Developer</p>
            <h4>Swift / SwiftUI Developer for B2B iOS apps</h4>
          </div>
          <div className="company-splits">
            <div>
              <div className="company-address">
                <ul>
                  <li>
                    <i className="feather-map-pin" />Texas, USA
                  </li>
                  <li>
                    <i className="feather-calendar" />Posted 2 months ago
                  </li>
                  <li>
                    <i className="feather-file-2" />44 Proposal
                  </li>
                </ul>
              </div>
              <div className="company-description">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              </div>
              <div className="company-description">
                <div className="tags">
                  <Link to="#"><span className="badge badge-pill badge-design">After Effects</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Illustrator</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Whiteboard</span></Link>
                </div>
              </div>
            </div>
            <div className="company-split-price">
              <h5>$100-$700</h5>
              <h6>Price : Fixed</h6>
              <Link to="/project-details" className="btn btn-submits">Submit Proposal</Link>
            </div>
          </div>
        </div>	
      </div>
      <div className=" project-list-card">
        <Link to="#" className="add-fav-list"><i className="fa-regular fa-heart" /></Link>
        <div className="company-detail-image">
          <img src={company_img4} className="img-fluid" alt="logo" />
        </div>
        <div>
          <div className="company-title">
            <p>UI/UX Developer</p>
            <h4>Full-stack Developer to help us to build our</h4>
          </div>
          <div className="company-splits">
            <div>
              <div className="company-address">
                <ul>
                  <li>
                    <i className="feather-map-pin" />Kansas, USA
                  </li>
                  <li>
                    <i className="feather-calendar" />Posted 3 months ago
                  </li>
                  <li>
                    <i className="feather-file-2" />36 Proposal
                  </li>
                </ul>
              </div>
              <div className="company-description">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              </div>
              <div className="company-description">
                <div className="tags">
                  <Link to="#"><span className="badge badge-pill badge-design">After Effects</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Illustrator</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Whiteboard</span></Link>
                </div>
              </div>
            </div>
            <div className="company-split-price">
              <h5>$100-$700</h5>
              <h6>Price : Fixed</h6>
              <Link to="/project-details" className="btn btn-submits">Submit Proposal</Link>
            </div>
          </div>
        </div>	
      </div>
      <div className=" project-list-card">
        <Link to="#" className="add-fav-list"><i className="fa-regular fa-heart" /></Link>
        <div className="company-detail-image">
          <img src={company_img5} className="img-fluid" alt="logo" />
        </div>
        <div>
          <div className="company-title">
            <p>UI/UX Developer</p>
            <h4>Website Designer Required For Directory Theme</h4>
          </div>
          <div className="company-splits">
            <div>
              <div className="company-address">
                <ul>
                  <li>
                    <i className="feather-map-pin" />California, USA
                  </li>
                  <li>
                    <i className="feather-calendar" />Posted 1 months ago
                  </li>
                  <li>
                    <i className="feather-file-2" />6 Proposal
                  </li>
                </ul>
              </div>
              <div className="company-description">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
              </div>
              <div className="company-description">
                <div className="tags">
                  <Link to="#"><span className="badge badge-pill badge-design">After Effects</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Illustrator</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">HTML</span></Link>
                  <Link to="#"><span className="badge badge-pill badge-design">Whiteboard</span></Link>
                </div>
              </div>
            </div>
            <div className="company-split-price">
              <h5>$10-$70</h5>
              <h6>Price : Fixed</h6>
              <Link to="/project-details" className="btn btn-submits">Submit Proposal</Link>
            </div>
          </div>
        </div>	
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12">
      <ul className="paginations list-pagination">
        <li className="page-item"><Link to="#"><i className="feather-chevron-left" /></Link>
        </li>
        <li className="page-item"><Link to="#" className="active">1</Link></li>
        <li className="page-item"><Link to="#">2</Link></li>
        <li className="page-item"><Link to="#">3</Link></li>
        <li className="page-item"><Link to="#">...</Link></li>
        <li className="page-item"><Link to="#">10</Link></li>
        <li className="page-item"><Link to="#"><i className="feather-chevron-right" /></Link></li>
      </ul>
    </div>
  </div>
</div>
</div>






            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* The Modal */}
      <div className="modal fade" id="rating">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header d-block b-0 pb-0">
              <span className="modal-close float-end">
                <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="fa fa-times orange-text" />
                </Link>
              </span>
            </div>
            <div className="modal-body">
              <form action="project">
                <div className="modal-info">
                  <div className="text-center pt-0 mb-5">
                    <h3>Please login to Favourite Freelancer</h3>
                  </div>
                  <div className="submit-section text-center">
                    <button
                      data-bs-dismiss="modal"
                      className="btn btn-primary black-btn click-btn"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary click-btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /The Modal */}
    </>
  );
};
export default ProjectList;
