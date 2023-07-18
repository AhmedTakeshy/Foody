import React from 'react'
import MealForm from '../components/admin/meals/MealForm'
import { useRouteLoaderData } from 'react-router-dom'

const MealEditPage = () => {
    const data = useRouteLoaderData("meal-details");
    return (
        <MealForm method="PATCH" meal={data} />
    )
}

export default MealEditPage;