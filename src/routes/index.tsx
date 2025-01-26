import { Route, Routes } from 'react-router-dom';
import { NAV_ROUTES, NavRouteType } from './nav-routes';
import { MainLayout } from './lazy.imports';
import { AUTH_ROUTES, AuthRouteType } from './auth-routes';

type RouteType = NavRouteType | AuthRouteType;

export const ROUTES = (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      {NAV_ROUTES.map((route: RouteType) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      {AUTH_ROUTES.map((route: AuthRouteType) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Route>
  </Routes>
);
