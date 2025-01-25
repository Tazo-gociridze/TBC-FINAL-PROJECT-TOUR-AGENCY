import { supabase } from '@/utils/supabaseClient';

export interface TourData {
  id?: string;
  title: string;
  description: string;
  price: number;
  start_date: Date;
  end_date: Date;
  image_url?: string;
  created_at: string;
}

export const getTours = async (
  sort: string,
  searchTerm: string,
  pageParam: number = 0,
  pageSize: number = 15
): Promise<{ data: TourData[]; nextPage: number | null }> => {
  try {
    let query = supabase
      .from('tours')
      .select('*', { count: 'exact' })
      .range(pageParam, pageParam + pageSize - 1);

    if (searchTerm) {
      query = query.ilike('title', `%${searchTerm}%`);
    }

    if (sort === 'price') {
      query = query.order('price', { ascending: true });
    } else if (sort === 'date') {
      query = query.order('start_date', { ascending: true });
    } else {
      query = query.order('created_at', { ascending: false });
    }

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching tours:', error);
      throw new Error(`Failed to fetch tours: ${error.message}`);
    }

    console.log('Fetched data:', data);

    const nextPage = data.length && count && pageParam + pageSize < count ? pageParam + pageSize : null;

    return {
      data: data ? data : [],
      nextPage,
    };
  } catch (error: unknown) {
    console.error('Error fetching tours:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to fetch tours: ${error.message}`);
    } else {
      throw new Error('An unknown error occurred while fetching tours.');
    }
  }
};
