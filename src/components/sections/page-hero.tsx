import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface PageHeroProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  className?: string;
  backgroundImageUrl?: string; // For optional background image
}

export function PageHero({ title, subtitle, children, className, backgroundImageUrl }: PageHeroProps) {
  const style = backgroundImageUrl ? { backgroundImage: `url(${backgroundImageUrl})` } : {};
  const overlayClass = backgroundImageUrl ? "bg-black/50 text-white" : "bg-primary/10 text-primary-foreground";

  return (
    <section 
      className={cn(
        "py-16 md:py-24 text-center bg-cover bg-center", 
        backgroundImageUrl ? "text-white" : "bg-secondary/40",
        className
      )} 
      style={style}
    >
      <div className={cn("container max-w-4xl mx-auto px-4", backgroundImageUrl && "bg-black/40 p-8 rounded-lg backdrop-blur-sm")}>
        <h1 className={cn("text-4xl md:text-5xl font-bold", backgroundImageUrl ? "text-white" : "text-primary")}>{title}</h1>
        {subtitle && (
          <p className={cn("mt-4 text-lg md:text-xl", backgroundImageUrl ? "text-gray-200" : "text-foreground/80")}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
