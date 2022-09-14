import React from 'react'

function ContactCard(props) {
    return (
        <div className="container1">
            <div className="contact-card">
                <img src={props.imgurl} />
                <h3>{props.name1}</h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
        </div>
    );
}

export default ContactCard;