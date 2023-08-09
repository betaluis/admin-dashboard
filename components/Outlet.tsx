import { twMerge } from "tailwind-merge"

const boxes = [
    {
        id: 1,
        title: "Deals",
        content: "Deals",
        classNames: "col-span-1 row-span-3"
    },
    {
        id: 2,
        title: "Total Users",
        content: "Total Users",
        classNames: "col-span-1 row-span-1"
    },
    {
        id: 3,
        title: "Total Revenue",
        content: "Total Revenue",
        classNames: "col-span-1 row-span-1"
    },
    {
        id: 4,
        title: "Leads by Source",
        content: "Leads by Source",
        classNames: "col-span-1 row-span-3"
    },
    {
        id: 5,
        title: "Total Products",
        content: "Total Products",
        classNames: "col-span-1 row-span-1"
    },
    {
        id: 6,
        title: "Total Ratio",
        content: "Total Ratio",
        classNames: "col-span-1 row-span-1"
    },
    {
        id: 7,
        title: "Revenue Analytics",
        content: "Revenue Analytics",
        classNames: "col-span-2 row-span-2"
    },
    {
        id: 8,
        title: "Total Visits",
        content: "Total Visits",
        classNames: "col-span-1 row-span-1"
    },
    {
        id: 9,
        title: "Profit Earned",
        content: "Profit Earned",
        classNames: "col-span-1 row-span-1"
    }
] 

const Box = ({ content, classNames }: { content: string | number, classNames?: string }) => {
    return <div className={twMerge("outline outline-2 outline-gray-700 p-5 rounded-lg grid", classNames)}>
        {content}
    </div>
}

const Outlet = () => {
    return (
        <div className="grid grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4">
            {boxes.map((i) => (
                <Box key={i.id} content={i.title} classNames={i.classNames} />
            ))}
        </div>
    )
}

export default Outlet
