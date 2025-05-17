import { PageHero } from '@/components/sections/page-hero';
import { ContentSection, FeatureList } from '@/components/sections/content-section';
import Image from 'next/image';
import { Package, Zap, ShieldCheck, Settings, Maximize, Ruler, CheckCircle } from 'lucide-react';

export default function ProductsPage() {
  const productCategories = [
    { 
      name: "Brass Ingots", 
      description: "High-purity brass ingots for casting and various industrial applications. Available in standard and custom alloys.",
      image: "images/ingt.jpg",
      dataAiHint: "metal ingots",
      features: [
        { title: "Alloy Variety", description: "CuZn30, CuZn37, CuZn40, and custom compositions.", icon: <Settings size={18} /> },
        { title: "Consistent Quality", description: "Homogeneous composition and minimal impurities.", icon: <ShieldCheck size={18} /> },
      ]
    },
    { 
      name: "Brass Rods", 
      description: "Precision-engineered brass rods in various profiles (round, hexagonal, square) and sizes. Ideal for machining and fabrication.",
      image: "images/brassrod.jpg",
      dataAiHint: "brass rods",
      features: [
        { title: "Dimensional Accuracy", description: "Tight tolerances for diameter and length.", icon: <Ruler size={18} /> },
        { title: "Excellent Machinability", description: "Suitable for high-speed machining operations.", icon: <Maximize size={18} /> },
      ]
    },
     { 
      name: "Specialty Brass Alloys", 
      description: "Custom-developed brass alloys to meet specific performance requirements, including high-strength or lead-free options.",
      image: "images/billet.jpg",
      dataAiHint: "metal alloys",
      features: [
        { title: "Tailored Properties", description: "Alloys designed for specific mechanical, electrical, or corrosion resistance needs.", icon: <CheckCircle size={18} /> },
        { title: "Application Specific", description: "Solutions for marine, aerospace, or specialized industrial uses.", icon: <Package size={18} /> },
      ]
    },
  ];

  const generalFeatures = [
    { title: "High Electrical Conductivity", description: "Optimal for electrical components and connectors.", icon: <Zap size={20}/> },
    { title: "Excellent Corrosion Resistance", description: "Ensures longevity in various environments.", icon: <ShieldCheck size={20}/> },
    { title: "Outstanding Machinability", description: "Allows for intricate designs and efficient production.", icon: <Settings size={20}/> },
    { title: "Superior Mechanical Strength", description: "Provides durability and reliability in demanding applications.", icon: <Maximize size={20}/> },
  ];

  return (
    <>
      <PageHero 
        title="Our Products"
        subtitle="Discover our extensive range of high-quality brass ingots and rods, designed to meet diverse industrial demands."
      />

      <ContentSection title="Product Categories" icon={<Package className="inline-block mr-2" />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-card border rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
              <div className="relative h-48 w-full">
                <Image 
                  src={category.image} 
                  alt={category.name} 
                  layout="fill" 
                  objectFit="cover" 
                  data-ai-hint={category.dataAiHint}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{category.name}</h3>
                <p className="text-sm text-foreground/80 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, fIndex) => (
                     <li key={fIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-accent mt-0.5">{feature.icon || <CheckCircle size={16} />}</span>
                      <span><strong>{feature.title}:</strong> {feature.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="General Product Features" description="All our brass products are valued for:" icon={<CheckCircle className="inline-block mr-2" />}>
        <FeatureList items={generalFeatures} />
      </ContentSection>

      <ContentSection title="Custom Solutions" description="Can't find exactly what you need? We specialize in providing customizable solutions.">
        <p>
          Understanding that each industry and application has unique demands, Suncast Global offers bespoke brass rod and ingot solutions. Our engineering team works closely with clients to develop products tailored to their specific compositional, dimensional, and mechanical property requirements.
        </p>
        <p className="mt-4">
          Whether you need a special alloy composition, non-standard sizes, or specific performance characteristics, we have the expertise and manufacturing flexibility to deliver. Contact us to discuss your custom project.
        </p>
        <div className="mt-6">
          <a href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90">
            Request a Custom Quote
          </a>
        </div>
      </ContentSection>
    </>
  );
}
