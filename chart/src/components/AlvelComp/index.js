import styles from './al.module.css'
import { LineChart, Line, XAxis, YAxis} from "recharts";
import {
    BarChart,
    Bar,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import { useContext } from 'react';
import { ChartDataContext } from '../../App';


const type = "monotone";

export const AlVelComp = () => {

    const chartData = useContext(ChartDataContext)
 

    return (

        
        <div className = {styles.wrapper}>
            
            <div> {/* first chart */}
                <LineChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{ top: 50, right: 20, bottom: 5, left: 0 }}
                >
                    <Line type={type} dataKey="value" stroke="#8884d8" dot={true} />
                    <XAxis dataKey='timestamp' />
                    <YAxis />
                </LineChart>
            </div>


            <div>
                <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="timestamp" />
                    <YAxis dataKey="value"/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </div>

        </div>
        
    )


}