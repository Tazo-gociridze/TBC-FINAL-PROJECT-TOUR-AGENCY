import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { UserProfile } from '@/api/auth/auth.types';

const LOCAL_STORAGE_KEY = 'supabase.user';

const getInitialUser = () => {
    const storedUser = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedUser ? JSON.parse(storedUser) as UserProfile | null : null;
};


export const userAtom = atom<UserProfile | null>(getInitialUser());

export const useAuth = () => {
    const [user, setUser] = useAtom(userAtom);

    useEffect(() => {
        if (user) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
        } else {
            localStorage.removeItem(LOCAL_STORAGE_KEY);
        }
    }, [user, setUser]);

    return [user, setUser] as const;
};