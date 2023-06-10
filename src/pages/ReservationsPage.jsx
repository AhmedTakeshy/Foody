import Reservations from "../components/admin/Reservations"
import { useOutletContext } from "react-router-dom"

const ReservationsPage = () => {
  const adminData = useOutletContext();
  const { reservations } = adminData;
  return (
    <Reservations reservations={reservations} />
  )
}

export default ReservationsPage