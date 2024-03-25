import { useState } from "react";
import Continent from "./Continent";

const PropDrilling = () => {
  const[contitent, setContinent] = useState("Africa");

  return <Continent continent={contitent} />
};

export default PropDrilling;