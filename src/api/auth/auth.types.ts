export interface UserProfile {
  id: string;
  user_id: string;
  username: string;
}

export interface RegistrationForm {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

