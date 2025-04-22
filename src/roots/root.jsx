import { createBrowserRouter } from "react-router-dom";
import Root from "./home";
import Character, { Loader } from "./character";
import Episode, { EpLoader } from "./episode";
import Main from "./Main";
import Erorr404 from "./errorPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Erorr404 />,
    children: [
      {
        path: "/",
        element: <Root />,
        errorElement: <Erorr404 />,
      },
      {
        path: "/Character/:id",
        element: <Character />,
        loader: Loader,
        errorElement: <Erorr404 />,
      },
      {
        path: "/Episode/:id",
        element: <Episode />,
        loader: EpLoader,
        errorElement: <Erorr404 />,
      },
    ],
  },
]);
