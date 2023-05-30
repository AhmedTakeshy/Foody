import { useOutletContext, useLocation } from "react-router-dom"
import Orders from "../components/admin/Orders";
import { useEffect, useState } from "react";

const OtherDetails = () => {
    const adminData = useOutletContext();
    const { contacts, orders, reservations } = adminData;
    const { pathname } = useLocation();
    console.log("pathname", pathname);
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
            {activePath.reservations && !activePath.orders && !activePath.contacts && <h1>reservation</h1>}
            {activePath.contacts && !activePath.orders && !activePath.reservations && <h1>contacts</h1>}
        </div>
    )
}

export default OtherDetails