import {useState} from 'react';

function App () {
  
  return (
    <div>
      <h1>TO DO APP</h1>
      <table id="tasks">
        <thead>
          <tr>
            <th>Index</th>
            <th>Task</th>
            <th>Completed</th>
            <th>Delete</th>
          </tr>
        </thead>
      </table>
    </div>
  );
console.log ("table created");
}

export default App
