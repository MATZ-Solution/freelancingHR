import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { bank_line, paypal_line, wallet_icon } from "../../imagepath";
import { Sidebar } from "../sidebar";
import { useState } from "react";
import ErrorModal from "../../../../admin/component/pages/CustomModal/ErrorsModal";

const CompanyPostedProject = () => {

    // #########################  VARIABLE START #########################################

    let [error, setError] = useState(false)
    let token = localStorage.getItem('token')
    let [SingleProjectID, setSingleProjectID] = useState('')
    let [projectData, setProjectData] = useState([])
    let [projectUserData, setProjectUserData] = useState([])

    console.log("this is single project id", SingleProjectID)

    // #########################  VARIABLE END #########################################



    // #########################  API START #########################################

    const getAllProject = async () => {
        try {
            const getAllprojectRequest = await fetch(`https://freelanceserver.xgentechnologies.com/project/allPostProject`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            if (!getAllprojectRequest.ok) {
                setError(true)
            }
            const response = await getAllprojectRequest.json()
            console.log(response)
            if (response.message === 'Success') {
                setProjectData(response?.data)
            }
        } catch (err) {
            console.log(err)
            setError(true)
        }
    }

    const getAllProjectUser = async (singleProjectID) => {
        try {
            const getAllprojectRequest = await fetch(`https://freelanceserver.xgentechnologies.com/project/userAppliedProject/${singleProjectID}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            })
            if (!getAllprojectRequest.ok) {
                setError(true)
            }
            const response = await getAllprojectRequest.json()
            console.log(response)
            if (response.message === 'Success') {
                setProjectUserData(response?.data)
            }
        } catch (err) {
            console.log(err)
            setError(true)
        }
    }

    // #########################  API END #########################################


    // #########################  USE EFFECT START #########################################

    // useEffect(() => {
    //     getAllProjectUser()
    // }, [SingleProjectID])

    useEffect(() => {
        getAllProject()
    }, [])

    useEffect(() => {
        document.body.className = "dashboard-page";
        return () => {
            document.body.className = "";
        };
    });

    // #########################  USE EFFECT  END #########################################


    // #########################  FUNCTION START #########################################

    function dates(date) {
        const dates = new Date(date);
        const formattedDate = dates.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        return formattedDate
    }

    // ######################### FUNCTION END #########################################



    if (error) {
        return <ErrorModal message={'Something Went Wrong'} />
    }

    return (
        <>
            {/* Page Content */}
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-md-4 theiaStickySidebar">
                            <StickyBox offsetTop={20} offsetBottom={20}>
                                <Sidebar values='postedProject' />
                            </StickyBox>
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="dashboard-sec payout-section">
                                <div className="page-title portfolio-title" style={{ marginBottom: "0px" }}>
                                    <h3 className="mb-0">Posted Project</h3>

                                </div>
                                {/* Table */}
                                <div className="table-top-section">
                                </div>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Project Title</th>
                                                <th>Job Type</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                                <th>Delievery Date</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                projectData?.map((data, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{data.projectTitle}</td>
                                                            <td>{data.projectType}</td>
                                                            <td>{data.amount}</td>
                                                            <td>
                                                                <div className={`badge ${data.status === 'pending' ? 'badge-pending' : data.status === 'success' ? 'badge-success' : 'badge-fail'}`}>
                                                                    <span>{data.status}</span>
                                                                </div>
                                                            </td>
                                                            <td>{dates(data.deliveryDate)}</td>
                                                            <td>
                                                                <Link
                                                                    to="#"
                                                                    className="action-icon "
                                                                    data-bs-toggle="dropdown"
                                                                    aria-expanded="false"
                                                                >
                                                                    <i className="fa fa-ellipsis-v" />
                                                                </Link>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <Link
                                                                        className="dropdown-item"
                                                                    to={`/edit-project/${data?.id}`}
                                                                    // data-bs-toggle="modal"
                                                                    // data-bs-target="#"
                                                                    >
                                                                        <i className="fas fa-pencil-alt me-1" /> Edit
                                                                    </Link>
                                                                    <div
                                                                        className="dropdown-item"
                                                                    // onClick={()=>deleteJob(data?.id)}
                                                                    >
                                                                        <i className="far fa-trash-alt me-1" /> Delete
                                                                    </div>

                                                                    <Link data-bs-toggle="modal" to="#file" className="dropdown-item"
                                                                        onClick={() => getAllProjectUser(data?.id)}
                                                                    >
                                                                        <i className="feather-eye me-1" />
                                                                        View Applicants
                                                                    </Link>
                                                                </div>
                                                                {/* <Link data-bs-toggle="modal" to="#file" className="btn btn-primary sub-btn"
                                                                    onClick={() => getAllProjectUser(data?.id)}
                                                                >
                                                                    View Proposal
                                                                </Link> */}
                                                            </td>

                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                                {/* /Table */}
                            </div>
                        </div>
                    </div>

                    {/* <div className="modal fade" id="payout_modal">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>Payout Setting</h4>
                                    <span className="modal-close">
                                        <Link to="#" data-bs-dismiss="modal" aria-label="Close">
                                            <i className="fa fa-times orange-text" />
                                        </Link>
                                    </span>
                                </div>
                                <div className="modal-body">
                                    <div className="modal-info">
                                        <h5>Payout Methods</h5>
                                        <div className="payout-method-option">
                                            <div className="d-flex align-items-center">
                                                <div className="payout-icon">
                                                    <img src={bank_line} alt="icon" />
                                                </div>
                                                <div className="payout-method-content">
                                                    <h5>Bank Transfer</h5>
                                                    <p className="mb-0">Connect your bank account</p>
                                                </div>
                                            </div>
                                            <Link className="badge badge-paid">
                                                <span>Connect</span>
                                            </Link>
                                        </div>
                                        <div className="payout-method-option">
                                            <div className="d-flex align-items-center">
                                                <div className="payout-icon">
                                                    <img src={paypal_line} alt="icon" />
                                                </div>
                                                <div className="payout-method-content">
                                                    <h5>Paypal</h5>
                                                    <p className="mb-0">Connect your Paypal account</p>
                                                </div>
                                            </div>
                                            <Link className="badge badge-paid">
                                                <span>Connect</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <form action="#">
                                        <div className="submit-section text-end">
                                            <Link
                                                data-bs-dismiss="modal"
                                                className="btn btn-cancel submit-btn"
                                            >
                                                Cancel
                                            </Link>
                                            <button
                                                type="submit"
                                                data-bs-dismiss="modal"
                                                className="btn btn-primary submit-btn"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div >
            {/* /Page Content */}

            {/* Modal */}
            <>
                <div className="modal fade" id="file">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Applied Users</h4>
                                <span className="modal-close">
                                    <Link to="#" data-bs-dismiss="modal" aria-label="Close"
                                        onClick={() => { setProjectUserData([]) }}>
                                        <i className="fa fa-times orange-text" />
                                    </Link>
                                </span>
                            </div>
                            <div className="modal-body">
                                <div className="table-top-section">
                                </div>
                                {
                                    projectUserData?.length !== 0 ?
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Phone Number</th>
                                                        <th>Status</th>
                                                        <th>Apply Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        projectUserData?.map((data, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td>{data?.firstName} {data?.lastName}</td>
                                                                    <td>{data?.email}</td>
                                                                    <td>{data?.phoneNumber ? <>{data?.phoneNumber}</> : <p style={{ color: "red" }}>Not Available</p>}</td>
                                                                    <td>
                                                                        <div className={`badge ${data?.status === 'pending' ? 'badge-pending' : data.status === 'success' ? 'badge-success' : 'badge-fail'}`}>
                                                                            <span>{data?.status}</span>
                                                                        </div>
                                                                    </td>
                                                                    <td>{dates(data?.createdAt)}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }

                                                </tbody>
                                            </table>
                                        </div>
                                        :
                                        <p>No proposal found.</p>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </>
            {/* Modal */}


        </>
    );
};
export default CompanyPostedProject;
