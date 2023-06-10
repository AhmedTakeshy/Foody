import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Card = (props) => {
  const dispatch = useDispatch();
  const toggleChoice = props.toggle;

  const toggle = () => {
    if (toggleChoice === "reservation") dispatch(uiActions.toggleReservation());
    else if (toggleChoice === "contact") dispatch(uiActions.toggleContact());
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 z-20 w-full h-screen bg-black bg-opacity-75"
        onClick={toggle}
      />
      <div
        className={`${props.className} fixed top-[9vh] left-[50%] max-w-[40rem] w-[50%] bg-white p-4 rounded-2xl shadow-lg z-30 animate-slide_down `}
      >
        {props.children}
      </div>
    </>
  );
};

export default Card;
