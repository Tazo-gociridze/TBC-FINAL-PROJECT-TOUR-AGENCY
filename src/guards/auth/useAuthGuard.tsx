import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import { useAuth } from '@/store/auth';

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const [user] = useAuth();
  const location = useLocation();

  if (user) {
    const redirectTo = location.state?.from?.pathname || '/';

    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
