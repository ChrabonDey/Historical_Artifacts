import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";

import Login from "../Components/Login";
import Register from "../components/Register";
import PrivateRoute from "../components/PrivateRoute";

import NotFound from "../NotFound";
import Home from "../Components/Home";
import FeaturedDetails from "../Components/FeaturedDetails";
import AddArtifact from "../Components/AddArtifact";
import AllArtifact from "../Components/AllArtifact";
import LikedArtifacts from "../Components/LikedArtifacts";
import MyArtifacts from "../Components/MyArtifacts";
import UpdateArtifact from "../Components/UpdateArtifact"; 
import Contact from "../Components/Contact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/artifact/:id",
        element: (
          <PrivateRoute>
            <FeaturedDetails></FeaturedDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://historical-artifacts-tracker-server-umber.vercel.app/artifact/${params.id}`),
      },
      {
        path: "/update-artifact/:id",
        element: (
          <PrivateRoute>
            <UpdateArtifact></UpdateArtifact>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`https://historical-artifacts-tracker-server-umber.vercel.app/artifact/${params.id}`), 
      },
      {
        path: "/add-artifact",
        element: (
          <PrivateRoute>
            <AddArtifact></AddArtifact>
          </PrivateRoute>
        ),
      },
      {
        path: "/liked-artifacts",
        element: (
          <PrivateRoute>
            <LikedArtifacts></LikedArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-artifacts",
        element: <AllArtifact></AllArtifact>,
      },
      {
        path: "/my-artifacts",
        element:<PrivateRoute>
          <MyArtifacts></MyArtifacts>
        </PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default Router;
