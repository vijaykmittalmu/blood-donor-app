import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layout from "./components/Layout";
import * as PAGES from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PAGES.Home />,
      },
      {
        path: "/blood-request",
        element: <PAGES.BloodRequest />,
      },
      {
        path: "/live-feed",
        element: <PAGES.LiveFeed />,
      },
      {
        path: "/compatiblity",
        element: <PAGES.Compatiblity />,
      },
      {
        path: "/search-donor",
        element: <PAGES.SearchDonor />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
