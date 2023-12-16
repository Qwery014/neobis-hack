import React from "react";

import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";

type typeRoute = {
  link: string,
  element: <HomePage />,
id: number,
}


const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    }
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((route) => (
        <Route path={route.link} element={route.element} key={route.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
