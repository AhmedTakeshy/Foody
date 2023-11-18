import { useState } from "react";
import Card from "./UI/Card";
import { ImCross } from "react-icons/im";
import { json } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

const ContactForm = () => {
  const dispatch = useDispatch();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });


  const toggleContactHandler = () => {
    dispatch(uiActions.toggleContact());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedDate = new Date().toLocaleString();

    const sendRequest = async () => {
      const id = uuidv4();
      const res = await fetch(`https://redux-97fb6-default-rtdb.firebaseio.com/contacts/${id}.json`, {
        method: "PUT",
        body: JSON.stringify({ ...formData, dateTime: formattedDate, id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw json({ message: "Something went wrong!" }, { status: 500 });
      }
    };

    try {
      sendRequest();
      toggleContactHandler();
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      toast.success("Your message has been sent, thank you.");
    } catch (error) {
      console.log(error);
      toast.error("Something wrong happened, please try again.");
    }
  };

  return (
    <Card toggle="contact" className="bg-[#808080] py-8 px-12 max-w-[52rem]">
      <div className="flex flex-col">
        <div className="flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="">Contact form</span>
            <ImCross
              className="text-2xl text-red-600 cursor-pointer hover:text-black"
              size={15}
              onClick={toggleContactHandler}
            />
          </div>
          <h2 className="my-2 text-3xl font-bold">Write us</h2>
        </div>
        <form
          className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="w-full p-2 border border-gray-400 rounded-md"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-400 rounded-md"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            required
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            className="w-full col-span-2 p-2 border border-gray-400 rounded-md"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message..."
            className="w-full col-span-2 p-2 border border-gray-400 rounded-md"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 font-semibold text-black transition duration-500 rounded-md bg-secondary hover:bg-black hover:text-secondary w-fit"
          >
            Send
          </button>
        </form>
      </div>
    </Card>
  );
};

export default ContactForm;
