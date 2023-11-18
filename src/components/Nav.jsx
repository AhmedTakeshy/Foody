import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";
const Nav = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const scrollTo = () => {
    window.scrollTo({
      top: 850,
      behavior: "smooth",
    });
  };

  const toggleReservationHandler = () => {
    dispatch(uiActions.toggleReservation());
  };

  const toggleContactHandler = () => {
    dispatch(uiActions.toggleContact());
  };

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <header>
      <div className="logo"></div>
      <nav className="flex items-center justify-between px-10 text-white bg-primary">
        <ul className="flex items-center justify-between gap-3 font-bold cursor-pointer">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-secondary"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-secondary" onClick={scrollTo}>Menus</li>
          <li
            className="hover:text-secondary"
            onClick={toggleReservationHandler}
          >
            Reservation
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "text-secondary" : "hover:text-secondary"
              }
            >
              About
            </NavLink>
          </li>
          <li className="hover:text-secondary" onClick={toggleContactHandler}>
            Contact
          </li>
        </ul>
        <button
          onClick={toggleCartHandler}
          className="font-bold bg-secondary flex items-center hover:bg-orange-600 border-2 border-secondary  text-[15px] rounded-xl text-white my-1 px-4 py-2 cursor-pointer"
        >
          <BsCart4 size={20} className="mr-2" />
          Cart {cartQuantity}
        </button>
      </nav>
    </header>
  );
};

export default Nav;
