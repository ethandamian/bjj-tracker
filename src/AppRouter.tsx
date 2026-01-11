import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/layouts";
import { CreateTechniquePage, MyTechniquesPage, ReviewTechniquesPage, } from "@/pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <MyTechniquesPage />,
            },
            {
                path: "/create",
                element: <CreateTechniquePage />,
            },
            {
                path: "/review",
                element: <ReviewTechniquesPage />,
            },
        ],
    },
]);
