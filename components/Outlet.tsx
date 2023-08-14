import TopDeals from "./TopDeals";
import ChartBox from "./ChartBox";
import { Boxes, ChartDataType } from "../data";
import { boxes, topDealUsers } from "../data";
import { twMerge } from "tailwind-merge";

type BoxType = Boxes["type"]

type BoxProps = {
    type: BoxType; 
    data: ChartDataType | undefined; 
    classNames: string;
}

const starters = "row-span-1 row-span-3 row-span-2 col-span-1 col-span-2 col-span-3 col-start-2"

const Box = ({ type, data, classNames }: BoxProps) => {

    return (
        <div className={twMerge("outline outline-2 outline-gray-700 p-5 rounded-lg grid", classNames)}>
            {type === "top deals" && (
                <TopDeals deals={topDealUsers} />
            )}
            {type === "line chart" && Object.keys("chartData").length > 0 && (
                <ChartBox data={data} />
            )}
            {type === "misc" && (
                <p>Title</p>
            )}
        </div>
    )
}

const Outlet = () => {
    return (
        <div className="grid grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4">
            {boxes.map(({ id, classNames, type, chartData }) => (
                <Box 
                    key={id} 
                    classNames={classNames} 
                    type={type}
                    data={chartData}
                />
            ))}
        </div>
    )
}

export default Outlet
