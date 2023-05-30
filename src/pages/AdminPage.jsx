import { useOutletContext } from "react-router-dom";
import Home from "../components/admin/Home";

const AdminPage = () => {
  const adminData = useOutletContext();
  const { meals, contacts, orders, reservations } = adminData;


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

