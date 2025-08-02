import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar/Sidebar.jsx";

export function MainLayout() {
    return (
        <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6 bg-lightBg text-textLight dark:bg-darkBg dark:text-textDark transition-colors duration-300">
            <Outlet />
        </main>
        </div>
    );
}
