import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import LoginComponent from "./(auth)/login/page";
import Outlet from "@/components/Outlet";

export default function Home() {

    const session = true;

    return (
        <div className="min-h-screen bg-gray-800 text-gray-300 flex flex-col">
            {!!session && (
                <>
                    <Navbar />
                    <main className="flex flex-1 justify-start">
                        <div className="w-[250px] py-1 px-5 border-r-2 border-r-gray-700">
                            <Menu />
                        </div>
                        <div className="py-1 px-5 w-full">
                            <Outlet />
                        </div>
                    </main>
                    <Footer />
                </>
            )}
            {!session && <LoginComponent />}
        </div>
    )
}
