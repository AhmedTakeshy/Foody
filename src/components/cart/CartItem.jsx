import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const price = `₺${props.price.toFixed(2)}`;
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        title: props.title,
        price: props.price,
        quantity: props.quantity,
      })
    );
  };
  const removeHandler = () => {
    dispatch(cartActions.removeItem(props.id));
  };

  return (
    <li className="flex justify-between items-center border-b-2 border-secondary py-4 my-4">
      <div>
        <h2 className="mb-2 font-bold text-2xl text-gray-700">{props.title}</h2>
        <div className="flex justify-between items-center w-40">
          <span className="font-bold text-secondary">{price}</span>
          <span className="font-bold border border-gray-300 rounded-md px-3 py-1 text-gray-700">
            x {props.quantity}
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <button
          onClick={removeHandler}
          className="font-bold text-lg text-primary border border-primary w-12 text-center rounded bg-transparent cursor-pointer m-1 hover:text-white hover:bg-secondary"
        >
          −
        </button>
        <button
          onClick={addHandler}
          className="font-bold text-lg text-primary border border-primary w-12 text-center rounded bg-transparent cursor-pointer m-1 hover:text-white hover:bg-secondary"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
