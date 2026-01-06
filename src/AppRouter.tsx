import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/layouts/rootLayout/RootLayout";
import { MyTechniquesPage } from "@/pages/myTechniques/MyTechniquesPage";
import { CreateTechniquePage } from "@/pages/createTechnique/CreateTechniquePage";
import { ReviewTechniquesPage } from "@/pages/reviewTechniques/ReviewTechniquesPage";

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
