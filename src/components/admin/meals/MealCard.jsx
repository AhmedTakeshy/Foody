import { Link, useSubmit, useLocation } from 'react-router-dom';

const MealCard = ({ meal }) => {
    const newPrice = `₺${parseInt(meal.price)?.toFixed(2)}`;
    let showDetails = false;
    const submit = useSubmit();
    const location = useLocation();

    if (location.pathname === `/admin/meals/${meal.id}`) {
        showDetails = true;
    }
    else {
        showDetails = false;
    }

    function startDeleteHandler() {
        const status = window.confirm("Do you want to proceed?");
        if (status) {
            submit(null, { method: "delete" });
        }
    }
    return (
        <div className='flex justify-center'>
            <div className=" w-[300px] m-5 border border-[#ccc] p-5 text-center rounded-md  hover:shadow-md">
                <img
                    src={meal.img}
                    alt={meal.title}
                    className="w-full h-[200px] object-cover mb-5 rounded-md"
                />
                <h2 className="text-[1.4rem] mb-2 font-bold text-black dark:text-white">{meal.title}</h2>
                <p className="mb-3 text-xl text-primary">{newPrice || `₺${meal.price}`}</p>
                <div className={`flex items-center ${showDetails ? "justify-between" : "justify-center"} `}>
                    {showDetails ? (
                        <>
                            <Link
                                to="edit"
                                className="px-8 py-3 text-xl text-white bg-green-700 border-none rounded-full hover:bg-green-900"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={startDeleteHandler}
                                className="px-8 py-3 text-xl text-white bg-red-700 border-none rounded-full hover:bg-red-900"
                            >
                                Delete
                            </button>
                        </>
                    ) :
                        <Link
                            to={`/admin/meals/${meal.id}`}
                            className="px-8 py-3 text-xl text-white bg-blue-700 border-none rounded-full hover:bg-blue-900"
                        >
                            Details
                        </Link>
                    }

                </div>
            </div>
        </div>
    )
}

export default MealCard;