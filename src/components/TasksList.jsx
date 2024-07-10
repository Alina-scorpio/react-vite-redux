import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from '../store/usersReducer';

const TasksList = () => {
  const tasks = useSelector(state => state.list);
  const dispatch = useDispatch();
  const [item, setItem] = useState('');

  const handleAddTask = () => {
    dispatch(addTask(item));
    setItem('');
  };
  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };
  return (
    <div className='input-group'>
       <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
       <button onClick={handleAddTask}>Add Task</button>
       <ul>
        {tasks.map((task, index) => (
                    <li className='li-box' key={index}>
                    {task} 
                    <button onClick={() => handleDeleteTask(index)}>Delete</button>
                  </li>

        ))}
      </ul>
    </div>
  );
};

export default TasksList;
