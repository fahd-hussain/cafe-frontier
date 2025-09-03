import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useCart } from '@/contexts/CartContext';
import FavoriteButton from '@/components/FavoriteButton';

const MenuSection = () => {
    const { addToCart } = useCart();
    const [searchTerm, setSearchTerm] = useState('');

    const karahiItems = [
        { id: 'chicken-karahi', name: 'Chicken Karahi', price: '1320 / 2580' },
        {
            id: 'chicken-dry-karahi',
            name: 'Chicken Dry Karahi',
            price: '1320 / 2580',
        },
        {
            id: 'chicken-cheese-makhni',
            name: 'Chicken Cheese Makhni',
            price: '1570 / 3050',
        },
        {
            id: 'chicken-white-karahi',
            name: 'Chicken White Karahi',
            price: '1570 / 3050',
        },
        {
            id: 'chicken-boneless-karahi',
            name: 'Chicken Boneless Karahi',
            price: '1360 / 2670',
        },
        {
            id: 'chicken-geema-mirch-karahi',
            name: 'Chicken Geema Mirch Karahi',
            price: '1420 / 2810',
        },
        { id: 'mutton-karahi', name: 'Mutton Karahi', price: '2120 / 4190' },
        {
            id: 'mutton-makhni-karahi',
            name: 'Mutton Makhni Karahi',
            price: '2350 / 4600',
        },
        {
            id: 'mutton-dry-karahi',
            name: 'Mutton Dry Karahi',
            price: '2120 / 4190',
        },
        {
            id: 'mutton-geema-karahi',
            name: 'Mutton Geema Karahi',
            price: '2190 / 4350',
        },
        { id: 'lamb-karahi', name: 'Lamb Karahi', price: '2120 / 4190' },
        {
            id: 'lamb-dry-karahi',
            name: 'Lamb Dry Karahi',
            price: '2120 / 4190',
        },
    ];

    const handiItems = [
        {
            id: 'paneer-makhni-handi',
            name: 'Paneer Makhni Handi',
            price: '1050 / 2050',
        },
        {
            id: 'chicken-paneer-reshmi',
            name: 'Chicken Paneer Reshmi',
            price: '1570 / 3050',
        },
        {
            id: 'paneer-tomato-handi',
            name: 'Paneer Tomato Handi',
            price: '850 / 1700',
        },
        {
            id: 'paneer-white-handi',
            name: 'Paneer White Handi',
            price: '950 / 1900',
        },
        { id: 'daal-handi', name: 'Daal Handi', price: '700 / 1400' },
        { id: 'daal-makhni', name: 'Daal Makhni', price: '800 / 1600' },
        { id: 'vegetable-handi', name: 'Vegetable Handi', price: '550 / 1100' },
    ];

    const barbqItems = [
        { id: 'mutton-champ', name: 'Mutton Champ', price: '2220 / 4390' },
        {
            id: 'mutton-hunzai-kebab',
            name: 'Mutton Hunzai Kebab',
            price: '1540 / 3080',
        },
        { id: 'mutton-boti', name: 'Mutton Boti', price: '2220 / 4390' },
        { id: 'lamb-boti', name: 'Lamb Boti', price: '2220 / 4390' },
        {
            id: 'chicken-kastoori',
            name: 'Chicken Kastoori',
            price: '1200 / 2400',
        },
        { id: 'chicken-boti', name: 'Chicken Boti', price: '1140 / 2280' },
        {
            id: 'chicken-malai-boti',
            name: 'Chicken Malai Boti',
            price: '1140 / 2280',
        },
        {
            id: 'chicken-namkeen',
            name: 'Chicken Namkeen',
            price: '1190 / 2380',
        },
        {
            id: 'chicken-behari-boti',
            name: 'Chicken Behari Boti (Bone)',
            price: '1190 / 2380',
        },
        {
            id: 'chicken-reshmi-kebab',
            name: 'Chicken Reshmi Kebab',
            price: '1140 / 2280',
        },
        {
            id: 'beef-seekh-kebab',
            name: 'Beef Seekh Kebab',
            price: '1140 / 2280',
        },
        {
            id: 'beef-behari-boti',
            name: 'Beef Behari Boti',
            price: '1140 / 2280',
        },
        {
            id: 'beef-gola-kebab',
            name: 'Beef Gola Kebab',
            price: '1140 / 2280',
        },
        { id: 'chicken-tikka', name: 'Chicken Tikka', price: '380' },
        {
            id: 'chicken-malai-tikka',
            name: 'Chicken Malai Tikka',
            price: '410',
        },
        { id: 'barbq-platter', name: 'Bar B.Q Platter', price: '3200' },
    ];

    const biryaniItems = [
        {
            id: 'mutton-handi-biryani',
            name: 'Mutton Handi Biryani',
            price: '1900 / 3800',
        },
        {
            id: 'chicken-handi-biryani',
            name: 'Chicken Handi Biryani',
            price: '1000 / 2000',
        },
        {
            id: 'vegetable-handi-biryani',
            name: 'Vegetable Handi Biryani',
            price: '950 / 1900',
        },
    ];

    const chineseItems = [
        { id: 'chicken-corn-soup', name: 'Chicken Corn Soup', price: '350' },
        { id: 'hot-sour-soup', name: 'Hot & Sour Soup', price: '350' },
        {
            id: 'chicken-shashlic',
            name: 'Chicken Shashlic (With Rice)',
            price: '850',
        },
        {
            id: 'chicken-jalfrezi',
            name: 'Chicken Jalfrezi (With Rice)',
            price: '850',
        },
        {
            id: 'chicken-chilli',
            name: 'Chicken Chilli (With Rice)',
            price: '850',
        },
        {
            id: 'dry-chicken-chilli',
            name: 'Dry Chicken Chilli (With Rice)',
            price: '850',
        },
        {
            id: 'vegetable-chicken',
            name: 'Vegetable Chicken (With Rice)',
            price: '750',
        },
        {
            id: 'chicken-manchurian',
            name: 'Chicken Manchurian (With Rice)',
            price: '850',
        },
        { id: 'chicken-chowmein', name: 'Chicken Chowmein', price: '850' },
        { id: 'vegetable-chowmein', name: 'Vegetable Chowmein', price: '800' },
        { id: 'chicken-fried-rice', name: 'Chicken Fried Rice', price: '550' },
        { id: 'egg-fried-rice', name: 'Egg Fried Rice', price: '490' },
        { id: 'vegetable-rice', name: 'Vegetable Rice', price: '490' },
        { id: 'plain-rice', name: 'Plain Rice', price: '350' },
        { id: 'frontier-special', name: 'Frontier Special', price: '990' },
    ];

    const naanItems = [
        { id: 'garlic-naan', name: 'Garlic Naan', price: '90' },
        { id: 'roghni-naan', name: 'Roghni Naan', price: '90' },
        { id: 'qandhari-naan', name: 'Qandhari Naan', price: '90' },
        { id: 'saada-naan', name: 'Saada Naan', price: '40' },
        { id: 'naan-till', name: 'Naan (Till)', price: '60' },
        { id: 'pateer', name: 'Pateer', price: '40' },
        { id: 'chapati', name: 'Chapati', price: '40' },
        { id: 'tandori-paratha', name: 'Tandori Paratha', price: '80' },
        { id: 'puri-paratha', name: 'Puri Paratha', price: '90' },
    ];

    const beverageItems = [
        { id: 'fresh-salad', name: 'Fresh Salad', price: '140' },
        { id: 'raita', name: 'Raita', price: '140' },
        { id: 'nestle-raita', name: 'Nestle Raita', price: '300' },
        { id: 'yogurt', name: 'Yogurt', price: '180' },
        { id: 'nestle-yogurt', name: 'Nestle Yogurt', price: '300' },
        { id: 'onion-plate', name: 'Onion Per Plate', price: '80' },
        { id: 'barbq-sauce', name: 'Bar B.Q Sauce', price: '60' },
        {
            id: 'mineral-water-large',
            name: 'Mineral Water Large',
            price: '140',
        },
        { id: 'mineral-water-small', name: 'Mineral Water Small', price: '80' },
        { id: 'cold-drink-regular', name: 'Cold Drink Regular', price: '80' },
        { id: 'sting', name: 'Sting', price: '90' },
        { id: 'can', name: 'Can', price: '120' },
        { id: 'fresh-lime', name: 'Fresh Lime', price: '120' },
        { id: 'cold-drink-1-5', name: 'Cold Drink 1.5 Ltr', price: '210' },
        { id: 'tea-green', name: 'Tea/Green', price: '120' },
        { id: 'lassi', name: 'Lassi', price: '180' },
    ];

    // Combine all items for search functionality
    const allItems = [
        ...karahiItems.map((item) => ({
            ...item,
            category: 'karahi' as const,
        })),
        ...handiItems.map((item) => ({ ...item, category: 'handi' as const })),
        ...barbqItems.map((item) => ({ ...item, category: 'barbq' as const })),
        ...biryaniItems.map((item) => ({
            ...item,
            category: 'biryani' as const,
        })),
        ...chineseItems.map((item) => ({
            ...item,
            category: 'chinese' as const,
        })),
        ...naanItems.map((item) => ({ ...item, category: 'naan' as const })),
        ...beverageItems.map((item) => ({
            ...item,
            category: 'beverage' as const,
        })),
    ];

    // Filter items based on search term
    const filteredItems = useMemo(() => {
        if (!searchTerm.trim()) return [];
        return allItems.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );
    }, [searchTerm, allItems]);

    // Filter individual category items
    const getFilteredCategoryItems = (items: any[], category: string) => {
        if (!searchTerm.trim()) return items;
        return items.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );
    };

    const MenuItem = ({
        item,
        category,
    }: {
        item: { id: string; name: string; price: string };
        category:
            | 'karahi'
            | 'handi'
            | 'barbq'
            | 'biryani'
            | 'chinese'
            | 'naan'
            | 'beverage';
    }) => (
        <Card className="bg-card shadow-card hover:shadow-glow transition-all duration-300 border-primary/20 group">
            <CardContent className="p-6 relative">
                {/* Animated spice particles */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-accent rounded-full animate-spice-dance opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-accent/70 rounded-full animate-float [animation-delay:1s]"></div>

                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-bold text-accent line-clamp-1">
                            {item.name}
                        </h3>
                        <FavoriteButton
                            dish={{
                                id: item.id,
                                name: item.name,
                                price: parseFloat(
                                    item.price.split(' / ')[1] ||
                                        item.price.split(' / ')[0],
                                ),
                                category: category,
                            }}
                            size="sm"
                        />
                    </div>
                    <span className="text-lg font-semibold text-primary line-clamp-1">
                        Rs. {item.price}
                    </span>
                </div>
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 flex-1 animate-glow"
                        onClick={() =>
                            addToCart({
                                id: item.id,
                                name: item.name,
                                price: item.price,
                                category,
                            })
                        }
                    >
                        Add to Cart
                    </Button>
                    <Button
                        size="sm"
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                        Order Now
                    </Button>
                </div>
            </CardContent>
        </Card>
    );

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                        Our{' '}
                        <span className="text-accent inline-block">Menu</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Authentic Desi flavors prepared with passion since 1972
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-8 max-w-md mx-auto">
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Search our menu..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-white border-2 border-primary text-foreground placeholder:text-accent pr-10 focus:border-accent transition-colors"
                        />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-accent" />
                    </div>
                </div>

                {/* Search Results */}
                {searchTerm.trim() && (
                    <div className="mb-8">
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                            <CardHeader>
                                <CardTitle className="font-display text-2xl text-accent text-center">
                                    Search Results ({filteredItems.length} items
                                    found)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {filteredItems.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {filteredItems.map((item, index) => (
                                            <div
                                                key={item.id}
                                                className="animate-fade-in"
                                                style={{
                                                    animationDelay: `${index * 0.1}s`,
                                                }}
                                            >
                                                <MenuItem
                                                    item={item}
                                                    category={item.category}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-8">
                                        <p className="text-muted-foreground text-lg">
                                            No dishes found matching "
                                            {searchTerm}"
                                        </p>
                                        <p className="text-muted-foreground text-sm mt-2">
                                            Try searching for "Mutton",
                                            "Biryani", "Soup", etc.
                                        </p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                )}

                <Tabs defaultValue="karahi" className="w-full">
                    <TabsList className="grid w-full grid-cols-7 mb-8 bg-primary">
                        <TabsTrigger
                            value="karahi"
                            className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-white text-xs"
                        >
                            Karahi
                        </TabsTrigger>
                        <TabsTrigger
                            value="handi"
                            className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-white text-xs"
                        >
                            Handi
                        </TabsTrigger>
                        <TabsTrigger
                            value="barbq"
                            className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-white text-xs"
                        >
                            Bar B.Q
                        </TabsTrigger>
                        <TabsTrigger
                            value="biryani"
                            className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-white text-xs"
                        >
                            Biryani
                        </TabsTrigger>
                        <TabsTrigger
                            value="chinese"
                            className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-white text-xs"
                        >
                            Chinese
                        </TabsTrigger>
                        <TabsTrigger
                            value="naan"
                            className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-white text-xs"
                        >
                            Naan
                        </TabsTrigger>
                        <TabsTrigger
                            value="beverage"
                            className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-white text-xs"
                        >
                            Beverages
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="karahi">
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                            <CardHeader>
                                <CardTitle className="font-display text-2xl text-accent text-center">
                                    KARAHI (Half / Full)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {getFilteredCategoryItems(
                                        karahiItems,
                                        'karahi',
                                    ).map((item, index) => (
                                        <div
                                            key={item.id}
                                            className="animate-fade-in"
                                            style={{
                                                animationDelay: `${index * 0.1}s`,
                                            }}
                                        >
                                            <MenuItem
                                                item={item}
                                                category="karahi"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {searchTerm.trim() &&
                                    getFilteredCategoryItems(
                                        karahiItems,
                                        'karahi',
                                    ).length === 0 && (
                                        <div className="text-center py-4">
                                            <p className="text-muted-foreground">
                                                No Karahi dishes found matching
                                                "{searchTerm}"
                                            </p>
                                        </div>
                                    )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="handi">
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                            <CardHeader>
                                <CardTitle className="font-display text-2xl text-accent text-center">
                                    HANDI (Half / Full)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {getFilteredCategoryItems(
                                        handiItems,
                                        'handi',
                                    ).map((item, index) => (
                                        <div
                                            key={item.id}
                                            className="animate-fade-in"
                                            style={{
                                                animationDelay: `${index * 0.1}s`,
                                            }}
                                        >
                                            <MenuItem
                                                item={item}
                                                category="handi"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {searchTerm.trim() &&
                                    getFilteredCategoryItems(
                                        handiItems,
                                        'handi',
                                    ).length === 0 && (
                                        <div className="text-center py-4">
                                            <p className="text-muted-foreground">
                                                No Handi dishes found matching "
                                                {searchTerm}"
                                            </p>
                                        </div>
                                    )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="barbq">
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                            <CardHeader>
                                <CardTitle className="font-display text-2xl text-accent text-center">
                                    BAR B.Q (Half / Full)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {getFilteredCategoryItems(
                                        barbqItems,
                                        'barbq',
                                    ).map((item, index) => (
                                        <div
                                            key={item.id}
                                            className="animate-fade-in"
                                            style={{
                                                animationDelay: `${index * 0.1}s`,
                                            }}
                                        >
                                            <MenuItem
                                                item={item}
                                                category="barbq"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {searchTerm.trim() &&
                                    getFilteredCategoryItems(
                                        barbqItems,
                                        'barbq',
                                    ).length === 0 && (
                                        <div className="text-center py-4">
                                            <p className="text-muted-foreground">
                                                No Bar B.Q dishes found matching
                                                "{searchTerm}"
                                            </p>
                                        </div>
                                    )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="biryani">
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                            <CardHeader>
                                <CardTitle className="font-display text-2xl text-accent text-center">
                                    BIRYANI (Half / Full)
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {getFilteredCategoryItems(
                                        biryaniItems,
                                        'biryani',
                                    ).map((item, index) => (
                                        <div
                                            key={item.id}
                                            className="animate-fade-in"
                                            style={{
                                                animationDelay: `${index * 0.1}s`,
                                            }}
                                        >
                                            <MenuItem
                                                item={item}
                                                category="biryani"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {searchTerm.trim() &&
                                    getFilteredCategoryItems(
                                        biryaniItems,
                                        'biryani',
                                    ).length === 0 && (
                                        <div className="text-center py-4">
                                            <p className="text-muted-foreground">
                                                No Biryani dishes found matching
                                                "{searchTerm}"
                                            </p>
                                        </div>
                                    )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="chinese">
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                            <CardHeader>
                                <CardTitle className="font-display text-2xl text-accent text-center">
                                    CHINESE
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {getFilteredCategoryItems(
                                        chineseItems,
                                        'chinese',
                                    ).map((item, index) => (
                                        <div
                                            key={item.id}
                                            className="animate-fade-in"
                                            style={{
                                                animationDelay: `${index * 0.1}s`,
                                            }}
                                        >
                                            <MenuItem
                                                item={item}
                                                category="chinese"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {searchTerm.trim() &&
                                    getFilteredCategoryItems(
                                        chineseItems,
                                        'chinese',
                                    ).length === 0 && (
                                        <div className="text-center py-4">
                                            <p className="text-muted-foreground">
                                                No Chinese dishes found matching
                                                "{searchTerm}"
                                            </p>
                                        </div>
                                    )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="naan">
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                            <CardHeader>
                                <CardTitle className="font-display text-2xl text-accent text-center">
                                    NAAN & PATEER
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {getFilteredCategoryItems(
                                        naanItems,
                                        'naan',
                                    ).map((item, index) => (
                                        <div
                                            key={item.id}
                                            className="animate-fade-in"
                                            style={{
                                                animationDelay: `${index * 0.1}s`,
                                            }}
                                        >
                                            <MenuItem
                                                item={item}
                                                category="naan"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {searchTerm.trim() &&
                                    getFilteredCategoryItems(naanItems, 'naan')
                                        .length === 0 && (
                                        <div className="text-center py-4">
                                            <p className="text-muted-foreground">
                                                No Naan items found matching "
                                                {searchTerm}"
                                            </p>
                                        </div>
                                    )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="beverage">
                        <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                            <CardHeader>
                                <CardTitle className="font-display text-2xl text-accent text-center">
                                    SALAD, RAITA & BEVERAGES
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {getFilteredCategoryItems(
                                        beverageItems,
                                        'beverage',
                                    ).map((item, index) => (
                                        <div
                                            key={item.id}
                                            className="animate-fade-in"
                                            style={{
                                                animationDelay: `${index * 0.1}s`,
                                            }}
                                        >
                                            <MenuItem
                                                item={item}
                                                category="beverage"
                                            />
                                        </div>
                                    ))}
                                </div>
                                {searchTerm.trim() &&
                                    getFilteredCategoryItems(
                                        beverageItems,
                                        'beverage',
                                    ).length === 0 && (
                                        <div className="text-center py-4">
                                            <p className="text-muted-foreground">
                                                No Beverages found matching "
                                                {searchTerm}"
                                            </p>
                                        </div>
                                    )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default MenuSection;
