import React from 'react';

function ToDoItem(props) {
    function deleteToDo(id){
        console.log('Delete To Do', props.title)
    }
    return (
        <div>
            <h3>{props.title}</h3>
            {/* <button onClick={deleteToDo}>Complete</button> */}
            {/* use the below syntax if you need to pass a value 
            dont use parenthesis if you dont need to pass a value */}
            <button onClick={()=>deleteToDo(1)}>Complete</button>
        </div>
    );
}

export default ToDoItem;