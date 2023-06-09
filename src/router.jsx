import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { App } from "./App.jsx";
import { UseEffect } from "./pages/UseEffect.jsx";
import { UserList } from "./pages/UserList.jsx";
import { Timer } from "./pages/Timer.jsx";
import { User } from "./pages/User.jsx";
import AlbumList from "./pages/AlbumList.jsx";
import Clock from "./pages/Clock.jsx";
import Login from "./pages/Login.jsx";
import { Logout } from "./pages/Logout.jsx";
import Firebase from "./pages/Firebase.jsx";

function ErrorPage() {
  const error = useRouteError();
  return (
    <h1 className="title">
      Error Page : ({error.status} / {error.statusText})
    </h1>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/logout", element: <Logout /> },
      { path: "/about", element: <h1>About</h1> },
      { path: "/use-effect", element: <UseEffect /> },
      { path: "/user-list", element: <UserList /> },
      { path: "/user/:id", element: <User /> },
      { path: "/timer", element: <Timer /> },
      { path: "/album-list", element: <AlbumList /> },
      { path: "/clock", element: <Clock /> },
      { path: "/firebase", element: <Firebase /> },
    ],
  },
]);
export default router;
