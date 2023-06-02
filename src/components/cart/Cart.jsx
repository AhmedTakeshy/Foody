import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import CartItem from "./CartItem";
import CartForm from "./CartForm";
import { uiActions } from "../../store/ui-slice";
import Modal from "../UI/Modal";
import TableForm from "./TableForm";
import OrderTime from "./OrderTime";
const Cart = () => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  const cartItems = useSelector((state) => state.cart.items);
  const cartAmount = useSelector((state) => state.cart.totalAmount);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const [isSelected, setIsSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState();
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cartAmountFixed = parseInt(cartAmount).toFixed(2);
  const hasItems = cartQuantity > 0;

  useEffect(() => {
    setIsSelected(false);
  }, [cartItems, cartQuantity, cartAmount]);


  const CartItems = (
    <ul className="overflow-auto max-h-[20rem]">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
    </ul>
  );

  const SubmitUserData = async (userData) => {
    setIsSending(true);
    setIsSubmitted(false);
    const res = await fetch("http://localhost:3000/orders", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderItems: cartItems,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Something went wrong!!");
    }

    setIsSending(false);
    setIsSubmitted(true);
    dispatch(cartActions.reset());
  };

  const selectHandler = () => {
    setIsSelected(true);
  };

  const changeOptionHandler = (e) => {
    setSelectedOption(e.target.value);
  };

  const cartModalContent = (
    <>
      {CartItems}
      <div className="flex items-center justify-between my-4 text-2xl font-bold">
        <span>Total Amount</span>
        <span>₺{cartAmountFixed}</span>
      </div>
      {isSelected && (
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-between gap-2 mb-2 font-semibold">
            <input
              type="radio"
              name="option"
              id="table"
              value="option1"
              onChange={changeOptionHandler}
              checked={selectedOption === "option1"}
            />
            <label htmlFor="table">Restaurant</label>
          </div>
          <div className="flex items-center justify-between gap-2 mb-2 font-semibold">
            <input
              type="radio"
              name="option"
              id="delivery"
              value="option2"
              onChange={changeOptionHandler}
              checked={selectedOption === "option2"}
            />
            <label htmlFor="delivery">Online order</label>
          </div>
          {selectedOption === "option1" ? (
            <TableForm
              onConfirm={SubmitUserData}
              onCancel={toggleCartHandler}
            />
          ) : null}
        </div>
      )}
      {selectedOption === "option2" ? (
        <CartForm onConfirm={SubmitUserData} onCancel={toggleCartHandler} />
      ) : (
        !isSelected && (
          <div className="text-right">
            <button
              className="px-8 py-2 bg-transparent border rounded-full text-primary border-primary hover:border-secondary hover:bg-secondary hover:text-white"
              onClick={toggleCartHandler}
            >
              Close
            </button>
            {hasItems && (
              <button
                className="px-8 py-2 ml-4 text-white border rounded-full bg-primary border-primary hover:border-secondary hover:bg-secondary"
                onClick={selectHandler}
              >
                Order
              </button>
            )}
          </div>
        )
      )}
    </>
  );

  const sendingMessage = <p>Sending order data...</p>;
  const submittedMessage = (
    <>
      <p className="text-lg font-semi-bold">Successfully sent the order!</p>
      <OrderTime />
      <div className="text-right">
        <button
          className="px-8 py-2 bg-transparent border rounded-full text-primary border-primary hover:border-secondary hover:bg-secondary hover:text-white"
          onClick={toggleCartHandler}
        >
          Close
        </button>
      </div>
    </>
  );
  return (
    <Modal>
      {!isSending && !isSubmitted && cartModalContent}
      {isSending && sendingMessage}
      {isSubmitted && !isSending && submittedMessage}
    </Modal>
  );
};

export default Cart;
