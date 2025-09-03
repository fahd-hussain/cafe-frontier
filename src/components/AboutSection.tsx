const AboutSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 animate-float">
            About <span className="text-accent animate-spice-dance inline-block">Frontier</span>
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed mb-8 animate-fade-in">
            Frontier Restaurant in Karachi has been serving authentic Desi cuisine since{" "}
            <span className="text-accent font-semibold animate-appetite-pulse inline-block">1972</span>. Located in the Sea Breeze Centre 
            at Boat Basin, we specialize in traditional Karahi and Handi dishes, known for our 
            customizable flavors and fresh ingredients.
          </p>
          <p className="text-lg text-muted-foreground animate-bounce-slow">
            As a beloved destination for breakfast and dinner, Frontier offers authentic cuisine 
            prepared with passion for generations. Whether you dine in or order to your doorstep, 
            experience the legacy of Desi taste at Frontier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;