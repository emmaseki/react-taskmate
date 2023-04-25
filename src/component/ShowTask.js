import React from 'react'

export const ShowTask = ({taskList, setTaskList, task, setTask}) => {

    const handleClearAll = function(){
        setTaskList([]);
    }

    const handleEdit = function(id){
        const selectedTask = taskList.find((element) => {
            return element.id === id
        })

        setTask(selectedTask);
        console.log(task)
    }

    const handleDelete = function(id){
        const updatedTask = taskList.filter((element) => {
            return element.id !== id
        })

        setTaskList(updatedTask);
    }
    
    return (
        <section className='showTask'>
            <p class="head">
                <span>
                    <span className='title'>Todo</span>
                    <span className='count'>{taskList.length}</span>
                </span>
                <span className='clearAll' onClick={handleClearAll}>Clear All</span>
            </p>
            <ul>
                {taskList.map((todo) => (
                    <li key={todo.id}>
                        <p>
                            <span className='name'>{todo.name}</span>
                            <span className='time'>{todo.time}</span>
                        </p>
                        <i className='bi bi-pencil-square' onClick={() => handleEdit(todo.id)}></i>
                        <i className='bi bi-trash' onClick={() => handleDelete(todo.id)}></i>
                    </li>
                ))}
            </ul>
        </section>
    )
}