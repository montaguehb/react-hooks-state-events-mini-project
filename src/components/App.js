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
  const [form, setForm] = useState("")
  const [tasks, setTasks] = useState(TASKS)
  const [categorie, setCategorie] = useState("code")
  function handleClick (event) {
    setClicked(event.target.textContent)
  }

  function handleFormChange (event) {
    setForm(event.target.value)
  }
  function onTaskFormSubmit(e) {
    e.preventDefault()
    setTasks([...tasks, {text: form,category: categorie}])
  }
  function handleCategoryChange (e) {
    setCategorie(e.target.value)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}  clicked={clicked} handleClick={handleClick}/>
      <NewTaskForm categories={CATEGORIES} categorie={categorie} handleFormChange={handleFormChange} form={form}  onTaskFormSubmit={onTaskFormSubmit} handleCategoryChange={handleCategoryChange}/>
      <TaskList tasks={tasks} clicked={clicked} setTasks={setTasks}/>
    </div>
  );
}

export default App;
