import Contacts from "../components/admin/Contacts";
import { useOutletContext } from "react-router-dom"

const ContactsPage = () => {
    const adminData = useOutletContext();
    const { contacts } = adminData;
    return (
        <Contacts contacts={contacts} />

    )
}

export default ContactsPage