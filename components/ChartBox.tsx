"use client"
import { ChartDataType } from "@/data";
import Image from "next/image"
import Link from "next/link";
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { twMerge } from "tailwind-merge";

type Props = {
    data: ChartDataType | undefined;
}


const ChartBox = ({ data }: Props) => {

    let isPositive: boolean; 

    if (data) {

        isPositive = Number(data.number) > 0
        return (
            <div className="flex flex-col">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                        <Image src={data.icon} alt="User" width={20} height={20} />
                        <h3 className="font-bold ml-2">{data.title}</h3>
                    </div>
                    <span className="block font-bold text-lg" aria-label="total">{data.number}</span>
                </div>
                <div className="w-full h-full">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={data.dataPoints}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none", fontSize: "12px" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 120, y: -40 }}
                            />
                            <Line
                                type="monotone"
                                dataKey={data.dataKey}
                                stroke={data.lineStroke}
                                strokeWidth={1}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex justify-between items-end">
                    <Link href={"/"} className="text-sm hover:underline">View all</Link>
                    <span className={twMerge("text-sm", isPositive ? "text-green-500" : "text-red-400",)}>{data.percentage}%</span>
                </div>
            </div>
        )
    }
ChartBox}

export default ChartBox
