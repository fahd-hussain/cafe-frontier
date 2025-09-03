import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites, DishItem } from '@/hooks/useFavorites';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface FavoriteButtonProps {
  dish: DishItem;
  size?: 'sm' | 'md' | 'lg';
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ dish, size = 'md' }) => {
  const { toggleFavorite, isFavorited } = useFavorites();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleFavoriteClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!user) {
      navigate('/auth');
      return;
    }

    await toggleFavorite(dish);
  };

  const isActive = isFavorited(dish.id);
  
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={`${size === 'sm' ? '' : 'absolute top-2 right-2 z-10'} ${sizeClasses[size]} rounded-full ${size === 'sm' ? '' : 'bg-background/80 backdrop-blur-sm'} hover:bg-accent/80 transition-all duration-200 ${
        isActive 
          ? 'text-yellow-500 hover:text-yellow-600' 
          : 'text-muted-foreground hover:text-yellow-500'
      }`}
      onClick={handleFavoriteClick}
      aria-label={isActive ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart 
        size={iconSizes[size]} 
        className={`transition-all duration-200 ${
          isActive ? 'fill-current' : ''
        }`}
      />
    </Button>
  );
};

export default FavoriteButton;