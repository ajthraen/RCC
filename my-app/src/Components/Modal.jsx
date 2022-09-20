import React from 'react';
import './Modal.css';

function Modal({ title1, cancelModal, confirmModal}){
    function cancel() {
        console.log("Are you sure you want to cancel?")
    }
    function confirm() {
        console.log("You To Do is confirmed")
    }
    return(
    <>
        <div className="modal">
            <p className="modal__title">{title1}</p>
            <div className="modal__buttons">
            <button className="btn btn__cancel" onClick={cancelModal}>
                Cancel
            </button>
            <button className="btn" onClick={confirmModal}>
                Confirm
            </button>
            </div>
        </div>
        <div className="backdrop" />
    </>
    );
}

export default Modal;