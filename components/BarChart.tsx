"use client"
import { BarChartType } from "@/data"
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts"

type Props = {
    data: BarChartType | undefined
}

const BoxBarChart = ({ data }: Props) => {

    return (
        <div className="flex flex-col">
            <h3>{data?.title}</h3>
            <div className="w-full h-full">
                <ResponsiveContainer width="99%" height="100%">
                    <BarChart width={150} height={40} data={data?.dataPoints}>
                        <Tooltip
                            contentStyle={{ 
                                background: "#1F2937", 
                                border: "1px solid #ddd", 
                                borderRadius: "4px", 
                                fontSize: "12px" 
                            }}
                            labelStyle={{ display: "none" }}
                            cursor={{ fill: "none" }}
                        />
                        <Bar dataKey={"visits"} fill={data?.barColor} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BoxBarChart
