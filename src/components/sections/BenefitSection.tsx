import React from 'react';
import Container from '../ui/Container';
import { DivideIcon as LucideIcon } from 'lucide-react';

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
        {/* Tablet Layout (iPad Portrait & Landscape) - Image on top */}
        <div className="block xl:hidden">
          {/* Image first for tablets */}
          {image && (
            <div className="w-full mb-8">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
          )}
          
          {/* Content below image */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">{title}</h2>
            <p className="text-xl text-gray-700 mb-8">{subtitle}</p>
            <div className="grid gap-8 sm:grid-cols-2">
              {items.map((item, index) => (
                <BenefitItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout (XL and above) - Side by side */}
        <div className="hidden xl:grid xl:grid-cols-2 gap-12 items-center">
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
            <div className="grid gap-8 xl:grid-cols-1 2xl:grid-cols-2">
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