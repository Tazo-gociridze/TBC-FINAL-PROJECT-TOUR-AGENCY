import { supabase } from '@/utils/supabaseClient';

export interface UpdateUserProfileData {
  id?: string;
  username?: string;
  phone?: string;
}

interface UserProfile {
  id: string;
  user_id: string;
  username: string;
  phone: string;
  created_at: string;
}

export const fetchUpdateProfile = async (UpdateUserProfileData: UpdateUserProfileData) => {
  await supabase
    .from('user_profiles')
    .update({
      username: UpdateUserProfileData.username,
      phone: UpdateUserProfileData.phone,
    })
    .eq('id', UpdateUserProfileData.id)
    .select()
    .single();
};

export const fetchUserProfile = async (userId: string): Promise<UserProfile | null> => {
  const { data, error } = await supabase.from('user_profiles').select('*').eq('id', userId);

  if (error) {
    console.error('Error fetching user profile:', error);
    throw new Error(`Failed to fetch user profile: ${error.message}`);
  }

  if (data && data.length > 0) {
    return data[0];
  }

  return null;
};
