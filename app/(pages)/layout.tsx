interface Props {
    children: React.ReactNode
}
const layout = ({ children }: Props) => {
  return (
        <div>
            Layout in pages
            {children}
        </div>
  )
}

export default layout
