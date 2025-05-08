import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import { SunIcon } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border/60 text-secondary-foreground">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Suncast Global Home">
              <SunIcon className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-primary">
                Suncast Global
              </span>
            </Link>
            <p className="text-sm text-foreground/70">
              Specializing in high-quality brass ingots and rods for diverse industrial needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/80 hover:text-primary hover:underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Contact Us</h3>
            <address className="not-italic text-sm space-y-2 text-foreground/80">
              <p><b>Suncast Global Pvt. Ltd.</b></p>
              <p>Khasra No 119 Mahindra Road,</p>
              <p>Prithla Industrial Area, Palwal, Haryana, IN -121102              </p>
              <p>Phone: <a href="tel:+919818482365" className="hover:text-primary hover:underline">+919818482365</a></p>
              <p>Email: <a href="mailto:suncastglobal1@gmail.com" className="hover:text-primary hover:underline">suncastglobal1@gmail.com</a></p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border/40 pt-8 text-center">
          <p className="text-sm text-foreground/60">
            &copy; {currentYear} Suncast Global Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
