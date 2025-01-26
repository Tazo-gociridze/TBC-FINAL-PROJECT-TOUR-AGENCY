export interface UserProfile {
  email?: string;
  id: string;
  phone: string;
  user_id: string;
  username: string;
}

export interface RegistrationForm {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
  phone: string;
}

export interface LoginForm {
  email: string;
  password: string;
}
