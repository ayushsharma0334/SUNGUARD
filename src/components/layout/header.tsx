import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from './nav-links';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';

const LOGO_URL = "https://vsdstudio.in/wp-content/uploads/2025/05/sssssssssssss.png"; 

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Suncast Global Logo">
          <Image 
            src={LOGO_URL} 
            alt="Suncast Global Logo" 
            width={150} 
            height={33} 
            className="object-contain"
            priority 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1">
          <NavLinks linkClassName="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md" activeLinkClassName="text-primary bg-primary/10" />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm bg-background">
              <SheetHeader className="mb-6">
                <SheetTitle>
                  <Link href="/" className="flex items-center" aria-label="Suncast Global Logo">
                    <Image 
                      src={LOGO_URL} 
                      alt="Suncast Global Logo" 
                      width={120} 
                      height={27} 
                      className="object-contain" 
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-3">
                <NavLinks 
                  orientation="vertical"
                  linkClassName="flex items-center gap-3 px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors rounded-md"
                  activeLinkClassName="text-primary bg-primary/10"
                />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
