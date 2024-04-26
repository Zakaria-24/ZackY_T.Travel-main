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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/allTouristsSpot",
        element: <AllTouristsSpot />,
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
        path: "myList",
        element: (
          <ProtectedRoute>
            <MyList />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
