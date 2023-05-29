import { useLoaderData } from "react-router-dom";
import Home from "../components/admin/Home";

const AdminPage = () => {
  const adminData = useLoaderData();
  const { categories, contacts, orders, reservations } = adminData;

  let mealsNumber = 0;
  for (let key in categories) {
    mealsNumber += categories[key].length
  }
  const contactNumber = contacts.length
  const orderNumber = orders.length
  const reservationNumber = reservations.length

  const adminNumbers = {
    mealsNumber,
    contactNumber,
    orderNumber,
    reservationNumber
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