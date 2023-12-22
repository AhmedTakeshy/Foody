import MealCard from './MealCard';

const Meals = ({ meals }) => {
    const mealsArray = Object.values(meals);
    return (
        <div className="flex flex-wrap items-center justify-center p-12">
            {mealsArray?.map((meal) => (
                <MealCard
                    meal={meal}
                    key={meal.id}
                />
            ))
            .reverse()
            }
        </div>
    )
}

export default Meals