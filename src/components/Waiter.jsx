import { IoRestaurantOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { useState } from "react";
const Waiter = () => {
  const [waiter, setWaiter] = useState([]);
  const callWaiter = () => {
    const res = parseInt(prompt("Masa numarası giriniz:"));
    if (!isNaN(res)) {
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
    } else if (isNaN(res)) {
      toast.warning("Garson çağırma işlemi iptal edildi.");
    } else {
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
