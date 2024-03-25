import React from "react";
import './App.css';
import Counter from "./component/Counter";
import PropDrilling from "./component/PropDrilling";
import Context from "./component/Context";
import Form from "./component/MyForm";
import MyForm from "./component/MyForm";


function App() {
  return (
    <div className="center">
    <Counter initialCount ={200} />
    <PropDrilling />
    <Context />
    <MyForm />
    </div>
  );
  
  
}

export default App;
