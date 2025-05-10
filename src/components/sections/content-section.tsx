import type { PropsWithChildren } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';

interface ContentSectionProps extends PropsWithChildren {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  titleAs?: 'h1' | 'h2' | 'h3';
}

export function ContentSection({ title, description, icon, children, className, titleAs = 'h2' }: ContentSectionProps) {
  return (
    <section className={cn("py-8 md:py-12", className)}>
      <div className="container max-w-5xl mx-auto">
        <Card className="shadow-lg overflow-hidden rounded-xl bg-card/80 backdrop-blur-sm border-primary/10">
          <CardHeader className="bg-transparent p-6 md:p-8"> {/* Removed background from card header for a more seamless look */}
            <CardTitle asChild className="flex items-center gap-3">
              {titleAs === 'h1' ? 
                <h1 className="text-3xl md:text-4xl font-bold text-primary"> {icon} {title}</h1> :
              titleAs === 'h2' ?
                <h2 className="text-2xl md:text-3xl font-bold text-primary"> {icon} {title}</h2> :
                <h3 className="text-xl md:text-2xl font-bold text-primary"> {icon} {title}</h3>
              }
            </CardTitle>
            {description && <CardDescription className="text-base text-foreground/70 mt-2">{description}</CardDescription>}
          </CardHeader>
          <CardContent className="p-6 md:p-8 text-foreground/90 space-y-6 text-base leading-relaxed">
            {children}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export function FeatureList({ items }: { items: { title: string; description: string; icon?: React.ReactNode }[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      {items.map((item, index) => (
        <li 
          key={index} 
          className="group flex items-start gap-4 p-6 rounded-xl
                     bg-gradient-to-br from-card/70 via-card/60 to-card/70 
                     dark:from-background/60 dark:via-background/50 dark:to-background/60 
                     border border-primary/20 
                     shadow-xl shadow-primary/5 dark:shadow-primary/10
                     transition-all duration-300 ease-out 
                     hover:scale-[1.03] hover:border-accent hover:shadow-[0_0_25px_0_hsl(var(--accent)/0.3)]" // Futuristic glow effect
        >
          {item.icon && (
            <div className="flex-shrink-0 mt-1 p-3 bg-accent/10 dark:bg-accent/15 rounded-lg 
                           group-hover:bg-accent/20 dark:group-hover:bg-accent/25 
                           transition-colors duration-300">
              {item.icon}
            </div>
          )}
          <div className="flex-grow">
            <h4 className="font-semibold text-primary text-lg mb-1 
                           group-hover:text-accent transition-colors duration-300">{item.title}</h4>
            <p className="text-sm text-foreground/80">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
