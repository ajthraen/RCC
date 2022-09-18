import React from 'react';
import './Modal.css';

function Modal(props){
    function cancel() {
        console.log("Are you sure you want to cancel?")
    }
    function confirm() {
        console.log("You To Do is confirmed")
    }
    return(
    <>
        <div className="modal">
            <p className="modal__title">{props.title1}</p>
            <div className="modal__buttons">
            <button className="btn btn__cancel" onClick={cancel}>
                Cancel
            </button>
            <button className="btn" onClick={confirm}>
                Confirm
            </button>
            </div>
        </div>
        <div className="backdrop" />
    </>
    );
}

export default Modal;