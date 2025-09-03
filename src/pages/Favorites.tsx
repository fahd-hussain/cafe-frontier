import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useFavorites } from '@/hooks/useFavorites';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackgroundSpices from '@/components/BackgroundSpices';

const Favorites = () => {
    const { user, loading: authLoading } = useAuth();
    const { favorites, loading, removeFromFavorites } = useFavorites();
    const { addToCart } = useCart();

    if (authLoading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-4 text-muted-foreground">Loading...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/auth" replace />;
    }

    const handleAddToCart = (favorite: any) => {
        addToCart({
            id: favorite.dish_id,
            name: favorite.dish_name,
            price: favorite.dish_price.toString(),
            category: favorite.dish_category,
        });
    };

    return (
        <div className="min-h-screen bg-background relative">
            <BackgroundSpices />
            <Navigation />

            <div className="relative z-10 container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                            <Heart
                                className="text-yellow-500 fill-current"
                                size={36}
                            />
                            My Favorites
                        </h1>
                        <p className="text-muted-foreground">
                            Your saved dishes for quick ordering
                        </p>
                    </div>

                    {loading ? (
                        <div className="text-center py-12">
                            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto"></div>
                            <p className="mt-4 text-muted-foreground">
                                Loading your favorites...
                            </p>
                        </div>
                    ) : favorites.length === 0 ? (
                        <div className="text-center py-12">
                            <Heart
                                size={64}
                                className="mx-auto text-muted-foreground mb-4"
                            />
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                No favorites yet
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Start adding dishes to your favorites by
                                clicking the heart icon on any dish.
                            </p>
                            <Button
                                onClick={() =>
                                    (window.location.href = '/#menu')
                                }
                            >
                                Browse Menu
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {favorites.map((favorite) => (
                                <Card
                                    key={favorite.id}
                                    className="group hover:shadow-lg transition-all duration-300"
                                >
                                    <CardHeader className="p-0">
                                        {favorite.dish_image && (
                                            <div className="aspect-video overflow-hidden rounded-t-lg">
                                                <img
                                                    src={favorite.dish_image}
                                                    alt={favorite.dish_name}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        )}
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-start mb-3">
                                            <CardTitle className="text-lg">
                                                {favorite.dish_name}
                                            </CardTitle>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                                onClick={() =>
                                                    removeFromFavorites(
                                                        favorite.dish_id,
                                                    )
                                                }
                                            >
                                                <Trash2 size={16} />
                                            </Button>
                                        </div>

                                        {favorite.dish_description && (
                                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                                {favorite.dish_description}
                                            </p>
                                        )}

                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold text-primary">
                                                £{favorite.dish_price}
                                            </span>
                                            <Button
                                                onClick={() =>
                                                    handleAddToCart(favorite)
                                                }
                                                className="flex items-center gap-2"
                                            >
                                                <ShoppingCart size={16} />
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Favorites;
