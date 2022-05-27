import React from "react";

function List({ id, list, endPoint }) {
  return (
    <li className="list-data">
      <input type="radio" id={id} name={endPoint} value={id} />
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
