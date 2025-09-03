import { Button } from '@/components/ui/button';
const heroBackground =
    '/lovable-uploads/03cef6a7-948f-43e5-9211-c951b8a0e463.png';

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBackground})` }}
            >
                {/* Maroon Overlay */}
                <div className="absolute inset-0 bg-gradient-hero"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-4">
                <div className="text-center max-w-4xl">
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                        Satisfy Your Cravings with{' '}
                        <span className="text-accent inline-block">
                            Frontier
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in [animation-delay:0.3s]">
                        Experience the Taste of Desi Since 1972
                    </p>
                    <Button
                        size="lg"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 [animation-delay:0.6s] animate-appetite-pulse"
                    >
                        Order Now
                    </Button>
                </div>

                {/* Floating steam effects */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-steam [animation-delay:0s]"></div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/15 rounded-full animate-steam [animation-delay:1s]"></div>
                <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-white/10 rounded-full animate-steam [animation-delay:2s]"></div>
            </div>
        </section>
    );
};

export default HeroSection;
