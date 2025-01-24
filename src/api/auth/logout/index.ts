import { supabase } from '@/utils/supabaseClient';

export const logout = async () => {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.error('Error logging out:', error);
  }
};
