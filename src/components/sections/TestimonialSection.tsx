import React from 'react';
import Container from '../ui/Container';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  position,
  company,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 h-full flex flex-col transition-transform duration-200 hover:scale-[1.02] cursor-pointer">
      <div className="mb-6">
        <svg className="h-8 w-8 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p className="text-gray-700">{quote}</p>
      </div>
      <div className="mt-auto flex items-center">
        {image ? (
          <img 
            src={image} 
            alt={author} 
            className="h-12 w-12 rounded-full mr-4 object-cover"
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-4">
            <span className="text-lg font-bold">{author.charAt(0)}</span>
          </div>
        )}
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Der Austausch in der SHK + Haustechnik Community hat mir komplett neue Perspektiven für die Digitalisierung meines SHK-Betriebs eröffnet. Die Experten und Werkzeuge haben uns enorm geholfen.",
      author: "Michael Schmidt",
      position: "Geschäftsführer",
      company: "Schmidt Heizungstechnik GmbH",
    },
    {
      quote: "Als ich über die Unternehmensnachfolge nachgedacht habe, war die Community goldwert. Die strukturierten Prozesse und der Erfahrungsaustausch haben mir viel Sicherheit gegeben.",
      author: "Sabine Müller",
      position: "Inhaberin",
      company: "Müller Elektrotechnik",
    },
    {
      quote: "Durch die vorselektierten Qualitätsdienstleister haben wir Zeit und Geld gespart. Die Software-Lösungen, die wir über die Community kennengelernt haben, nutzen wir täglich.",
      author: "Thomas Weber",
      position: "Betriebsleiter",
      company: "Weber & Söhne GmbH",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Was unsere Mitglieder sagen</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Erfahren Sie, wie die SHK + Haustechnik Community SHK- und Elektrobetrieben bei ihrer Entwicklung hilft.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;