export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  link: string;
}

export interface EventItem {
  id: string;
  title: string;
  image: string;
  link: string;
}

export const offers: Offer[] = [
  {
    id: 'summer-escape',
    title: 'The Summer Escape',
    subtitle: 'Dive into cool adventures at our picture-perfect destinations.',
    image: '/images/summerPic.png',
    link: '#'
  },
  {
    id: 'luxury-suites',
    title: 'The Winter Views',
    subtitle: 'Experience unmatched comfort in our finest suites.',
    image: '/images/WinterPic.png',
    link: '#'
  },
  {
    id: 'spa-retreat',
    title: 'The Rainy Retreat',
    subtitle: 'Rejuvenate with our signature wellness treatments.',
    image: '/images/RainyPic.png',
    link: '#'
  }
];

export const destinations: Destination[] = [
  {
    id: 'beachfront-villa',
    name: 'Beachfront Villas',
    image: 'images/NaukuchiatalLake.png',
    link: '#'
  },
  {
    id: 'mountain-lodge',
    name: 'Mountain Lodge',
    image: '/images/NainaDevimandir.png',
    link: '#'
  },
  {
    id: 'city-palace',
    name: 'City Palace',
    image: '/images/LakeNightView.png',
    link: '#'
  }
];

export const events: EventItem[] = [
  {
    id: 'meetings',
    title: 'Family Friendly',
    image: '/images/FamilyEnjoying.png',
    link: '#'
  },
  {
    id: 'events',
    title: 'Best For Couples',
    image: '/images/CoupleImages.png',
    link: '#'
  },
  {
    id: 'weddings',
    title: 'Timeless Weddings',
    image: '/images/WeddingPic.png',
    link: '#'
  }
];
