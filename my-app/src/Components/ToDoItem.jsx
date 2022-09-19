import React from 'react';

function ToDoItem({title, onToDoDelete}) {
    return (
        <div>
            <h3>{title}</h3>
            {/* <button onClick={deleteToDo}>Complete</button> */}
            {/* use the below syntax if you need to pass a value 
            dont use parenthesis if you dont need to pass a value */}
            <button onClick={onToDoDelete}>Complete</button>
        </div>
    );
}

export default ToDoItem;