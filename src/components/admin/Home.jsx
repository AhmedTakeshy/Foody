import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MainDetails from "./MainDetails";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineTableBar } from "react-icons/md";
import { RiTakeawayLine } from "react-icons/ri";
import { GiMeal } from "react-icons/gi";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Link } from "react-router-dom";

const Home = ({ adminNumbers }) => {

    const { user, isAuthenticated, loginWithRedirect, isLoading } =
        useAuth0();

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
                number={adminNumbers.mealsNumber}
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
                number={adminNumbers.orderNumber}
            />
            <MainDetails
                icon={
                    <MdOutlineTableBar
                        className="object-scale-down transition duration-500"
                        size={30}
                    />
                }
                title="Reservations"
                number={adminNumbers.reservationNumber}
            />
            <MainDetails
                icon={
                    <HiOutlineMail
                        className="object-scale-down transition duration-500"
                        size={30}
                    />
                }
                title="Contacts"
                number={adminNumbers.contactNumber}
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

{/* <div
                className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
                role="alert"
            >
                <span className="font-medium">Info alert!</span> Change a few things
                up and try submitting again.
            </div>
            <div
                className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                role="alert"
            >
                <span className="font-medium">Danger alert!</span> Change a few things
                up and try submitting again.
            </div>
            <div
                className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                role="alert"
            >
                <span className="font-medium">Success alert!</span> Change a few
                things up and try submitting again.
            </div> */}