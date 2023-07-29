import React,{useEffect} from 'react';
import {v4 as uuidV4} from "uuid";

const InputBox = ({input,setInput,tasks,setTasks,editTask,setEditTask}) => {

    const updateTask=(title,id,completed)=>{
        const newTask=tasks.map((todo)=>
            todo.id===id?{title,id,completed}:todo
        );
        setTasks(newTask);
        setEditTask("");
    };

    useEffect(()=>{
        if(editTask){
            setInput(editTask.title);
        }else{
            setInput("");
        }
    },[setInput,editTask]);

    const onInputChange=(event)=>{
        setInput(event.target.value);
    };

    const onFormSubmit=(event)=>{
        event.preventDefault();
        if(!editTask){
            setTasks([...tasks,{id: uuidV4(),title:input,completed:false}]);
        setInput("");
        }else{
            updateTask(input,editTask.id,editTask.completed)
        }
        
    };

  return (
    <form onSubmit={onFormSubmit}>
        <input 
        type='text' 
        placeholder='Enter what to do...' 
        className='input-holder' 
        value={input} 
        required
        onChange={onInputChange}
        />
        <button className='Add-Button' type='submit'>
            {editTask ? "OK" : "Add"}
        </button>
    </form>
  )
}

export default InputBox