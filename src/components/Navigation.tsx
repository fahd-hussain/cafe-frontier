import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, Heart, User, LogOut } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { totalItems } = useCart();
    const { user, signOut } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Menu', href: '/#menu' },
        { name: 'About', href: '/#about' },
        { name: 'Reviews', href: '/reviews' },
    ];

    const scrollToSection = (sectionId: string) => {
        if (location.pathname !== '/') {
            window.location.href = `/${sectionId}`;
            return;
        }

        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full bg-primary/80 backdrop-blur-sm z-50 border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="/lovable-uploads/36ef602b-c8e4-4008-9d42-9ae1ab5a60b1.png"
                            alt="Frontier Restaurant Logo"
                            className="h-10 w-auto"
                            loading="eager"
                            decoding="async"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) =>
                            item.href.startsWith('/#') ? (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-white hover:text-accent transition-colors font-medium"
                                >
                                    {item.name}
                                </button>
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-white hover:text-accent transition-colors font-medium"
                                >
                                    {item.name}
                                </Link>
                            ),
                        )}
                    </div>

                    {/* User Account & Cart */}
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                                    >
                                        <User className="w-4 h-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="end"
                                    className="w-48"
                                >
                                    <DropdownMenuItem
                                        onClick={() => navigate('/favorites')}
                                    >
                                        <Heart className="w-4 h-4 mr-2" />
                                        My Favorites
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={signOut}>
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Sign Out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Button
                                onClick={() => navigate('/auth')}
                                variant="outline"
                                size="sm"
                                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                            >
                                Sign In
                            </Button>
                        )}

                        <Button
                            onClick={() => {
                                /* Cart functionality handled by CartDrawer */
                            }}
                            variant="outline"
                            size="sm"
                            className="relative border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                        >
                            <ShoppingCart className="w-4 h-4" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Button>

                        {/* Mobile Menu Button */}
                        <Button
                            onClick={() => setIsOpen(!isOpen)}
                            variant="outline"
                            size="sm"
                            className="md:hidden border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                        >
                            {isOpen ? (
                                <X className="w-4 h-4" />
                            ) : (
                                <Menu className="w-4 h-4" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-border">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) =>
                                item.href.startsWith('/#') ? (
                                    <button
                                        key={item.name}
                                        onClick={() =>
                                            scrollToSection(item.href)
                                        }
                                        className="text-white hover:text-accent transition-colors font-medium text-left"
                                    >
                                        {item.name}
                                    </button>
                                ) : (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-white hover:text-accent transition-colors font-medium"
                                    >
                                        {item.name}
                                    </Link>
                                ),
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;
