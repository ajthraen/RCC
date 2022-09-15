import React from "react"

function Jokes(props) {
    return (
        <div className="container1">
            <div>
                <h3>Question: {props.quest1}</h3>
                <h3>Answer: {props.ans1}</h3>
            </div>
        </div>
    );
}

export default Jokes;