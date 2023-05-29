import React from "react";

const FilteredBtns = (props) => {
  const filterHandler = (event) => {
    props.onFilter(event.target.dataset.category);
  };
  return (
    <div className="flex justify-center items-center w-full text-white gap-8 p-4 my-8 mx-auto">
      <button
        data-category="all"
        onClick={filterHandler}
        className="bg-secondary border-none py-2 px-8 rounded-2xl font-bold hover:bg-primary"
      >
        All
      </button>
      <button
        data-category="menu"
        onClick={filterHandler}
        className="bg-secondary border-none py-2 px-8 rounded-2xl font-bold hover:bg-primary"
      >
        Menu Today
      </button>
      <button
        data-category="main"
        onClick={filterHandler}
        className="bg-secondary border-none py-2 px-8 rounded-2xl font-bold hover:bg-primary"
      >
        Main Dishes
      </button>
      <button
        data-category="desserts"
        onClick={filterHandler}
        className="bg-secondary border-none py-2 px-8 rounded-2xl font-bold hover:bg-primary"
      >
        Desserts
      </button>
      <button
        data-category="drinks"
        onClick={filterHandler}
        className="bg-secondary border-none py-2 px-8 rounded-2xl font-bold hover:bg-primary"
      >
        Beverages
      </button>
    </div>
  );
};

export default FilteredBtns;
