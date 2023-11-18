import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white bg-center bg-no-repeat bg-cover bg-banner">
      <h1 className="mb-5 text-5xl font-bold text-transparent  bg-gradient-to-r from-white to-black bg-clip-text">
        Delicious Food is Here!
      </h1>
      <p className="mb-10 text-2xl">Try our delicious dishes.</p>
      <button className="px-8 py-3 text-xl font-bold text-white transition duration-500 border-none rounded-full bg-primary hover:bg-secondary">
        Check out our menu
      </button>
    </div>
  );
};

export default Banner;
