import Image from "next/image"
import Link from "next/link"
import { sideMenu } from "@/data"

const uppercase = (val: string) => {
    return val.slice(0,1).toUpperCase() + val.slice(1)
}

const Menu = () => {

    return (
        <nav>
            {sideMenu.map(item => (
                <div key={item.id}>
                    <span className="block mt-4 text-gray-400">{uppercase(item.title)}</span>
                    <div className="flex flex-col">
                        {item.listItems.map((link, i) => (
                            <Link key={i} href={link.url} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-700">
                                <Image width={18} height={18} src={link.icon} alt={link.title} />
                                <span className="">{link.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </nav>
    )
}

export default Menu
