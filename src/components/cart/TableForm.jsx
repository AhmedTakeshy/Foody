import { useState } from "react";

const isValid = (value) => value.trim().length > 0;

const TableForm = (props) => {
  const [data, setData] = useState("");
  const [validity, setValidity] = useState(true);

  const changeHandler = (eve) => {
    const { value } = eve.target;
    setData(value);
    setValidity(isValid(value));
  };

  const formSubmitHandler = (eve) => {
    eve.preventDefault();
    const tableValidation = isValid(data);
    setValidity(tableValidation);
    if (!tableValidation) {
      return;
    }
    props.onConfirm(`Table No. ${data}`);
    setData("");
  };

  return (
    <form className="flex flex-col w-full" onSubmit={formSubmitHandler}>
      <div
        className={`flex items-center justify-start gap-2 mb-2 font-semibold ${!validity && "text-[#ca3e51]"
          }`}
      >
        <label htmlFor="tableNumber">Masa No.</label>
        <input
          type="number"
          id="tableNumber"
          pattern="[0-9]"
          className={`px-2 w-24 rounded border border-gray-300 focus:outline-none ${!validity && "!border-[#aa0b20] bg-[#ffeff1]"
            }`}
          value={data}
          onChange={changeHandler}
        />
      </div>
      <div className="flex justify-end w-full gap-4 mb-4">
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

export default TableForm;
