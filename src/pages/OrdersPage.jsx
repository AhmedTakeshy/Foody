import { useOutletContext } from "react-router-dom"
import Orders from "../components/admin/Orders";

const OrdersPage = () => {
    const adminData = useOutletContext();
    const { orders } = adminData;
    return (
        <Orders orders={orders} />
    )
}

export default OrdersPage