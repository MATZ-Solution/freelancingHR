import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Sidebar from '../../../commoncomponent/sidebar';
import Chart from 'react-apexcharts'
import EditUser from './edit-user'
import Delete from './delete';
import { Table } from "antd";
import { itemRender, onShowSizeChange } from "../../../paginationfunction"
function ProjectInvoice() {
    const [dataBar,] = useState({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        bindto: '#chart-bar-stacked',
        chart: {
            height: 350,
            width: '100%',
            stacked: true,

            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                columnWidth: '16%',

            }
        },
        colors: ["#14416B", '#7E84A3',],
        borderWidth: 3,

    })
    const [ivoicechart] = useState([
        {
            name: 'Minimum',
            data: [4, 10, 18, 7, 10, 12, 54, 6, 2, 5, 2, 8]
        },

        {
            name: 'Maximum',
            data: [17, 58, 45, 30, 19, 17, 0, 25, 32, 20, 14, 20],
        },
    ])
    const data = [
        {
            id: 1,
            InvoiceNo:"#55454",
            Name: "Hendry",
            ProjectName: "UI/UX Design",
            InvoiceDate:"25/03/20022",
            Price:"$450.44",
            PaidDate:"25/03/20022",
            Status: "Paid",
            bg:"btn active-btn"
        },
        {
            id: 2,
            InvoiceNo:"#55454",
            Name: "Mark",
            ProjectName: "Doccure",
            InvoiceDate:"28-02-2022",
            Price:"$450.44",
            PaidDate:"25/03/20022",
            Status: "Paid",
            bg:"btn active-btn"
        },
        {
            id: 3,
            InvoiceNo:"#55454",
            Name: "Steawart",
            ProjectName: "SmartHr",
            InvoiceDate:"28-02-2022",
            Price:"$450.44",
            PaidDate:"25/03/20022",
            Status: "UnPaid",
            bg:"btn inactive-btn"
        },
    ];
    const columns = [
        {
            title: "Invoice No",
            dataIndex: "InvoiceNo",
            render: (text) => (
                <><Link to="#">{text}</Link></>
            ),
            sorter: (a, b) => a.InvoiceNo.length - b.InvoiceNo.length,
        },
       {
          title: "Name",
          dataIndex: "Name",
          render: (text) => (
            <><Link to="#" className="active-name">{text}</Link></>
          ),
          sorter: (a, b) => a.Name.length - b.Name.length,
      },
      {
          title: "Project Name",
          dataIndex: "ProjectName",
          render: (text) => (
              <><Link to="#">{text}</Link></>
          ),
          sorter: (a, b) => a.ProjectName.length - b.ProjectName.length,
      },
      {
          title: "Invoice Date",
          dataIndex: "InvoiceDate",
          render: (text) => (
              <>{text}</>
          ),
          sorter: (a, b) => a.InvoiceDate.length - b.InvoiceDate.length,
      },
      {
          title: "Price",
          dataIndex: "Price",
          render: (text) => (
              <>{text}</>
          ),
          sorter: (a, b) => a.Price.length - b.Price.length,
      },
      {
        title: "Paid Date",
        dataIndex: "PaidDate",
        render: (text) => (
            <>{text}</>
        ),
        sorter: (a, b) => a.PaidDate.length - b.PaidDate.length,
    },
      {
        title: "Status",
        dataIndex: "Status",
        render: (text, record) => (
            <>
            <button className={record.bg}>{text}</button>
          </>
        ),
        sorter: (a, b) => a.Status.length - b.Status.length,
    },
      {
          title: "Action",
          dataIndex: "action",
          render: () => (
              <>
                  <Link to="#" className="btn btn-sm btn-secondary me-2" data-bs-toggle="modal" data-bs-target="#edit-category"><i className="far fa-edit"></i></Link>
                  <Link to="#" className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#delete_category"><i className="far fa-trash-alt"></i></Link>
              </>
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
      getCheckboxProps: record => ({
          disabled: record.name === "Disabled User", // Column configuration not to be checked
          name: record.name,
          className: "checkbox-red"
      })
    };
    return (
        <>
            <div className='main-wrapper'>
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
                                        <li className="active-project">
                                            <Link to="/admin/project-invoice">Invoices</Link>
                                        </li>
                                        <li>
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
                                <div className="col-xl-12 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-header">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="card-title">Invoices Report</h5>
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
                                            <div id="chart-bar-stacked" />
                                            <Chart options={dataBar} series={ivoicechart} type="bar" height={300} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Project Chart */}
                        {/* Project Download */}
                        <div className="project-download">
                            <div className="title-group d-flex">
                                <h2>Invoice</h2>
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
                                            <option> Name</option>
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
                                            <option> Freelancer</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                            <option>Option 4</option>
                                            <option>Option 5</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <select className="form-select">
                                            <option> status</option>
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
                        <div className="card ">
                            <div className="table-responsive">
                            <Table
                                    rowSelection={rowSelection}
                                    pagination={{
                                        total: data.length,
                                        showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                                        showSizeChanger: true, onShowSizeChange: onShowSizeChange, itemRender: itemRender
                                    }}
                                    className="table"
                                    style={{ overflowX: "auto" }}
                                    columns={columns}
                                    dataSource={data}
                                    rowKey={(record) => record.id}
                                />
                            </div>
                        </div>
                        {/* /Employer Project */}
                    </div>
                    {/* /Page Wrapper */}
                </div>
                <EditUser />
                <Delete />
            </div>
        </>
    )
}
export default ProjectInvoice;