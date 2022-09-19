import React from 'react';
import ToDoItem from './ToDoItem.jsx'

function UList({title, onToDoDelete1}) {
    function onToDoDelete() {
        console.log('Delete')
    }

    // function deleteToDo(id){
    //     console.log('Delete To Do', props.title)
    // }
    return (
        <div className='container1'>
            <ToDoItem
                onToDoDelete={onToDoDelete} 
                title="To Do #1"
            />
            <ToDoItem 
                onToDoDelete={onToDoDelete}
                title="To Do #2"
            />
            <ToDoItem 
                onToDoDelete={onToDoDelete}
                title="To Do #3"
            />            
        </div>

    );
}

export default UList;
