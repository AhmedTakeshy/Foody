import { Suspense } from "react";
import { defer, json, redirect, useRouteLoaderData } from "react-router-dom";
import MealCard from "../components/admin/meals/MealCard";
import Meals from "../components/admin/meals/Meals";
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
    const response = await fetch("http://localhost:3000/categories/" + id);
    if (!response.ok) {
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
    const response = await fetch("http://localhost:3000/categories");

    if (!response.ok) {
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
    return defer({
        meal: await loadMeal(params.id),
        meals: loadMeals(),
    });
}

export const mealDeleteAction = async ({ params, request }) => {
    const id = params.mealId;
    const response = await fetch("http://localhost:3000/categories/" + id, {
        method: request.method,
    });
    if (!response.ok) {
        throw json(
            { message: "Could not delete meal." },
            {
                status: 500,
            }
        );
    }
    else {
        return redirect("/admin/meals");
    }
}