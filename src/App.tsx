import React from 'react';
import AddTask from './AddTask';
import Task from './Task';


function App() {
  return (
    <div className="App">
      <div className="container">
        <h2> Add new task here :</h2>
           <AddTask />
          <hr/>
          <Task />
        </div>
      
    </div>
  );
}

export default App;
