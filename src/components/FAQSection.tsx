import React, { useState } from 'react';
import Container from './Container';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-lg text-gray-900 py-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-blue-600" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 pb-2 transition-all">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "Was kostet die Mitgliedschaft in der SHK + Haustechnik Community?",
      answer: "Die Mitgliedschaft ist 3 Monate kostenfrei, danach kostet sie 9€ im Monat. Für Premiumfunktionen wie exklusive Workshops oder individuelle Beratung gibt es kostenpflichtige Optionen."
    },
    {
      question: "Wie kann ich der Community beitreten?",
      answer: "Klicken Sie einfach auf 'Jetzt Mitglied werden' und füllen Sie das Anmeldeformular aus. Nach einer kurzen Prüfung Ihrer Angaben erhalten Sie Ihre Zugangsdaten."
    },
    {
      question: "Welche Unternehmen können Mitglied werden?",
      answer: "Die SHK + Haustechnik Community richtet sich speziell an Unternehmen aus dem SHK-Bereich (Sanitär, Heizung, Klima) sowie Elektrobetriebe. Sowohl Inhaber als auch leitende Angestellte sind willkommen."
    },
    {
      question: "Wie finden die Netzwerktreffen statt?",
      answer: "Wir bieten sowohl regionale Präsenztreffen als auch digitale Formate an. So können Sie je nach Bedarf und Standort flexibel am Austausch teilnehmen."
    },
    {
      question: "Welche Themen werden in der Community behandelt?",
      answer: "Der Fokus liegt auf Digitalisierung, Unternehmensentwicklung und Nachfolgeplanung. Dazu gehören digitale Prozesse, Marketing, Vertrieb, Operations und Finanzthemen speziell für SHK- und Elektrobetriebe."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Häufig gestellte Fragen</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Antworten auf die wichtigsten Fragen zur SHK + Haustechnik Community und Ihrer Mitgliedschaft.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;