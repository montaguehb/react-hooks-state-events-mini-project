import React from "react";

function NewTaskForm({categories, handleFormChange, onTaskFormSubmit, form, handleCategoryChange, categorie}) {
  const categorieOptions = categories.filter(categorie => categorie !== "All").map(categorie => <option value={categorie} key={categorie}>{categorie}</option>)
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleFormChange} value={form}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} value={categorie}>
          {categorieOptions}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
