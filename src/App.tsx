import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/contexts/CartContext';
import { AuthProvider } from '@/contexts/AuthContext';
import CartDrawer from '@/components/CartDrawer';
import Index from './pages/Index';
import Reviews from './pages/Reviews';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <CartProvider>
                <TooltipProvider>
                    <Toaster />
                    <Sonner />
                    <CartDrawer />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Index />} />
                            <Route path="/reviews" element={<Reviews />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/auth" element={<Auth />} />
                            <Route path="/favorites" element={<Favorites />} />
                            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </TooltipProvider>
            </CartProvider>
        </AuthProvider>
    </QueryClientProvider>
);

export default App;
