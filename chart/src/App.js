import './App.css';
import {io} from "socket.io-client";

function App() {
    const socket = io("ws://localhost:3003", {
        transports: ["websocket", "polling"] // use WebSocket first, if available
    });
    socket.on("data", (...data) => {
        // revert to classic upgrade
        console.log(data)
    });
  return (
    <div className="App">
            Hello World!
      dsadasdasdad......
    </div>
  );
}

export default App;
