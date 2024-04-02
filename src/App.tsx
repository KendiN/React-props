import React from "react";
import './App.css';
import PropDrilling from "./component/PropDrilling";
import List from "./component/List";
import Login from "./forms/Login";
import SignUp from "./forms/Signup";
import CarContext from "./context/CarProvider";
import CarDisplay from "./component/CarDisplay";




function App() {
  return (
    <div className="center">
    
    <CarContext>
    <PropDrilling />
    <List />
    <Login />
    <SignUp />
    <CarDisplay />
    </CarContext>
   
    </div>
  );
  
  
}

export default App;
