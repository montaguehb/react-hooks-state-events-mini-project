import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";
import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  const [clicked, setClicked] = useState("")
  
  const [tasks, setTasks] = useState(TASKS)

  function handleClick (event) {
    setClicked(event.target.textContent)
  }


  function onTaskFormSubmit(formObj) {
    setTasks([...tasks, formObj])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}  clicked={clicked} handleClick={handleClick}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} clicked={clicked} setTasks={setTasks}/>
    </div>
  );
}

export default App;
