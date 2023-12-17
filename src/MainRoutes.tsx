import React, { ReactNode } from "react";

import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";

interface interfaceRoute {
  id: number,
  link: string,
  element: ReactNode,
}


const MainRoutes = () => {
  const PUBLIC_ROUTES: interfaceRoute[] = [
    {
      id: 1,
      link: "/",
      element: <HomePage />,
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
