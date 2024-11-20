import { useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/cloth-1.PNG";
import image2 from "../assets/cloth-2.PNG";
import image3 from "../assets/cloth-3.PNG";
import donateBannerLeft from "../assets/donateBannerLeft.jpg";
import { FaFaceGrinHearts } from "react-icons/fa6";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS

const ItemsWeLove = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div>
      <div
        className="my-6 flex flex-col-reverse lg:flex-row gap-5 justify-center items-center"
        data-aos="fade-down"
      >
        {/* left-container */}
        <div className="w-full lg:w-1/2 bg-[#007aff] rounded-xl">
          <h3 className="text-3xl font-bold text-center my-3 text-white flex items-center justify-center gap-2">
            Items We Love
            <span>
              <FaFaceGrinHearts size={25} />
            </span>
          </h3>
          <div className="flex flex-col text-white">
            <div className="flex items-center justify-center gap-5 p-4">
              <div>
                <img className="rounded-full" src={image1} alt="" />
              </div>
              <div className="w-1/2 space-y-2">
                <h3 className="text-xl font-semibold">Cloth</h3>
                <p className="text-base font-medium">
                  Most everyday clothing. Tops, jumpers, coats, trousers, jeans,
                  skirts, dresses etc. Also includes child and baby clothes.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 p-4">
              <div className="w-1/2 space-y-2">
                <h3 className="text-xl font-semibold">Bags & Accessories</h3>
                <p className="text-base font-medium">
                  Includes all bags, belts, ties, gloves, hats, scarves and
                  jewellary. We also accept clean or new underwear & lingerie
                </p>
              </div>
              <div>
                <img className="rounded-full" src={image2} alt="" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 p-4">
              <div>
                <img className="rounded-full" src={image3} alt="" />
              </div>
              <div className="w-1/2 space-y-2">
                <h3 className="text-xl font-semibold">Shoes</h3>
                <p className="text-base font-medium">
                  As long as they’re clean and not too worn, we accept any
                  shoes, boots, heels or trainers.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right-image */}
        <div className="w-full lg:w-1/2">
          <img
            className="lg:min-h-[700px]"
            src={donateBannerLeft}
            alt="image"
          />
        </div>
      </div>
      <div
        className="w-full flex justify-center"
        data-aos="fade-down"
      >
        <Link
          to={"/DonateCamp/DonateDetails/1"}
          className="btn bg-[#007aff] text-white hover:text-[#007aff]"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default ItemsWeLove;
