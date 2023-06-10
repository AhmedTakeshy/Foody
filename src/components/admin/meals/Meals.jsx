import MealCard from './MealCard';

const Meals = ({ meals }) => {
    return (
        <div className="flex flex-wrap items-center justify-center p-12">
            {meals?.map((meal) => (
                <MealCard
                    meal={meal}
                    key={meal.id}
                />
            ))}
        </div>
    )
}

export default Meals