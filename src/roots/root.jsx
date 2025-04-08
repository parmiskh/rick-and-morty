import { createBrowserRouter } from "react-router-dom";
import Root from "./home";
import Character from "./Character";
import Main from "./Main";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      { path: "/Character", element: <Character /> },
    ],
  },
]);
