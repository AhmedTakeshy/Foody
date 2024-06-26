import React from "react";

const FilteredBtns = (props) => {
  const filterHandler = (event) => {
    props.onFilter(event.target.dataset.category);
  };
  return (
    <div className="flex items-center justify-center w-full gap-8 p-4 mx-auto my-8 text-white">
      <button
        data-category="all"
        onClick={filterHandler}
        className="px-8 py-2 font-bold border-none bg-secondary rounded-2xl hover:bg-primary"
      >
        Menu
      </button>
      <button
        data-category="main"
        onClick={filterHandler}
        className="px-8 py-2 font-bold border-none bg-secondary rounded-2xl hover:bg-primary"
      >
        Main food
      </button>
      <button
        data-category="desserts"
        onClick={filterHandler}
        className="px-8 py-2 font-bold border-none bg-secondary rounded-2xl hover:bg-primary"
      >
        Desserts
      </button>
      <button
        data-category="drinks"
        onClick={filterHandler}
        className="px-8 py-2 font-bold border-none bg-secondary rounded-2xl hover:bg-primary"
      >
        Drinks
      </button>
    </div>
  );
};

export default FilteredBtns;
