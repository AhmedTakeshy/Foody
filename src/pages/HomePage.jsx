import { useState } from "react";
import Banner from "../components/home/Banner";
import FilteredBtns from "../components/home/FilteredBtns";
import Category from "../components/home/Category";
import { useLoaderData } from "react-router-dom";
import Ads from "../components/home/Ads";

const HomePage = () => {
  const fetchedData = useLoaderData();
  const fetchedDataArr = Object.values(fetchedData);
  const [filter, setFilter] = useState("all");
  const filteredData = (data) => {
    setFilter(data);
  };

  const categoryData = (filter) => {
    return (
      <>
        <Category data={fetchedDataArr?.filter(data => data.type === "menu")} title="Günün Menüsü" />
        {filter === "all" || filter === "main" ? (
          <Category data={fetchedDataArr?.filter(data => data.type === "main")} title="Ana Yemekler" />
        ) : null}
        {filter === "all" || filter === "desserts" ? (
          <Category data={fetchedDataArr?.filter(data => data.type === "desserts")} title="Tatlılar" />
        ) : null}
        {filter === "all" || filter === "drinks" ? (
          <Category data={fetchedDataArr?.filter(data => data.type === "drinks")} title="İçecekler" />
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
  const response = await fetch("https://redux-97fb6-default-rtdb.firebaseio.com/meals.json");
  const data = await response.json();
  return data;
};
