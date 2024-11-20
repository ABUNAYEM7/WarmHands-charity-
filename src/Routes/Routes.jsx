import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import HowToHelp from "../Pages/HowToHelp";
import LogIn from "../Pages/LogIn";
import Dashboard from "../Pages/Dashboard";
import SingIn from "../Pages/SingIn";
import Register from "../Pages/Register";
import DonateCards from "../Pages/DonateCards";
import DonateCamp from "../Pages/DonateCamp";
import PrivateRoute from "../privateRoute/PrivateRoute";
import DonateDetails from "../Pages/DonateDetails";
import ForgetPass from "../Pages/ForgetPass";
import UpdateProfile from "../Pages/UpdateProfile";
import ErrorPage from "../Pages/ErrorPage";
import "aos/dist/aos.css";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "DonateCamp",
        element: <DonateCamp />,
        children: [
          {
            path: "",
            element: <DonateCards />,
            loader: () => fetch("/data.json"),
          },
          {
            path: "/DonateCamp/DonateDetails/:id",
            element: (
              <PrivateRoute>
                <DonateDetails />
              </PrivateRoute>
            ),
            loader: async ({ params }) => {
              const res = await fetch("/data.json");
              const data = await res.json();
              const singleData = data.find((d) => d.id == params.id);

              if (!singleData) {
                throw new Error("Data not found!");
              }

              return { singleData, id: params.id };
            },
          },
        ],
      },
      {
        path: "HowToHelp",
        element: <HowToHelp />,
      },
      {
        path: "Dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/Dashboard/UpdateProfile",
            element: <UpdateProfile />,
          },
        ],
      },
      {
        path: "LogIn",
        element: <LogIn />,
        children: [
          {
            path: "/LogIn",
            element: <SingIn />,
          },
          {
            path: "/LogIn/Register",
            element: <Register />,
          },
          {
            path: "/LogIn/ForgetPass",
            element: <ForgetPass />,
          },
        ],
      },
    ],
  },
]);
