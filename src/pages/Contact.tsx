
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="font-montserrat text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="font-arial block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input id="name" type="text" required className="font-arial" />
                </div>
                <div>
                  <label htmlFor="email" className="font-arial block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" required className="font-arial" />
                </div>
                <div>
                  <label htmlFor="phone" className="font-arial block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" className="font-arial" />
                </div>
                <div>
                  <label htmlFor="subject" className="font-arial block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input id="subject" type="text" required className="font-arial" />
                </div>
                <div>
                  <label htmlFor="message" className="font-arial block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea id="message" rows={6} required className="font-arial" />
                </div>
                <Button type="submit" className="w-full font-arial">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="font-montserrat text-3xl font-bold text-gray-900">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-2">
                    Headquarters
                  </h3>
                  <p className="font-arial text-gray-600">
                    123 Engineering Plaza<br />
                    Suite 100<br />
                    New York, NY 10001
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-2">
                    Phone
                  </h3>
                  <p className="font-arial text-gray-600">
                    Main: (212) 555-0100<br />
                    Toll-Free: (800) 555-LSEA
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-2">
                    Email
                  </h3>
                  <p className="font-arial text-gray-600">
                    General: info@lseacorp.com<br />
                    Projects: projects@lseacorp.com<br />
                    Careers: careers@lseacorp.com
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-2">
                    Business Hours
                  </h3>
                  <p className="font-arial text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                    Saturday: 9:00 AM - 2:00 PM EST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
