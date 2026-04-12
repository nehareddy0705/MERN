import { NavLink } from "react-router";

function Header(){
    return (
        <nav className="flex gap-6 justify-end p-6 bg-gray-400">
            <NavLink to = "" className = {({isActive}) => (isActive ? "bg-amber-500 p-1.5 rounded-2xl" : "")}>Home</NavLink>
            <NavLink to = "create-Emp" className = {({isActive}) => (isActive ? "bg-amber-500 p-1.5 rounded-2xl" : "")}>Create Employee</NavLink>
            <NavLink to = "list" className = {({isActive}) => (isActive ? "bg-amber-500 p-1.5 rounded-2xl" : "")}>List of Employees</NavLink>
        </nav>
    )
}

export default Header