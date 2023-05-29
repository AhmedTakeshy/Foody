import MealCard from './MealCard';

const Meals = ({ meals }) => {
    const { menu, main, drinks, desserts } = meals;
    const mealsData = [...menu, ...main, ...drinks, ...desserts];
    console.log("mealsData", mealsData);
    return (
        <div className="flex flex-wrap items-center justify-center p-12">
            {mealsData?.map((meal) => (
                <MealCard
                    meal={meal}
                    key={meal.id}
                />
            ))}
        </div>
    )
}

export default Meals