import { PageHero } from '@/components/sections/page-hero';
import { ContentSection, FeatureList } from '@/components/sections/content-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {
  Package,
  ShieldCheck,
  Leaf,
  Users,
  Rocket,
  Award,
  Crosshair,
  Settings2,
  Factory,
  CheckCircle,
  ThumbsUp,
  Orbit,
  Cpu,
  DraftingCompass
} from 'lucide-react';

export default function HomePage() {
  const whatWeOfferItems = [
    { title: "High Electrical Conductivity", description: "Our brass rods ensure optimal performance in electrical applications.", icon: <Cpu size={24} className="text-accent" /> },
    { title: "Excellent Corrosion Resistance", description: "Built to last, resisting wear and tear in harsh environments.", icon: <ShieldCheck size={24} className="text-accent" /> },
    { title: "Outstanding Machinability", description: "Easily formed and shaped to meet precise manufacturing needs.", icon: <DraftingCompass size={24} className="text-accent" /> },
    { title: "Superior Mechanical Strength", description: "Robust and durable for demanding industrial uses.", icon: <Rocket size={24} className="text-accent" /> },
  ];

  const keyFeaturesItems = [
    { title: "Superior Quality", description: "Made from premium raw materials for unmatched performance.", icon: <Award size={24} className="text-accent" /> },
    { title: "Precision Engineering", description: "Consistent dimensions and properties through meticulous manufacturing.", icon: <Crosshair size={24} className="text-accent" /> },
    { title: "Customizable Solutions", description: "Designed to meet your specific requirements and applications.", icon: <Settings2 size={24} className="text-accent" /> },
    { title: "Eco-Friendly Production", description: "Minimizing environmental impact through sustainable practices.", icon: <Leaf size={24} className="text-accent" /> },
  ];
  
  const whyChooseUsItems = [
    { title: "Advanced Manufacturing", description: "Equipped with state-of-the-art technology and stringent quality controls.", icon: <Factory size={24} className="text-accent" /> },
    { title: "Uncompromising Quality", description: "Each product is rigorously tested to meet international standards.", icon: <ShieldCheck size={24} className="text-accent" /> },
    { title: "Customer-First Approach", description: "We provide tailored solutions and responsive service to all clients.", icon: <Users size={24} className="text-accent" /> },
    { title: "Sustainability Focus", description: "We integrate environmentally responsible methods throughout our operations.", icon: <Leaf size={24} className="text-accent" /> },
  ];

  return (
    <>
      <PageHero 
        title="Leading the Way in Ingot & Rod Manufacturing"
        subtitle="At Suncast Global Pvt. Ltd., we specialize in the production of high-quality brass ingots and rods, catering to diverse industrial needs across the globe. Known for our precision, durability, and innovation, we have become a trusted name in the metal manufacturing industry."
        className="bg-gradient-to-b from-secondary/30 to-background"
      >
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/products">Our Products</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </PageHero>
      
      <section className="py-12 md:py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-lg text-foreground/80 mb-6">
                To deliver premium brass rod solutions that drive performance and reliability across industries such as automotive, electrical, construction, and engineering. We achieve this through cutting-edge technology, skilled craftsmanship, and a strong commitment to sustainable manufacturing practices.
              </p>
              <Button asChild variant="link" className="text-primary px-0 text-lg">
                <Link href="/about">Learn More About Us &rarr;</Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="images/frontmission-foundry.jpg" 
                alt="Suncast Global Mission" 
                layout="fill" 
                objectFit="cover"
                data-ai-hint="factory interior"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
            <Package className="inline-block mr-3 h-8 w-8 text-primary" /> What We Offer
          </h2>
          <div className="flex overflow-x-auto space-x-6 pb-6 -mx-4 px-4"> {/* Negative margin and padding to allow full bleed illusion if container was edge-to-edge */}
            {whatWeOfferItems.map((item, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-72 md:w-80 p-6 rounded-xl transform transition-all duration-300 ease-out 
                           bg-gradient-to-br from-card/70 via-card/60 to-card/70 
                           dark:from-background/60 dark:via-background/50 dark:to-background/60 
                           border border-primary/20 
                           shadow-xl shadow-primary/5 dark:shadow-primary/10
                           hover:scale-[1.03] hover:border-accent hover:shadow-[0_0_25px_0_hsl(var(--accent)/0.3)]
                           group flex flex-col"
              >
                {item.icon && (
                  <div className="mb-4 flex-shrink-0 p-3 bg-accent/10 dark:bg-accent/15 rounded-lg self-start
                                 group-hover:bg-accent/20 dark:group-hover:bg-accent/25 
                                 transition-colors duration-300">
                    {item.icon}
                  </div>
                )}
                <div className="flex-grow">
                  <h4 className="font-semibold text-primary text-xl mb-2 group-hover:text-accent transition-colors duration-300">{item.title}</h4>
                  <p className="text-sm text-foreground/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContentSection title="Key Features of Our Brass Rods" icon={<CheckCircle className="inline-block mr-2" />}>
        <FeatureList items={keyFeaturesItems} />
      </ContentSection>
      
      <ContentSection title="Why Choose Suncast?" icon={<ThumbsUp className="inline-block mr-2" />}>
        <FeatureList items={whyChooseUsItems} />
      </ContentSection>

      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/15 via-background to-primary/5 dark:from-primary/25 dark:via-background dark:to-primary/10">
        <div className="container max-w-5xl mx-auto px-4 text-center">
            <div className="relative mx-auto mb-6">
              <Orbit className="h-16 w-16 text-accent mx-auto animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold text-primary dark:text-primary-foreground mb-4">Our Vision</h2>
            <p className="text-lg text-foreground/90 dark:text-foreground/80 max-w-3xl mx-auto">
              To stay at the forefront of brass manufacturing by continuously innovating, expanding our capabilities, and collaborating closely with our clients. We are dedicated to building a future where performance, quality, and sustainability go hand in hand.
            </p>
        </div>
      </section>
    </>
  );
}
