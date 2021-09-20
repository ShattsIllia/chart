import "./App.css";
import React, { useEffect, useState } from "react";
import { socket } from "./functions/socket";
import { refreshState } from "./functions/refreshState";
import { AlVelComp } from "./components/AlvelComp";
import { IlliaComp } from "./components/IlliaComp";
import {BrowserRouter as Router, Route, Link,} from 'react-router-dom'

function App() {

  const [chartData, setChartData] = useState([{
    value: 0,
    timestamp: 0
  }])

  const routes = [
    {
     path: '/alex',
     chartData: chartData,
     component: AlVelComp
    },
    {
     path: '/illia',
     chartData: chartData,
     component: IlliaComp,
    }
  ]
  

  useEffect(() => {
    socket.on("data", (data) => {
        setChartData(prev => refreshState(prev, data))
    });
  }, [])

  
  return (
    <div>
      <Router>
      
          <ul>
            <li><Link to="/alex">First Page</Link></li>
            <li><Link to="/illia">Second Page</Link></li>
          </ul>

        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            
          >
            <route.component chartData={route.chartData}/>
          </Route>
        ))}
      
      </Router>
    </div>
);
}
export default App;
