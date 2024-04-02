import React, { createContext, useState, useContext } from "react";

type CarContextProps= {
  car: string;
  changeCar: () => void;
};

export const CarContext = createContext<CarContextProps | null>(null);

const CarProvider = ({children}:React.PropsWithChildren<{}>) => {
  const [car, setCar] = useState("🚗");

  const changeCar = () => {
    setCar("🚘"); 
  };

  return (
    <CarContext.Provider value={{ car, changeCar }}>
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;


