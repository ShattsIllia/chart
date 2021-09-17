import "./App.css";
// import io from "socket.io-client";
import { useState } from "react";
import { socket } from "./socket";

function App() {
  const [data, setData] = useState({
    value: 0,
    timestamp: 1631878046524,
  });

  socket.on("data", (...data) => {
    // revert to classic upgrade
    setData(data[0]);
  });

  console.log();

  return (
    <div className="App">
      <div>{`value: ${data.value}`}</div>

      {`timeStamp: ${Date(data.timestamp)}`}
    </div>
  );
}

export default App;
