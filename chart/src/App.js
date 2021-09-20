import "./App.css";
import React, { useEffect, useState } from "react";
import { socket } from "./functions/socket";
import { refreshState } from "./functions/refreshState";
import {BrowserRouter as Router, Route, Link,} from 'react-router-dom'
import {routes} from "./routes";


export const ChartDataContext = React.createContext([])


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

  const defaultRouteConfig = {
    withHeader: true,
  }


  return (
    <ChartDataContext.Provider value={chartData}>


      <Router>
      
          <ul>
            <li><Link to="/alex">First Page</Link></li>
            <li><Link to="/illia">Second Page</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>

        {routes.map((route) => (
            <Route
                exact={route.exact}
                key={route.name}
                path={route.path}
                render={(props) => (
                    <route.layout {...props} config={route.config || defaultRouteConfig}>
                        <route.component {...props} />
                    </route.layout>
                )}
            />
        ))}




      
      </Router>
    </ChartDataContext.Provider>
);
}
export default App;
