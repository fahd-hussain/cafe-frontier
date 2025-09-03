import {
    Phone,
    MapPin,
    Facebook,
    Instagram,
    MessageCircle,
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary border-t border-primary/20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="text-center md:text-left">
                        <h3 className="font-display text-2xl font-bold text-accent mb-4">
                            Frontier
                        </h3>
                        <p className="text-muted-foreground mb-4">
                            Experience the Taste of Desi Since 1972
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a
                                href="#"
                                className="text-white hover:text-accent transition-colors"
                            >
                                <Facebook size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-accent transition-colors"
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-accent transition-colors"
                            >
                                <MessageCircle size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center">
                        <h4 className="font-display text-xl font-semibold text-white mb-4">
                            Contact Information
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-center justify-center gap-2 text-muted-foreground">
                                <Phone size={18} />
                                <div className="text-sm">
                                    <div>0330-9281235</div>
                                    <div>0322-2504448</div>
                                    <div>0322-3679367</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-muted-foreground">
                                <MapPin size={18} />
                                <span className="text-sm">
                                    Boat Basin, Karachi, Sindh, Pakistan, 75600
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center md:text-right">
                        <h4 className="font-display text-xl font-semibold text-white mb-4">
                            Quick Links
                        </h4>
                        <div className="space-y-2">
                            <div>
                                <a
                                    href="#menu"
                                    className="text-muted-foreground hover:text-accent transition-colors"
                                >
                                    Menu
                                </a>
                            </div>
                            <div>
                                <a
                                    href="#order"
                                    className="text-muted-foreground hover:text-accent transition-colors"
                                >
                                    Order Now
                                </a>
                            </div>
                            <div>
                                <a
                                    href="#contact"
                                    className="text-muted-foreground hover:text-accent transition-colors"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h5 className="font-semibold text-white mb-2">
                                Operating Hours
                            </h5>
                            <p className="text-sm text-muted-foreground">
                                Daily: 7:00 AM - 11:00 PM
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary/20 mt-8 pt-8 text-center">
                    <p className="text-muted-foreground text-sm">
                        © 2024 Frontier Restaurant. All rights reserved. |
                        Serving authentic Desi cuisine since 1972
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
