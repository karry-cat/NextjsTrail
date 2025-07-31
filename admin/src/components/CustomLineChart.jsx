"use client"
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export default function CustomLineChart({data, yKey}) {
    // const data = [
    //     {date: "15/11/2024", sales: 220},
    //     {date: "16/11/2024", sales: 205},
    //     {date: "17/11/2024", sales: 265}
    // ];
    return (
        <>
            <ResponsiveContainer height="100%" width="100%">
                <LineChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date" />
                    <YAxis/>
                    <Tooltip/>
                    <Line type="monotone" dataKey={yKey} stroke="currentColor"/>
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}