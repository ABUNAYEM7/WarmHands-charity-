import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
const SingIn = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const pass = form.get("pass");
    console.log(email, pass);
  };
  return (
    <div className="bg-white rounded-xl w-4/5 mx-auto flex flex-col lg:flex-row justify-between">
      <div className="w-2/3 mx-auto">
        <form onSubmit={submitHandler} className="card-body ">
          <h3 className="text-[#007aff] text-center text-2xl font-medium mb-3">
            <TypeAnimation
              sequence={[
                "Join With Us,Be A part Of Us.",
                2000,
                "Spread Warmth, Share Love",
                2000,
                "Donate Warmth, Change Lives",
                2000,
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
            />
          </h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="pass"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#007aff] text-white hover:text-[#007aff]">
              Login
            </button>
          </div>
          <div>
            <p className="text-base font-medium text-center my-3">
              Don't Have An Account ?
              <Link to={"/LogIn/Register"} className=" text-[#901111] ml-3">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="w-full lg:w-1/3 pt-10 bg-base-300 rounded-xl p-4">
        <h3 className="text-3xl font-bold text-[#007aff] text-center">
          Social Log In{" "}
        </h3>
        <div className="flex flex-col items-center justify-center gap-5 mt-6 w-11/12 mx-auto ">
          <button className="w-full btn bg-gradient-to-tr from-[#901111] to-[#007aff] text-white ">
            Sign In With Google
          </button>
          <button className="w-full btn bg-gradient-to-tr from-[#901111] to-[#007aff] text-white ">
            Sign In With Github
          </button>
          <button className="w-full btn bg-gradient-to-tr from-[#901111] to-[#007aff] text-white  ">
            Sign In With Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
