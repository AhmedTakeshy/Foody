import React, { useEffect } from "react";

const OrderTime = () => {
  useEffect(() => {
    const orderTime = document.querySelector(".order_time");
    orderTime.style.display = "flex";
    startTimer();
  }, []);

  const startTimer = () => {
    const progresses = document.querySelectorAll(".progress");
    const dots = document.querySelectorAll(".inner_dot");

    // Display first dot immediately
    dots[0].style.display = "inline-block";

    // Schedule display of second dot after 10 seconds
    setTimeout(() => {
      dots[1].style.display = "inline-block";
    }, 10000);

    // Schedule display of third dot after 20 seconds
    setTimeout(() => {
      dots[2].style.display = "inline-block";
    }, 20000);

    for (let i = 0; i < progresses.length; i++) {
      const progress = progresses[i];
      progress.style.width = "0%";
      progress.style.transition = "width 6s linear"; // add transition property

      // Start first progress bar animation after 2 second
      if (i === 0) {
        setTimeout(() => {
          progress.style.width = "100%";
        }, 2000);
      }

      // Start second progress bar animation after 11 seconds
      if (i === 1) {
        setTimeout(() => {
          progress.style.width = "100%";
        }, 11000);
      }
    }
  };

  return (
    <div className="flex-col items-center justify-center hidden p-8 text-base text-secondary order_time">
      <div className="flex items-center justify-between w-full timer">
        <div className="relative w-6 h-6 rounded-full bg-secondary circle">
          <div className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full outer_dot top-1/2 left-1/2">
            <div className="absolute hidden w-2 h-2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary inner_dot top-1/2 left-1/2"></div>
          </div>
        </div>
        <span className="relative self-start inline-block w-56 my-2 border-b-[5px] border-gray-300 rounded-xl line">
          <span className="absolute top-0 left-0 w-0 border-b-[5px] rounded-xl bg-secondary border-secondary progress"></span>
        </span>
        <div className="relative w-6 h-6 rounded-full bg-secondary circle">
          <div className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full outer_dot top-1/2 left-1/2">
            <div className="absolute hidden w-2 h-2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary inner_dot top-1/2 left-1/2"></div>
          </div>
        </div>
        <span className="relative self-start inline-block my-2 border-b-[5px] border-gray-300 rounded-xl line w-56">
          <span className="absolute top-0 left-0 w-0 border-b-[5px] rounded-xl bg-secondary border-secondary progress"></span>
        </span>
        <div className="relative w-6 h-6 rounded-full bg-secondary circle">
          <div className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full outer_dot top-1/2 left-1/2">
            <div className="absolute hidden w-2 h-2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary inner_dot top-1/2 left-1/2"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mt-2 text">
        <p className="ml-[-25px]">Sipariş Alındı</p>
        <p>Hazırlanıyor</p>
        <p className="mr-[-25px]">Teslim Edildi</p>
      </div>
    </div>
  );
};

export default OrderTime;
