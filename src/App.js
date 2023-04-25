import './App.css';
import { useState } from 'react';

import { Header } from './component/Header';
import { AddTask } from './component/AddTask';
import { ShowTask } from './component/ShowTask';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});

  return (
    <div className="App">
      <Header />
      <AddTask 
        taskList={taskList} 
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <ShowTask 
        taskList={taskList} 
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}


