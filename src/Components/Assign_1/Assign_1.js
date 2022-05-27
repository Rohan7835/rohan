import React, { useState } from "react";
import Button from "../Button";
import Label from "../Label";

function Assign_1() {
  const [counter, setCounter] = useState(0);

  const changeCounter = (type) => {
    setCounter(prv => type === "increment" ? prv + 1 : prv - 1);
  };

  return (
    <div className="container">
      <h1 className="heading">Assignment 1</h1>

      <Label  text={`Counter - ${counter}`}/>

      <div className="flex">
        <Button text="Increment" onClick={() => changeCounter("increment")} />
        <Button text="Decrement" onClick={() => changeCounter("decrement")} />
      </div>

    </div>
  );
}

export default Assign_1;
