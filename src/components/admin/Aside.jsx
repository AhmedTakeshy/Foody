import { AiOutlineLogout, AiOutlineHome } from "react-icons/ai";
import { RiTakeawayLine } from "react-icons/ri";
import { MdTableBar } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { GiMeal, GiCook } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Aside = ({ modeHandler, asideHandler }) => {

    const { logout } = useAuth0();
    return (
        <aside className="w-60 -translate-x-48 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#1E293B] ">
            <div className="max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#1E293B]  absolute top-2 rounded-full h-12">
                <div className="flex items-center pl-4 space-x-2 ">
                    <div>
                        <div
                            onClick={modeHandler}
                            className="moon text-white hover:text-blue-500 dark:hover:text-[#38BDF8]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                />
                            </svg>
                        </div>
                        <div
                            onClick={modeHandler}
                            className="sun hidden text-white hover:text-blue-500 dark:hover:text-[#38BDF8]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="text-white hover:text-blue-500 dark:hover:text-[#38BDF8]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                            />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center py-1 pl-10 pr-2 space-x-3 text-white rounded-full group bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-purple-500 ">
                    <div className="mr-12 duration-300 ease-in-out transform">Yemek</div>
                </div>
            </div>
            <div
                onClick={asideHandler}
                className="-right-6 transition transform ease-in-out duration-500 flex border-4 border-white dark:border-[#0F172A] bg-[#1E293B] dark:hover:bg-blue-500 hover:bg-purple-500 absolute top-2 p-3 rounded-full text-white hover:rotate-45"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-4 h-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                </svg>
            </div>
            <div className="max hidden text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]">
                <Link to="/admin">
                    <div className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <AiOutlineHome className="w-4 h-4" />
                        <div>Home</div>
                    </div>
                </Link>
                <Link to="/admin/meals">
                    <div className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <GiMeal className="w-4 h-4" />
                        <div>Meals</div>
                    </div>
                </Link>
                <Link to="/admin/orders" >
                    <div className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <RiTakeawayLine className="w-4 h-4" />
                        <div>Orders</div>
                    </div>
                </Link>
                <Link to="/admin/reservations" >
                    <div className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <MdTableBar className="w-4 h-4" />
                        <div>Reservations</div>
                    </div>
                </Link>
                <Link to="/admin/contacts" >
                    <div className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <HiOutlineMail className="w-4 h-4" />
                        <div>Contacts</div>
                    </div>
                </Link>
                <Link to="/admin/waiter" >
                    <div className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <GiCook className="w-4 h-4" />
                        <div>Waiter</div>
                    </div>
                </Link>
                <div onClick={() =>
                    logout({
                        logoutParams: { returnTo: window.location.origin + "/admin" },
                    })
                } className="cursor-pointer hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                    <AiOutlineLogout className="w-4 h-4" />
                    <div>Logout</div>
                </div>
            </div>
            <div className="mini mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]">
                <Link to="/admin">
                    <div className=" hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                        <AiOutlineHome className="w-4 h-4" />
                    </div>
                </Link>
                <Link to="/admin/meals">
                    <div className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                        <GiMeal className="w-4 h-4" />
                    </div>
                </Link>
                <Link to="/admin/orders">
                    <div className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                        <RiTakeawayLine className="w-4 h-4" />
                    </div>
                </Link>
                <Link to="/admin/reservations">
                    <div className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                        <MdTableBar className="w-4 h-4" />
                    </div>
                </Link>
                <Link to="/admin/contacts">
                    <div className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                        <HiOutlineMail className="w-4 h-4" />
                    </div>
                </Link>
                <Link to="/admin/waiter">
                    <div className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                        <GiCook className="w-4 h-4" />
                    </div>
                </Link>
                <div onClick={() =>
                    logout({
                        logoutParams: { returnTo: window.location.origin + "/admin" },
                    })
                } className="cursor-pointer hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex">
                    <AiOutlineLogout className="w-4 h-4" />
                </div>
            </div>
        </aside>
    );
};

export default Aside;
