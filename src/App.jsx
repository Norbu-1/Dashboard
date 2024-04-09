import React, { useState } from "react";
import Navbar from "./Container/Navbar";
import Discount from "./Container/Discount";
import TeamName from "./Container/TeamName";
import Section from "./Container/Section";
import AddNew from "./Container/AddNew";

const App = () => {
  const [Add, setAdd] = useState(false);
  const [page, setPage] = useState([
    {
      name: "AI Character Demo Storyboard",
      frame: "landscape_16_9",
      date: "12 Mar 2024",
    },
  ]);

  // Function to handle setting new page data
  const handleSetPage = (name, frame, date) => {
    setPage([...page, { name, frame, date }]); //  Updates page state with new data
  };

  // console.log(page);
  const handleNewData = (add) => {
    setAdd(add);
  };
  const handleCloseData = (add) => {
    setAdd(add);
  };

  return (
    <div className="pb-6 w-full h-full">
      <Discount />
      <Navbar />
      <TeamName data={handleNewData} />
      <Section data={page} />
      {Add ? <AddNew dat={handleCloseData} setNew={handleSetPage} /> : null}
    </div>
  );
};

export default App;
