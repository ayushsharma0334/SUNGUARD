import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Suncast Global - Ingot & Rod Manufacturing',
    template: '%s | Suncast Global',
  },
  description: 'Leading the way in high-quality brass ingots and rods. Precision, durability, and innovation in metal manufacturing for automotive, electrical, construction, and engineering industries.',
  keywords: ['brass ingots', 'brass rods', 'metal manufacturing', 'Suncast Global', 'automotive parts', 'electrical components', 'construction materials', 'engineering solutions'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          geistSans.variable, 
          geistMono.variable, 
          "antialiased min-h-screen flex flex-col"
        )}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
