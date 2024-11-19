import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { FirebaseContext } from "../FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa"
const Register = () => {
  const [error, setError] = useState("");
  const [show,setShow] = useState(false)
  const navigate = useNavigate()

  const { createUser,singInWithGoogle,userProfileUpdate,singInWithGithub,singInWithFacebook } = useContext(FirebaseContext);

  const submitHandler = (e) => {
    e.preventDefault()
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const pass = form.get("pass");
    
    const updatedData = {
      displayName :name,
      photoURL : photo
    }
    // Password validation
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (pass.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (!/[A-Z]/.test(pass)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(pass)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    if (!regex.test(pass)) {
      setError("Password is invalid.");
      return;
    }

    setError(""); 

    // Create user
    createUser(email, pass)
    .then(()=>{ 
      return userProfileUpdate(updatedData)
    })
      .then(() => {
        navigate('/')
        Swal.fire({
          title: "You Registered Successfully",
          text: "Thanks For Being With Us",
          icon: "success",
          confirmButtonText: "close",
        });
      })
      .catch((err) => {
        setError(err.message.split('/')[1].split(')')[0] || err.code);
      });
  };
  
  const googleClickHandler =()=>{
    setError('')
    singInWithGoogle()
    .then(()=>{
      navigate('/')
      Swal.fire({
        title: "You Registered Successfully",
        text: "Thanks For Being With Us",
        icon: "success",
        confirmButtonText: "close",
      });
    })
    .catch((err) => {
      Swal.fire({
        title: `${err.message || err.code}`,
        text: "Thanks For Being With Us",
        icon: "warning",
        confirmButtonText: "close",
      });
    });
  }
  const githubClickHandler =()=>{
    setError('')
    singInWithGithub()
    .then(()=>{
      navigate('/')
      Swal.fire({
        title: "You Registered Successfully",
        text: "Thanks For Being With Us",
        icon: "success",
        confirmButtonText: "close",
      });
    })
    .catch((err) => {
      Swal.fire({
        title: `${err.message || err.code}`,
        text: "Thanks For Being With Us",
        icon: "warning",
        confirmButtonText: "close",
      });
    });;
  }
  const facebookClickHandler =()=>{
    setError('')
    singInWithFacebook()
    .then(()=>{
      navigate('/')
      Swal.fire({
        title: "You Registered Successfully",
        text: "Thanks For Being With Us",
        icon: "success",
        confirmButtonText: "close",
      });
    })
    .catch((err) => {
      Swal.fire({
        title: `${err.message || err.code}`,
        text: "Thanks For Being With Us",
        icon: "warning",
        confirmButtonText: "close",
      });
    });;
  }

  return (
    <div className="bg-white rounded-xl md:w-4/5 w-11/12 mx-auto flex flex-col lg:flex-row justify-between">
      <div className="lg:w-2/3  w-full mx-auto">
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
              <span className="label-text">Name </span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="pass"
              type={show ? 'text' : "password"}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <div className="p-2 rounded-full bg-base-300 absolute right-3 top-11">
              <Link onClick={()=>setShow(!show)}> 
              {show ? <FaEye size={18}/> : <FaEyeSlash size={18}/>}
              </Link>
            </div>
            {
              error &&
              <label className="label">
              <p className="text-lg font-medium text-[#901111]">{error}</p>
            </label>
            }
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#007aff] text-white hover:text-[#007aff]">
              Register
            </button>
          </div>
          <div>
            <p className="text-base font-medium text-center my-3">
              Already Have An Account ?
              <Link to={"/LogIn"} className=" text-[#007aff] ml-3">
                LogIn
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
          <button 
          onClick={googleClickHandler}
          className="w-full btn bg-gradient-to-tr from-[#901111] to-[#007aff] text-white ">
            Sign In With Google
          </button>
          <button 
          onClick={githubClickHandler}
          className="w-full btn bg-gradient-to-tr from-[#901111] to-[#007aff] text-white ">
            Sign In With Github
          </button>
          <button 
          onClick={facebookClickHandler}
          className="w-full btn bg-gradient-to-tr from-[#901111] to-[#007aff] text-white  ">
            Sign In With Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
