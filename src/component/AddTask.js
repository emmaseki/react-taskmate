import React from 'react'

export const AddTask = ({taskList, setTaskList, task, setTask}) => {
    
    const handleForm = function(e){
        e.preventDefault();

        const date = new Date();

        if(task.id){
            const updatedTaskList = taskList.map((element => {
                return element.id === task.id ? 
                    {
                        id: element.id, 
                        name: task.name, 
                        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                    } : 
                    element
            }))

            setTaskList(updatedTaskList);
            setTask({});
        }else{
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }

            setTaskList([...taskList, newTask]);
            setTask({});
        }
        e.target.task.value = '';
    }

    return (
        <section className='addTask'>
            <form onSubmit={handleForm}>
                <input type='text' 
                    name='task' 
                    value={task.name || ""} 
                    onChange={e => setTask({...task, name:e.target.value})}
                    autoComplete='off' 
                    placeholder='Add Task' 
                    maxLength='20'/>
                <button type='submit'>{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    )
}