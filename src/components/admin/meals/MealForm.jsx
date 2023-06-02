import { useNavigate, json, useNavigation, Form, redirect } from "react-router-dom"
import { toast } from "react-toastify";

const MealForm = ({ method, meal }) => {
    const { meal: mealData } = meal ? meal : {};

    const navigate = useNavigate()
    const navigation = useNavigation()
    const isSubmitting = navigation.state === "submitting";

    const cancelHandler = () => {
        navigate("/admin/meals")
    }


    return (
        <Form method={method} className="max-w-[40rem] my-8 mx-auto border-2 border-[#ccc] rounded-md p-4">
            <p className="flex flex-col mb-4">
                <label className="w-full block font-semibold text-black dark:text-white" htmlFor="title">Title</label>
                <input
                    className="w-full block py-1 px-2 border text-black border-[#ccc] rounded bg-transparent dark:border focus:outline-none dark:text-white dark:border-b-[#ccc] "
                    id="title"
                    type="text"
                    name="title"
                    required
                    defaultValue={mealData ? mealData.title : ""}
                />
            </p>
            <p className="flex flex-col mb-4">
                <label className="w-full block text-black dark:text-white font-semibold" htmlFor="image">Image</label>
                <input
                    className="w-full block py-1 px-2 border text-black border-[#ccc] rounded bg-transparent dark:border focus:outline-none dark:text-white dark:border-b-[#ccc] "
                    id="image"
                    type="text"
                    name="image"
                    required
                    defaultValue={mealData ? mealData.img : ""}
                />
            </p>
            <p className="flex flex-col mb-4">
                <label className="w-full block text-black dark:text-white font-semibold" htmlFor="price">Price</label>
                <input
                    className="w-full block py-1 px-2 border text-black border-[#ccc] rounded bg-transparent dark:border focus:outline-none dark:text-white dark:border-[#ccc] "
                    id="price"
                    type="number"
                    name="price"
                    pattern="[0-9]"
                    required
                    defaultValue={mealData ? mealData.price : ""}
                />
            </p>
            <p className="flex flex-col mb-4">
                <label className="w-full block text-black dark:text-white font-semibold" htmlFor="type">Type</label>
                <select className="w-full block py-1 px-2 border text-black border-[#ccc] rounded bg-transparent dark:border focus:outline-none dark:text-white dark:border-b-[#ccc] " name="type" id="type" defaultValue={mealData ? mealData.type : ""} required>
                    <option value="" disabled hidden>Choose a type</option>
                    <option value="menu">Menu</option>
                    <option value="main">Main menu</option>
                    <option value="desserts">Desserts</option>
                    <option value="drinks">Drinks</option>
                </select>
            </p>
            <div className=" mt-4 flex gap-4 justify-end items-center">
                <button className="px-8 py-3 text-xl text-white bg-red-700 border-none rounded-full hover:bg-red-900"
                    onClick={cancelHandler} disabled={isSubmitting}>
                    Cancel
                </button>
                <button className="px-8 py-3 text-xl text-white bg-green-700 border-none rounded-full hover:bg-green-900"
                    disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Confirm"}
                </button>
            </div>
        </Form>
    )
}

export default MealForm


export const editOrDeleteMeal = async ({ params, request }) => {
    const method = request.method;
    const data = await request.formData();
    const mealData = {
        title: data.get("title"),
        img: data.get("image"),
        price: parseInt(data.get("price")),
        type: data.get("type")
    }
    let url = "http://localhost:3000/meals/"
    if (method === "PATCH") {
        const id = params.mealId
        url = "http://localhost:3000/meals/" + id;
    }
    try {
        await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mealData)
        })
        toast.success("Meals updated successfully");
        return redirect("/admin/meals")
    } catch (error) {
        console.log(error);
        toast.error("Could not update meals");
    }
}