/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import {
  Card,
  Icon_19,
  Logo_01,
  Wallet_icon_1,
  Wallet_icon_2,
  Wallet_icon_3,
  home_icon,
  install_line,
  money_dollar_box,
  uninstall_line,
  wallet_icon,
} from "../../imagepath";
import { Sidebar } from "../sidebar";
import { Table } from "antd";
// import 'antd/dist/antd.css';
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
const DepositFunds = () => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  const data = [
    {
      id: 1,
      date: "",
      recipient: "Amaze Tech",
      transactionid: "",
      status: "Settled",
      amount: "+ $150",
      bg: "text-success",
      icon: "fas fa-check-circle",
    },
    {
      id: 2,
      date: "",
      recipient: "Amaze Tech",
      transactionid: "",
      status: "Settled",
      amount: "+ $150",
      bg: "text-success",
      icon: "fas fa-check-circle",
    },
    {
      id: 3,
      date: "",
      recipient: "Amaze Tech",
      transactionid: "",
      status: "Settled",
      amount: "+ $150",
      bg: "text-success",
      icon: "fas fa-check-circle",
    },
    {
      id: 4,
      date: "",
      recipient: "Amaze Tech",
      transactionid: "",
      status1: Icon_19,
      status: "process",
      amount: "+ $150",
      bg: "text-danger",
    },
    {
      id: 5,
      date: "",
      recipient: "Amaze Tech",
      transactionid: "",
      status: "Success",
      amount: "+ $150",
      bg: "text-danger",
      icon: "fas fa-check-circle",
    },
    {
      id: 6,
      date: "",
      recipient: "Amaze Tech",
      transactionid: "",
      status: "Settled",
      amount: "+ $150",
      bg: "text-success",
      icon: "fas fa-check-circle",
    },
    {
      id: 7,
      date: "",
      recipient: "Amaze Tech",
      transactionid: "",
      status: "Settled",
      amount: "+ $150",
      bg: "text-success",
      icon: "fas fa-check-circle",
    },
  ];

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (text, record) => (
        <>
          16 Sep 2021
          <br />
          <span>Today • 09:35 PM</span>
          {text}
        </>
      ),
      sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "Recipient",
      dataIndex: "recipient",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.recipient.length - b.recipient.length,
    },
    {
      title: "Transaction Id",
      dataIndex: "transactionid",
      render: (text, record) => (
        <>
          3CW 4925 C715314
          <br />
          <span>Yesterday • 10:24 PM</span>
          {text}
        </>
      ),
      sorter: (a, b) => a.transactionid.length - b.transactionid.length,
    },
    {
      title: "Status",
      dataIndex: " status",
      render: (text, record) => (
        <>
          <span>
            <i className={record.icon}></i>
          </span>
          <img className="img-fluid" src={record.status1} alt="" />
          {record.status}
        </>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (text, record) => (
        <>
          <span className={record.bg}>{text}</span>
        </>
      ),
      sorter: (a, b) => a.amount.length - b.amount.length,
    },
  ];
  return (
    <>
      {/* Page Content */}
      <div className="content content-page">
        <div className="container-fluid">
          <div className="row">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="dashboard-sec payout-section freelancer-statements">
                <div className="page-title portfolio-title">
                  <h3 className="mb-0">Wallet</h3>
                </div>
                <div className="widget-section">
                  <div className="row row-gap">
                    <div className="col-md-6 col-xl-3 col-lg-4 d-flex">
                      <div className="dash-widget flex-fill">
                        <div className="dash-info">
                          <div className="d-flex">
                            <div className="dashboard-icon">
                              <img src={money_dollar_box} alt="icon" />
                            </div>
                            <div className="dash-widget-info">
                              <span>Total Added</span>
                              <h5>$10,000</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-3 col-lg-4 d-flex">
                      <div className="dash-widget flex-fill">
                        <div className="dash-info">
                          <div className="d-flex">
                            <div className="dashboard-icon">
                              <img src={wallet_icon} alt="icon" />
                            </div>
                            <div className="dash-widget-info">
                              <span>Wallet Balance</span>
                              <h5>$100</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-3 col-lg-4 d-flex">
                      <div className="dash-widget flex-fill">
                        <div className="dash-info">
                          <div className="d-flex">
                            <div className="dashboard-icon">
                              <img src={install_line} alt="icon" />
                            </div>
                            <div className="dash-widget-info">
                              <span>Total Credit</span>
                              <h5>$750</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-3 col-lg-4 d-flex">
                      <div className="dash-widget flex-fill">
                        <div className="dash-info">
                          <div className="d-flex">
                            <div className="dashboard-icon">
                              <img src={uninstall_line} alt="icon" />
                            </div>
                            <div className="dash-widget-info">
                              <span>Total Debit</span>
                              <h5>$870</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Table */}
                <div className="table-top-section">
                  <div className="table-header">
                    <h5 className="mb-0">Wallet Transactions</h5>
                  </div>
                  <div className="table-options">
                    <div className="data-search-input">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search here"
                        name="search"
                        id="search"
                      />
                    </div>
                    <Link to="#" className="table-option-btn">
                      <i className="feather-printer" />
                    </Link>
                    <Link to="#" className="table-option-btn">
                      <i className="feather-repeat" />
                    </Link>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Payment Type</th>
                        <th>Amount</th>
                        <th>Fees</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>29 Sep 2023, 11:26 PM</td>
                        <td>1023456</td>
                        <td>Wallet Top-up</td>
                        <td>PayPal</td>
                        <td className="text-success">+$80.00</td>
                        <td>$80.00</td>
                        <td>
                          <span className="bade success-bg-light">Paid</span>
                        </td>
                      </tr>
                      <tr>
                        <td>17 Sep 2023, 09:14 AM</td>
                        <td>1023457</td>
                        <td>Project</td>
                        <td>Stripe</td>
                        <td className="text-danger">-$20.50</td>
                        <td>$20.50</td>
                        <td>
                          <span className="bade danger-bg-light">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>13 Sep 2023, 11:15 AM</td>
                        <td>1023458</td>
                        <td>Income</td>
                        <td>Bank Transfer</td>
                        <td className="text-success">+$35.70</td>
                        <td>$35.70</td>
                        <td>
                          <span className="bade success-bg-light">Paid</span>
                        </td>
                      </tr>
                      <tr>
                        <td>07 Sep 2023, 05:37 PM</td>
                        <td>1023459</td>
                        <td>Wallet Top-up</td>
                        <td>PayPal</td>
                        <td className="text-success">+$62.80</td>
                        <td>$62.80</td>
                        <td>
                          <span className="bade danger-bg-light">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <td>02 Sep 2023, 07:42 PM</td>
                        <td>1023460</td>
                        <td>Purchase</td>
                        <td>Stripe</td>
                        <td className="text-danger">-$73.30</td>
                        <td>$73.30</td>
                        <td>
                          <span className="bade success-bg-light">Paid</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /Table */}
              </div>
            </div>

            {/* /sidebar */}
          </div>
        </div>
      </div>
      {/* pagecontent */}

      {/* /Page Content */}
      {/* The Modal */}
      <div className="modal fade wallet-rupee" id="wallet">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-close">
                <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="far fa-times-circle orange-text" />
                </Link>
              </span>
            </div>
            <div className="modal-body">
              <div className="payment-list wallet card-body wallet-list">
                <div className="wallet-head text-center">
                  <img className="img-fluid" src={Logo_01} alt="app-store" />
                  <h2>Add wallet</h2>
                </div>
                <div className="form-group profile-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <button className="dol-btn" type="submit">
                        $
                      </button>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <label className="radio-inline custom_radio me-4">
                  <input type="radio" name="optradio" defaultChecked="" />
                  <span className="checkmark" /> Paypal
                </label>
                <label className="radio-inline custom_radio">
                  <input type="radio" name="optradio" />
                  <span className="checkmark" /> Card
                </label>
                <div className="bootstrap-tags text-start ps-0">
                  <span className="badge badge-pill badge-skills">$50</span>
                  <span className="badge badge-pill badge-skills">$100</span>
                  <span className="badge badge-pill badge-skills">$150</span>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="card_number">Card Number</label>
                      <input
                        className="form-control"
                        id="card_number"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="first_name">First Name</label>
                      <input
                        className="form-control"
                        id="first_name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="last_name">Last Name</label>
                      <input
                        className="form-control"
                        id="last_name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group">
                      <label htmlFor="expiry_on">Expires on</label>
                      <input
                        className="form-control"
                        id="expiry_on"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="cvv">CVV (Security Code) </label>
                      <input className="form-control" id="cvv" type="text" />
                    </div>
                  </div>
                  <div className="col-md-8 btn-pad">
                    <Link to="#" className="click-btn btn-primary">
                      Continue
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /The Modal */}
    </>
  );
};
export default DepositFunds;
