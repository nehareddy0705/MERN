import React from "react";

function Navbar() {
    return (
        <nav className="bg-blue-600 shadow-md py-4 px-8 flex items-center justify-between">
            <div className="text-white text-2xl font-bold tracking-wide">MyShop</div>
            <ul className="flex space-x-6 text-white font-medium">
                <li className="hover:text-blue-200 cursor-pointer">Home</li>
                <li className="hover:text-blue-200 cursor-pointer">Products</li>
                <li className="hover:text-blue-200 cursor-pointer">About</li>
                <li className="hover:text-blue-200 cursor-pointer">Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;