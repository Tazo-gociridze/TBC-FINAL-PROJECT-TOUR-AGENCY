import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import MainLayout from './Layouts/main-layout/Layout';
import Tours from './pages/tours';
import Login from './pages/login';
import Register from './pages/register';
import AuthGuard from './guards/auth/useAuthGuard';

function App() {
  return (
    <main>
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
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
