import React, { useState } from "react";
import Swal from "sweetalert2";
import Select from "react-select";

const itemTypes = [
  { value: "Blanket", label: "Blanket" },
  { value: "Clothes", label: "Clothes" },
  { value: "Socks", label: "Socks" },
  { value: "Jacket", label: "Jacket" },
  { value: "Food", label: "Food" },
  { value: "Medicine", label: "Medicine" },
];

const DonationForm = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemChange = (selectedOptions) => {
    if (selectedOptions.length > 3) {
      Swal.fire({
        title: "Limit Exceeded!",
        text: "You can select a maximum of 3 items.",
        icon: "warning",
        toast: true,
        position: "top-center",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
      return; // Prevent selection beyond the limit
    }
    setSelectedItems(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Thank you!",
      text: "We will reach your destination soon.",
      icon: "success",
      toast: true,
      position: "top-center",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
    });

    // Reset form
    setSelectedItems([]);
    e.target.reset();
  };

  return (
    <div className="card w-[80%] lg:w-1/2 mx-auto shadow-xl mt-8 p-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-[#007aff]">
        Donation Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Item Type (Select up to 3)</span>
          </label>
          <Select
            isMulti
            value={selectedItems}
            options={itemTypes}
            onChange={handleItemChange}
            closeMenuOnSelect={false}
            placeholder="Select item types..."
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Quantity of Items</span>
          </label>
          <input
            type="text"
            name="quantity"
            placeholder="e.g., 2 jackets, 3 blankets, 1 box Medicine"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Pickup Location</span>
          </label>
          <input
            type="text"
            name="pickupLocation"
            placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Additional Notes (Optional)</span>
          </label>
          <textarea
            name="notes"
            placeholder="Any additional instructions or notes"
            className="textarea textarea-bordered"
          />
        </div>

        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn hover:bg-[#007aff] text-white bg-[#901111]"
          >
            Submit Donation
          </button>
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
