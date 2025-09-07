// constants/index.ts
import { PropertyProps } from '../interfaces';

export const DEFAULT_BUTTON_LABEL = 'Click me';
export const DEFAULT_CARD_TITLE = 'Card Title';
export const DEFAULT_CARD_DESCRIPTION = 'Card description goes here.';




export const FILTER_OPTIONS = [
  "All",
  "Top Villa", 
  "Free Reschedule",
  "Book Now, Pay Later",
  "Self Checkin",
  "Instant Book"
];

// Sample reviews data
export const SAMPLE_REVIEWS = [
  {
    id: 1,
    name: "Kerry",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: "★★★★★",
    comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking.",
    date: "March 2024",
    yearsOnPlatform: "2 years on ALX",
    tripType: "Family trip"
  },
  {
    id: 2,
    name: "Pooja",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: "★★★★★",
    comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures.",
    date: "March 2024",
    yearsOnPlatform: "1 years on ALX",
    tripType: "Family trip"
  },
  {
    id: 3,
    name: "Cindy & Ben",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: "★★★★★",
    comment: "I simply don't have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking.",
    date: "August 2023",
    yearsOnPlatform: "1 years on ALX",
    tripType: "Family trip"
  },
  {
    id: 4,
    name: "Marnie",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: "★★★★★",
    comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures.",
    date: "January 2023",
    yearsOnPlatform: "5 years on ALX",
    tripType: "Family trip"
  }
];



export const Hero_Image = '/assets/Hero-Image.png';
export const Hero_Image_Mobile = '/assets/Hero-Image-Mobile.png';
// export const Villa_Arrecife_Beach_House = '/assets/Villa_Arrecife.png'
