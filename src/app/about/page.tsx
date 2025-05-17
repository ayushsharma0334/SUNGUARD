import { PageHero } from '@/components/sections/page-hero';
import { ContentSection, FeatureList } from '@/components/sections/content-section';
import Image from 'next/image';
import { Users, Target, Lightbulb, Zap, ShieldCheck, Settings, Leaf, Factory, Award } from 'lucide-react';

export default function AboutUsPage() {
  const coreValues = [
    { title: "Integrity", description: "Conducting our business with the highest ethical standards.", icon: <ShieldCheck size={20} /> },
    { title: "Quality", description: "Uncompromising commitment to excellence in every product.", icon: <Award size={20} /> },
    { title: "Innovation", description: "Continuously seeking better solutions and processes.", icon: <Lightbulb size={20} /> },
    { title: "Customer Focus", description: "Understanding and exceeding client expectations.", icon: <Users size={20} /> },
    { title: "Sustainability", description: "Operating responsibly for a better future.", icon: <Leaf size={20} /> },
    { title: "Teamwork", description: "Collaborating effectively to achieve common goals.", icon: <TeamIcon /> },
  ];

  const historyMilestones = [
    { year: "2005", event: "Suncast Global Pvt. Ltd. founded with a vision to be a leader in brass manufacturing." },
    { year: "2008", event: "Expansion of production capacity with new advanced machinery." },
    { year: "2012", event: "Achieved ISO 9001 certification, affirming our commitment to quality." },
    { year: "2015", event: "Introduced eco-friendly production practices and achieved ISO 14001." },
    { year: "2020", event: "Expanded product range to include specialized brass alloys." },
    { year: "Present", event: "Serving diverse industries globally with a reputation for excellence and reliability." },
  ];

  return (
    <>
      <PageHero 
        title="About Suncast Global"
        subtitle="Driving innovation and excellence in brass manufacturing since our inception."
      />

      <ContentSection title="Our Story" icon={<Users className="inline-block mr-2" />}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4">
              Suncast Global Pvt. Ltd. was established with a clear vision: to become a global leader in the manufacturing of high-quality brass ingots and rods. From humble beginnings, we have grown into a trusted name, known for our precision, durability, and innovative approach to metal manufacturing.
            </p>
            <p>
              Our journey has been driven by a relentless pursuit of excellence, continuous investment in technology, and a deep understanding of our customers' needs across various industries including automotive, electrical, construction, and engineering.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="images/Extrusion.jpg" 
              alt="Suncast Global Team" 
              layout="fill" 
              objectFit="cover"
              data-ai-hint="factory workers team"
            />
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Our Mission" icon={<Target className="inline-block mr-2" />}>
        <p>
          To deliver premium brass rod solutions that drive performance and reliability across industries. We achieve this through cutting-edge technology, skilled craftsmanship, and a strong commitment to sustainable manufacturing practices. Our goal is to empower our clients with materials that enhance their products and operations.
        </p>
      </ContentSection>

      <ContentSection title="Our Vision" icon={<Lightbulb className="inline-block mr-2" />}>
        <p>
          To stay at the forefront of brass manufacturing by continuously innovating, expanding our capabilities, and collaborating closely with our clients. We are dedicated to building a future where performance, quality, and sustainability go hand in hand, setting new benchmarks in the industry.
        </p>
      </ContentSection>
      
      <ContentSection title="Our Core Values" icon={<HeartIcon />}>
        <FeatureList items={coreValues} />
      </ContentSection>
    </>
  );
}

// Placeholder Icons
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const HistoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/><path d="M12 7v5l4 2"/></svg>;
const TeamIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>;
