import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlineToggleOff } from "react-icons/md";

const AddNew = ({ dat, setNew }) => {
  const [date, setDate] = useState(""); // State for storing date
  const [name, setNameLocal] = useState(""); // State for storing name
  const [frame, setFrame] = useState(" "); // State for storing frame size
  const [inputTyped, setInputTyped] = useState(false); // State for tracking if input is typed

  // Function to handle the button click event
  const handlebutton = () => {
    // Checking if all required fields are filled
    if (name && frame && date) {
      setNew(name, frame, date); // Sending data to add new frame
      dat(false); // Closing the AddNew component
    }
  };

  // Function to handle frame size change
  const handleFrameSizeChange = (e) => {
    setFrame(e.target.value); // Updating frame state
    setInputTyped(true); // Setting inputTyped to true
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const newdate = new Date(); // Getting current date
    const day = newdate.getDate(); // Getting day
    const monthIndex = newdate.getMonth(); // Getting month index
    const year = newdate.getFullYear(); // Getting year
    const data = `${day} ${months[monthIndex]} ${year}`; // Formatting date
    setDate(data); // Setting date state
  };

  // Function to handle name input change
  const handleName = (e) => {
    setNameLocal(e.target.value); // Updating name state
    setInputTyped(true); // Setting inputTyped to true
  };

  // Function to handle closing of AddNew component
  const handleClose = (e) => {
    dat(e); // Closing AddNew component
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-70 z-50">
      <div className="w-full max-w-[20rem] md:max-w-[34rem] bg-white rounded-lg px-4 md:px-8 py-8 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <p className="font-bold text-2xl">New Storyboard</p>
          <IoClose
            className="text-xl cursor-pointer"
            onClick={() => handleClose(false)}
          />
        </div>

        <div className="flex flex-col font-semibold mb-4">
          <label htmlFor="name">Storyboard Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Default Project Storyboard"
            className="border border-gray-400 px-2 py-3"
            onChange={handleName}
          />
        </div>
        <div className="flex flex-col font-semibold mb-4">
          <label htmlFor="size">Frame Size</label>
          <select
            id="size"
            name="size"
            className="border border-gray-400 px-2 py-3 w-full"
            onChange={handleFrameSizeChange}
          >
            <option value="default">Select Frame</option>
            <option value="landscape_16_9">Landscape (16:9)</option>
            <option value="landscape_9_9">Landscape (9:9)</option>
          </select>
        </div>

        <hr className="my-6" />

        <div className="flex justify-between items-center font-semibold ">
          <div className="flex items-center gap-2">
            <MdOutlineToggleOff className="text-lg cursor-pointer" />
            <p className="text-sm md:text-lg">AI Assistant</p>
          </div>
          <button
            className={`${
              name && frame && date && inputTyped
                ? "bg-black text-white py-2 px-4 md:px-2 rounded-md text-sm md:text-lg"
                : "opacity-50 cursor-not-allowed bg-gray-300 text-gray-700 py-2 px-4 md:px-2 rounded-md text-sm md:text-lg"
            }`}
            onClick={handlebutton}
            disabled={!name || !frame}
          >
            Create Storyboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
