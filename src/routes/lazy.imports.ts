import { lazy } from 'react';

const MainLayout = lazy(() => import('../Layouts/main-layout/Layout'));
const Login = lazy(() => import('../pages/login'));
const Register = lazy(() => import('../pages/register'));
const AuthGuard = lazy(() => import('../guards/auth/useAuthGuard'));
const Tours = lazy(() => import('@/pages/tours'));
const Home = lazy(() => import('@/pages/home'));
const AuthGuardReverse = lazy(() => import('@/guards/auth/useAuthGuardReverse'));
const Profile = lazy(() => import('@/pages/profile'));
const TourDetails = lazy(() => import('../pages/tour-details'));

export {
    MainLayout,
    Login,
    Register,
    AuthGuard,
    Tours,
    Home,
    AuthGuardReverse,
    Profile,
    TourDetails
}