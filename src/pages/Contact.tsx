
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "LSEA | Contact";
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const contactData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      console.log('Contact form submitted:', contactData);
      
      // Backend email service disabled - Supabase removed
      toast({
        title: "Thank you for your interest!",
        description: "Please contact us directly via email or phone for immediate response.",
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
      
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Note",
        description: "Please contact us directly at your preferred method.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh]">
        <img
          src="/images/towerclimb.png"
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
                  <Input id="name" name="name" type="text" required className="font-arial" />
                </div>
                <div>
                  <label htmlFor="email" className="font-arial block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input id="email" name="email" type="email" required className="font-arial" />
                </div>
                <div>
                  <label htmlFor="phone" className="font-arial block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input id="phone" name="phone" type="tel" className="font-arial" />
                </div>
                <div>
                  <label htmlFor="subject" className="font-arial block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input id="subject" name="subject" type="text" required className="font-arial" />
                </div>
                <div>
                  <label htmlFor="message" className="font-arial block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={6} required className="font-arial" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full font-arial">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
                    150 River Road<br />
                    Suite E2<br />
                    Montville, NJ 07045
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-2">
                    Phone
                  </h3>
                  <p className="font-arial text-gray-600">
                    Main: (973) 588-3122<br />
                    Fax: (973) 588-3123
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-2">
                    Email
                  </h3>
                  <p className="font-arial text-gray-600">
                    General: info@lseacorp.com<br />
                    Projects: kimlaw@lseacorp.com<br />
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-2">
                    Business Hours
                  </h3>
                  <p className="font-arial text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM EST<br />
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
