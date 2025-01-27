import { UseMutationOptions } from "@tanstack/react-query";
import { Session } from '@supabase/supabase-js'
import { RegistrationForm } from "@/api/auth/auth.types";


// LOGIN //////////////
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginSuccessResponse {
  id: string;
  userId: string;
  username: string;
  email: string | undefined;
  phone: string;
}

export interface LoginErrorResponse {
  message: string;
  statusCode: number;
}




// LOGOUT ////////////////
export interface LogoutSuccessResponse {
  message: string;
}

export interface LogoutErrorResponse {
  message: string;
  statusCode: number;
}

export type LogoutArguments = void;

export interface UseLogoutMutationArgs {
  mutationOptions?: Omit<
    UseMutationOptions<LogoutSuccessResponse, LogoutErrorResponse, LogoutArguments>,
    'mutationKey'
  >;
}


// REGISTER ////////////////


export interface RegisterSuccessResponse {
  message: string;
  id: string;
}

export interface RegisterErrorResponse {
  message: string;
  statusCode: number;
}

export interface RegisterResult {
  user: User | null;
  session: Session | null;
}


export interface User {
    id: string;
}


export interface UseRegisterMutationArgs {
  mutationOptions?: Omit<
    UseMutationOptions<RegisterSuccessResponse, RegisterErrorResponse, RegistrationForm>,
    'mutationKey'
  >;
}