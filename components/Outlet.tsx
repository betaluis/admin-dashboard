import TopDeals from "./TopDeals";
import ChartBox from "./ChartBox";
import BoxBarChart from "./BarChart";
import { BarChartType, Boxes, LineChartType } from "../data";
import { boxes, topDealUsers } from "../data";
import { twMerge } from "tailwind-merge";

type BoxType = Boxes["type"]

type BoxProps = {
    data: Boxes;
}

const starters = "row-span-1 row-span-3 row-span-2 col-span-1 col-span-2 col-span-3 col-start-2"

const Box = ({ data }: BoxProps) => {

    return (
        <div className={twMerge("outline outline-2 outline-gray-700 p-5 rounded-lg grid", data.classNames)}>
            {data.type === "top deals" && (
                <TopDeals deals={topDealUsers} />
            )}
            {data.type === "line chart" && Object.keys("lineChartData").length > 0 && (
                <ChartBox data={data.lineChartData} />
            )}
            {data.type === "bar chart" && Object.keys("barChartData").length > 0 && (
                <BoxBarChart data={data.barChartData} />
            )}
            {data.type === "misc" && (
                <p>Title</p>
            )}
        </div>
    )
}

const Outlet = () => {
    return (
        <div className="grid grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4">
            {boxes.map((i) => (
                <Box 
                    key={i.id} 
                    data={i}
                />
            ))}
        </div>
    )
}

export default Outlet
