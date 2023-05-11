import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


//& pass in the props from ToDo Wrapper
const ToDo = ({task, toggleComplete, deleteToDo, editToDo}) => {
    return (
        <div className='ToDo'>
            {/* <p>Go to School</p> */}
            <p 
                onClick={() => toggleComplete(task.id)}
                className={`${task.completed ? 'completed':""}`}>
                {task.task}
            </p>

            <div>
                {/* imports to store the icons & add an onclick for the edit icon*/}
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => editToDo(task.id)} />
                {/* add an onClick event for the delete icon */}
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task.id)} />
            </div>
        </div>
    )
};

export default ToDo; 