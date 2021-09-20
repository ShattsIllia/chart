import styles from './al.module.css'
import { LineChart, Line, XAxis, YAxis} from "recharts";


const type = "monotone";

export const AlVelComp = ({data}) => {


    return (
        <div className = {styles.wrapper}>
            <div></div>
            <div>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 50, right: 20, bottom: 5, left: 0 }}
            >
                <Line type={type} dataKey="value" stroke="#8884d8" dot={true} />
                <XAxis dataKey='timestamp' />
                <YAxis />
            </LineChart>
            </div>
        </div>
    )


}