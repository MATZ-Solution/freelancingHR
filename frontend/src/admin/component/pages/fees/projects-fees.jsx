/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../../commoncomponent/header';
import Sidebar from '../../../commoncomponent/sidebar';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "antd";
import { itemRender, onShowSizeChange } from '../../../paginationfunction';
import "../../../antdstyle.css";
const ProjectsFees = () => {
    const [date, setDate] = useState(new Date());
    const handleChange = (date) => {
        setDate(date)
    }
    const [inputfilter, setInputfilter] = useState(false);

    const togglefilter = (value) => {
        setInputfilter(value)
    }
    const data = [
        {
            id: 1,
            name: "Posting a Project",
            info: "Marks a project as urgent. Receive a faster response from Freelancers to get your project started within 24 hours.",
            value: "$500.00",
        },
        {
            id: 2,
            name: "Featured",
            info: "Featured projects attract more,higher-quality bids.",
            value: "$450.00",
        },
        {
            id: 3,
            name: "Urgent",
            info: "Marks a project as urgent. Receive a faster response from Freelancers to get your project started within 24 hours.",
            value: "$590.00",
        },
    ];
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.Name.length - b.Name.length,
        },
        {
            title: "Info",
            dataIndex: "info",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.Info.length - b.Info.length,
        },
        {
            title: "Value",
            dataIndex: "value",
            render: (text, record) => (
                <>{text}</>
            ),
            sorter: (a, b) => a.Value.length - b.Value.length,
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (text, record) => (
                <>
                    <div>
                        <Link
                            to="#"
                            className="btn btn-sm btn-secondary me-2"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-category"
                        >
                            <i className="far fa-edit" />
                        </Link>
                        <Link
                            to="#"
                            className="btn btn-sm btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_category"
                        >
                            <i className="far fa-trash-alt" />
                        </Link>
                    </div>
                </>
            ),
        },
    ];
    return (
        <>
        {/* Page Wrapper */ }
        < div className = "page-wrapper" >
            <div className="content container-fluid">
                <Header />
                <Sidebar />
                {/* Page Header */}
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Projects Fees</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="index.html">Home</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="fees.html">Fees</Link>
                                </li>
                                <li className="breadcrumb-item active">Projects Fees</li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <Link
                                to="#"
                                className="btn add-button me-2"
                                data-bs-toggle="modal"
                                data-bs-target="#add-category"
                            >
                                <i className="fas fa-plus" />
                            </Link>
                            <Link
                                className="btn filter-btn"
                                to="#"
                                id="filter_search"
                            >
                                <i className="fas fa-filter" onClick={() => togglefilter(!inputfilter)} />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}
                {/* Search Filter */}
                <div className="card filter-card" id="filter_inputs" style={{ display: inputfilter ? "block" : "none" }}>
                    <div className="card-body pb-0">
                        <form>
                            <div className="row filter-row">
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group">
                                        <label>Add Fees</label>
                                        <input className="form-control" type="text" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group">
                                        <label>From Date</label>
                                        <div className="cal-icon">
                                            <DatePicker
                                                selected={date}
                                                onChange={handleChange}
                                                className="form-control datetimepicker"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group">
                                        <label>To Date</label>
                                        <div className="cal-icon">
                                            <DatePicker
                                                selected={date}
                                                onChange={handleChange}
                                                className="form-control datetimepicker"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                    <div className="form-group">
                                        <button className="btn btn-primary btn-block" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* /Search Filter */}
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <Table
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
                        </div>
                    </div>
                </div>
                {/* /Page Wrapper */}
                {/* /Main Wrapper */}
                {/* Category Modal */}
                <div className="modal fade custom-modal" id="add-category">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Project Fees</h4>
                                <button type="button" className="close" data-bs-dismiss="modal">
                                    <span>×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Fee Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Info</label>
                                        <textarea
                                            rows={5}
                                            className="form-control"
                                            placeholder="Enter Info"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Value</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Value"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <button type="submit" className="btn btn-primary btn-block">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Category Modal */}
                {/* Edit Modal */}
                <div className="modal fade custom-modal" id="edit-category">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Project Fees</h4>
                                <button type="button" className="close" data-bs-dismiss="modal">
                                    <span>×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue="Posting a Contest	"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Info</label>
                                        <textarea
                                            rows={5}
                                            className="form-control"
                                            defaultValue={
                                                "Free to post a contest and receive entries. A monetary prize must be paid upfront to release as payment for work provided. Optional contest upgrades incur additional costs. Employers are eligible for a 100% money back guarantee.\t"
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Value</label>
                                        <input type="text" className="form-control" defaultValue="Free" />
                                    </div>
                                    <div className="mt-4">
                                        <button type="submit" className="btn btn-primary btn-block">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Edit Modal */}
                {/* Delete modal */}
                <div className="modal custom-modal fade" id="delete_category" role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="form-header">
                                    <h3>Delete</h3>
                                    <p>Are you sure want to delete?</p>
                                </div>
                                <div className="modal-btn delete-action">
                                    <div className="row">
                                        <div className="col-6">
                                            <Link
                                                to="#"
                                                className="btn btn-primary continue-btn"
                                            >
                                                Delete
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link
                                                to="#"
                                                data-bs-dismiss="modal"
                                                className="btn btn-primary cancel-btn"
                                            >
                                                Cancel
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Delete modal */}
                </div>
            </div>
            </>
    )
    }
    export default ProjectsFees;