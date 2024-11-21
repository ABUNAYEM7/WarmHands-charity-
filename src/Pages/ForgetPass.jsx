import React, { useContext, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FirebaseContext } from "../FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getStoredEmail } from "../utility/utility";

const ForgetPass = () => {
  const [email,setEmail] = useState('')
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { resetPassword } = useContext(FirebaseContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");
    const form = new FormData(e.target);
    const email = form.get("email");
    resetPassword(email)
      .then(() => {
        Swal.fire({
          title: "Password reset email sent!",
          text: "Please Check Your Email",
          icon: "success",
          confirmButtonText: "close",
        });
        window.open("https://mail.google.com", "_blank");
        navigate("/LogIn");
      })
      .catch((err) => setError(err));
  };

  useEffect(()=>{
    const userEmail = getStoredEmail()
    setEmail(userEmail)
  },[])

  return (
    <div className="bg-white rounded-xl md:w-1/2 w-11/12 mx-auto ">
      <div className="lg:w-4/6 w-full  mx-auto">
        <form onSubmit={submitHandler} className="card-body ">
          <h3
            className="text-[#007aff] text-center md:text-2xl text-lg
          font-medium mb-3"
          >
            <TypeAnimation
              sequence={[
                "Please Inter ,YourEmail.",
                2000,
                "To Change ,Your Password.",
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
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          {error && (
            <label className="label">
              <p className="text-lg font-medium text-[#901111]">{error}</p>
            </label>
          )}
          <div className="form-control mt-6">
            <button className="btn bg-[#007aff] text-white hover:text-[#007aff]">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
