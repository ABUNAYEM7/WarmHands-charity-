import React from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import Info from "../Components/Info";

const DonateCards = () => {
  const data = useLoaderData();
  return (
    <div>
      <div>
        <Info title={"Our Current Campaign"} />
      </div>
      <div className="my-12 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
        {data.map((element) => (
          <div
            key={element.id}
            className="card max-h-[400px] max-w-[400px] shadow-xl"
          >
            <figure className="h-[40%]">
              <img className="object-cover" src={element.image} alt="Shoes" />
            </figure>
            <div className="card-body p-2">
              <h2 className="card-title">
                {element.title}
                <div className="badge badge-secondary bg-[#007aff] border-none">
                  {element.status}
                </div>
              </h2>
              <div className="badge badge-secondary bg-[#901111] border-none ">
                {element.division}
              </div>
              <p>{element.description.slice(0, 60)}...</p>
              <div className="card-actions justify-end ">
                <Link
                  to={`/DonateCamp/DonateDetails/${element.id}`}
                  className="btn  bg-gradient-to-tr from-[#901111] to-[#007aff] text-white"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonateCards;
