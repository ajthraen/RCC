import React from 'react';
import ToDoItem from './ToDoItem.jsx'

const UList = () => {
    return (
        <div className='container1'>
            <ToDoItem 
                title="To Do #1"
            />
            <ToDoItem 
                title="To Do #2"
            />
            <ToDoItem 
                title="To Do #3"
            />            
        </div>
    );
}

export default UList;
