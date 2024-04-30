import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Components/NotFound";
import Home from "../Pages/Home";
import AllTouristsSpot from "../Pages/AllTouristsSpot";
import AddTouristsSpot from "../Pages/AddTouristsSpot";
import MyList from "../Pages/MyList";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import Root from "../Layout/Root";
import ProtectedRoute from "../Utilis/ProtectedRoute";
import SpotViewDetails from "../Pages/SpotViewDetails";
import Update from "../Pages/Update";
import MyCountry from "../Pages/MyCountry";
// import RootHome from "../Layout/RootHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://southeast-asia-server.vercel.app/spot"),
      },

      {
        path: "/allTouristsSpot",
        element: <AllTouristsSpot />,
        loader: () => fetch("https://southeast-asia-server.vercel.app/spot"),
      },
      {
        path: "/addTouristsSpot",
        element: (
          <ProtectedRoute>
            <AddTouristsSpot />
          </ProtectedRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <ProtectedRoute>
            <MyList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/country/:country",
        element: <MyCountry />,
        loader: ({ params }) =>
          fetch(
            `https://southeast-asia-server.vercel.app/countries/${params.country}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <ProtectedRoute>
            <Update />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://southeast-asia-server.vercel.app/spot/${params.id}`),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <ProtectedRoute>
            <SpotViewDetails />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://southeast-asia-server.vercel.app/spot/${params.id}`),
      },
    ],
  },
]);

export default router;
