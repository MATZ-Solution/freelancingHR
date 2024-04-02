import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { Avatar_25, proposal_user_01, proposal_user_02, proposal_user_03, table_avatar_02, table_avatar_04 } from "../../imagepath";
import { Sidebar } from '../sidebar';
const Freelancer = () => {
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
  return (
    <>
    
       {/* Page Content */}
       <div className="content">
         <div className="container-fluid">
          <div className="row">
             <div className="col-xl-3 col-md-4 theiaStickySidebar">
               <StickyBox offsetTop={20} offsetBottom={20}>
                 <Sidebar />
               </StickyBox>
             </div>
           <div className="col-xl-9 col-lg-8">
  <div className="page-title">
    <h3>My Proposals</h3>
  </div>
 
  {/* Proposals list */}
  <div className="proposals-section">
    {/* Proposals */}
    <div className="freelancer-proposals">
      <div className="project-proposals align-items-center freelancer">
        <div className="proposal-info">
          <div className="proposals-details">
            <h3 className="proposals-title">3D Renders and Amazon Product Store images/Video</h3>
            <ul>
              <li>
                <div className="proposal-img">
                  <div className="proposal-client">
                    <img src={table_avatar_02} alt="Img" className="img-fluid" />
                    <h4>Hayley Melba</h4>
                    <span className="info-btn">client</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="proposal-client-price">
                  <h4 className="title-info">Client Price</h4>
                  <h3 className="client-price">$599.00 <span className="price-type">( Fixed )</span></h3>
                </div>
              </li>
              <li>
                <div className="proposal-job-type">
                  <h4 className="title-info">Job Type</h4>
                  <h3>Hourly</h3>
                </div>
              </li>
              <li>
                <div className="project-amount">
                  <h4 className="title-info">Your Price</h4>
                  <h3>$500.00<span>(in 12 Days)</span></h3>
                </div>
              </li>
              <li>
                <div className="project-action text-center">
                  <Link data-bs-toggle="modal" to="#file" className="projects-btn">Edit Proposals </Link>
                  <Link to="freelancer-view-project-detail">View Project</Link>
                  <Link to="#" className="proposal-delete mb-0">Delete Proposal</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Proposals */} 
    {/* Proposals */}
    <div className="freelancer-proposals">
      <div className="project-proposals align-items-center freelancer">
        <div className="proposal-info">
          <div className="proposals-details">
            <h3 className="proposals-title">Landing Page Redesign / Sales Page Redesign (Not Entire Web)</h3>
            <ul>
              <li>
                <div className="proposal-img">
                  <div className="proposal-client">
                    <img src={Avatar_25} alt="Img" className="img-fluid" />
                    <h4>Hayden Paltridge</h4>
                    <span className="info-btn">client</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="proposal-client-price">
                  <h4 className="title-info">Client Price</h4>
                  <h3 className="client-price">$460.00 <span className="price-type">( Fixed )</span></h3>
                </div>
              </li>
              <li>
                <div className="proposal-job-type">
                  <h4 className="title-info">Job Type</h4>
                  <h3>Hourly</h3>
                </div>
              </li>
              <li>
                <div className="project-amount">
                  <h4 className="title-info">Your Price</h4>
                  <h3>$420.00<span>(in 12 Days)</span></h3>
                </div>
              </li>
              <li>
                <div className="project-action text-center">
                  <Link data-bs-toggle="modal" to="#file" className="projects-btn">Edit Proposals </Link>
                  <Link to="/freelancer-view-project-detail">View Project</Link>
                  <Link to="#" className="proposal-delete mb-0">Delete Proposal</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Proposals */} 
    {/* Proposals */}
    <div className="freelancer-proposals">
      <div className="project-proposals align-items-center freelancer">
        <div className="proposal-info">
          <div className="proposals-details">
            <h3 className="proposals-title">WooCommerce Product Page Back Up Restoration</h3>
            <ul>
              <li>
                <div className="proposal-img">
                  <div className="proposal-client">
                    <img src={proposal_user_01} alt="Img" className="img-fluid" />
                    <h4>Lily Lipscombe</h4>
                    <span className="info-btn">client</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="proposal-client-price">
                  <h4 className="title-info">Client Price</h4>
                  <h3 className="client-price">$370.00 <span className="price-type">( Fixed )</span></h3>
                </div>
              </li>
              <li>
                <div className="proposal-job-type">
                  <h4 className="title-info">Job Type</h4>
                  <h3>Hourly</h3>
                </div>
              </li>
              <li>
                <div className="project-amount">
                  <h4 className="title-info">Your Price</h4>
                  <h3>$300.00<span>(in 12 Days)</span></h3>
                </div>
              </li>
              <li>
                <div className="project-action text-center">
                  <Link data-bs-toggle="modal" to="#file" className="projects-btn">Edit Proposals </Link>
                  <Link to="/freelancer-view-project-detail">View Project</Link>
                  <Link to="#" className="proposal-delete mb-0">Delete Proposal</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Proposals */} 
    {/* Proposals */}
    <div className="freelancer-proposals">
      <div className="project-proposals align-items-center freelancer">
        <div className="proposal-info">
          <div className="proposals-details">
            <h3 className="proposals-title">Full-stack Developer to help us to build our</h3>
            <ul>
              <li>
                <div className="proposal-img">
                  <div className="proposal-client">
                    <img src={table_avatar_04} alt="Img" className="img-fluid" />
                    <h4>Flynn Gosman</h4>
                    <span className="info-btn">client</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="proposal-client-price">
                  <h4 className="title-info">Client Price</h4>
                  <h3 className="client-price">$490.00 <span className="price-type">( Fixed )</span></h3>
                </div>
              </li>
              <li>
                <div className="proposal-job-type">
                  <h4 className="title-info">Job Type</h4>
                  <h3>Hourly</h3>
                </div>
              </li>
              <li>
                <div className="project-amount">
                  <h4 className="title-info">Your Price</h4>
                  <h3>$450.00<span>(in 12 Days)</span></h3>
                </div>
              </li>
              <li>
                <div className="project-action text-center">
                  <Link data-bs-toggle="modal" to="#file" className="projects-btn">Edit Proposals </Link>
                  <Link to="/freelancer-view-project-detail">View Project</Link>
                  <Link to="#" className="proposal-delete mb-0">Delete Proposal</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Proposals */} 
    {/* Proposals */}
    <div className="freelancer-proposals">
      <div className="project-proposals align-items-center freelancer">
        <div className="proposal-info">
          <div className="proposals-details">
            <h3 className="proposals-title">Video animator to bring some illustrations to life</h3>
            <ul>
              <li>
                <div className="proposal-img">
                  <div className="proposal-client">
                    <img src={proposal_user_02} alt="Img" className="img-fluid" />
                    <h4>Emma Icely</h4>
                    <span className="info-btn">client</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="proposal-client-price">
                  <h4 className="title-info">Client Price</h4>
                  <h3 className="client-price">$680.00 <span className="price-type">( Fixed )</span></h3>
                </div>
              </li>
              <li>
                <div className="proposal-job-type">
                  <h4 className="title-info">Job Type</h4>
                  <h3>Hourly</h3>
                </div>
              </li>
              <li>
                <div className="project-amount">
                  <h4 className="title-info">Your Price</h4>
                  <h3>$620.00<span>(in 12 Days)</span></h3>
                </div>
              </li>
              <li>
                <div className="project-action text-center">
                  <Link to="#" className="projects-btn">Closed </Link>
                  <Link to="/freelancer-view-project-detail">View Project</Link>
                  <Link to="#" className="proposal-delete mb-0">Delete Proposal</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Proposals */} 
    {/* Proposals */}
    <div className="freelancer-proposals mb-0">
      <div className="project-proposals align-items-center freelancer">
        <div className="proposal-info">
          <div className="proposals-details">
            <h3 className="proposals-title">Food Delivery Mobile App</h3>
            <ul>
              <li>
                <div className="proposal-img">
                  <div className="proposal-client">
                    <img src={proposal_user_03} alt="Img" className="img-fluid" />
                    <h4>Cody Cornish</h4>
                    <span className="info-btn">client</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="proposal-client-price">
                  <h4 className="title-info">Client Price</h4>
                  <h3 className="client-price">$760.00 <span className="price-type">( Fixed )</span></h3>
                </div>
              </li>
              <li>
                <div className="proposal-job-type">
                  <h4 className="title-info">Job Type</h4>
                  <h3>Hourly</h3>
                </div>
              </li>
              <li>
                <div className="project-amount">
                  <h4 className="title-info">Your Price</h4>
                  <h3>$680.00<span>(in 12 Days)</span></h3>
                </div>
              </li>
              <li>
                <div className="project-action text-center">
                  <Link to="#" className="projects-btn">Closed </Link>
                  <Link to="/freelancer-view-project-detail">View Project</Link>
                  <Link to="#" className="proposal-delete mb-0">Delete Proposal</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Proposals */} 
  </div>
  {/* /Proposals list */}
</div>

          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* The Modal */}
      <div className="modal fade" id="file">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">EDIT PROPOSAL</h4>
              <span className="modal-close">
                <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="far fa-times-circle" />
                </Link>
              </span>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="modal-info">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Cost</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Days</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Description</label>
                        {/* <RichTextEditor
                          value="Default value"
                          options={{
                            lang: 'ru-RU',
                            height: 350,
                            dialogsInBody: true,
                            toolbar: [
                              ['style', ['style']],
                              ['font', ['bold', 'underline', 'clear']],
                              ['fontname', ['fontname']],
                              ['para', ['ul', 'ol', 'paragraph']],
                              ['table', ['table']],
                              ['insert', ['link', 'picture', 'video']],
                              ['view', ['fullscreen', 'codeview']]
                            ]
                          }}
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section text-end">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Save Proposal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> 
      {/* The Modal */}
    </>
  )
}
export default Freelancer;