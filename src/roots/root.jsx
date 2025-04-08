import { createBrowserRouter } from "react-router-dom";
import Root from "./home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "Character/:id",
        element: <p>salam</p>,
      },
    ],
  },
]);
