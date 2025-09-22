import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-cosmetics.jpg';

const HeroSection = () => {
  const scrollToShop = () => {
    const element = document.getElementById('shop');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury cosmetics collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/30 via-brand-pink/20 to-brand-purple/30"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          Discover Your
          <span className="block bg-brand-gradient bg-clip-text text-transparent">
            Natural Beauty
          </span>
        </h1>
        
        <p className="font-poppins text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Premium cosmetics crafted with love to enhance your unique beauty. 
          Experience luxury that transforms your daily routine into a moment of self-care.
        </p>

        <Button 
          variant="hero" 
          size="lg" 
          onClick={scrollToShop}
          className="animate-float text-lg px-10 py-4 h-auto"
        >
          Shop Now
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-pink/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;