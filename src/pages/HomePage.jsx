import { useState } from "react";
import Banner from "../components/home/Banner";
import FilteredBtns from "../components/home/FilteredBtns";
import Category from "../components/home/Category";
import { useLoaderData } from "react-router-dom";
import Ads from "../components/home/Ads";

const HomePage = () => {
  const fetchedData = useLoaderData();
  const [filter, setFilter] = useState("all");
  const filteredData = (data) => {
    setFilter(data);
  };

  const categoryData = (filter) => {
    return (
      <>
        {filter === "all" || filter === "menu" ? (
          <Category data={fetchedData?.filter(data => data.type === "menu")} title="Menu Today" />
        ) : null}
        {filter === "all" || filter === "main" ? (
          <Category data={fetchedData?.filter(data => data.type === "main")} title="Main Dishes" />
        ) : null}
        {filter === "all" || filter === "desserts" ? (
          <Category data={fetchedData?.filter(data => data.type === "desserts")} title="Desserts" />
        ) : null}
        {filter === "all" || filter === "drinks" ? (
          <Category data={fetchedData?.filter(data => data.type === "drinks")} title="Beverages" />
        ) : null}
      </>
    );
  };

  return (
    <>
      <Banner />
      <FilteredBtns onFilter={filteredData} />
      {categoryData(filter)}
      <Ads />
    </>
  );
};

export default HomePage;

export const dataLoaderUser = async () => {
  const response = await fetch("http://localhost:3000/categories");
  const data = await response.json();
  return data;
};
