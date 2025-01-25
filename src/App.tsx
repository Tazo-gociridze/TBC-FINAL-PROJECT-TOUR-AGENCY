import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Spin } from 'antd';

const Home = lazy(() => import('./pages/home'));
const MainLayout = lazy(() => import('./Layouts/main-layout/Layout'));
const Tours = lazy(() => import('./pages/tours'));
const Login = lazy(() => import('./pages/login'));
const Register = lazy(() => import('./pages/register'));
const TourDetails = lazy(() => import('./pages/tour-details'));
const AuthGuard = lazy(() => import('./guards/auth/useAuthGuard'));

function App() {
  return (
    <main>
      <Suspense fallback={<Spin size="large" />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="tours" element={<Tours />} />
            <Route
              path="login"
              element={
                <AuthGuard>
                  <Login />
                </AuthGuard>
              }
            />
            <Route path="/tours/:tourId" element={<TourDetails />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;