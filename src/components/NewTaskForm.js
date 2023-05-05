import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const categorieOptions = categories.filter(categorie => categorie !== "All").map(categorie => <option value={categorie} key={categorie}>{categorie}</option>)
  const [form, setForm] = useState({category: "Code", text: ""})

  function handleFormChange (event) {
    setForm({...form, [event.target.id]: event.target.value})
  }

  return (
    <form className="new-task-form" onSubmit={e => {
      e.preventDefault()
      onTaskFormSubmit(form)
    }}>
      <label>
        Details
        <input type="text" name="text" id="text" onChange={handleFormChange} value={form.text}/>
      </label>
      <label>
        Category
        <select name="category" id="category" onChange={handleFormChange} value={form.category}>
          {categorieOptions}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
