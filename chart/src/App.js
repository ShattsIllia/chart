import "./App.css";
// import { LineChart, Line } from "recharts";
import {getTime} from './getTimeFunk'
import { useState } from "react";
import { socket } from "./socket";

function App() {

  const [state, setSate] = useState([{
    value: 0,
    timestamp: 0,
  }])


  socket.on("data", (data) => {
    setSate(
      [...state, {
        value: data[0].value,
        timestamp: data[0].timestamp
      }]
    )
  });

  console.log(state);

  return (
    <div className="App">
        <div>{`value: ${1}`}</div>
        
        {getTime()}

     
    </div>
  );
}

export default App;
