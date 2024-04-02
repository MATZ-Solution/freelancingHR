import React, { useEffect } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import PropTypes from 'prop-types';
import '../../../assets/css/admin.css'
function index(props) {
    const { message, errorStatus } = props;
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
    return (

        <div
            className="modal custom-modal fade "
            id="delete_category" role="dialog">
            <div
                className="modal-dialog modal-dialog-centered"
            >
                <div className="modal-content" style={{padding:"30px"}}>
                    <div className="modal-body" style={{ display: "flex",alignItems: " center", justifyContent: "center", gap: "5px", marginTop:"27px" }}>
                        
                        {errorStatus ?  <i className="fa-solid fa-circle-exclamation" style={{color:"red"}}></i>: <FaCheckCircle style={{color:"#14416B", fontSize:"20px"}} />}
                        <h1 style={{color:`${ errorStatus ? 'red': '#14416B'}`, fontSize:"20px",textAlign:"center"}}>{message}</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

index.propTypes = {
    message: PropTypes.string.isRequired,
    errorStatus: PropTypes.bool.isRequired,
};
export default index