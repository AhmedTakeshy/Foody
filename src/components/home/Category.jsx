import Product from "../Product";

const Category = ({ title, data }) => {

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-black">{title}</h1>
      <div className="flex flex-wrap items-center justify-center p-12">
        {data?.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            price={item.price}
            img={item.img}
            title={item.title}
            ingredients={item.ingredients}
            calories={item.calories}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
