import { Button } from '@/components/ui/button';
import lipstickImage from '@/assets/product-lipstick.jpg';
import eyeshadowImage from '@/assets/product-eyeshadow.jpg';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      title: "Luxe Lipstick Collection",
      description: "Discover our signature lipstick collection featuring rich, long-lasting colors that complement every skin tone. Infused with nourishing ingredients for all-day comfort.",
      price: "$45",
      image: lipstickImage,
      imageAlt: "Luxury lipstick collection in rose gold packaging"
    },
    {
      id: 2,
      title: "Dreamy Eyeshadow Palette",
      description: "Create endless eye looks with our premium eyeshadow palette. Featuring highly pigmented shades in purple and pink tones with stunning shimmer finishes.",
      price: "$65",
      image: eyeshadowImage,
      imageAlt: "Premium eyeshadow palette with purple and pink tones"
    }
  ];

  return (
    <section id="shop" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-foreground mb-4">
            Featured Products
          </h2>
          <p className="font-poppins text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our most-loved products that have transformed beauty routines worldwide
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
            >
              {/* Product Image */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                <div className="relative group">
                  <img 
                    src={product.image} 
                    alt={product.imageAlt}
                    className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-soft group-hover:shadow-hover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Product Info */}
              <div className={`w-full md:w-1/2 text-center md:text-left ${index % 2 === 0 ? 'animate-slide-in-right' : 'animate-slide-in-left'}`}>
                <h3 className="font-poppins font-bold text-2xl md:text-4xl text-foreground mb-4">
                  {product.title}
                </h3>
                
                <p className="font-poppins text-muted-foreground text-lg leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
                  <span className="font-poppins font-bold text-3xl text-primary">
                    {product.price}
                  </span>
                  <span className="font-poppins text-muted-foreground">
                    Free shipping worldwide
                  </span>
                </div>

                <Button variant="cta" size="lg" className="w-full sm:w-auto px-8">
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;