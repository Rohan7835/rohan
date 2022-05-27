import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import List from "./List";

function Accordion_component({ data, index }) {
  const [allListInfo, setAllListInfo] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [searchedList, setSearchedList] = useState([]);

  //getting data of particular list
  useEffect(() => {
    if (clicked) {
      fetch("https://testapi.buopso.com/lms/" + data.endPoint)
        .then((response) => response.json())
        .then((data) => {
          setAllListInfo(data.result);
          setSearchedList(data.result);
        })
        .catch(() => {
          alert("Network Error")
        });
    }
  }, [clicked, data.endPoint]);


  //searching data in all lists.
  const searchList = (e) => {
    let localSearch = allListInfo.filter((list) => {
      let label = list.label || list.firstName + list.lastName;
      label = label.toLowerCase();
      return label.includes(e.target.value);
    });
    setSearchedList(localSearch);
  };

  return (
    <Accordion>
      <AccordionSummary
        aria-controls={`panel${index}a-content`}
        id={`panel${index}a-header`}
        onClick={() => setClicked(!clicked)}
      >
        <Typography>{data.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => searchList(e)}
        />
        <ul>
          {searchedList.length > 0 &&
            searchedList.map((list) => {
              return (
                <List key={list.id} list={list} endPoint={data.endPoint} />
              );
            })}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
}

export default Accordion_component;
