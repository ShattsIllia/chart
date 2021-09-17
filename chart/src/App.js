import "./App.css";
// import { LineChart, Line } from "recharts";
import {getTime} from './functions/getTimeFunk'
import React, { useEffect, useState } from "react";
import { socket } from "./functions/socket";
import { refreshState } from "./functions/refreshState";
import { AlVelComp } from "./components/AlvelComp";
import { IlliaComp } from "./components/IlliaComp";

function App() {

  const [state, setState] = useState([{
    value: 0,
    timestamp: 0
  }])

  

  
 useEffect(() => {
    socket.on("data", (data) => {
      console.log(data);

      setState(data)

      // refreshState(data, state, setState)

        
      });
 }, [])


  
  


  return (
    <div className="App">
        
        <AlVelComp />
        <IlliaComp />
        
        <div>{state.value} </div>
        {getTime(state.timestamp)}
    </div>
  );
}

export default App;
