import React from "react";

function List({ key, list, endPoint }) {
  return (
    <li key={key} className="list-data">
      <input type="radio" id={key} name={endPoint} value={key} />
      {endPoint === "owners" ? (
        <>
        {list.avatar && <img src={list.avatar} />}
        {`${list.firstName} ${list.lastName}`}
        </>
      ) : (
        list.label
      )}
    </li>
  );
}

export default List;
