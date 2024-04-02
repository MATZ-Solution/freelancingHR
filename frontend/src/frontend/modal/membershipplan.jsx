import React from "react";
import { bank, paypal, strip } from "../components/imagepath";
import { Link } from "react-router-dom";

const MembershipPlan = () => {
  return (
    <div>
      <div className="modal fade" id="payout_modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Subscription - Basic Plan</h4>
              <span className="modal-close">
                <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="fa fa-times orange-text" />
                </Link>
              </span>
            </div>
            <div className="modal-body">
              <div className="modal-info">
                <div className="wallet-add">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="bank-selection">
                        <input
                          type="radio"
                          defaultValue="attach_link"
                          id="rolelink"
                          name="attachment"
                          defaultChecked=""
                        />
                        <label htmlFor="rolelink">
                          <img src={paypal} alt="Paypal" />
                          <span className="role-check">
                            <i className="fa-solid fa-circle-check" />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bank-selection">
                        <input
                          type="radio"
                          defaultValue="attach_link"
                          id="rolelink1"
                          name="attachment"
                        />
                        <label htmlFor="rolelink1">
                          <img src={strip} alt="Stripe" />
                          <span className="role-check">
                            <i className="fa-solid fa-circle-check" />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="bank-selection">
                        <input
                          type="radio"
                          defaultValue="attach_link"
                          id="rolelink2"
                          name="attachment"
                        />
                        <label htmlFor="rolelink2">
                          <img src={bank} alt="image" />
                          <span className="role-check">
                            <i className="fa-solid fa-circle-check" />
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form>
                <div className="doc-btn text-end">
                  <Link data-bs-dismiss="modal" className="btn btn-gray">
                    Cancel
                  </Link>
                  <Link
                    to="#success-hire"
                    data-bs-toggle="modal"
                    className="btn btn-primary"
                  >
                    Subscribe Now
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* The Modal */}
      <div className="modal fade success-modal hire-modal" id="success-hire">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-body pt-4">
              <div className="success-msg-content text-center">
                <h4>Payment Successfully </h4>
                <p>
                  Thanks for Purchasing “Basic plan”, Enjoy the benefit of plan
                  for a month.
                </p>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary mt-3"
                >
                  Close
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /The Modal */}
    </div>
  );
};

export default MembershipPlan;
