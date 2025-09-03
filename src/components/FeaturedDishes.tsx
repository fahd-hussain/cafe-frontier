import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import FavoriteButton from '@/components/FavoriteButton';
import chickenMakhni from '@/assets/chicken-makhni.jpg';
import muttonKarahi from '@/assets/mutton-karahi.jpg';
import paneerHandi from '@/assets/paneer-handi.jpg';
import bbqPlatter from '@/assets/bbq-platter.jpg';
import chickenChilli from '@/assets/chicken-chilli.jpg';
import muttonHandiBiryani from '@/assets/mutton-handi-biryani.jpg';

const FeaturedDishes = () => {
    const { addToCart } = useCart();

    const dishes = [
        {
            id: 'chicken-makhni',
            name: 'Chicken Cheese Makhni',
            price: '1570 / 3050',
            image: chickenMakhni,
            description: 'Creamy chicken in rich makhni sauce with cheese',
            category: 'karahi' as const,
        },
        {
            id: 'mutton-karahi',
            name: 'Mutton Karahi',
            price: '2120 / 4190',
            image: muttonKarahi,
            description: 'Traditional mutton karahi with aromatic spices',
            category: 'karahi' as const,
        },
        {
            id: 'paneer-handi',
            name: 'Paneer Makhni Handi',
            price: '1050 / 2050',
            image: paneerHandi,
            description: 'Fresh paneer in our signature makhni sauce',
            category: 'handi' as const,
        },
        {
            id: 'bbq-platter',
            name: 'Bar B.Q Platter',
            price: '3200',
            image: bbqPlatter,
            description:
                'Assorted barbecue platter with seekh kababs, chicken boti, malai boti, lamb chops, naan and chutney',
            category: 'barbq' as const,
        },
        {
            id: 'chicken-chilli',
            name: 'Chicken Chilli (With Rice)',
            price: '850',
            image: chickenChilli,
            description:
                'Spicy chicken chilli with bell peppers served with rice',
            category: 'chinese' as const,
        },
        {
            id: 'mutton-handi-biryani',
            name: 'Mutton Handi Biryani',
            price: '1900 / 3800',
            image: muttonHandiBiryani,
            description:
                'Fragrant mutton biryani served hot in a traditional handi',
            category: 'biryani' as const,
        },
    ];

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured{' '}
                        <span className="text-accent inline-block">Dishes</span>
                    </h2>
                    <p className="text-lg text-muted-foreground animate-fade-in">
                        Discover our most popular and signature creations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dishes.map((dish, index) => (
                        <Card
                            key={dish.name}
                            className="bg-card shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in border-primary/20 group"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <CardContent className="p-0 relative">
                                <div className="aspect-square overflow-hidden rounded-t-lg relative">
                                    <FavoriteButton
                                        dish={{
                                            id: dish.id,
                                            name: dish.name,
                                            price: parseFloat(
                                                dish.price.split(' / ')[1] ||
                                                    dish.price.split(' / ')[0],
                                            ),
                                            image: dish.image,
                                            description: dish.description,
                                            category: dish.category,
                                        }}
                                        size="md"
                                    />
                                    <img
                                        src={dish.image}
                                        alt={dish.name}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 group-hover:animate-float"
                                    />
                                    {/* Enhanced smoke effects */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute top-4 left-4 w-3 h-3 bg-white/40 rounded-full animate-smoke [animation-delay:0s] blur-sm"></div>
                                        <div className="absolute top-6 right-6 w-2 h-2 bg-white/30 rounded-full animate-smoke [animation-delay:0.5s] blur-sm"></div>
                                        <div className="absolute top-8 left-1/2 w-4 h-4 bg-white/20 rounded-full animate-smoke [animation-delay:1s] blur-sm"></div>
                                        <div className="absolute bottom-8 right-4 w-2.5 h-2.5 bg-white/35 rounded-full animate-smoke [animation-delay:1.5s] blur-sm"></div>
                                        <div className="absolute top-1/2 left-6 w-1.5 h-1.5 bg-white/25 rounded-full animate-smoke [animation-delay:2s] blur-sm"></div>
                                        <div className="absolute top-1/3 right-1/3 w-3.5 h-3.5 bg-white/15 rounded-full animate-smoke [animation-delay:2.5s] blur-sm"></div>
                                    </div>
                                    {/* Steam effect overlay */}
                                    <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full animate-steam opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/20 rounded-full animate-steam [animation-delay:0.5s] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display text-xl font-bold text-accent mb-2">
                                        {dish.name}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {dish.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-semibold text-primary">
                                            Rs. {dish.price}
                                        </span>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground animate-appetite-pulse"
                                            onClick={() => addToCart(dish)}
                                        >
                                            Order Now
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedDishes;
