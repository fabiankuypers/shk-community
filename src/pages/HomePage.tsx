import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import BenefitSection from '../components/sections/BenefitSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import FAQSection from '../components/sections/FAQSection';
import CTASection from '../components/sections/CTASection';
import CookieBanner from '../components/modals/CookieBanner';

import { 
  Users, 
  Lightbulb, 
  Coffee, 
  Building2, 
  CheckCircle, 
  Laptop, 
  ArrowUpRight,
  CircleDollarSign,
  BarChart4,
  Clock
} from 'lucide-react';

const HomePage: React.FC = () => {
  const networkBenefits = [
    {
      icon: Users,
      title: "Regionale Netzwerktreffen",
      description: "Knüpfen Sie Kontakte zu anderen SHK- und Elektrobetrieben in Ihrer Region und tauschen Sie Erfahrungen aus."
    },
    {
      icon: Coffee,
      title: "Fachlicher Austausch",
      description: "Diskutieren Sie branchenspezifische Herausforderungen mit Gleichgesinnten und finden Sie gemeinsam Lösungen."
    },
    {
      icon: Lightbulb,
      title: "Innovative Impulse",
      description: "Erhalten Sie neue Ideen und Perspektiven für Ihr Unternehmen durch den Austausch mit Kollegen."
    },
    {
      icon: Building2,
      title: "Überregionale Kontakte",
      description: "Erweitern Sie Ihr Netzwerk über die eigene Region hinaus und profitieren Sie von bundesweiten Erfahrungen."
    }
  ];

  const digitalBenefits = [
    {
      icon: ArrowUpRight,
      title: "Digitale Transformation",
      description: "Lassen Sie sich von Experten auf Ihrem Weg zur Digitalisierung begleiten und vermeiden Sie kostspielige Fehlentscheidungen."
    },
    {
      icon: Laptop,
      title: "Software-Lösungen",
      description: "Entdecken Sie branchenspezifische Software für Marketing, Vertrieb, Operations und Finanzen."
    },
    {
      icon: BarChart4,
      title: "Prozessoptimierung",
      description: "Steigern Sie die Effizienz in Ihrem Betrieb durch digitale Werkzeuge und optimierte Abläufe."
    },
    {
      icon: CheckCircle,
      title: "Geprüfte Qualitätsdienstleister",
      description: "Zugriff auf vorselektierte und geprüfte Anbieter, die speziell für die Anforderungen von SHK- und Elektrobetrieben geeignet sind."
    }
  ];

  const successionBenefits = [
    {
      icon: Clock,
      title: "Frühzeitige Vorbereitung",
      description: "Erfahren Sie, wie Sie durch digitale Prozesse Ihr Unternehmen unabhängig von Schlüsselpersonen machen und den Wert steigern."
    },
    {
      icon: CircleDollarSign,
      title: "Wertermittlung",
      description: "Lernen Sie, wie Sie den Wert Ihres Unternehmens richtig bestimmen und durch gezielte Maßnahmen steigern können."
    },
    {
      icon: CheckCircle,
      title: "Rechtssichere Abwicklung",
      description: "Profitieren Sie von Expertenrat zu Vertragsgestaltung und rechtlichen Aspekten bei der Unternehmensnachfolge."
    },
    {
      icon: Users,
      title: "Nachfolger-Netzwerk",
      description: "Knüpfen Sie Kontakte zu potenziellen Nachfolgern oder Übernehmern innerhalb der Community."
    }
  ];

  return (
    <div className="font-sans bg-white">
      <Header />
      <HeroSection />
      
      <BenefitSection
        id="vorteile"
        title="Erfahrungsaustausch & Netzwerkbildung"
        subtitle="Profitieren Sie vom Wissen und den Erfahrungen anderer SHK- und Elektrobetriebe."
        items={networkBenefits}
        align="left"
        bgColor="bg-white"
        image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <BenefitSection
        title="Geprüfte Qualitätsdienstleister & Digitalisierungstools"
        subtitle="Entdecken Sie ausgewählte Lösungen, die speziell für SHK- und Elektrobetriebe entwickelt wurden."
        items={digitalBenefits}
        align="right"
        bgColor="bg-gray-50"
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <BenefitSection
        title="Unternehmensnachfolge & Firmenverkauf"
        subtitle="Bereiten Sie Ihr Unternehmen optimal auf die Nachfolge vor und sichern Sie Ihr Lebenswerk."
        items={successionBenefits}
        align="left"
        bgColor="bg-white"
        image="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default HomePage;