import { DESTINATION_IMAGE_ASSETS, IMAGE_ASSETS } from './imageAssets';

export { DESTINATION_IMAGE_ASSETS, IMAGE_ASSETS };

export const BOOKING_URL =
  'https://haventower.bookmystay.io/?utm_source=gmb&utm_campaign=website_button';

export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=SMDC+Wind+Residences+Tower+4+Tagaytay+City';

export const BRAND_CONFIG = {
  name: 'THE WIND HAVEN',
  property: 'SMDC Wind Residences – Tower 4',
  addressLine1: 'SMDC Wind Residences, Tower 4',
  addressLine2: 'Aguinaldo Highway, Tagaytay City',
  addressLine3: 'Philippines 4120',
  shortLocation: 'Tagaytay City, Philippines',
  tagline: 'A Quiet Escape Above the Ordinary.',
  secondaryTagline: 'Find your quiet escape.',
  footerDescription:
    'A calm private accommodation concept at SMDC Wind Residences, Tower 4 along Aguinaldo Highway in Tagaytay City.',
  proposalNote:
    'Independent website redesign concept intended for a creative portfolio. Accommodation details, amenities, and availability remain subject to confirmation on the official BookMyStay listing.',
  destinationDisclosure:
    'Independent local recommendations. These establishments and attractions are independently owned and operated and are not affiliated with or operated by The Wind Haven.',
  destinationFooterNote:
    "Destination information is provided for guest convenience. Please check each establishment's official website or map listing for current hours, availability, and details.",
  amenitiesDisclosure:
    'Certain facilities are shared condominium amenities and are subject to building management rules, operating hours, availability, and applicable fees.',
};

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_LINKS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'rooms', label: 'Stay', href: '#rooms' },
  { id: 'amenities', label: 'Amenities', href: '#amenities' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'location', label: 'Explore Tagaytay', href: '#location' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export interface RoomCategory {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  verifiedHighlights: string[];
  ownerConfirmationSlots: {
    label: string;
    value: string;
  }[];
  images: {
    src: string;
    alt: string;
    caption: string;
    isPlaceholder: boolean;
  }[];
}

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: 'studio',
    code: 'Category 01',
    title: 'Studio',
    subtitle: 'Reference Portal Category · Verify Availability',
    shortDescription:
      'A streamlined accommodation category shown on the reference booking platform for comfortable short stays in Tagaytay.',
    fullDescription:
      'Shown as a room category on the reference BookMyStay booking portal for SMDC Wind Residences, Tower 4. Exact unit assignment, sleeping setup, capacity, and availability for The Wind Haven should be confirmed directly on the booking portal.',
    verifiedHighlights: [
      'Appears on the reference BookMyStay listing',
      'Subject to unit-specific confirmation & live dates',
      'Located at SMDC Wind Residences, Tower 4',
    ],
    ownerConfirmationSlots: [
      { label: 'Unit Status', value: 'Confirm on BookMyStay' },
      { label: 'Bed Configuration', value: 'Not specified — verify before booking' },
      { label: 'Guest Capacity', value: 'Not specified — verify before booking' },
      { label: 'Room Size & Rate', value: 'View live portal details' },
    ],
    images: [
      {
        src: IMAGE_ASSETS.studioSuite.src,
        alt: IMAGE_ASSETS.studioSuite.alt,
        caption: IMAGE_ASSETS.studioSuite.caption,
        isPlaceholder: !IMAGE_ASSETS.studioSuite.isActualPropertyPhoto,
      },
      {
        src: IMAGE_ASSETS.kitchenDining.src,
        alt: IMAGE_ASSETS.kitchenDining.alt,
        caption: IMAGE_ASSETS.kitchenDining.caption,
        isPlaceholder: !IMAGE_ASSETS.kitchenDining.isActualPropertyPhoto,
      },
      {
        src: IMAGE_ASSETS.bathroomSpa.src,
        alt: IMAGE_ASSETS.bathroomSpa.alt,
        caption: IMAGE_ASSETS.bathroomSpa.caption,
        isPlaceholder: !IMAGE_ASSETS.bathroomSpa.isActualPropertyPhoto,
      },
    ],
  },
  {
    id: 'one-bedroom',
    code: 'Category 02',
    title: 'One-Bedroom Apartment',
    subtitle: 'Reference Portal Category · Verify Availability',
    shortDescription:
      'A dedicated one-bedroom option offering separate living and resting areas for a relaxed Tagaytay getaway.',
    fullDescription:
      'Shown as a room category on the reference BookMyStay booking portal for SMDC Wind Residences, Tower 4. Private accommodation features commonly associated with a one-bedroom unit—such as a living area, dining space, kitchenette, air-conditioning, Wi-Fi, and private bathroom—should be confirmed on BookMyStay for your selected dates.',
    verifiedHighlights: [
      'Separate bedroom and living space layout (subject to confirmation)',
      'Kitchenette, dining area & private bathroom features to verify',
      'Air-conditioning & Wi-Fi noted for confirmation',
    ],
    ownerConfirmationSlots: [
      { label: 'Unit Status', value: 'Confirm on BookMyStay' },
      { label: 'Bed Configuration', value: 'Not specified — verify before booking' },
      { label: 'Guest Capacity', value: 'Not specified — verify before booking' },
      { label: 'Room Size & Rate', value: 'View live portal details' },
    ],
    images: [
      {
        src: IMAGE_ASSETS.oneBedroomLiving.src,
        alt: IMAGE_ASSETS.oneBedroomLiving.alt,
        caption: IMAGE_ASSETS.oneBedroomLiving.caption,
        isPlaceholder: !IMAGE_ASSETS.oneBedroomLiving.isActualPropertyPhoto,
      },
      {
        src: IMAGE_ASSETS.studioSuite.src,
        alt: 'Illustrative preview of a quiet minimalist bedroom',
        caption: 'Bedroom Concept — Replace with authorized unit photography',
        isPlaceholder: !IMAGE_ASSETS.studioSuite.isActualPropertyPhoto,
      },
      {
        src: IMAGE_ASSETS.kitchenDining.src,
        alt: IMAGE_ASSETS.kitchenDining.alt,
        caption: IMAGE_ASSETS.kitchenDining.caption,
        isPlaceholder: !IMAGE_ASSETS.kitchenDining.isActualPropertyPhoto,
      },
    ],
  },
  {
    id: 'two-bedroom',
    code: 'Category 03',
    title: 'Two-Bedroom Apartment',
    subtitle: 'Reference Portal Category · Verify Availability',
    shortDescription:
      'A multi-room option shown on the reference portal for families or small companions seeking additional space.',
    fullDescription:
      'Shown as a room category on the reference BookMyStay booking portal for SMDC Wind Residences, Tower 4. Whether this specific category is included under The Wind Haven’s active inventory, along with maximum guest capacity and bed count, must be verified directly on BookMyStay.',
    verifiedHighlights: [
      'Appears on the reference BookMyStay listing',
      'Extended shared living space concept',
      'Confirm inventory & occupancy directly on portal',
    ],
    ownerConfirmationSlots: [
      { label: 'Unit Status', value: 'Confirm on BookMyStay' },
      { label: 'Bed & Bath Count', value: 'Not specified — verify before booking' },
      { label: 'Guest Capacity', value: 'Not specified — verify before booking' },
      { label: 'Room Size & Rate', value: 'View live portal details' },
    ],
    images: [
      {
        src: IMAGE_ASSETS.twoBedroomSuite.src,
        alt: IMAGE_ASSETS.twoBedroomSuite.alt,
        caption: IMAGE_ASSETS.twoBedroomSuite.caption,
        isPlaceholder: !IMAGE_ASSETS.twoBedroomSuite.isActualPropertyPhoto,
      },
      {
        src: IMAGE_ASSETS.kitchenDining.src,
        alt: IMAGE_ASSETS.kitchenDining.alt,
        caption: IMAGE_ASSETS.kitchenDining.caption,
        isPlaceholder: !IMAGE_ASSETS.kitchenDining.isActualPropertyPhoto,
      },
      {
        src: IMAGE_ASSETS.bathroomSpa.src,
        alt: IMAGE_ASSETS.bathroomSpa.alt,
        caption: IMAGE_ASSETS.bathroomSpa.caption,
        isPlaceholder: !IMAGE_ASSETS.bathroomSpa.isActualPropertyPhoto,
      },
    ],
  },
];

export interface AmenityItem {
  id: string;
  name: string;
  category: 'unit' | 'shared';
  description: string;
  iconName:
    | 'wifi'
    | 'wind'
    | 'utensils'
    | 'sofa'
    | 'bath'
    | 'waves'
    | 'trees'
    | 'trophy'
    | 'car'
    | 'arrow-up-down'
    | 'shield';
  note?: string;
}

export const UNIT_AMENITIES: AmenityItem[] = [
  {
    id: 'wifi',
    name: 'Wi-Fi',
    category: 'unit',
    description:
      'Wireless internet access subject to confirmation for your specific unit.',
    iconName: 'wifi',
    note: 'Subject to confirmation',
  },
  {
    id: 'aircon',
    name: 'Air-Conditioning',
    category: 'unit',
    description:
      'Climate control for comfortable rest during warm afternoons or humid days.',
    iconName: 'wind',
    note: 'Subject to confirmation',
  },
  {
    id: 'living-area',
    name: 'Living Area',
    category: 'unit',
    description:
      'Dedicated indoor seating area designed for relaxing between outings.',
    iconName: 'sofa',
    note: 'Varies by unit layout',
  },
  {
    id: 'kitchenette',
    name: 'Kitchenette',
    category: 'unit',
    description:
      'Compact counter and prep space for warm drinks and light snacks.',
    iconName: 'utensils',
    note: 'Included appliances subject to confirmation',
  },
  {
    id: 'dining-area',
    name: 'Dining Area',
    category: 'unit',
    description:
      'Casual dining table setup suited for quiet breakfasts or takeaway meals.',
    iconName: 'utensils',
    note: 'Subject to confirmation',
  },
  {
    id: 'private-bathroom',
    name: 'Private Bathroom',
    category: 'unit',
    description:
      'En-suite bathroom space within the private accommodation unit.',
    iconName: 'bath',
    note: 'Subject to confirmation',
  },
];

export const SHARED_FACILITIES: AmenityItem[] = [
  {
    id: 'swimming-pool',
    name: 'Swimming Pool',
    category: 'shared',
    description:
      'Shared condominium swimming pool complex within SMDC Wind Residences.',
    iconName: 'waves',
  },
  {
    id: 'garden',
    name: 'Garden Grounds',
    category: 'shared',
    description:
      'Landscaped walkways and open garden spaces managed by the condominium.',
    iconName: 'trees',
  },
  {
    id: 'sports-facilities',
    name: 'Sports Facilities',
    category: 'shared',
    description:
      'Shared recreational courts on property grounds, subject to building rules.',
    iconName: 'trophy',
  },
  {
    id: 'parking',
    name: 'Parking',
    category: 'shared',
    description:
      'Condominium parking availability and fees managed by building administration.',
    iconName: 'car',
  },
  {
    id: 'elevator',
    name: 'Elevator Access',
    category: 'shared',
    description:
      'Shared tower elevators serving residential floors at Tower 4.',
    iconName: 'arrow-up-down',
  },
  {
    id: 'security',
    name: '24-Hour Security',
    category: 'shared',
    description:
      'Round-the-clock condominium lobby and perimeter security staffing.',
    iconName: 'shield',
  },
];

export type GalleryCategory =
  | 'All'
  | 'Accommodation'
  | 'Interiors'
  | 'Amenities'
  | 'Surroundings';

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  alt: string;
  isPlaceholder: boolean;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    src: IMAGE_ASSETS.heroTagaytay.src,
    title: 'Tagaytay Highland Perspective',
    category: 'Accommodation',
    alt: IMAGE_ASSETS.heroTagaytay.alt,
    isPlaceholder: !IMAGE_ASSETS.heroTagaytay.isActualPropertyPhoto,
  },
  {
    id: 'gal-2',
    src: IMAGE_ASSETS.oneBedroomLiving.src,
    title: 'Bright Living & Lounge Space',
    category: 'Interiors',
    alt: IMAGE_ASSETS.oneBedroomLiving.alt,
    isPlaceholder: !IMAGE_ASSETS.oneBedroomLiving.isActualPropertyPhoto,
  },
  {
    id: 'gal-3',
    src: IMAGE_ASSETS.studioSuite.src,
    title: 'Restful Bedroom Concept',
    category: 'Accommodation',
    alt: IMAGE_ASSETS.studioSuite.alt,
    isPlaceholder: !IMAGE_ASSETS.studioSuite.isActualPropertyPhoto,
  },
  {
    id: 'gal-4',
    src: IMAGE_ASSETS.twoBedroomSuite.src,
    title: 'Spacious Shared Suite Concept',
    category: 'Accommodation',
    alt: IMAGE_ASSETS.twoBedroomSuite.alt,
    isPlaceholder: !IMAGE_ASSETS.twoBedroomSuite.isActualPropertyPhoto,
  },
  {
    id: 'gal-5',
    src: IMAGE_ASSETS.kitchenDining.src,
    title: 'Kitchenette & Dining Nook',
    category: 'Interiors',
    alt: IMAGE_ASSETS.kitchenDining.alt,
    isPlaceholder: !IMAGE_ASSETS.kitchenDining.isActualPropertyPhoto,
  },
  {
    id: 'gal-6',
    src: IMAGE_ASSETS.bathroomSpa.src,
    title: 'Stone-Tiled Private Bath Concept',
    category: 'Interiors',
    alt: IMAGE_ASSETS.bathroomSpa.alt,
    isPlaceholder: !IMAGE_ASSETS.bathroomSpa.isActualPropertyPhoto,
  },
  {
    id: 'gal-7',
    src: IMAGE_ASSETS.poolGarden.src,
    title: 'Shared Pool & Garden Grounds',
    category: 'Amenities',
    alt: IMAGE_ASSETS.poolGarden.alt,
    isPlaceholder: !IMAGE_ASSETS.poolGarden.isActualPropertyPhoto,
  },
  {
    id: 'gal-8',
    src: IMAGE_ASSETS.taalLandscape.src,
    title: 'Tagaytay Ridge & Taal Lake Mist',
    category: 'Surroundings',
    alt: IMAGE_ASSETS.taalLandscape.alt,
    isPlaceholder: !IMAGE_ASSETS.taalLandscape.isActualPropertyPhoto,
  },
];

export type TagaytayCategory =
  | 'All'
  | 'Tourist Attractions & Culture'
  | 'Restaurants & Cafés'
  | 'Shopping & Leisure'
  | 'Scenic & Nature';

export interface AttractionItem {
  id: string;
  name: string;
  displayCategory: string;
  filterCategory: Exclude<TagaytayCategory, 'All'>;
  description: string;
  image: string;
  imageAlt: string;
  imageObjectPosition?: string;
  mapsUrl: string;
  verificationNote?: string;
}

export const TAGAYTAY_ATTRACTIONS: AttractionItem[] = [
  {
    id: 'sky-ranch',
    name: 'Sky Ranch Tagaytay',
    displayCategory: 'Tourist Attraction',
    filterCategory: 'Tourist Attractions & Culture',
    description:
      'Open-air leisure park featuring the Sky Eye Ferris wheel, family rides, and outdoor viewing areas overlooking Taal Lake.',
    image: DESTINATION_IMAGE_ASSETS.skyRanch.src,
    imageAlt: DESTINATION_IMAGE_ASSETS.skyRanch.alt,
    imageObjectPosition: DESTINATION_IMAGE_ASSETS.skyRanch.objectPosition,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sky+Ranch+Tagaytay',
  },
  {
    id: 'museo-orlina',
    name: 'Museo Orlina',
    displayCategory: 'Art & Culture',
    filterCategory: 'Tourist Attractions & Culture',
    description:
      'Contemporary glass sculpture museum and cultural gallery dedicated to Filipino visual artistry set along Tagaytay ridge.',
    image: DESTINATION_IMAGE_ASSETS.museoOrlina.src,
    imageAlt: DESTINATION_IMAGE_ASSETS.museoOrlina.alt,
    imageObjectPosition: DESTINATION_IMAGE_ASSETS.museoOrlina.objectPosition,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Museo+Orlina+Tagaytay',
  },
  {
    id: 'bag-of-beans',
    name: 'Bag of Beans Tagaytay',
    displayCategory: 'Restaurant & Café',
    filterCategory: 'Restaurants & Cafés',
    description:
      'Established Tagaytay dining spot favored for hearty breakfasts, baked goods, coffee, and garden-style seating.',
    image: DESTINATION_IMAGE_ASSETS.bagOfBeans.src,
    imageAlt: DESTINATION_IMAGE_ASSETS.bagOfBeans.alt,
    imageObjectPosition: DESTINATION_IMAGE_ASSETS.bagOfBeans.objectPosition,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bag+of+Beans+Tagaytay',
  },
  {
    id: 'leslies-ridge',
    name: "Leslie's Restaurant",
    displayCategory: 'Restaurant',
    filterCategory: 'Restaurants & Cafés',
    description:
      'Long-standing ridge restaurant known for traditional Filipino comfort dishes, hot bulalo, and views toward Taal Lake.',
    image: DESTINATION_IMAGE_ASSETS.lesliesRestaurant.src,
    imageAlt: DESTINATION_IMAGE_ASSETS.lesliesRestaurant.alt,
    imageObjectPosition: DESTINATION_IMAGE_ASSETS.lesliesRestaurant.objectPosition,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Leslies+Restaurant+Tagaytay',
  },
  {
    id: 'balay-dako',
    name: 'Balay Dako',
    displayCategory: 'Restaurant',
    filterCategory: 'Restaurants & Cafés',
    description:
      'Filipino heritage dining house along Tagaytay Ridge offering regional menus and elevated perspectives over Taal Lake.',
    image: DESTINATION_IMAGE_ASSETS.balayDako.src,
    imageAlt: DESTINATION_IMAGE_ASSETS.balayDako.alt,
    imageObjectPosition: DESTINATION_IMAGE_ASSETS.balayDako.objectPosition,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Balay+Dako+Tagaytay',
  },
  {
    id: 'starbucks-tagaytay',
    name: 'Starbucks Tagaytay',
    displayCategory: 'Coffee Shop',
    filterCategory: 'Restaurants & Cafés',
    description:
      'Ridge-side coffeehouse option in Tagaytay (Reserve Hiraya branch pictured) well suited for warm drinks in cool weather. Verify the exact Tagaytay branch on maps before visiting.',
    image: DESTINATION_IMAGE_ASSETS.starbucksTagaytay.src,
    imageAlt: DESTINATION_IMAGE_ASSETS.starbucksTagaytay.alt,
    imageObjectPosition: DESTINATION_IMAGE_ASSETS.starbucksTagaytay.objectPosition,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Starbucks+Tagaytay',
    verificationNote: 'Verify specific Tagaytay branch before visiting',
  },
  {
    id: 'cafe-voi-la',
    name: 'Café Voi La Tagaytay',
    displayCategory: 'Café',
    filterCategory: 'Restaurants & Cafés',
    description:
      'Intimate garden-inspired café and kitchen suited for relaxed afternoon coffee, pastries, and unhurried conversation.',
    image: DESTINATION_IMAGE_ASSETS.cafeVoiLa.src,
    imageAlt: DESTINATION_IMAGE_ASSETS.cafeVoiLa.alt,
    imageObjectPosition: DESTINATION_IMAGE_ASSETS.cafeVoiLa.objectPosition,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cafe+Voi+La+Tagaytay',
  },
  {
    id: 'ayala-serin',
    name: 'Ayala Malls Serin',
    displayCategory: 'Shopping Destination',
    filterCategory: 'Shopping & Leisure',
    description:
      'Breezy courtyard shopping center offering everyday essentials, boutique retail, cafés, and casual dining.',
    image: DESTINATION_IMAGE_ASSETS.ayalaSerin.src,
    imageAlt: DESTINATION_IMAGE_ASSETS.ayalaSerin.alt,
    imageObjectPosition: DESTINATION_IMAGE_ASSETS.ayalaSerin.objectPosition,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ayala+Malls+Serin+Tagaytay',
  },
  {
    id: 'summit-ridge',
    name: 'Summit Ridge Promenade',
    displayCategory: 'Shopping & Leisure',
    filterCategory: 'Shopping & Leisure',
    description:
      'Lifestyle commercial strip along Aguinaldo Highway at Summit Ridge Tagaytay with dining, coffee, and grocery access. Verify current tenants and details before visiting.',
    image: DESTINATION_IMAGE_ASSETS.summitRidge.src,
    imageAlt: DESTINATION_IMAGE_ASSETS.summitRidge.alt,
    imageObjectPosition: DESTINATION_IMAGE_ASSETS.summitRidge.objectPosition,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Summit+Ridge+Promenade+Tagaytay',
    verificationNote: 'Verify current destination name & hours',
  },
  {
    id: 'taal-lake',
    name: 'Taal Lake',
    displayCategory: 'Scenic Destination',
    filterCategory: 'Scenic & Nature',
    description:
      'Tagaytay’s iconic volcanic caldera lake, admired from public ridge viewpoints for morning mist and expansive panoramas.',
    image: DESTINATION_IMAGE_ASSETS.taalLake.src,
    imageAlt: DESTINATION_IMAGE_ASSETS.taalLake.alt,
    imageObjectPosition: DESTINATION_IMAGE_ASSETS.taalLake.objectPosition,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Taal+Lake+Viewpoint+Tagaytay',
  },
  {
    id: 'picnic-grove',
    name: 'Tagaytay Picnic Grove',
    displayCategory: 'Nature & Recreation',
    filterCategory: 'Scenic & Nature',
    description:
      'Open highland park with shaded walkways, viewing decks, and breezy green space ideal for unhurried afternoon strolls.',
    image: DESTINATION_IMAGE_ASSETS.picnicGrove.src,
    imageAlt: DESTINATION_IMAGE_ASSETS.picnicGrove.alt,
    imageObjectPosition: DESTINATION_IMAGE_ASSETS.picnicGrove.objectPosition,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tagaytay+Picnic+Grove',
  },
  {
    id: 'peoples-park',
    name: "People's Park in the Sky",
    displayCategory: 'Tourist Attraction',
    filterCategory: 'Tourist Attractions & Culture',
    description:
      'Elevated hilltop viewpoint perched atop Mount Sungay offering wide vistas across Cavite, Batangas, and Taal Lake.',
    image: DESTINATION_IMAGE_ASSETS.peoplesPark.src,
    imageAlt: DESTINATION_IMAGE_ASSETS.peoplesPark.alt,
    imageObjectPosition: DESTINATION_IMAGE_ASSETS.peoplesPark.objectPosition,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Peoples+Park+in+the+Sky+Tagaytay',
  },
];

export interface ExperiencePillar {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
}

export const ACCOMMODATION_EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    id: 'exp-1',
    eyebrow: '01 · Atmosphere',
    title: 'A Quieter Pace Above the Highway',
    description:
      'Tagaytay is at its best when days stay unhurried—morning mist across the ridge, cool highland air, and a calm indoor space to return to.',
  },
  {
    id: 'exp-2',
    eyebrow: '02 · Practicality',
    title: 'Home-Style Rest Without Pretense',
    description:
      'Designed as a private accommodation rather than a crowded hotel, balancing everyday comforts with straightforward self-paced stays.',
  },
  {
    id: 'exp-3',
    eyebrow: '03 · Convenience',
    title: 'Well Placed Along Aguinaldo Highway',
    description:
      'Positioned in SMDC Wind Residences Tower 4, giving guests straightforward access to Tagaytay’s viewpoints, cafés, and dining spots.',
  },
];

export interface FAQItem {
  id: string;
  topic: string;
  question: string;
  answer: string;
  statusNote: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'location',
    topic: 'Location',
    question: 'Where is The Wind Haven located?',
    answer:
      'The Wind Haven is located at SMDC Wind Residences, Tower 4, along Aguinaldo Highway in Tagaytay City, Philippines 4120.',
    statusNote: 'Verified property address',
  },
  {
    id: 'check-in',
    topic: 'Check-In Time',
    question: 'What time is check-in?',
    answer:
      'Supplied listing details indicate standard check-in at 2:00 PM. Because check-in coordination is managed per reservation, please reconfirm exact arrival instructions on BookMyStay before your trip.',
    statusNote: 'Listing information · Reconfirm on BookMyStay prior to arrival',
  },
  {
    id: 'check-out',
    topic: 'Check-Out Time',
    question: 'What time is check-out?',
    answer:
      'Supplied listing details indicate standard check-out at 11:00 AM. Please reconfirm your exact departure schedule directly through your BookMyStay booking confirmation.',
    statusNote: 'Listing information · Reconfirm on BookMyStay prior to arrival',
  },
  {
    id: 'features',
    topic: 'Accommodation Features',
    question: 'What accommodation features are available?',
    answer:
      'Private accommodation features listed for confirmation include Wi-Fi, air-conditioning, a living area, a kitchenette, a dining area, and a private bathroom. Exact inclusions depend on the reserved unit.',
    statusNote: 'Subject to unit-specific confirmation',
  },
  {
    id: 'shared-facilities',
    topic: 'Condominium Facilities',
    question: 'Are condominium facilities shared?',
    answer:
      'Yes. Amenities such as the swimming pool, gardens, sports facilities, parking, elevators, and 24-hour security are shared SMDC Wind Residences facilities managed by building administration and may carry specific hours, rules, or applicable fees.',
    statusNote: 'Shared building amenities · Not privately operated',
  },
  {
    id: 'reservations',
    topic: 'Reservations',
    question: 'How can guests make a reservation?',
    answer:
      'Reservations, live dates, and current unit options are accessed directly through The Wind Haven’s official BookMyStay page via any "Book Your Stay" button on this website.',
    statusNote: 'Direct booking via official BookMyStay portal',
  },
  {
    id: 'more-info',
    topic: 'Property Information',
    question: 'Where can guests find more information about the property?',
    answer:
      'Complete reservation terms, live rates, current availability, and confirmed house instructions are published directly on the official BookMyStay reservation platform.',
    statusNote: 'Authoritative source: BookMyStay listing',
  },
];
