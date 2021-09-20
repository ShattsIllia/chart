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

      
      setState(prev => refreshState(prev, data))

      });
  }, [])



  
  return (
    <div className="App">
        
        <AlVelComp />
        <IlliaComp />
        
        <div>{state[state.length - 1].value} </div>

        {getTime(state[state.length - 1].timestamp)}

    </div>
  );
}

export default App;
