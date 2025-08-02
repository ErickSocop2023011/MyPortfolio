import { useState } from "react";
import { Home, UserRound, Image, Fingerprint, FileUser, CircleUserRound, Video, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
    { path: "/", icon: <Home size={20} />, label: "Home" },
    { path: "/values", icon: <UserRound size={20} />, label: "Professional Values" },
    { path: "/mark", icon: <Fingerprint size={20} />, label: "Personal Mark" },
    /*{ path: "/photos", icon: <Image size={20} />, label: "Photos" },*/
    { path: "/mci", icon: <FileUser size={20} />, label: "MCI" },
    { path: "/cv", icon: <CircleUserRound size={20} />, label: "CV" },
    /*{ path: "/presentation", icon: <Video size={20} />, label: "Video" },*/
];

export function Sidebar() {
    const [expanded, setExpanded] = useState(false);

    return (
        <aside
            className={`fixed top-0 left-0 min-h-screen bg-primary text-white transition-all duration-300 py-4 ${
                expanded ? "w-56" : "w-16"
            }`}
        >

            <button
                onClick={() => setExpanded((prev) => !prev)}
                className="absolute top-4 left-4 z-10"
                title="Toggle menu"
            >
                <Menu />
            </button>

            <div className="h-12" />

            <nav className="flex flex-col gap-4 w-full items-center mt-4">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-4 py-2 w-full hover:bg-white/10 ${
                                isActive ? "bg-white/10" : ""
                            }`
                        }
                    >
                        {item.icon}
                        {expanded && <span>{item.label}</span>}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}
