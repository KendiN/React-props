import React from "react";
import { useState } from "react";

const PropDrilling = () => {
  const [weather, setWeather] = useState("🌞");

  return <Europe weather={weather} />;
};

const Europe = ({ weather }: WeatherProps) => {
  return <Estonia weather={weather} />;
};

const Estonia = ({ weather }: WeatherProps) => {
  return <Tallinn weather={weather} />;
};

const Tallinn = ({ weather }: WeatherProps) => {
  return <div>{weather}</div>;
};

export default PropDrilling;