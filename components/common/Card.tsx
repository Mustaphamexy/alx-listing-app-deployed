// components/common/Card.tsx
import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({
  title = 'Card Title',
  description = 'Card description goes here.',
  children,
  className = '',
}) => {
  return (
    <div className={`p-6 rounded-lg shadow-md bg-white ${className}`}>
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {description && <p className="text-gray-700 mb-4">{description}</p>}
      {children}
    </div>
  );
};

export default Card;
