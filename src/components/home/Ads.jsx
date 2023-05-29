import img1 from "../../assets/photo1.jpg";
import img2 from "../../assets/photo2.jpg";
import img3 from "../../assets/photo3.jpg";
import img4 from "../../assets/photo4.jpg";
import img5 from "../../assets/photo5.jpg";

const Ads = () => {
  return (
    <div className="max-w-[1240px] mx-auto pb-16 my-8 px-4 text-center">
      <h1 className="py-4 text-2xl font-bold">Eat what makes you happy!</h1>
      <div className="grid grid-rows-none gap-2 py-4 md:grid-cols-5 md:gap-4">
        <img
          className="object-cover w-full h-full col-span-2 row-span-2 rounded-md md:col-span-3"
          src={img1}
          alt="/"
        />
        <img
          className="object-cover w-full h-full rounded-tl-md"
          src={img2}
          alt="/"
        />
        <img
          className="object-cover w-full h-full rounded-tr-md"
          src={img3}
          alt="/"
        />
        <img
          className="object-cover w-full h-full rounded-bl-md"
          src={img4}
          alt="/"
        />
        <img
          className="object-cover w-full h-full rounded-br-md"
          src={img5}
          alt="/"
        />
      </div>
    </div>
  );
};

export default Ads;
