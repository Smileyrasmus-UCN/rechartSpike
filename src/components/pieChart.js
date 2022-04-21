import "../App.css"
import { PieChart, Pie, Cell, LabelList } from "recharts"
import { useContext } from "react"
import { DataContext } from "../App"


const COLORS = ["#2F2235", "#3F3244", "#60495A", "#A9ACA9"];

function valueLabelFormatter(label) {
    return label += " m3"
}

export default function ExamplePieChart() {
    const data = useContext(DataContext)

    return (
        <div style={{ width: "100%", height: 400 }}>
            <PieChart width={450} height={400}>
                <Pie
                    dataKey="value"
                    data={data}
                    fill="#8884d8"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    <LabelList dataKey="name" position="outside" fill="black" stroke=""/>
                    <LabelList dataKey="value" position="inside" fill="white" stroke="" formatter={valueLabelFormatter}/>
                </Pie>
            </PieChart>
        </div>
    )
}