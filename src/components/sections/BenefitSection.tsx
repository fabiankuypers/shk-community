import React from 'react';
import Container from '../ui/Container';
import { LucideIcon } from 'lucide-react';

interface BenefitItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="bg-blue-100 text-blue-700 p-3 rounded-full mb-4">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

interface BenefitSectionProps {
  title: string;
  subtitle: string;
  items: Array<{
    icon: LucideIcon;
    title: string;
    description: string;
  }>;
  align?: 'left' | 'right';
  bgColor?: string;
  image?: string;
  id?: string;
}

const BenefitSection: React.FC<BenefitSectionProps> = ({
  title,
  subtitle,
  items,
  align = 'left',
  bgColor = 'bg-white',
  image,
  id,
}) => {
  const isRightAligned = align === 'right';

  return (
    <section id={id} className={`py-16 ${bgColor}`}>
      <Container>
        {/* Mobile Layout */}
        <div className="block md:hidden mb-8">
          {image && (
            <div className="w-full mb-8">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          )}
          <h2 className="text-3xl font-bold mb-4 text-blue-900 text-center">{title}</h2>
          <p className="text-xl text-gray-700 mb-8 text-center">{subtitle}</p>
          <div className="grid gap-8 sm:grid-cols-2">
            {items.map((item, index) => (
              <BenefitItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          {/* Image Block */}
          {image && (
            <div
              className={`relative ${
                isRightAligned ? 'order-2' : 'order-1'
              }`}
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}

          {/* Text Block */}
          <div
            className={`${
              isRightAligned ? 'order-1' : 'order-2'
            }`}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-900">{title}</h2>
            <p className="text-xl text-gray-700 mb-8">{subtitle}</p>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
              {items.map((item, index) => (
                <BenefitItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BenefitSection;