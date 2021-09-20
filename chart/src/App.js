import "./App.css";
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

  
  return (
    <div className="App">

        <div>{chartData[chartData.length - 1].value.toFixed(2)} </div>
        <div>{chartData[chartData.length - 1].timestamp}</div>      
        
        <AlVelComp
          data = {chartData}
        />
        <IlliaComp />

    </div>
  );
}

export default App;
