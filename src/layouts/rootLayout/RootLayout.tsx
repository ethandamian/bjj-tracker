import { Outlet } from "react-router-dom";

import "./RootLayout.css";

export const RootLayout = () => {
    return (
        <div className="layout">
            <main className="main">
                <Outlet />
            </main>
        </div>
    );
};
