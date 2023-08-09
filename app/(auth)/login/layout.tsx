interface Props {
    children: React.ReactNode
}
const layout = ({ children }: Props) => {
    return (
        <div>
            <div className="bg-blue-300">Layout</div>
            {children}
        </div>
    )
}

export default layout
