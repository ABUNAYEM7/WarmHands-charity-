import donate2 from "../assets/donate2.jpg";
import { SiNike } from "react-icons/si";
const WhyDonate = () => {
  return (
    <div>
      <h3 className="text-5xl font-bold text-[#007aff] text-center">
        Why Donate Cloth
      </h3>
      <div className="w-full my-6 flex flex-col lg:flex-row ga5 justify-between ">
        <div className="w-full lg:w-1/2 lg:min-h-[600px] my-3 p-4">
          <img className="w-full h-full" src={donate2} alt="Donate image" />
        </div>
        <div className="w-full lg:w-1/2 space-y-3 ">
          <div className="my-3 p-4 space-y-3">
            <h3 className="md:text-3xl text-xl font-bold flex items-center gap-2">
              <SiNike
                size={40}
                className="text-white p-2  bg-[#007aff] rounded-full"
              />
              <span>It’s hassle-free</span>
            </h3>
            <p className="text-lg font-medium ml-5">We offer a hassle-free way of recycling and getting rid of unwanted clothing. Whether it’s your own clothes or old baby clothes, you don’t even need to leave the house as we’ll collect them for you! If you’re in need of a charity clothes collection from home, Collect My Clothes is on hand.</p>
          </div>
          <div className="my-3 p-4 space-y-3">
            <h3 className="md:text-3xl text-xl font-bold flex items-center gap-2">
              <SiNike
                size={40}
                className="text-white p-2  bg-[#007aff] rounded-full"
              />
              <span>You’re supporting others around the world</span>
            </h3>
            <p className="text-lg font-medium ml-5">We usually send your recycled goods to Eastern Europe, providing affordable clothing to those in need. By arranging a clothes collection with us, you’re helping in more ways than one.</p>
          </div>
          <div className="my-3 p-4 space-y-3">
            <h3 className="md:text-3xl text-xl font-bold flex items-center gap-2">
              <SiNike
                size={40}
                className="text-white p-2  bg-[#007aff] rounded-full"
              />
              <span>It’s environmentally-friendly</span>
            </h3>
            <p className="text-lg font-medium ml-5">By using Collect My Clothes, you’re helping the environment! Instead of going to landfill, your old clothes will be reused or recycled.</p>
          </div>
          <div className="my-3 p-4 space-y-3">
            <h3 className="md:text-3xl text-xl font-bold flex items-center gap-2">
              <SiNike
                size={40}
                className="text-white p-2  bg-[#007aff] rounded-full"
              />
              <span>It’s environmentally-friendly</span>
            </h3>
            <p className="text-lg font-medium ml-5">Donating clothes reduces landfill waste by extending the life of textiles. It prevents discarded clothing from piling up in landfills, minimizing environmental pollution and conserving valuable landfill space</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDonate;
