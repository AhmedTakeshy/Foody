import { cartActions } from "../store/cart-slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { MdInfoOutline } from "react-icons/md";

const Product = ({ img, price, title, id, calories, ingredients, type }) => {
  const dispatch = useDispatch();
  const newPrice = `₺${parseInt(price)?.toFixed(2)}`;
  const [showIngredients, setShowIngredients] = useState(false)
  console.log(type);
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
    <div className={` overflow-auto w-[300px] m-5 border border-[#ccc] p-5 ${type !== "drinks" && "h-[40rem]"} text-center rounded-md hover:scale-105 transition duration-500 hover:shadow-md`}>
      <img
        src={`${img.includes("https") ? img : "http://localhost:3000/" + img} `}
        alt={title}
        className="w-full h-[200px] object-cover mb-5 rounded-md"
      />
      <h2 className="text-[1.4rem] mb-2 font-bold">{title}</h2>
      <p className="mb-3 text-xl text-primary">{newPrice || `₺${price}`}</p>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-between">
          <button
            onClick={addHandler}
            className="px-8 py-3 mr-3 text-xl text-white border-none rounded-full bg-primary hover:bg-secondary"
          >
            Sepete Ekle
          </button>
          {type !== "drinks" && <>
            <MdInfoOutline className="cursor-pointer peer" size={20} />
            <p className="relative hidden mt-4 text-xl peer-hover:inline-block">
              <span className="absolute w-32 h-20 py-2 text-white rounded-md -left-5 bottom-4 bg-slate-800">
                Kalori: ~{calories}kcal
              </span>
            </p></>}

        </div>
        {type !== "drinks" && <div className="flex flex-col items-center justify-center mt-4">
          <ul className="flex flex-col">
            {ingredients?.map((ingredient, index) => (
              <li key={index} className="text-xl">{ingredient}</li>
            ))}
          </ul>
        </div>}
      </div>



    </div>
  );
};

export default Product;
