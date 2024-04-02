import React from "react";
import './App.css';
import PropDrilling from "./component/PropDrilling";
import List from "./component/List";
import Login from "./forms/Login";
import SignUp from "./forms/Signup";




function App() {
  return (
    <div className="center">
    <PropDrilling />
    <List />
    <Login />
    <SignUp />
    
   
    </div>
  );
  
  
}

export default App;
