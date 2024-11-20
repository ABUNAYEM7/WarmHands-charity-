import React, { useContext, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Swal from "sweetalert2";
import { FirebaseContext } from "../FirebaseProvider/FirebaseProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const { userProfileUpdate } = useContext(FirebaseContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");

    const updatedData = {
      displayName: name,
      photoURL: photo,
    };

    userProfileUpdate(updatedData)
      .then(() => {
        Swal.fire({
          title: "Your Data IS Updated",
          text: "Thanks For Being With Us",
          icon: "success",
          confirmButtonText: "close",
        });
        navigate("/Dashboard");
      })
      .catch((err) => setErr(err));
  };

  return (
    <div className="w-full  mx-auto my-6 p-4 bg-[#007aff]">
      <div className="w-full lg:w-1/2 mx-auto rounded-xl p-4  bg-white">
        <h3 className="text-center md:text-2xl text-xl font-bold text-[#007aff] my-3">
          <TypeAnimation
            sequence={[
              `Please Provide, Name And Photo URL `,
              2000,
              `Thanks For, with us`,
              2000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
          />
        </h3>
        <form onSubmit={submitHandler} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="NAME"
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
          {err && (
            <label className="label">
              <p className="text-lg font-medium text-[#901111]">{error}</p>
            </label>
          )}
          <div className="form-control mt-6">
            <button className="btn bg-[#007aff] text-white hover:text-[#007aff]">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
