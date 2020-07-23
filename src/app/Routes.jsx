import React from "react";
import { Redirect } from "react-router-dom";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/profile" />,
  },
];

export const rootRoutes = [
  {
    path: "/raffles",
    component: React.lazy(() => import("./views/Raffles")),
  },
  {
    path: "/profile",
    component: React.lazy(() => import("./views/Profile")),
  },
  {
    path: "/proxies",
    component: React.lazy(() => import("./views/Proxies")),
  },
  {
    path: "/settings",
    component: React.lazy(() => import("./views/Settings")),
  },
  ...redirectRoute,
];
