import { supabase } from "@/utils/supabaseClient";

export interface TourData {
    id?: string;
    title: string;
    description: string;
    price: number;
    start_date: Date;
    end_date: Date;
    image_url?: string;
    created_at: string
}

export const getTours = async (sort: string, searchTerm: string): Promise<TourData[] | null> => {
    try {
        let query = supabase.from('tours').select('*');

        if (searchTerm) {
            query = query.ilike('title', `%${searchTerm}%`);
        }

        if (sort === 'price') {
            query = query.order('price', { ascending: true });
        } else if (sort === 'date') {
            query = query.order('start_date', { ascending: true });
        }

        const { data, error } = await query;

        if (error) {
            console.error('Error fetching tours:', error);
            throw new Error(`Failed to fetch tours: ${error.message}`);
        }

        return data ? data : null;
    } catch (error: unknown) {
        console.error('Error fetching tours:', error);
        if (error instanceof Error) {
            throw new Error(`Failed to fetch tours: ${error.message}`);
        } else {
            throw new Error("An unknown error occurred while fetching tours.");
        }
    }
};
