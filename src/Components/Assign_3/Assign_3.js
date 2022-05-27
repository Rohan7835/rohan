import React, { useState } from "react";
import Accordion_component from "./Accordion_component";

const ListData = [
  { name: "Lead Owner",endPoint:"owners" },
  { name: "Lead Source",endPoint:"sources" },
  { name: "Stage",endPoint:"stages" },
];

function Assign_3() {
  const [Listing, setListing] = useState(ListData);
  
  
  return (
    <div>
      <div className="container">
        <h1 className="heading">Assignment 3</h1>
        <div className="accordion-container">
          {Listing.length > 0 && Listing.map((list, index) => {
            return <Accordion_component key={index} data={list} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Assign_3;
