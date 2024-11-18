import { Outlet } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="w-full min-h-[530px] bg-gradient-to-tr from-[#901111] to-[#007aff] flex items-center justify-center">
      <div className="w-full h-full p-4">
      <Outlet/>
      </div>
    </div>
  );
};

export default LogIn;
