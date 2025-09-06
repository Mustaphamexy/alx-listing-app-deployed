

export interface CardProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface PropertyProps {
  name: string;
  address: {
    state?: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants:string;
  };
  image: string;
  discount: string;
}

export interface AccommodationType {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export interface PropertyCardProps {
  property: PropertyProps;
}


export interface PillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export interface PropertyDescProps extends PropertyProps {
  id: number;
  reviewCount: number;
  description: string;
  amenities: string[];
  images: string[];
}

export interface PropertyDetailProps {
  property: PropertyDescProps;
}

export interface ReviewProps {
  id: number;
  name: string;
  avatar: string;
  rating: string;
  comment: string;
  date: string;
  yearsOnPlatform: string;
  tripType: string;
}

interface ReviewSectionProps {
  propertyId: string;
}