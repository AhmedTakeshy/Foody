import { cartActions } from "../store/cart-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Product = ({ img, price, title, id, calories, ingredients }) => {
  const dispatch = useDispatch();
  const newPrice = `₺${parseInt(price)?.toFixed(2)}`;
  const [showIngredients, setShowIngredients] = useState(false)

  const addHandler = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        quantity: 1,
      })
    );
  };

  const handleIngredients = () => {
    setShowIngredients(!showIngredients)
  }

  return (
    <div className=" w-[300px] m-5 border border-[#ccc] p-5 text-center rounded-md hover:scale-105 transition duration-500 hover:shadow-md">
      <img
        src={`${img.includes("https") ? img : "http://localhost:3000/" + img} `}
        alt={title}
        className="w-full h-[200px] object-cover mb-5 rounded-md"
      />
      <h2 className="text-[1.4rem] mb-2 font-bold">{title}</h2>
      <p className="mb-3 text-primary text-xl">{newPrice || `₺${price}`}</p>
      <div className="flex justify-center items-center flex-col gap-2">
        <button
          onClick={addHandler}
          className="px-8 py-3 bg-primary text-white text-xl rounded-full border-none hover:bg-secondary"
        >
          Sepete Ekle
        </button>
        <button
          onClick={handleIngredients}
          className="px-8 py-3 bg-primary text-white text-xl rounded-full border-none hover:bg-secondary"
        >
          Ingredients
        </button>
      </div>
      {showIngredients &&
        <div className="flex flex-col justify-center items-center mt-4">
          <ul className=" list-disc flex flex-col">
            {ingredients?.map((ingredient, index) => (
              <li key={index} className="text-xl">{ingredient}</li>
            ))}
          </ul>
          <p className="text-2xl mt-4"><b>Kalori: </b>~{calories}kcal</p>
        </div>
      }
    </div>
  );
};

export default Product;
