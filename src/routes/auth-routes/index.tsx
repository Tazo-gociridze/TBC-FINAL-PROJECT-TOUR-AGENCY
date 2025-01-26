import { RouteObject } from 'react-router-dom';
import { AuthGuard, Login, Register } from '../lazy.imports';
import { AuthRoute } from './auth-routes-enum';

export type AuthRouteType = RouteObject & {
  path: string;
  element: JSX.Element;
};

const { REGISTER, LOGIN } = AuthRoute;

export const AUTH_ROUTES: AuthRouteType[] = [
  {
    path: REGISTER,
    element: (
      <AuthGuard>
        <Register />
      </AuthGuard>
    ),
  },
  {
    path: LOGIN,
    element: (
      <AuthGuard>
        <Login />
      </AuthGuard>
    ),
  },
];
