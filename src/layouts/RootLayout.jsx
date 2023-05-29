import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Cart from "../components/cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartData, sendCartData } from "../store/cart-actions";
import { useEffect, useRef } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Waiter from "../components/Waiter";
import Footer from "../components/Footer";
import Reservation from "../components/Reservation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "../components/ContactForm";

const RootLayout = () => {
  const dispatch = useDispatch();

  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const showReservation = useSelector((state) => state.ui.reservationIsVisible);
  const showContact = useSelector((state) => state.ui.contactIsVisible);
  const isLoaded = useRef(false);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isLoaded.current) {
      isLoaded.current = true;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      <Nav />
      {cartIsVisible && <Cart />}
      <main>
        <ToastContainer />
        <Outlet />
        <ScrollToTop />
        <Waiter />
        {showReservation && <Reservation />}
        {showContact && <ContactForm />}
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
