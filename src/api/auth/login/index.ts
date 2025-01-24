import { supabase } from '@/utils/supabaseClient';
import { LoginForm, UserProfile } from '../auth.types';

export const login = async (loginValues: LoginForm): Promise<UserProfile | null> => {
  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.signInWithPassword(loginValues);

    if (error) {
      console.error('Login error:', error);
      throw error;
    }

    if (!session?.user?.id) {
      console.error('Error no user in session');
      throw new Error('Error no user in session');
    }

    const { data, error: userProfileError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', session.user.id)
      .single();

    if (userProfileError) {
      console.error('Error fetching user profile:', userProfileError);
      return null;
    }

    return data;
  } catch (err) {
    console.error('Error on login', err);
    throw err;
  }
};
