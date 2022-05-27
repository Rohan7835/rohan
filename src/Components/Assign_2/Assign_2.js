import React, { useState, useRef } from "react";
import Label from "../Label";
import Button from "../Button";

function Assign_2() {
  const errorElement = useRef();
  const [num, setNum] = useState();
  const [sum, setSum] = useState(0);

  const checkNum = (e) => {
    const errorDiv = errorElement.current;
    errorDiv.innerHTML = "";
    
    if (+e.target.value || e.target.value === "") {
      setNum(+e.target.value);
    } else {
      errorDiv.innerHTML = "Please type a number";
    }
  };

  const calculateSum = () => {
      let localSum = 0
    for(let i = 0;i<=num;i++){
        localSum += i
    }
    setSum(localSum)
  }

  return (
    <div className="container">
      <h1 className="heading">Assignment 2</h1>
      <div className="input-container">
        <input type="text" value={num || ""} onChange={(e) => checkNum(e)} />
        <div className="err" ref={errorElement}></div>
      </div>

      <Label text={`Sum - ${sum}`} />

      <div className="flex">
        <Button text="Sum" onClick={() => calculateSum()} />
      </div>
    </div>
  );
}

export default Assign_2;
