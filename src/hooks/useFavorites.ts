import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

export interface FavoriteItem {
    id: string;
    dish_id: string;
    dish_name: string;
    dish_price: number;
    dish_image?: string;
    dish_description?: string;
    dish_category?: string;
    created_at: string;
}

export interface DishItem {
    id: string;
    name: string;
    price: number;
    image?: string;
    description?: string;
    category?: string;
}

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    const { toast } = useToast();

    // Fetch favorites from database
    const fetchFavorites = async () => {
        if (!user) {
            setFavorites([]);
            return;
        }

        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('favorites')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false });

            if (error) throw error;
            setFavorites(data || []);
        } catch (error) {
            console.error('Error fetching favorites:', error);
        } finally {
            setLoading(false);
        }
    };

    // Add item to favorites
    const addToFavorites = async (dish: DishItem) => {
        if (!user) {
            toast({
                title: 'Sign in required',
                description: 'Please sign in to save favorites.',
                variant: 'destructive',
            });
            return false;
        }

        try {
            const { error } = await supabase.from('favorites').insert({
                user_id: user.id,
                dish_id: dish.id,
                dish_name: dish.name,
                dish_price: dish.price,
                dish_image: dish.image,
                dish_description: dish.description,
                dish_category: dish.category,
            });

            if (error) throw error;

            toast({
                title: 'Added to favorites',
                description: `${dish.name} has been saved to your favorites.`,
            });

            await fetchFavorites();
            return true;
        } catch (error: any) {
            if (error.code === '23505') {
                toast({
                    title: 'Already in favorites',
                    description: `${dish.name} is already in your favorites.`,
                    variant: 'destructive',
                });
            } else {
                toast({
                    title: 'Error',
                    description: 'Failed to add to favorites.',
                    variant: 'destructive',
                });
            }
            return false;
        }
    };

    // Remove item from favorites
    const removeFromFavorites = async (dishId: string) => {
        if (!user) return false;

        try {
            const { error } = await supabase
                .from('favorites')
                .delete()
                .eq('user_id', user.id)
                .eq('dish_id', dishId);

            if (error) throw error;

            toast({
                title: 'Removed from favorites',
                description: 'Item has been removed from your favorites.',
            });

            await fetchFavorites();
            return true;
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to remove from favorites.',
                variant: 'destructive',
            });
            return false;
        }
    };

    // Check if item is favorited
    const isFavorited = (dishId: string) => {
        return favorites.some((fav) => fav.dish_id === dishId);
    };

    // Toggle favorite status
    const toggleFavorite = async (dish: DishItem) => {
        if (isFavorited(dish.id)) {
            return await removeFromFavorites(dish.id);
        } else {
            return await addToFavorites(dish);
        }
    };

    useEffect(() => {
        fetchFavorites();
    }, [user]);

    return {
        favorites,
        loading,
        addToFavorites,
        removeFromFavorites,
        isFavorited,
        toggleFavorite,
        refetch: fetchFavorites,
    };
};
