import DelayedLoading from '@/utils/DelayedLoading';
import { RouteObject } from 'react-router-dom';
import { AuthGuardReverse, Home, Profile, TourDetails, Tours } from '../lazy.imports';
import { NavRoute } from './nav-routes-enum';

export type NavRouteType = RouteObject & {
  path: string;
  element: JSX.Element;
};

const { HOME, TOURS, PROFILE, TOUR_DETAILS } = NavRoute;

export const NAV_ROUTES: NavRouteType[] = [
  {
    path: HOME,
    element: <Home />,
  },
  {
    path: TOURS,
    element: <Tours />,
  },
  {
    path: PROFILE,
    element: (
      <AuthGuardReverse>
        <Profile />
      </AuthGuardReverse>
    ),
  },
  {
    path: TOUR_DETAILS,
    element: (
      <DelayedLoading delay={300}>
        <TourDetails />
      </DelayedLoading>
    ),
  },
];
