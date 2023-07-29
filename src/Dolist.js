import React from 'react'

const Dolist = ({tasks,setTasks,setEditTask}) => {

    const handleComplete=(todo)=>{
        setTasks(
            tasks.map((item)=>{
                if(item.id===todo.id){
                    return{...item,completed:!item.completed};
                }
                return item;
            })
        );
    };

    const handleEdit=({id})=>{
        const findTask=tasks.find((todo)=>todo.id===id);
        setEditTask(findTask)
    }

    const handleRemove=({id})=>{
        setTasks(tasks.filter((todo)=> todo.id!==id));
    };
  return (
    <div>
        {tasks.map((todo)=>(
            <li className='list-item' key={todo.id}>
                <input 
                type='text'
                value={todo.title} 
                className={`list ${todo.completed ? "completed":""}`} 
                onChange={(event)=>event.preventDefault()}
                />
                <div>
                <button 
                className='button-complete task-button'
                onClick={()=>handleComplete(todo)}
                >
                    <i className='fa fa-check-circle'></i>
                </button>
                <button 
                className='button-edit task-button'
                onClick={()=>handleEdit(todo)}
                >
                    <i className='fa fa-edit'></i>
                </button>
                <button
                className='button-remove task-button' 
                onClick={()=>handleRemove(todo)}
                >
                    <i className='fa fa-trash'></i>
                </button>
            </div>
            </li>
            
        )

        )}
    </div>
  )
}

export default Dolist