import React from "react";
import Info from "../Components/Info";
import { useLoaderData } from "react-router-dom";
import DonationForm from "../Components/DonationForm";
const DonateDetails = () => {
  const { singleData, id } = useLoaderData();
  const {
    id: cardId,
    title,
    image,
    description,
    status,
    contactInfo,
    division,
  } = singleData;
  return (
    <div>
      <div>
        <Info title={"Campaign Details"} />
      </div>
      {singleData && (
        <>
          <div>
            <div className="card max-w-[80%] mx-auto shadow-xl">
              <figure className="h-[30%] w-full">
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt={title}
                />
              </figure>
              <div className="card-body p-4 space-y-5">
                <h2 className="card-title text-xl font-bold">{title}</h2>
                <div className="badge badge-secondary bg-[#901111] border-none">
                  {division}
                </div>
                <p className="text-sm mt-2">{description}</p>
                <div className="mt-4 flex justify-between">
                  <span className="text-sm font-medium text-gray-600">
                    Status: <span className="text-[#007aff]">{status}</span>
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    Contact:{" "}
                    <span className="text-[#007aff]">{contactInfo}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="my-12">
        <DonationForm />
      </div>
    </div>
  );
};

export default DonateDetails;
