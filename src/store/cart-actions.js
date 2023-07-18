import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const res = await fetch(
        "https://redux-97fb6-default-rtdb.firebaseio.com/cart.json"
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchRequest();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity || 0,
          totalAmount: cartData.totalAmount || 0,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-97fb6-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalAmount: cart.totalAmount,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
    };
    try {
      sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
