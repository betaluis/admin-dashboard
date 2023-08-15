type BoxTypes = "top deals" | "line chart" | "bar chart" | "misc";

export type LineChartType = {
    color: string;
    lineStroke: string;
    icon: string;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    dataPoints: object[];
}

export type BarChartType = {
    barColor: string;
    title: string;
    dataKey: string;
    dataPoints: object[];
}

export type Boxes = {
    id: number;
    classNames: string;
    type: BoxTypes;
    lineChartData?: LineChartType;
    barChartData?: BarChartType;
}

export type User = {
    id: number;
    img: string;
    username: string;
    email: string;
    amount: string;
}

const floorRandom = (multiple: number) => {
    return Math.floor(Math.random() * multiple);
}

const dataPoints = (dataKey: string): object[] => {

    let arr: object[] = [];
    let weekDays: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (let i = 0; i < weekDays.length; i++) {
        let obj: { [key: string]: number | string } = {};

        obj["name"] = weekDays[i]
        obj[dataKey] = floorRandom(1000)

        arr.push(obj)
    }

    return arr;
}


export const sideMenu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "home.svg",
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "user.svg",
            },
        ],
    },
    {
        id: 2,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: "user.svg",
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: "product.svg",
            },
            {
                id: 3,
                title: "Orders",
                url: "/orders",
                icon: "order.svg",
            },
            {
                id: 4,
                title: "Posts",
                url: "/posts",
                icon: "post2.svg",
            },
        ],
    },
    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: "element.svg",
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: "note.svg",
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: "form.svg",
            },
            {
                id: 4,
                title: "Calendar",
                url: "/",
                icon: "calendar.svg",
            },
        ],
    },
    {
        id: 4,
        title: "Maintenance",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: "setting.svg",
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: "backup.svg",
            },
        ],
    },
    {
        id: 5,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: "chart.svg",
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: "log.svg",
            },
        ],
    },
];


export const boxes: Boxes[] = [
    {
        id: 1,
        classNames: "row-span-3 col-span-1",
        type: "top deals"
    },
    {
        id: 2,
        classNames: "row-span-1 col-span-1",
        type: "line chart",
        lineChartData: {
            color: "text-green-500",
            lineStroke: "#8B5CF6",
            icon: "/userIcon.svg",
            title: "Total Users",
            dataKey: "users",
            number: floorRandom(1000),
            percentage: floorRandom(100),
            dataPoints: dataPoints("users"),
        }
    },
    {
        id: 3,
        classNames: "row-span-1 col-span-1",
        type: "line chart",
        lineChartData: {
            color: "text-green-500",
            lineStroke: "#93C5FD",
            icon: "/productIcon.svg",
            title: "Total Products",
            dataKey: "products",
            number: floorRandom(1000),
            percentage: floorRandom(100),
            dataPoints: dataPoints("products"),
        }
    },
    {
        id: 4,
        classNames: "row-span-3 col-span-1",
        type: "misc",
    },
    {
        id: 5,
        classNames: "row-span-1 col-span-1",
        type: "line chart",
        lineChartData: {
            color: "text-green-500",
            lineStroke: "#FDE047",
            icon: "/conversionIcon.svg",
            title: "Total Ratio",
            dataKey: "ratio",
            number: floorRandom(1000),
            percentage: floorRandom(100),
            dataPoints: dataPoints("ratio"),
        }
    },
    {
        id: 6,
        classNames: "row-span-1 col-span-1",
        type: "line chart",
        lineChartData: {
            color: "text-green-500",
            lineStroke: "#2563EB",
            icon: "/revenueIcon.svg",
            title: "Total Revenue",
            dataKey: "revenue",
            number: floorRandom(1000),
            percentage: floorRandom(100),
            dataPoints: dataPoints("revenue"),
        }
    },
    {
        id: 7,
        classNames: "row-span-2 col-span-2",
        type: "misc",
    },
    {
        id: 8,
        classNames: "row-span-1 col-span-1",
        type: "bar chart",
        barChartData: {
            barColor: "#FB923C",
            title: "Total Visits",
            dataKey: "visits",
            dataPoints: dataPoints("visits"),
        }
    },
    {
        id: 9,
        classNames: "row-span-1 col-span-1",
        type: "bar chart",
        barChartData: {
            barColor: "#60A5FA",
            title: "Profit Earned",
            dataKey: "profit",
            dataPoints: dataPoints("profit"),
        }
    }
]

export const topDealUsers: User[] = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        username: "Elva McDonald",
        email: "elva@gmail.com",
        amount: "3.668",
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Linnie Nelson",
        email: "linnie@gmail.com",
        amount: "3.256",
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Brent Reeves",
        email: "brent@gmail.com",
        amount: "2.998",
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Adeline Watson",
        email: "adeline@gmail.com",
        amount: "2.512",
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Juan Harrington",
        email: "juan@gmail.com",
        amount: "2.134",
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Augusta McGee",
        email: "augusta@gmail.com",
        amount: "1.932",
    },
    {
        id: 7,
        img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
        username: "Angel Thomas",
        email: "angel@gmail.com",
        amount: "1.560",
    },
];
