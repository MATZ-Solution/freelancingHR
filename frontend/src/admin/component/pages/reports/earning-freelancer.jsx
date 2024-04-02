/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../commoncomponent/sidebar";
import { Line } from "react-chartjs-2";
import EditUser from "./edit-user";
import Delete from "./delete";
import Chart from "react-apexcharts";
import { Table } from "antd";
import { itemRender, onShowSizeChange } from "../../../paginationfunction";
const EarningFreelancer = () => {
  const chartConfig = {
    series: [
      {
        name: "Maximum",
        data: [0, 5, 5, 7, 20, 13, 7, 21, 10, 7, 10],
      },
    ],
    options: {
      chart: {
        id: "chart-employee", // id of chart wrapper
        type: "line", // type of chart
      },
      colors: ["#14416B"],
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      legend: {
        show: false, // hide legend
      },
      padding: {
        bottom: 0,
        top: 0,
      },
    },
  };
  const data = [
    {
      id: 1,
      Transactiondate: "25/03/20022",
      ReferenceNumber: "#55454",
      ProjectName: "UI/UX Design",
      ProjectValue: "$450.44",
      Income: "$40.44",
      Paymenttype: "Credit card",
    },
    {
      id: 2,
      Transactiondate: "25/03/20022",
      ReferenceNumber: "#55454",
      ProjectName: "UI/UX Design",
      ProjectValue: "$450.44",
      Income: "$40.44",
      Paymenttype: "Credit card",
    },
    {
      id: 3,
      Transactiondate: "25/03/20022",
      ReferenceNumber: "#55454",
      ProjectName: "UI/UX Design",
      ProjectValue: "$450.44",
      Income: "$40.44",
      Paymenttype: "Credit card",
    },
  ];
  const columns = [
    {
      title: "Transaction date",
      dataIndex: "Transactiondate",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.Transactiondate.length - b.Transactiondate.length,
    },
    {
      title: "Reference Number",
      dataIndex: "ReferenceNumber",
      render: (text, record) => (
        <>
          <Link to="#">{text}</Link>
        </>
      ),
      sorter: (a, b) => a.ReferenceNumber.length - b.ReferenceNumber.length,
    },
    {
      title: "Project Name",
      dataIndex: "ProjectName",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.ProjectName.length - b.ProjectName.length,
    },
    {
      title: "Project Value",
      dataIndex: "ProjectValue",
      render: (text, record) => (
        <>
          <h2 className="table-avatar">
            <Link to="#">{text}</Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.ProjectValue.length - b.ProjectValue.length,
    },
    {
      title: "Income",
      dataIndex: "Income",
      render: (text, record) => <>{text}</>,

      sorter: (a, b) => a.Income.length - b.Income.length,
    },
    {
      title: "Payment type",
      dataIndex: "Paymenttype",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.Paymenttype.length - b.Paymenttype.length,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <div className="subscription-end">
          <Link
            to="#"
            className="btn btn-sm btn-secondary me-2"
            data-bs-toggle="modal"
            data-bs-target="#edit-category"
          >
            <i className="far fa-edit"></i>
          </Link>
          <Link
            to="#"
            className="btn btn-sm btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#delete_category"
          >
            <i className="far fa-trash-alt"></i>
          </Link>
        </div>
      ),
      sorter: (a, b) => a.length - b.length,
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
      className: "checkbox-red",
    }),
  };

  return (
    <>
      <div className="main-wrapper">
        <Sidebar />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content report-box container-fluid">
            {/* Page Header */}
            <div className="page-header page-border">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h3 className="page-title">Reports</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/index/admin">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Reports</li>
                  </ul>
                </div>
                <div className="col-lg-6 report-btns">
                  <ul className="project-report">
                    <li>
                      <Link to="/admin/reports">Projects</Link>
                    </li>
                    <li>
                      <Link to="/admin/project-bidding">Bidding</Link>
                    </li>
                    <li>
                      <Link to="/admin/project-invoice">Invoices</Link>
                    </li>
                    <li className="active-project">
                      <Link to="/admin/project-earnings">Earnings</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Project Chart */}
            <div className="project-chart">
              <div className="row">
                <div className="subscribe-employe">
                  <ul>
                    <li>
                      <Link to="/admin/project-earnings">Administrator </Link>
                    </li>
                    <li>
                      <Link to="/admin/earning-employer">Employer</Link>
                    </li>
                    <li className="active">
                      <Link to="/admin/earning-freelancer">Freelancer</Link>
                    </li>
                  </ul>
                </div>
                <>
                  <div className="col-xl-12 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title">Freelancer Report</h5>
                          <div className="dropdown">
                            <button
                              className="btn btn-white btn-sm dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              2022
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <li>
                                <Link to="#" className="dropdown-item">
                                  2021
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item">
                                  2022
                                </Link>
                              </li>
                              <li>
                                <Link to="#" className="dropdown-item">
                                  2020
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div id="chart-freelance" />
                        {/* <Line data={data}
                                                    height={80}
                                                    options={{
                                                        legend: {
                                                            display: false,

                                                        }
                                                    }} /> */}
                        <Chart
                          options={chartConfig.options}
                          series={chartConfig.series}
                          type="line"
                          height={350}
                        />{" "}
                      </div>
                    </div>
                  </div>
                  {/* /Project Chart */}
                  {/* Project Download */}
                  <div className="project-download">
                    <div className="title-group d-flex">
                      <h2>Freelancer Income</h2>
                      <div className="down-load">
                        <Link to="#" className="btn-primary">
                          <i className="fas fa-cloud-download-alt" />
                          Download
                        </Link>
                      </div>
                    </div>
                    <div className="select-group">
                      <div className="row">
                        <div className="col-lg-2 col-md-6">
                          <select className="form-select">
                            <option> Date</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                            <option>Option 5</option>
                          </select>
                        </div>
                        <div className="col-lg-2 col-md-6">
                          <select className="form-select">
                            <option> Reference Number</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                            <option>Option 5</option>
                          </select>
                        </div>
                        <div className="col-lg-2 col-md-6">
                          <select className="form-select">
                            <option> Project name</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                            <option>Option 5</option>
                          </select>
                        </div>
                        <div className="col-lg-2 col-md-6">
                          <select className="form-select">
                            <option> Payment type</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                            <option>Option 5</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Project Download */}
                  {/* Employer Project */}
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <Table
                          rowSelection={rowSelection}
                          pagination={{
                            total: data.length,
                            showTotal: (total, range) =>
                              `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                            showSizeChanger: true,
                            onShowSizeChange: onShowSizeChange,
                            itemRender: itemRender,
                          }}
                          className="table"
                          style={{ overflowX: "auto" }}
                          columns={columns}
                          dataSource={data}
                          rowKey={(record) => record.id}
                        />
                      </div>
                    </div>
                  </div>
                  {/* /Employer Project */}
                  {/* /Page Wrapper */}
                  {/* /Main Wrapper */}
                  <EditUser />
                  <Delete />
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EarningFreelancer;
