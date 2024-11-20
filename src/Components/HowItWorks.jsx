import { Link } from 'react-router-dom';
import donateImage from '../assets/donateImage.avif';
import { IoIosArrowDown } from "react-icons/io"
import { FaTruckDroplet, FaCity  } from "react-icons/fa6"
const HowItWorks = () => {
  return (
    <div>
      <h3 className="text-[#901111] text-5xl font-semibold text-center">
        How Its
                 <span className="text-[#007aff] ml-3">Work</span>
      </h3>
      <p className="text-[#007aff] font-medium text-5xl text-center my-3">Packed Unwanted Cloth And <span className="text-[#901111] ">Share Love</span></p>
      {/* donation-steps */}
      <div className="my-12 flex flex-col lg:flex-row gap-5 justify-center items-center"> 
            {/* left-image */}
            <div className='w-full lg:w-1/2 lg:min-h-[900px] '>
                <img className='w-full h-full' src={donateImage} alt="donateImage" />
            </div>
            {/* donate-instruction */}
            <div className="w-full lg:w-1/2 my-12">
                {/* heading */}
                <div className="w-11/12 rounded-3xl border-2 rounded-br-none flex items-center gap-5 p-10 bg-base-300">
                <h3 className="p-2 px-4 bg-[#007aff] rounded-full">
                    <p className="text-xl font-bold text-white">1</p>
                </h3>
                <p className="text-3xl font-bold">Bag up your unwanted clothing</p>
                </div>
                {/* info */}
                <div className="w-11/12 border-r-4">
                    <p className="text-lg font-medium p-4 ml-10">Put all of your unwanted clothing in a clean bag. We collect a wide range of clothes, shoes, bags and accessories (see the full list below), however all items must be clean and in a re-wearable condition.</p>
                </div>
                {/* heading */}
                <div className="w-11/12 rounded-3xl border-2 rounded-tr-none rounded-bl-none flex items-center justify-center gap-5 p-4  px-10 bg-base-300">
                <h3 className="p-2 px-4 bg-[#007aff] rounded-full">
                    <p className="text-xl font-bold text-white">2</p>
                </h3>
                <p className="text-3xl font-bold">Request a collection and select your charity</p>
                </div>
                {/* info */}
                <div className="w-11/12 border-l-4 ">
                    <p className="text-lg font-medium   p-4">Once you have requested a collection using our online form and selected the charity you would like to support, a member of our team will be in touch to confirm the address, date and time for pick up. We can collect from homes, places of work and other agreed locations, and you can even leave the clothing outside to be retrieved as long as it’s safe and dry.</p>
                </div>
                {/* heading */}
                <div className="w-11/12 rounded-3xl border-2  rounded-tl-none rounded-br-none  flex items-center justify-center gap-5 p-10 px-10 bg-base-300 ">
                <h3 className="p-2 px-4 bg-[#007aff] rounded-full">
                    <p className="text-xl font-bold text-white">3</p>
                </h3>
                <p className="text-3xl font-bold">Your Will Be Distribute Among Them</p>
                </div>
                {/* info */}
                <div className="w-11/12 border-r-4 h-52">
                    <p className="text-lg font-medium p-4 ml-10">Your contributions will be distributed directly to individuals and families in need, ensuring they receive essential clothing and support to stay warm, safe, and cared for during harsh winters</p>
                </div>
                <div className='w-11/12 mx-auto flex justify-end '>
                    <h3><IoIosArrowDown size={50} className='text-gray-400 '/></h3>
                </div>
                <div className='w-full flex justify-end '>
                   <Link 
                   to={'/DonateCamp/DonateDetails/1'}
                   className='btn bg-[#007aff] text-white hover:text-[#007aff]'>Arrange A Collection</Link>
                </div>
            </div>
      </div>
        {/* drop-and-pickup */}
    <div>
    <h3 className="text-[#901111] text-5xl font-semibold text-center">Drop And  Pickup<span className='ml-4 text-[#007aff]'>Point</span></h3>
            {/* drop and pickup container */}
    <div className='my-12 flex flex-col lg:flex-row gap-5 justify-around'>
        {/* left-container */}
        <div>
            <FaTruckDroplet size={50} className='text-center w-full my-1 text-[#901111]'/>
        <h3 className="text-[#901111] text-5xl font-semibold text-center">Collect Point</h3>
        <div className='my-6 flex flex-col items-center gap-5'>
            <div className='p-8 border-2 w-full rounded-xl bg-base-300 shadow-lg'>
                <h3 className='text-3xl font-semibold text-[#901111] '>Community Center, Dhaka</h3>
            </div>
            <div className='p-8 border-2 w-full rounded-xl bg-base-300 shadow-lg'>
                <h3 className='text-3xl font-semibold text-[#901111] '>City Hall, Chattogram</h3>
            </div>
            <div className='p-8 border-2 w-full rounded-xl bg-base-300 shadow-lg'>
                <h3 className='text-3xl font-semibold text-[#901111] '>Local Library, Sylhet</h3>
            </div>
            <div className='p-8 border-2 w-full rounded-xl bg-base-300 shadow-lg'>
                <h3 className='text-3xl font-semibold text-[#901111] '>Khulna Divisional Museum , Khulna</h3>
            </div>
        </div>
        </div>
        {/* right-container */}
        <div>
            < FaCity size={50} className='text-center w-full my-1 text-[#007aff]'/>
        <h3 className="text-[#007aff] text-5xl font-semibold text-center">Supportive Division</h3>
        <div className='my-6 flex flex-col items-center gap-5'>
            <div className='p-8 border-2 w-full rounded-xl bg-base-300 shadow-lg'>
                <h3 className='text-3xl font-semibold text-[#007aff] '>Dhaka</h3>
            </div>
            <div className='p-8 border-2 w-full rounded-xl bg-base-300 shadow-lg'>
                <h3 className='text-3xl font-semibold text-[#007aff] '>Chittagong</h3>
            </div>
            <div className='p-8 border-2 w-full rounded-xl bg-base-300 shadow-lg'>
                <h3 className='text-3xl font-semibold text-[#007aff] '>Sylhet</h3>
            </div>
            <div className='p-8 border-2 w-full rounded-xl bg-base-300 shadow-lg'>
                <h3 className='text-3xl font-semibold text-[#007aff] '>Khulna</h3>
            </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HowItWorks;
