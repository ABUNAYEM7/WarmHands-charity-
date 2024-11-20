import logo from "../assets/logo.png";
import {
  TbTargetArrow,
  TbClockHour7Filled,
  TbBinaryTree2,
} from "react-icons/tb";
import { IoTelescopeSharp } from "react-icons/io5";
import { BiDonateHeart } from "react-icons/bi";
const AboutUs = () => {
  return (
    <div className="">
      {/* banner */}
      <div className="w-full h-96 bg-[#901111] rounded-xl flex items-center justify-center my-6">
        <h3 className="text-4xl font-bold text-white">About Us</h3>
      </div>
      {/* what is warmHands */}
      <div className="my-3 flex items-center flex-col justify-center gap-3">
        <img className="w-20 h-20" src={logo} alt="logo" />
        <h3 className="text-3xl font-medium text-[#901111]">
          What is WarmHands
        </h3>
        <p className="text-xl font-medium text-center">
          WarmHand is a community-driven website dedicated to helping vulnerable
          populations during harsh winters by collecting and distributing warm
          clothing. Our mission is to ensure everyone has access to essential
          winter gear, such as coats, scarves, and blankets, to stay warm and
          safe. Users can contribute by donating gently used or new items,
          volunteering for distribution events, or making monetary donations to
          support our initiatives. WarmHand fosters a sense of community by
          bringing people together to spread warmth and kindness. Join us in
          making a difference, one donation at a time, and help transform lives
          during the coldest months.
        </p>
      </div>
      {/* our mission and vision */}
      <div className="flex flex-col md:flex-row justify-between gap-3 my-10">
        <div className="flex flex-col  justify-center items-center gap-3">
          <TbTargetArrow size={50} className="text-[#901111]" />
          <h3 className="text-5xl  text-[#901111]">Our Mission</h3>
          <p className="text-xl font-medium text-center w-2/3">
            {" "}
            Our mission is to provide warmth to those in need by facilitating
            clothing donations, fostering community support, and spreading love
            through acts of kindness, making a positive impact on lives
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <IoTelescopeSharp size={50} className="text-[#901111]" />
          <h3 className="text-5xl  text-[#901111]">Our Vision</h3>
          <p className="text-xl font-medium text-center w-2/3">
            Our vision is to create a compassionate world where everyone has
            access to warmth and comfort, building a strong community that
            supports each other through generous acts of giving
          </p>
        </div>
      </div>
      {/*how to contribute  banner */}
      <div className="w-full h-96 bg-[#007aff] rounded-xl flex items-center justify-center my-6">
        <h3 className="text-4xl font-bold text-white text-center">
          How You Can Contribute
        </h3>
      </div>
      <div className="my-6 flex flex-col gap-5">
        {/* donation */}
        <div className="my-3 flex items-center flex-col justify-center gap-3">
          <BiDonateHeart size={50} className="text-[#007aff]" />
          <h3 className="text-3xl font-medium text-[#007aff] text-center">
            Donation
          </h3>
          <p className="text-xl font-medium text-center">
            Donating clothes is a simple yet powerful way to support those in
            need. It helps provide essential clothing to individuals and
            families facing hardships, offering them warmth, dignity, and a
            sense of care. Clothing donations can benefit people in local
            communities, shelters, and across the globe, especially during
            challenging times such as winter or in the wake of disasters. By
            donating gently used clothes, you contribute to reducing waste,
            promoting sustainability, and supporting those who may not have the
            means to buy new garments. Every donation, big or small, makes a
            significant impact on improving someone's life.
          </p>
        </div>
        {/* how to Donate */}
        <div className="flex flex-col md:flex-row justify-between gap-5">
          {/* contribute-container */}
          <div className="flex flex-col  justify-center items-center gap-3">
            <TbClockHour7Filled size={50} className="text-[#007aff]" />
            <h3 className="text-5xl  text-[#007aff] text-center">
              Volunteer Your Time
            </h3>
            <p className="text-xl font-medium text-center w-2/3">
              Volunteering your time helps create a stronger community by
              supporting those in need, offering your skills and compassion.
              It’s a rewarding way to make a positive impact and promote
              meaningful change
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <TbBinaryTree2 size={50} className="text-[#007aff]" />
            <h3 className="text-5xl  text-[#007aff] text-center">
              Raise Awareness
            </h3>
            <p className="text-xl font-medium text-center w-2/3">
              Raising awareness helps inform and educate communities about
              critical issues, inspiring collective action and support. It
              amplifies voices, spreads important messages, and encourages more
              people to get involved in making a difference
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
