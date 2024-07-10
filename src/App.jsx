import React from 'react';
import TasksList from './components/TasksList'; 


function App() {
  return (
    <div className="App">
      <h1>React + Vite + Redux</h1>
      <h2>Інтеграція Redux у існуючий React проект</h2>
      <h3>List Tasks</h3>
      <TasksList />
    </div>
  );
}

export default App;
