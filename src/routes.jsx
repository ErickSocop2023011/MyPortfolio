import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout.jsx";
import { Home } from "./pages/Home.jsx";
import { Values } from "./pages/Values.jsx";
import { Mark } from "./pages/Mark.jsx";
import { Photos } from "./pages/Photos.jsx";
import { MCI } from "./pages/MCI.jsx";
import { CV } from "./pages/CV.jsx";
import { Presentation } from "./pages/Presentation.jsx";

export function AppRoutes() {
    return (
        <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="values" element={<Values />} />
            <Route path="mark" element={<Mark />} />
            <Route path="photos" element={<Photos />} />
            <Route path="mci" element={<MCI />} />
            <Route path="cv" element={<CV />} />
            <Route path="presentation" element={<Presentation />} />
        </Route>
        </Routes>
    );
}
