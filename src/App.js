import React,{useState,useEffect} from 'react';
import Title from './Title';
import InputBox from './InputBox';
import Dolist from './Dolist';
import "./App.css";

const App = () => {
  
  const initialState=JSON.parse(localStorage.getItem("tasks")) || [];
  const [input,setInput]=useState("");
  const [tasks,setTasks]=useState(initialState);
  const [editTask,setEditTask]=useState(null);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks]);

  return (
    <div className='container'>
      <div className='app-container'>
        <div>
          <Title />
        </div>
        <div>
          <InputBox
          input={input}
          setInput={setInput}
          tasks={tasks}
          setTasks={setTasks}
          editTask={editTask}
          setEditTask={setEditTask}
          />
        </div>
        <div>
          <Dolist 
          tasks={tasks} 
          setTasks={setTasks} 
          setEditTask={setEditTask}
          />
        </div>
      </div>
    </div>
  )
}

export default App