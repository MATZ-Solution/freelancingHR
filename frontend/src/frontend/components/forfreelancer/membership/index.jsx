/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon } from "../../imagepath";
import { Sidebar } from "../sidebar";
import { Table } from "antd";
import { itemRender, onShowSizeChange } from "../../paginationfunction";
import "../../antdstyle.css";
const FreelancerMembership = () => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });
  const data = [
    {
      id: 1,
      purchasedate: "15 October 2023",
      details: "The Unlimita Invoice : IVIP12023598",
      expirydate: "	15th July 2022",
      type: "Yearly",
      status: "Inactive",
      bg: "badge badge-danger-lite",
      price: "$200.00",
    },
    {
      id: 2,
      purchasedate: "15 October 2023",
      details: "The Unlimita Invoice : IVIP12023598",
      expirydate: "15th July 2023",
      type: "Yearly",
      status: "Active",
      bg: "badge badge-paid",
      price: "$200.00",
    },
    {
      id: 3,
      purchasedate: "15 October 2023",
      details: "The Unlimita Invoice : IVIP12023598",
      expirydate: "15th July 2023",
      type: "Yearly",
      status: "Active",
      bg: "badge badge-paid",
      price: "$200.00",
    },
  ];
  const columns = [
    {
      title: "Purchasedate",
      dataIndex: "purchasedate",
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.purchasedate.length - b.purchasedate.length,
    },
    {
      title: "Details",
      dataIndex: "details",
      render: (text, record) => (
        <div>
          <p className="mb-0">{text}</p>
          <Link to="#" className="read-text">
            Invoice : IVIP12023598
          </Link>
        </div>
      ),
      sorter: (a, b) => a.details.length - b.details.length,
    },
    {
      title: "Expiry Date",
      dataIndex: "expirydate",
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.expirydate.length - b.expirydate.length,
    },
    {
      title: "Type",
      dataIndex: "type",
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.price.length - b.price.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text, record) => <span className={record.bg}>{text}</span>,
      sorter: (a, b) => a.status.length - b.status.length,
    },
  ];
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="dashboard-sec payout-section freelancer-statements plan-billing">
                <div className="page-title portfolio-title">
                  <h3 className="mb-0">Plan &amp; Billing</h3>
                </div>
                <div className="plan-billing-section">
                  <div className="row row-gap">
                    <div className="col-xl-4 col-md-6">
                      <div className="package-detail">
                        <h4>Basic Plan</h4>
                        <p>Go Pro, Best for the individuals</p>
                        <h3 className="package-price">
                          $19.00 <span>/ Month</span>
                        </h3>
                        <div className="package-feature">
                          <ul>
                            <li>12 Project Credits</li>
                            <li>10 Allowed Services</li>
                            <li>20 Days visibility</li>
                            <li>5 Featured Services</li>
                            <li>20 Days visibility</li>
                            <li>30 Days Package Expiry</li>
                            <li className="non-check">Profile Featured</li>
                          </ul>
                        </div>
                        <Link
                          to="#payout_modal"
                          data-bs-toggle="modal"
                          className="btn btn-outline-primary btn-block"
                        >
                          Select Plan
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="package-detail">
                        <h4>Business </h4>
                        <p>Highest selling package features</p>
                        <h3 className="package-price">
                          $29.00<span>/ Month</span>
                        </h3>
                        <div className="package-feature">
                          <ul>
                            <li>15 Project Credits</li>
                            <li>12 Allowed Services</li>
                            <li>25 Days visibility</li>
                            <li>10 Featured Services</li>
                            <li>30 Days visibility</li>
                            <li>40 Days Package Expiry</li>
                            <li>Profile Featured</li>
                          </ul>
                        </div>
                        <Link
                          to="#payout_modal"
                          data-bs-toggle="modal"
                          className="btn btn-outline-primary btn-block"
                        >
                          Select Plan
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <div className="package-detail">
                        <h4>The Unlimited </h4>
                        <p>Drive crazy, unlimited on the go</p>
                        <h3 className="package-price">
                          $79.00<span>/ Month</span>
                        </h3>
                        <div className="package-feature">
                          <ul>
                            <li>Unlimited Project Credits</li>
                            <li>Unlimited Services</li>
                            <li>Services Never Expire</li>
                            <li>20 Featured Services</li>
                            <li>Services Never Expire</li>
                            <li>Package Never Expire</li>
                            <li>Profile Featured</li>
                          </ul>
                        </div>
                        <Link
                          to="#payout_modal"
                          data-bs-toggle="modal"
                          className="btn btn-outline-primary btn-block"
                        >
                          Select Plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page-title ">
                  <h3>Current Plan</h3>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="member-plan pro-box">
                      <div className="member-detail">
                        <div className="row">
                          <div className="col-md-4">
                            <h5>The Unlimited</h5>
                            <div className="yr-amt">
                              Our most popular plan for small teams.
                            </div>
                            <div className="expiry-on">
                              <span>
                                <i className="feather-calendar" />
                                Renew Date:
                              </span>{" "}
                              24 JAN 2022
                            </div>
                          </div>
                          <div className="col-md-8 change-plan mt-3 mt-md-0">
                            <div>
                              <h3>$1200</h3>
                              <div className="yr-duration">
                                Duration: One Year
                              </div>
                            </div>
                            <div className="change-plan-btn">
                              <Link
                                to="javascript:void(0);"
                                className="btn  btn-primary-lite"
                              >
                                Cancel Subscription
                              </Link>
                              <Link
                                to="javascript:void(0);"
                                className="btn btn-primary black-btn"
                              >
                                Change Plan
                              </Link>
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
                    <h5 className="mb-0">Statement</h5>
                  </div>
                </div>
                <div className="table-responsive">
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
                {/* /Table */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FreelancerMembership;
