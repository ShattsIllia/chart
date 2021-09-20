import "./App.css";
// import { LineChart, Line } from "recharts";
import {getTime} from './functions/getTimeFunk'
import React, { useEffect, useState } from "react";
import { socket } from "./functions/socket";
import { refreshState } from "./functions/refreshState";
import { AlVelComp } from "./components/AlvelComp";
import { IlliaComp } from "./components/IlliaComp";

function App() {

  const [chartData, setChartData] = useState([{
    value: 0,
    timestamp: 0
  }])
  
  useEffect(() => {
    socket.on("data", (data) => {
        setChartData(prev => refreshState(prev, data))
    });
  }, [])

    const lastChartValue = chartData[chartData.length - 1]
  
  return (
    <div className="App">
        <AlVelComp />
        <IlliaComp chartData={chartData}/>
    </div>
  );
}

export default App;
