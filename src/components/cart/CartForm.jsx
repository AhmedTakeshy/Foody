import { useState } from "react";

const isValid = (value) => value.trim().length > 0;
const isValidPhone = (value) => value.trim().length === 11;

const CartForm = (props) => {
  const [validity, setValidity] = useState({
    name: true,
    address: true,
    phone: true,
  });
  const [data, setData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const changeHandler = (eve) => {
    const { name, value } = eve.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setValidity((prevValidity) => ({
      ...prevValidity,
      [name]: isValid(value),
    }));
  };

  const formSubmitHandler = (eve) => {
    eve.preventDefault();
    const nameValidation = isValid(data.name);
    const addressValidation = isValid(data.address);
    const phoneValidation = isValidPhone(data.phone);

    setValidity({
      name: nameValidation,
      address: addressValidation,
      phone: phoneValidation,
    });

    const isFormValid = nameValidation && addressValidation && phoneValidation;
    if (!isFormValid) {
      return;
    }

    props.onConfirm(data);
    setData({
      name: "",
      address: "",
      phone: "",
    });
  };

  return (
    <form className="my-4" onSubmit={formSubmitHandler}>
      <div className={`mb-2 ${!validity.name && "text-[#ca3e51]"}`}>
        <label className={`block font-bold mb-1`} htmlFor="name">
          İsim
        </label>
        <input
          name="name"
          id="name"
          type="text"
          value={data.name}
          onChange={changeHandler}
          className={`border border-gray-300 rounded px-2 py-1 w-80 ${!validity.name && "border-[#aa0b20] bg-[#ffeff1]"
            }`}
        />
        {!validity.name && <p>Must not be empty</p>}
      </div>
      <div className={`mb-2 ${!validity.address && "text-[#ca3e51]"}`}>
        <label className="block mb-1 font-bold" htmlFor="address">
          Adres
        </label>
        <input
          name="address"
          id="address"
          type="text"
          value={data.address}
          onChange={changeHandler}
          className={`border border-gray-300 rounded px-2 py-1 w-80 ${!validity.address && "border-[#aa0b20] bg-[#ffeff1]"
            }`}
        />
        {!validity.address && <p>Must not be empty</p>}
      </div>
      <div className={`mb-2 ${!validity.phone && "text-[#ca3e51]"}`}>
        <label className="block mb-1 font-bold" htmlFor="phone">
          Telefon no
        </label>
        <input
          name="phone"
          id="phone"
          type="text"
          value={data.phone}
          onChange={changeHandler}
          placeholder="(05x)xxx-xx-xx"
          className={`border border-gray-300 rounded px-2 py-1 w-80 ${!validity.phone && "border-[#aa0b20] bg-[#ffeff1]"
            }`}
        />
        {!validity.phone && <p>Must be a valid phone (11)</p>}
      </div>
      <div className="flex justify-end gap-4 mb-4">
        <button
          type="button"
          onClick={props.onCancel}
          className="px-8 py-2 border-none rounded-full cursor-pointer text-secondary hover:bg-orange-100"
        >
          İptal
        </button>
        <button
          type="submit"
          className="px-8 py-2 text-white border rounded-full border-secondary bg-secondary hover:bg-primary"
        >
          Onayla
        </button>
      </div>
    </form>
  );
};

export default CartForm;
