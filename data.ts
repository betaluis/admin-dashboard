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
            number: 1200,
            percentage: 45,
            dataPoints: [
                { name: "Sun", users: 400 },
                { name: "Mon", users: 1500 },
                { name: "Tues", users: 600 },
                { name: "Wed", users: 1200 },
                { name: "Thurs", users: 900 },
                { name: "Fri", users: 700 },
                { name: "Sat", users: 1200 }
            ],
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
            number: 238,
            percentage: 52,
            dataPoints: [
                { name: "Sun", products: 100 },
                { name: "Mon", products: 600 },
                { name: "Tues", products: 300 },
                { name: "Wed", products: 400 },
                { name: "Thurs", products: 200 },
                { name: "Fri", products: 500 },
                { name: "Sat", products: 450 }
            ],
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
            number: "2.5",
            percentage: 23,
            dataPoints: [
                { name: "Sun", ratio: 100 },
                { name: "Mon", ratio: 300 },
                { name: "Tues", ratio: 800 },
                { name: "Wed", ratio: 500 },
                { name: "Thurs", ratio: 890 },
                { name: "Fri", ratio: 1000 },
                { name: "Sat", ratio: 300 }
            ],
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
            number: 5000,
            percentage: 82,
            dataPoints: [
                { name: "Sun", revenue: 2330 },
                { name: "Mon", revenue: 1890 },
                { name: "Tues", revenue: 3000 },
                { name: "Wed", revenue: 1300 },
                { name: "Thurs", revenue: 2632 },
                { name: "Fri", revenue: 3800 },
                { name: "Sat", revenue: 5600 }
            ],
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
            dataPoints: [
                { name: "Sun", visits: 330 },
                { name: "Mon", visits: 190 },
                { name: "Tues", visits: 30 },
                { name: "Wed", visits: 100 },
                { name: "Thurs", visits: 22 },
                { name: "Fri", visits: 380 },
                { name: "Sat", visits: 600 }
            ],
        }
    },
    {
        id: 9,
        classNames: "row-span-1 col-span-1",
        type: "misc"
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
