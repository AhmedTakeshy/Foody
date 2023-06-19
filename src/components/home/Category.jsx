import Product from "../Product";

const Category = ({ title, data }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-black">{title}</h1>
      <div className="flex flex-wrap justify-center items-center p-12">
        {data?.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            price={item.price}
            img={item.img}
            title={item.title}
            ingredients={item.ingredients}
            calories={item.calories}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
