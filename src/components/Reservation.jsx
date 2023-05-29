import { ImCross } from "react-icons/im";
import Card from "./UI/Card";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { toast } from "react-toastify";
import { json } from "react-router-dom";

const Reservation = () => {
  const dispatch = useDispatch();

  const openingTime = "10:00";
  const closingTime = "22:00";
  const currentDate = new Date().toISOString().split("T")[0];
  const isTimeValid = (time, date) => {
    const selectedTime = new Date(currentDate + "T" + time);
    const selectedDate = date;
    const openingTimeDate = new Date(currentDate + "T" + openingTime);
    const closingTimeDate = new Date(currentDate + "T" + closingTime);
    const currentTime = new Date();

    return (
      (currentDate !== selectedDate || selectedTime >= currentTime) &&
      selectedTime >= openingTimeDate &&
      selectedTime <= closingTimeDate
    );
  };
  const [data, setData] = useState({
    name: "",
    tableNumber: "",
    numberOfPeople: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleReservationHandler = () => {
    dispatch(uiActions.toggleReservation());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isTimeValid(data.time, data.date)) {
      toast.error("Lütfen geçerli bir saat giriniz.");
      return;
    }

    const checkReservation = async () => {
      const res = await fetch("http://localhost:3000/reservations");
      const fetchedData = await res.json();
      const hasConflict = fetchedData.some(
        (reservation) =>
          reservation.date === data.date && reservation.time === data.time
      );
      if (hasConflict) {
        toast.error("Bu saatte rezervasyon alınamamaktadır.");
        return;
      }

      const response = await fetch("http://localhost:3000/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast.success("Rezervasyonunuz alınmıştır. Teşekkür ederiz.");
      if (!response.ok) {
        throw json({ message: "Something went wrong!" }, { status: 500 });
      }
    };

    try {
      checkReservation();
      toggleReservationHandler();
      setData({
        name: "",
        tableNumber: "",
        numberOfPeople: "",
        date: "",
        time: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Bir hata oluştu. Lütfen tekrar deneyiniz.");
    }
  };

  return (
    <Card className="font-normal text-black" toggle="reservation">
      <div className="z-10 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Rezervasyon</h2>
          <ImCross
            className="text-2xl text-red-600 cursor-pointer hover:text-black"
            size={15}
            onClick={toggleReservationHandler}
          />
        </div>
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={handleSubmit}
        >
          <input
            required
            name="name"
            type="text"
            className="p-2 rounded-md border border-[#ccc]"
            placeholder="Adınız:"
            onChange={handleChange}
            value={data.name}
          />
          <input
            required
            name="tableNumber"
            type="number"
            className="p-2 rounded-md border border-[#ccc]"
            pattern="[0-9]"
            placeholder="Masa numaranız:"
            onChange={handleChange}
            value={data.tableNumber}
          />
          <input
            required
            name="numberOfPeople"
            type="number"
            className="p-2 rounded-md border border-[#ccc]"
            pattern="[0-9]"
            placeholder="Kişi sayısı:"
            onChange={handleChange}
            value={data.numberOfPeople}
          />
          <div className="flex items-center justify-center gap-5">
            <input
              required
              name="date"
              type="date"
              className="p-2 rounded-md border border-[#ccc]"
              onChange={handleChange}
              value={data.date}
              min={currentDate}
            />
            <input
              required
              name="time"
              type="time"
              className="p-2 rounded-md border border-[#ccc]"
              onChange={handleChange}
              value={data.time}
              min={openingTime}
              max={closingTime}
            />
          </div>
          <button className="p-2 transition duration-300 bg-transparent border rounded-md text-secondary border-secondary hover:bg-secondary hover:border-secondary hover:text-white">
            Rezervasyon yap
          </button>
        </form>
      </div>
    </Card>
  );
};

export default Reservation;
