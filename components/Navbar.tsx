"use client"
import Image from "next/image"

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4">
            <div className="logo flex items-center">
                <Image width="30" height="30" src="/logo.svg" alt="logo" />
                <span className="font-bold text-slate-300 tracking-wider">DataRock</span>
            </div>
            <div className="flex space-x-4">
                <Image width={25} height={25} src={"/search.svg"} alt="Search icon" />
                <Image width={25} height={25} src={"/app.svg"} alt="Search icon" />
                <Image width={25} height={25} src={"/expand.svg"} alt="Search icon" />
                <div className="relative">
                    <Image width={30} height={30} src={"/notifications.svg"} alt="Notification icon" />
                    <span className="w-4 h-4 grid place-items-center text-xs bg-red-500 text-white rounded-full absolute -right-1 top-0">1</span>
                </div>
                <div className="flex items-center space-x-2 px-5">
                    <img className="rounded-full" width={35} height={35} src={"https://randomuser.me/api/portraits/men/79.jpg"} alt="Notification icon" />
                    <span className="font-bold">Tom</span>
                </div>
                <Image width={30} height={30} src={"/settings.svg"} alt="Notification icon" />
            </div>
        </nav>
    )
}

export default Navbar
