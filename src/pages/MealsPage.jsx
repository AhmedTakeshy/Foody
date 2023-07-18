import React, { Suspense } from 'react'
import { Await, Link, defer, json, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify';
import Meals from '../components/admin/meals/Meals';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { SiOneplus } from 'react-icons/si';

const MealsPage = () => {
    const { meals } = useLoaderData();

    return (
        <>
            <Link to="/admin/meals/new" className="flex items-baseline justify-between px-4 py-3 ml-auto text-xl text-white bg-blue-700 border-none rounded w-fit hover:bg-blue-900 hover:shadow-md">
                <SiOneplus className='mr-2 text-white' size={20} />
                Create meal
            </Link>
            <Suspense fallback={<PropagateLoader
                className=""
                color="#F4A460"
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

export default MealsPage;

const loadMeals = async () => {
    try {
        const res = await fetch("https://redux-97fb6-default-rtdb.firebaseio.com/meals.json");
        const data = await res.json();
        return data;
    } catch (error) {
        toast.error("Something went wrong")
        throw json({ message: "Could not fetch meals." }, { status: 500 })
    }
}

export const dataLoaderMeals = () => {
    return defer({
        meals: loadMeals()
    })
};