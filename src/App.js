import { useState} from 'react'
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'


const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}

function App() {
  return (
    <div className="App">
     <Header title = "Hello"></Header>
     <Tasks tasks = {tasks} onDelete ={deleteTask}></Tasks>
    </div>
  );
}


export default App;
