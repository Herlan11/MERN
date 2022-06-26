import React, { useState } from 'react';
import './App.css';
import Index from './Components/index';
import ToDoList from './Components/toDoList';

function App() {

    const [taskList, setTaskList] = useState([]);

    return (
        <div>
          <div>
          <h2>Todo List</h2>
            <h4>Add New Task:</h4>
            <Index taskList={taskList} setTaskList={setTaskList} ></Index>
          </div>
          <div>
            <h4>To Do List:</h4>
            { taskList.map((_task,i) => 
              <ToDoList key={i} index = {i} taskList={taskList} setTaskList={setTaskList} ></ToDoList>
            )}
          </div>
        </div>
    );
}

export default App;

