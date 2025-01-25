import { supabase } from '@/utils/supabaseClient';

export const fetchSpecificTour = async (tourId: string) => {
  try {
    const { data, error } = await supabase.from('tours').select('*').eq('id', tourId).single();
    if (error) throw error;
    return data;
  } catch (err) {
    console.error('Error fetching tour:', err);
  }
};
