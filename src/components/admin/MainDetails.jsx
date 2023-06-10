import { Link } from "react-router-dom";

const MainDetails = ({ icon, title, number, link }) => {
  return (

    <div className="w-full p-2 cursor-pointer md:w-1/2 lg:w-1/4 group">
      <Link to={link}>
        <div className="flex flex-row items-center w-full p-3 rounded-md bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500">
          <div className="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
            {icon}
          </div>
          <div className="flex flex-col justify-around flex-grow ml-5 text-white">
            <div className="text-xs whitespace-nowrap">{title}</div>
            <div className="">{number}</div>
          </div>
          <div className="flex items-center flex-none text-white transition duration-500 group-hover:translate-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MainDetails;
