import "./App.css";
// import { LineChart, Line } from "recharts";
import {getTime} from './functions/getTimeFunk'
import React, { useState } from "react";
import { socket } from "./functions/socket";
import { refreshState } from "./functions/refreshState";
import { AlVelComp } from "./components/AlvelComp";
import { IlliaComp } from "./components/IlliaComp";

function App() {

  const [state, setState] = useState([{
    value: 0,
    timestamp: 0,
  }])

  



  socket.on("data", (data) => {

    console.count('x')

    
  });
  


  return (
    <div className="App">
        
        <AlVelComp />
        <IlliaComp />


    </div>
  );
}

export default App;
