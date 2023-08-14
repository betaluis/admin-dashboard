import { User } from "@/data"

const TopDeals = ({ deals }: { deals: User[] }) => {
  return (
    <div className="overflow-hidden">
            <h2 className="text-2xl font-bold mb-8">Top Deals</h2>
            {deals.map(user => (
                <Details key={user.id} user={user} />
            ))}
    </div>
  )
}

const Details = ({ user }: { user: User }) => {
    return (
        <div className="flex mb-6 items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
                <img className="block object-cover w-full h-full" src={user.img} alt={user.username} />
            </div>
            <div className="text-sm ml-4">
                <span className="block pointer-events-none text-white" aria-label="name">{user.username}</span>
                <span className="pointer hidden" aria-label="email">{user.email}</span>
                <span className="block pointer-events-none" aria-label="price">${user.amount}</span>
            </div>
        </div>
    )
}

export default TopDeals
