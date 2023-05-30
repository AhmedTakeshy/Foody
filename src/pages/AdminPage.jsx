import { useLoaderData } from "react-router-dom";
import Home from "../components/admin/Home";
import { useEffect } from "react";

const AdminPage = () => {
  const adminData = useLoaderData();
  const { meals, contacts, orders, reservations } = adminData;
  console.log("adminData", adminData);

  const mealsNumber = meals.length
  const contactsNumber = contacts.length
  const ordersNumber = orders.length
  const reservationsNumber = reservations.length

  const adminNumbers = {
    mealsNumber,
    contactsNumber,
    ordersNumber,
    reservationsNumber
  }

  return (
    <>
      <Home adminNumbers={adminNumbers} />
    </>
  );
};

export default AdminPage;

export const dataLoaderAdmin = async () => {
  const res = await fetch("http://localhost:3000/db");
  const data = await res.json();
  return data;
};