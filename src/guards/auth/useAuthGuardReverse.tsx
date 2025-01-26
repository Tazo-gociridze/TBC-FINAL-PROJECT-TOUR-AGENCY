import { useAuth } from '@/store/auth';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuardReverse: React.FC<AuthGuardProps> = ({ children }) => {
  const [user] = useAuth();
  const location = useLocation();

  if (!user) {
    const redirectTo = location.state?.from?.pathname || '/';

    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
};

export default AuthGuardReverse;
