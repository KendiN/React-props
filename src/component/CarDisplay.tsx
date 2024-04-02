import React, { useContext } from "react";
import { CarContext } from "../context/CarProvider";

const CarDisplay: React.FC = () => {
  const { car, changeCar } = useContext(CarContext)!;

  return (
    <div>
      <h2>Car Display to demonstrate the use of context</h2>
      <div>Current Car: {car}</div>
      <button onClick={changeCar}>Change the car</button>
    </div>
  );
};

export default CarDisplay;
