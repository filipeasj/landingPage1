import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
 
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="h-10 w-10 mr-2"/>
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a className="text-neutral-500 hover:text-orange-500 transition duration-300 ease-in-out"href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-7 items-center">
                        <a href="#" className="py-2 px-3 border rounded-md transition duration-300 ease-in-out transform hover:scale-105">Sign in</a>
                        <a href="#" className="bg-linear-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105">Create an account</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button className="cursor-pointer" onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 x-20 bg-neutral-900 w-full p-7 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6 py-4">
                            <a href="#" className="py-2 px-3 border rounded-md">Sign in</a>
                            <a href="#" className="py-2 px-3 bg-linear-to-r from-orange-500 to-orange-800 rounded-md">Create an account</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;