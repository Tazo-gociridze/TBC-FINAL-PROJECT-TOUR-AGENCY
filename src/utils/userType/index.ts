interface User {
    aud: string;
    confirmation_sent_at: string;
    created_at: string;
    email: string;
    id: string;
    identities: Identity[];
    is_anonymous: boolean;
    phone: string;
    role: string;
    updated_at: string;
  }
  
  interface Identity {
    identity_id: string;
    id: string;
    user_id: string;
    provider: string;
    last_sign_in_at: string;
    created_at: string;
    updated_at: string;
  }
  
  interface AuthData {
      user: User;
      session: null;
  }
  
  export type { User, Identity, AuthData };