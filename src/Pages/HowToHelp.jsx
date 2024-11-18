import React from "react";

const HowToHelp = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8">How It Works</h1>

        {/* Instructions Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Instructions for Donation
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Register or log in to your account.</li>
            <li>
              Fill out the donation form with details about the clothing items.
            </li>
            <li>
              Select your preferred collection method: drop-off or pick-up.
            </li>
          </ul>
        </div>

        {/* Collection Points Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Collection Points</h2>
          <p>Drop off your donations at any of the following locations:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Community Center, Dhaka</li>
            <li>City Hall, Chattogram</li>
            <li>Local Library, Sylhet</li>
          </ul>
        </div>

        {/* Supported Divisions Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Supported Divisions</h2>
          <p>We currently operate in the following divisions:</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-blue-100 rounded-lg text-center">Dhaka</div>
            <div className="p-4 bg-blue-100 rounded-lg text-center">
              Chattogram
            </div>
            <div className="p-4 bg-blue-100 rounded-lg text-center">Sylhet</div>
            <div className="p-4 bg-blue-100 rounded-lg text-center">Khulna</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;
