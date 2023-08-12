import { twMerge } from "tailwind-merge";
import { boxes, topDealUsers } from "../data";
import TopDeals from "./TopDeals";

type BoxType = "top deals" | "misc"

const Box = ({ type, classNames }: { type: BoxType; classNames?: string }) => {

    return (
        <div className={twMerge("outline outline-2 outline-gray-700 p-5 rounded-lg grid", classNames)}>
            {type === "top deals" && (
                <TopDeals deals={topDealUsers} />
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
            {boxes.map((i) => (
                <Box 
                    key={i.id} 
                    classNames={i.classNames} 
                    type={i.type}
                />
            ))}
        </div>
    )
}

export default Outlet
