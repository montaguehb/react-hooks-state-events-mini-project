import React from "react";

function CategoryFilter({categories, handleClick, clicked}) {
  
  const categorieButtons = categories.map(categorie => <button key={categorie} onClick={handleClick} className={categorie === clicked?"selected":""}>{categorie}</button>)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categorieButtons}
    </div>
  );
}

export default CategoryFilter;
