import { PageHero } from '@/components/sections/page-hero';
import { ContentSection, FeatureList } from '@/components/sections/content-section';
import Image from 'next/image';
import { Factory, TestTubeDiagonal, Microscope, HardHat, ShieldCheck, Leaf } from 'lucide-react';

export default function InfrastructurePage() {
  const infrastructureHighlights = [
    { 
      title: "State-of-the-Art Foundry", 
      description: "Equipped with advanced induction furnaces and continuous casting machines for efficient and high-quality ingot production.",
      icon: <Factory size={20} />,
      image: "images/frontmission-foundry.jpg",
      dataAiHint: "foundry machines"
    },
    { 
      title: "Precision Rod Extrusion Plant", 
      description: "Modern extrusion presses and drawing lines capable of producing brass rods with tight dimensional tolerances and superior surface finish.",
      icon: <SettingsIcon/>,
      image: "images/Extrusion.jpg",
      dataAiHint: "extrusion machine"
    },
    { 
      title: "Advanced Quality Control Laboratory", 
      description: "Comprehensive testing facilities including spectrometers, tensile testers, and metallographic analysis equipment to ensure every product meets stringent standards.",
      icon: <Microscope size={20} />,
      image: "images/lab.jpg",
      dataAiHint: "laboratory equipment"
    },
    { 
      title: "Automated Material Handling", 
      description: "Efficient systems for raw material and finished goods movement, optimizing workflow and ensuring safety.",
      icon: <HardHat size={20} />,
      image: "images/Automated.jpg",
      dataAiHint: "warehouse automation"
    },
  ];

  const qualitySustainabilityFeatures = [
     { title: "Stringent Quality Checks", description: "Multi-stage inspection process from raw material to final product.", icon: <ShieldCheck size={20}/> },
     { title: "Certified Processes", description: "Adherence to ISO 9001 and other relevant international quality standards.", icon: <AwardIcon /> },
     { title: "Skilled Workforce", description: "Highly trained engineers, technicians, and operators dedicated to excellence.", icon: <UsersIcon /> },
     { title: "Sustainable Practices", description: "Energy-efficient machinery, waste reduction programs, and responsible sourcing.", icon: <Leaf size={20}/> },
     { title: "Continuous Improvement", description: "Ongoing investment in technology and process optimization.", icon: <TrendingUpIcon /> },
     { title: "Safety First Culture", description: "Prioritizing a safe working environment for all employees.", icon: <HardHat size={20}/> },
  ];

  return (
    <>
      <PageHero 
        title="Our Infrastructure"
        subtitle="Advanced manufacturing facilities and stringent quality controls are the backbone of Suncast Global's commitment to excellence."
      />

      <ContentSection title="Manufacturing Excellence" icon={<Factory className="inline-block mr-2" />}>
        <p className="mb-6">
          Suncast Global Pvt. Ltd. boasts a robust and technologically advanced infrastructure designed for the high-volume production of premium quality brass ingots and rods. Our facilities are spread across a significant area, housing specialized units for each stage of the manufacturing process.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infrastructureHighlights.map((item, index) => (
            <div key={index} className="bg-card border rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-56 w-full">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  layout="fill" 
                  objectFit="cover" 
                  data-ai-hint={item.dataAiHint}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-accent mb-2">
                  {item.icon}
                  <h3 className="ml-2 text-xl font-semibold text-primary">{item.title}</h3>
                </div>
                <p className="text-sm text-foreground/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Commitment to Quality & Sustainability" icon={<TestTubeDiagonal className="inline-block mr-2" />}>
        <p className="mb-6">
          Our infrastructure is not just about production capacity; it's about ensuring uncompromising quality and embracing sustainable manufacturing practices. We integrate environmentally responsible methods throughout our operations.
        </p>
        <FeatureList items={qualitySustainabilityFeatures} />
      </ContentSection>
      
      <section className="py-12 md:py-16 bg-primary/10">
        <div className="container max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Investment in Future</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Suncast Global is committed to continuous investment in upgrading our infrastructure. We actively explore new technologies and process improvements to enhance efficiency, product quality, and our environmental performance, ensuring we remain at the forefront of the brass manufacturing industry.
            </p>
        </div>
      </section>
    </>
  );
}

// Placeholder icons
const SettingsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
const AwardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526M12 15.81V6.5M15 6.5H9L12 2l3 4.5Z"/><circle cx="12" cy="12" r="10"/></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const TrendingUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;

