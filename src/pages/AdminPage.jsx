import { useOutletContext } from "react-router-dom";
import Home from "../components/admin/Home";

const AdminPage = () => {
  const adminData = useOutletContext();
  const { meals, contacts, orders, reservations, waiter } = adminData;


  const mealsNumber = meals.length
  const contactsNumber = contacts.length
  const ordersNumber = orders.length
  const reservationsNumber = reservations.length
  const waiterNumber = waiter.length

  const adminNumbers = {
    mealsNumber,
    contactsNumber,
    ordersNumber,
    reservationsNumber,
    waiterNumber
  }

  return (
    <>
      <Home adminNumbers={adminNumbers} />
    </>
  );
};

export default AdminPage;

