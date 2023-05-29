import React from 'react'
import { Link } from 'react-router-dom';

const MealCard = ({ meal }) => {
    const newPrice = `₺${meal.price?.toFixed(2)}`;
    console.log("meal", meal);
    return (
        <Link to={`${meal.id}`}>
            <div className=" w-[300px] m-5 border border-[#ccc] p-5 text-center rounded-md  hover:shadow-md">
                <img
                    src={`http://localhost:3000/${meal.img}`}
                    alt={meal.title}
                    className="w-full h-[200px] object-cover mb-5 rounded-md"
                />
                <h2 className="text-[1.4rem] mb-2 font-bold text-black dark:text-white">{meal.title}</h2>
                <p className="mb-3 text-xl text-primary">{newPrice || `₺${meal.price}`}</p>
                <div className='flex items-center justify-between'>
                    <button
                        className="px-8 py-3 text-xl text-white bg-green-700 border-none rounded-full hover:bg-green-900"
                    >
                        Edit
                    </button>
                    <button
                        className="px-8 py-3 text-xl text-white bg-red-700 border-none rounded-full hover:bg-red-900"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default MealCard;