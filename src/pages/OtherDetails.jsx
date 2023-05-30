import { useOutletContext, useLocation } from "react-router-dom"
import Orders from "../components/admin/Orders";
import { useEffect, useState } from "react";
import Contacts from "../components/admin/Contacts";
import Reservations from "../components/admin/Reservations";

const OtherDetails = () => {
    const adminData = useOutletContext();
    const { contacts, orders, reservations } = adminData;
    const { pathname } = useLocation();

    const [activePath, setActivePath] = useState({
        orders: false,
        reservations: false,
        contacts: false
    })

    useEffect(() => {
        if (pathname === "/admin/orders") {
            setActivePath(prev => {
                return {
                    ...prev,
                    orders: true
                }
            })
        } else if (pathname === "/admin/reservations") {
            setActivePath(prev => {
                return {
                    ...prev,
                    reservations: true
                }
            })
        } else if (pathname === "/admin/contacts") {
            setActivePath(prev => {
                return {
                    ...prev,
                    contacts: true
                }
            })
        }
    }, [pathname])


    return (
        <div>
            {activePath.orders && !activePath.reservations && !activePath.contacts && <Orders orders={orders} />}
            {activePath.reservations && !activePath.orders && !activePath.contacts && <Reservations reservations={reservations} />}
            {activePath.contacts && !activePath.orders && !activePath.reservations && <Contacts contacts={contacts} />}
        </div>
    )
}

export default OtherDetails