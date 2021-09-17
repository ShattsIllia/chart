import './App.css';
import io from "socket.io-client";
import React, {useEffect, useState} from 'react';

import { LineChart, Line } from 'recharts';

function App() {
   const [number, setNumber] = useState(0);

   const numbersArr = [];

 
    const socket = io("ws://localhost:3001", {
        transports: ["websocket", "polling"] // use WebSocket first, if available
    });

    socket.on("data", (data) => {
        // revert to classic upgrade
       
        numbersArr.push(data.value)
        console.log(numbersArr)
      
    });

    
  
  return (
    <div className="App">
           
    </div>
  );
}

export default App;
