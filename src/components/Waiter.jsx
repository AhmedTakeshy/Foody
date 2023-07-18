import { IoRestaurantOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Waiter = () => {
  const [waiter, setWaiter] = useState([]);
  const callWaiter = async () => {
    const res = parseInt(prompt("Masa numarası giriniz:"));
    if (!isNaN(res)) {
      // send data to server
      const id = uuidv4();
      const waiterData = {
        id,
        tableNumber: res,
        dateTime: new Date().toLocaleString(),
      };
      const response = await fetch(`https://redux-97fb6-default-rtdb.firebaseio.com/waiter/${id}.json`, {
        method: "PUT",
        body: JSON.stringify(waiterData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Please try again later.");
      }

      else {
        const alreadyCalled = waiter.some((item) => item === res);
        if (alreadyCalled) {
          toast.info("Garson zaten yolda.");
        } else {
          setWaiter([...waiter, res]);
          if (res === 0) {
            toast.success(
              "Garson kapıya kadar bir kaç saniye içerisinde gelecektir."
            );
          } else {
            toast.success(`Masa ${res} için garson çağırıldı.`);
          }
        }
      }

    } else if (isNaN(res)) {
      toast.error("Lütfen bir masa numarası giriniz.");
    }
  };
  const text = "Garson Çağır";
  return (
    <div className="fixed z-0 flex items-center justify-center left-4 bottom-4">
      <button
        onClick={callWaiter}
        className="relative flex  animate-rotate  h-[70px] w-[70px] items-center justify-center rounded-full hover:bg-primary bg-secondary text-white"
      >
        {text.split("").map((letter, i) => (
          <span
            key={i}
            style={{
              transform: `rotate(${i * 27.5}deg)`,
              position: "absolute",
              top: "0%",
              left: `50%`,
              fontSize: "14px",
              transformOrigin: "0% 35px",
            }}
          >
            {letter}
          </span>
        ))}
        <IoRestaurantOutline size={20} />
      </button>
    </div>
  );
};

export default Waiter;
