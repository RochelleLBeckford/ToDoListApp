import './App.css'
import ToDoWrapper from './components/ToDoWrapper'

function App() {
    return (    
    <div className="App">
        {/* 
            Import todo wrapper 
            -> this will import the components from the todo wrapper file
        */}
        <ToDoWrapper />
    </div>
    );
}

export default App 
