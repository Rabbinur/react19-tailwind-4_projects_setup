import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("../app/home/page.jsx"));
const DashboardPage = lazy(() => import("../app/dashboard/page.jsx"));

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/dashboard", element: <DashboardPage /> },
]);
