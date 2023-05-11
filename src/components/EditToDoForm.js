import React, { useState } from 'react'

const EditToDoForm = ({ editToDo, task }) => {
    // const [value, setValue] = useState('')
    //& want the current task that will be edited to be displayed after click edit button
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        //& by default when submit a page the form reloads
        // to prevent this write a function to prevent this default action from happening
        e.preventDefault()

        //& test this console.log
        // we have to pass this value to the todo state but cannot keep the state in here since other components will need to access the todo state as well
        // will create that state in the parent component -> ToDo Wrapper
        // console.log(value);
        //& call editToDo and pass in the value
        // this will take in task.id
        editToDo(value, task.id);

        //& this will clear the form after press submit
        setValue('')
    }

    return (
        <form className='EditToDoForm' onSubmit={handleSubmit}>
        <input
            type='text'
            className='toDo-input'
            placeholder='Update Task'
            value={value}
            //& Check that this event is working by printing it out to the console
            // onChange={(e) => console.log(e.target.value)}
            //& save it to the state
            onChange={e => setValue(e.target.value)}
        />
        <button type='submit' className='toDo-btn'>
            Update Task
        </button>
        </form>
    )
}

export default EditToDoForm;