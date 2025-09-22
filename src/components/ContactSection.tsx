import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Facebook, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact-us" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-5xl text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="font-poppins text-muted-foreground text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-brand-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-poppins font-semibold text-xl text-foreground mb-2">
                  Visit Our Store
                </h3>
                <p className="font-poppins text-muted-foreground">
                  123 Beauty Boulevard<br />
                  Fashion District, NY 10001<br />
                  United States
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-poppins font-semibold text-xl text-foreground">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-brand-purple/20 hover:bg-brand-purple/30 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Facebook className="w-6 h-6 text-primary" />
                </a>
                <a href="#" className="w-12 h-12 bg-brand-pink/20 hover:bg-brand-pink/30 rounded-lg flex items-center justify-center transition-colors duration-300">
                  <Instagram className="w-6 h-6 text-primary" />
                </a>
              </div>
            </div>

            <div className="pt-8">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Become a Partner
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="font-poppins"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="font-poppins"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="font-poppins resize-none"
                />
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;