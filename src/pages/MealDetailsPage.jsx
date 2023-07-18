import { Suspense } from "react";
import { defer, json, redirect, useRouteLoaderData, Await } from "react-router-dom";
import MealCard from "../components/admin/meals/MealCard";
import Meals from "../components/admin/meals/Meals";
import PropagateLoader from 'react-spinners/PropagateLoader';
import { toast } from "react-toastify";
const MealDetailsPage = () => {
    const { meal, meals } = useRouteLoaderData("meal-details");
    return (
        <>
            <Suspense fallback={<PropagateLoader
                className=""
                color="#F1823B"
                cssOverride={{
                    margin: "1rem auto",
                    display: "inline-block",
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                }}
            />}>
                <Await resolve={meal}>
                    {(loadedMeal) => <MealCard meal={loadedMeal} />}
                </Await>
            </Suspense>
            <Suspense fallback={<PropagateLoader
                className=""
                color="#F1823B"
                cssOverride={{
                    margin: "1rem auto",
                    display: "inline-block",
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                }}
            />}>
                <Await resolve={meals}>
                    {(loadedMeals) => <Meals meals={loadedMeals} />}
                </Await>
            </Suspense>
        </>
    )
}

export default MealDetailsPage



const loadMeal = async (id) => {
    const response = await fetch(`https://redux-97fb6-default-rtdb.firebaseio.com/meals/${id}.json`);
    if (!response.ok) {
        toast.error("Could not fetch data for selected meal");
        throw json(
            { message: "Could not fetch data for selected meal" },
            { status: 500 }
        );
    } else {
        const resData = await response.json();
        return resData;
    }
}

export const loadMeals = async () => {
    const response = await fetch("https://redux-97fb6-default-rtdb.firebaseio.com/meals.json");

    if (!response.ok) {
        toast.error("Could not fetch meals.");
        throw json(
            { message: "Could not fetch meals." },
            {
                status: 500,
            }
        );
    } else {
        const resData = await response.json();
        return resData;
    }
}

export const loaderMealDetails = async (params) => {
    const { mealId } = params.params;
    return defer({
        meal: await loadMeal(mealId),
        meals: loadMeals(),
    });
}

export const mealDeleteAction = async ({ params, request }) => {
    const { mealId } = params;
    const response = await fetch(`https://redux-97fb6-default-rtdb.firebaseio.com/meals/${mealId}.json`, {
        method: request.method,
    });
    if (!response.ok) {
        toast.error("Could not delete meal.");
        throw json(
            { message: "Could not delete meal." },
            {
                status: 500,
            }
        );
    }
    else {
        toast.success("Meal deleted successfully!");
        return redirect("/admin/meals");
    }
}