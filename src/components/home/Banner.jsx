import React from "react";

const Banner = () => {
  return (
    <div className="bg-banner h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-white text-center">
      <h1 className=" font-bold text-5xl mb-5 text-transparent bg-gradient-to-r from-white to-black bg-clip-text">
        Lezzetli Yemekler Burada!
      </h1>
      <p className="text-2xl mb-10">
        Birbirinden lezzetli yemeklerimizi deneyin.
      </p>
      <button className="border-none rounded-full py-3 px-8 bg-primary text-white text-xl font-bold hover:bg-secondary transition duration-500">
        Menülerimizi İnceleyin
      </button>
    </div>
  );
};

export default Banner;
