import React from "react";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";

import ReduxTest from "../test-components/ReduxTest";

const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Link to="about">About Us</Link>
        </div>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    {
      path: "redux",
      element: <ReduxTest />,
    },
]);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};