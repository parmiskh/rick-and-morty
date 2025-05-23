import { createBrowserRouter } from "react-router-dom";
import Root from "./home";
import Character, { Loader } from "./Character";
import Episode, { EpLoader } from "./episode";
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
      { path: "/Character/:id", element: <Character />, loader: Loader },
      {
        path: "/Episode/:id",
        element: <Episode />,
        loader: EpLoader,
      },
    ],
  },
]);
