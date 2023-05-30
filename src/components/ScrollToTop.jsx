import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineArrowUp } from "react-icons/ai";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showBtn, setShowBtn] = useState(false);

  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollTo();
    window.addEventListener("scroll", () => {
      window.scrollY >= 550 ? setShowBtn(true) : setShowBtn(false);
    });
  }, [pathname]);

  return (
    showBtn && (
      <div className="fixed z-10 flex items-center justify-center right-4 bottom-4">
        <button
          onClick={scrollTo}
          className="flex  h-[70px]  w-[70px] items-center justify-center rounded-full hover:bg-primary bg-secondary text-white"
        >
          <AiOutlineArrowUp size={25} />
        </button>
      </div>
    )
  );
};

export default ScrollToTop;
