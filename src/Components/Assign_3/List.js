import React from "react";

function List({ id, list, endPoint }) {
  return (
    <li className="list-data">
      <input type="radio" id={id} name={endPoint} value={id} />
      {endPoint === "owners" ? (
        <>
        {/*Avatar links are not working - sending 500 internal error....If link work then image will show up. */}
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
