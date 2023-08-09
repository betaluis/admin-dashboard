const LoginComponent = () => {
  return (
        <div className="grid place-items-center min-h-screen">
            <div className="p-8 bg-zinc-300 rounded-lg min-h-[300px]">
                <h1 className="text-center mb-8 text-3xl text-zinc-900 font-bold">Login</h1>
                <form className="flex flex-col">
                    <input className="mb-8 p-4 rounded" type="text" placeholder="username" />
                    <input className="mb-8 p-4 rounded" type="password" placeholder="password" />
                    <button className="py-4 px-8 rounded bg-zinc-900 hover:bg-zinc-900/90" type="submit">Sign In</button>
                </form>
            </div>
        </div>
  )
}

export default LoginComponent
