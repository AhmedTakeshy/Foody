import { useAuth0 } from "@auth0/auth0-react";
import MainDetails from "./MainDetails";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineTableBar } from "react-icons/md";
import { RiTakeawayLine } from "react-icons/ri";
import { GiMeal } from "react-icons/gi";
import PropagateLoader from "react-spinners/PropagateLoader";

const Home = ({ adminNumbers }) => {
    const { mealsNumber, ordersNumber, reservationsNumber, contactsNumber } = adminNumbers;
    const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

    // const [prevOrdersNumber, setPrevOrdersNumber] = useState(ordersNumber);
    // const [prevReservationsNumber, setPrevReservationsNumber] = useState(reservationsNumber);
    // const [prevContactsNumber, setPrevContactsNumber] = useState(contactsNumber);
    // useEffect(() => {
    //     if (ordersNumber !== prevOrdersNumber) {
    //         toast.success("New order received");
    //         setPrevOrdersNumber(ordersNumber);
    //     }

    //     if (reservationsNumber !== prevReservationsNumber) {
    //         toast.success("New reservation received");
    //         setPrevReservationsNumber(reservationsNumber);
    //     }

    //     if (contactsNumber !== prevContactsNumber) {
    //         toast.success("New contact received");
    //         setPrevContactsNumber(contactsNumber);
    //     }
    // }, [ordersNumber, reservationsNumber, contactsNumber]);





    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-between pt-40 mx-auto">
                <h1 className="mb-4 text-3xl">Redirecting you to the admin page...</h1>
                <PropagateLoader
                    className=""
                    color="#F1823B"
                    cssOverride={{
                        margin: "1rem auto",
                        display: "inline-block",
                        width: "100%",
                        height: "100%",
                        textAlign: "center",
                    }}
                />
            </div>
        );
    }

    return isAuthenticated ? (
        <div className="flex flex-wrap my-5 -mx-2">
            <MainDetails
                icon={
                    <GiMeal
                        className="object-scale-down transition duration-500"
                        size={30}
                    />
                }
                title="Meals"
                number={mealsNumber}
                link="meals"
            />
            <MainDetails
                icon={
                    <RiTakeawayLine
                        className="object-scale-down transition duration-500"
                        size={30}
                    />
                }
                title="Orders"
                number={ordersNumber}
            />
            <MainDetails
                icon={
                    <MdOutlineTableBar
                        className="object-scale-down transition duration-500"
                        size={30}
                    />
                }
                title="Reservations"
                number={reservationsNumber}
            />
            <MainDetails
                icon={
                    <HiOutlineMail
                        className="object-scale-down transition duration-500"
                        size={30}
                    />
                }
                title="Contacts"
                number={contactsNumber}
            />
        </div>
    ) : (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-2xl font-bold">
                Welcome! to Admin page Please to login to see all data.
            </p>
            <button
                className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={() => {
                    loginWithRedirect({
                        redirectUri: window.location.origin + "/admin",
                    });
                }}
            >
                Login
            </button>
        </div>
    );
};

export default Home;
