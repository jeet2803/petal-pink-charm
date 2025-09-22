const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 border-t border-border py-12 mb-16 md:mb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-poppins font-bold text-2xl text-primary mb-2">
              Luxe Beauty
            </div>
            <p className="font-poppins text-muted-foreground text-sm">
              Enhancing your natural beauty since 2010
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Shop', id: 'shop' },
              { name: 'Checkout', id: 'checkout' },
              { name: 'Contact Us', id: 'contact-us' }
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="font-poppins text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="font-poppins text-muted-foreground text-sm">
              © 2024 Luxe Beauty. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;