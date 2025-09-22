import { Button } from '@/components/ui/button';
import skincareImage from '@/assets/about-skincare.jpg';
import labImage from '@/assets/about-lab.jpg';

const AboutSection = () => {
  const aboutSections = [
    {
      id: 1,
      title: "Our Story",
      description: "Founded with a passion for enhancing natural beauty, Luxe Beauty has been creating premium cosmetics for over a decade. We believe every person deserves to feel confident and radiant.",
      image: skincareImage,
      imageAlt: "Beautiful woman applying luxury skincare"
    },
    {
      id: 2,
      title: "Premium Quality",
      description: "Every product is crafted with the finest ingredients sourced globally. Our commitment to quality ensures that each item meets our rigorous standards for performance and safety.",
      image: labImage,
      imageAlt: "Luxury cosmetics laboratory"
    },
    {
      id: 3,
      title: "Sustainable Beauty",
      description: "We're committed to sustainable practices and cruelty-free products. Our packaging is eco-friendly, and we partner with suppliers who share our environmental values.",
      image: skincareImage,
      imageAlt: "Sustainable beauty practices"
    },
    {
      id: 4,
      title: "Global Community",
      description: "Join millions of beauty enthusiasts worldwide who trust Luxe Beauty. Our global community shares tips, tutorials, and celebrates the diversity of beauty in all its forms.",
      image: labImage,
      imageAlt: "Global beauty community"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-brand-purple/5 via-background to-brand-pink/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-foreground mb-4">
            About Luxe Beauty
          </h2>
          <p className="font-poppins text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the story behind our passion for creating luxury beauty products
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {aboutSections.map((section, index) => (
            <div 
              key={section.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
            >
              {/* Image */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                <div className="relative group">
                  <img 
                    src={section.image} 
                    alt={section.imageAlt}
                    className="w-full h-[350px] md:h-[400px] object-cover rounded-2xl shadow-soft group-hover:shadow-hover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`w-full md:w-1/2 text-center md:text-left ${index % 2 === 0 ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}>
                <h3 className="font-poppins font-bold text-2xl md:text-3xl text-foreground mb-6">
                  {section.title}
                </h3>
                
                <p className="font-poppins text-muted-foreground text-lg leading-relaxed mb-8">
                  {section.description}
                </p>

                <Button variant="soft" size="lg" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;