import { PageHero } from '@/components/sections/page-hero';
import { ContentSection } from '@/components/sections/content-section';
import Image from 'next/image';
import { Award, ShieldCheck, Leaf, CheckCircle } from 'lucide-react';

export default function CertificationsPage() {
  const certifications = [
    {
      name: "ISO 9001:2015 - Quality Management System",
      issuingBody: "International Organization for Standardization",
      description: "Demonstrates our commitment to consistently providing products and services that meet customer and regulatory requirements.",
      icon: <Award className="h-10 w-10 text-accent" />,
      image: "images/9001-2015.jpg",
      dataAiHint: "ISO certificate"
    },
    {
      name: "ISO 14001:2015 - Environmental Management System",
      issuingBody: "International Organization for Standardization",
      description: "Highlights our dedication to managing environmental responsibilities in a systematic manner that contributes to the environmental pillar of sustainability.",
      icon: <Leaf className="h-10 w-10 text-accent" />,
      image: "images/14001-2015.jpg",
      dataAiHint: "environment certificate"
    },
    {
      name: "OHSAS 18001 / ISO 45001 - Occupational Health and Safety",
      issuingBody: "International Organization for Standardization",
      description: "Ensures a safe and healthy workplace by preventing work-related injury and ill health, as well as by proactively improving its OH&S performance.",
      icon: <ShieldCheck className="h-10 w-10 text-accent" />,
      image: "images/45001-2015.jpg",
      dataAiHint: "safety certificate"
    },
    {
      name: "IATF 16949",
      issuingBody: "Relevant Certification Body",
      description: "IATF 16949 is a global quality management system standard for the automotive industry, based on ISO 9001:2015",
      icon: <CheckCircle className="h-10 w-10 text-accent" />,
      image: "images/iatf.jpg",
      dataAiHint: "compliance document"
    },
  ];

  return (
    <>
      <PageHero 
        title="Our Certifications"
        subtitle="A testament to our unwavering commitment to quality, sustainability, and safety standards in manufacturing."
      />

      <ContentSection title="Recognized Standards of Excellence" icon={<Award className="inline-block mr-2" />}>
        <p className="mb-8">
          At Suncast Global Pvt. Ltd., we believe that certifications are more than just badges; they are a reflection of our core values and dedication to operational excellence. We adhere to internationally recognized standards to ensure our products, processes, and management systems are of the highest caliber.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-card border rounded-lg p-6 shadow-lg flex flex-col md:flex-row gap-6 items-start transition-all hover:shadow-xl">
              <div className="flex-shrink-0">
                {cert.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-primary mb-1">{cert.name}</h3>
                <p className="text-xs text-foreground/60 mb-2">Issued by: {cert.issuingBody}</p>
                <p className="text-sm text-foreground/80 mb-4">{cert.description}</p>
                <div className="relative h-32 w-full md:w-48 rounded overflow-hidden border">
                   <Image 
                    src={cert.image} 
                    alt={`${cert.name} certificate mockup`}
                    layout="fill" 
                    objectFit="contain" 
                    className="p-2"
                    data-ai-hint={cert.dataAiHint}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Commitment to Continuous Improvement" icon={<CheckCircle className="inline-block mr-2" />}>
        <p>
          Achieving these certifications is an ongoing journey. Suncast Global is committed to continuous improvement, regular audits, and staying updated with the latest industry standards. This ensures that we not only maintain our certifications but also consistently enhance our performance in quality, environmental stewardship, and occupational health and safety.
        </p>
        <p className="mt-4">
          Our clients can be confident that they are partnering with a manufacturer that values integrity, quality, and responsible practices at every level of its operations.
        </p>
      </ContentSection>
    </>
  );
}
