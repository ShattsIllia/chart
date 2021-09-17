import "./App.css";
import { useState } from "react";
import { socket } from "./socket";

function App() {
  const [data, setData] = useState({
    value: 0,
    timestamp: 1631878046524
  })

  const getTime = (timestamp) => {
      const date = new Date(timestamp)
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()

      return `${hours}:${minutes<10?0: ''}${minutes}:${seconds<10?0:''}${seconds}`
  }



  socket.on("data", (...data) => {
    // revert to classic upgrade
    setData(data[0]);
  });

  console.log();

  return (
    <div className="App">
        <div>{`value: ${data.value}`}</div>
        
        {getTime(data.timestamp)}

     
    </div>
  );
}

export default App;
