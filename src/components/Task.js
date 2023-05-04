import React from "react";

function Task({category, text, setTasks, tasks}) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => setTasks(tasks.filter(task => task.text !== text))}>X</button>
    </div>
  );
}

export default Task;
