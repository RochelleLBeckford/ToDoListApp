import React, {useState} from 'react';
import ToDoForm from './ToDoForm';
import { v4 as uuidv4 } from "uuid";
import ToDo from './ToDo';
import EditToDoForm from './EditToDoForm';

//& call uuid and initialize it
uuidv4();

const ToDoWrapper = () => {
    const [toDos, setToDos] = useState([]);

    // this will take a toDo which will be the value 
    const addToDo = toDo => {
        // set toDos and make a copy of the current state using the spread operator 
        // -> add an id
        // -> add a task with the toDo being passed and the id for it
        setToDos([...toDos, {
            //& uuid needs to be imported 
            id: uuidv4(), 
            task: toDo, 
            completed: false, 
            isEditing:false
        }])
        //& check if it works here
        console.log(toDos);
    }

    //& create the function for toggle complete
    // setting toDo's and mapping through them
    // takes a toDo and if the toDo id matches the id passed in then take a copy of that toDo and updated the completed value
    // if it us true it will equal to false and if false it will equal to true
    // else not equal to the id passed in then just return the todo
    const toggleComplete = id => {
        setToDos(toDos.map(
            toDo => toDo.id === id ? 
            {...toDo, completed: !toDo.completed} 
            : toDo))
    };

    //& create a function to delete ToDo
    // have the id as the param
    // set toDos
    // .filter will take a todo
        // -> filtering each todo that does not equal to the id 
        // -> if the toDo.is != to the id passed then want to return that value
        // -> removing the todo with the id = of the id that was passed in 
    const deleteToDo = id => {
        setToDos(toDos.filter(
            toDo => toDo.id !== id 
        ));
    }

    //& create a function to edit ToDo
    //-> passing in an id
    //-> setting the ToDos -> take a todo
    //-> checking if todo id === to the id passed in 
        //-> make a copy using the spread ...
    //-> editing should be the opposite of the current value 
    //-> if not === to the id passed in then return that todo value
    const editToDo = id => {
        setToDos(toDos.map(
            toDo => toDo.id === id ? 
            {...toDo, isEditing: !toDo.isEditing} 
            : toDo
        ));

    }

    //& create an edit Task function
    //-> take in a task and an id
    //-> set toDos and map through them 
    //-> checking if todo.id = the id passed in -> if so then make a copy if toDo using spread
        //-> update task to be the task passed in
        //-> isEditing will be the opposite of the current value 
    //-> if not then just return ToDo 
    const editTask = (task, id) => {
        setToDos(toDos.map(
            toDo => toDo.id === id ?
            {...toDo, task, isEditing: !toDo.isEditing}
            : toDo
        ))
    }

    return (
        <div className='ToDoWrapper'>
            <h1>Get These Tasks Done! : )</h1>
            {/* 
                Import todo form
                -> what ever code is on the todo form will be imported here

                Create a function and add it the ToDoForm
                Import ToDo
            */}
            <ToDoForm addToDo={addToDo}/>
            {toDos.map((toDo, index) => (
                //& move the ToDo component here
                // create a prop called 
                //& if this is true want to display the edit ToDoForm and if not just display the regular toDos
                // else just want the ToDo component to be displayed
                toDo.isEditing ? (
                    <EditToDoForm editToDo={editTask} task={toDo}/>
                ) :
                <ToDo 
                    key={index} 
                    task={toDo} 
                    toggleComplete={toggleComplete}
                    deleteToDo={deleteToDo}
                    editToDo={editToDo}
                />
                
                ))}
                {/* <ToDo /> */}
        </div>
    )
};

export default ToDoWrapper;