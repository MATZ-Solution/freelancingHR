import React, { useEffect } from 'react'
// import { FaCheckCircle } from "react-icons/fa";
import PropTypes from 'prop-types';
import '../../../assets/css/admin.css'
function InfoModal(props) {
    const { message, setMessageInfo } = props;
    useEffect(() => {
        const showModal = () => {
            let modal = document.getElementById('delete_category')
            if (modal) {
                modal.style.display = 'block'
                modal.style.background = "rgb(22 22 22 / 39%)"
                modal.classList.add('show')
            }
        }
        showModal()
    })

    const cancelModal = () => {
        let modal = document.getElementById('delete_category')
        if (modal) {
            modal.style.display = 'none'
            setMessageInfo('')
        }
    }
    return (

        <div
            className="modal custom-modal fade "
            id="delete_category" role="dialog">
            <div
                className="modal-dialog modal-dialog-centered"
            >
                <div className="modal-content" style={{ padding: "30px" }}>
                    <div className="modal-body" style={{ display: "flex", alignItems: " center", justifyContent: "center", gap: "7px" }}>
                        {/* <FaCheckCircle style={{color:"#14416B", fontSize:"20px"}} /> */}
                        <h1 style={{ color: "#14416B", fontSize: "20px" }}>{message}</h1>
                    </div>
                    <div className="modal-btn delete-action" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div className="row">
                            {/* <div className="col-6">
                                <a href="javascript:void(0);" className="btn btn-primary continue-btn">Delete</a>
                            </div> */}
                            <div className="col-6" onClick={cancelModal}>
                                <p data-bs-dismiss="modal" className="btn btn-primary cancel-btn" style={{ borderRadius: '5px', fontSize: '18px', padding: '11px 19px' }}>OK</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

InfoModal.propTypes = {
    message: PropTypes.string.isRequired,
    setMessageInfo: PropTypes.string.isRequired

};
export default InfoModal