import { PageHero } from '@/components/sections/page-hero';
import { ContentSection } from '@/components/sections/content-section';
import { ContactForm } from '@/components/contact/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Contact Us"
        subtitle="We're here to help. Reach out to us for inquiries, quotes, or any information you need about our products and services."
      />

      <ContentSection title="Get in Touch" icon={<Mail className="inline-block mr-2" />}>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Our Address</h3>
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <address className="not-italic text-foreground/80">
                  Suncast Global Pvt. Ltd.<br />
                  Khasra No 119 Mahindra Road, <br />
                  Prithla Industrial Area, Palwal, Haryana, 121102<br />
                  INDIA
                </address>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Mr. Sanjiv Aggarwal</h3>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:+919818482365" className="text-foreground/80 hover:text-primary">+91 9818482365</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Mr. Satish Maheshwari (Gopal)</h3>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:+911234567890" className="text-foreground/80 hover:text-primary">+919811982501</a>
              </div>
            </div>
             <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Email Us</h3>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:suncastglobal1@gmail.com" className="text-foreground/80 hover:text-primary">suncastglobal1@gmail.com</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Business Hours</h3>
              <p className="text-foreground/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-foreground/80">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-foreground/80">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </ContentSection>
      
      <section className="py-0 md:py-0">
        <div className="container max-w-7xl mx-auto px-0">
            <div className="relative h-64 md:h-96 w-full">
              {/* For maps, you'd typically embed Google Maps or use a library. This is a placeholder image. */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.0515667270056!2d77.3062973!3d28.226424999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd1006eb3ed87%3A0xcfe6afd81d48015e!2sSuncast%20Global!5e1!3m2!1sen!2sin!4v1746689048109!5m2!1sen!2sin" width="auto" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <p className="text-white text-2xl font-semibold p-4 bg-black/50 rounded">Location Placeholder</p>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}
