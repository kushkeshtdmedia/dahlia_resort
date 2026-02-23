export interface CottageAmenity {
  icon: string;
  label: string;
}

export interface CottageHighlight {
  title: string;
  description: string;
}

export interface Cottage {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  category: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  area: string;
  pricePerNight: number;
  amenities: CottageAmenity[];
  highlights: CottageHighlight[];
  location: string;
}

export const cottageCategories = [
  { id: 'all', label: 'ALL', icon: 'building' },
  { id: 'luxury', label: 'LUXURY', icon: 'sparkles' },
  { id: 'family', label: 'FAMILY', icon: 'users' },
  { id: 'romantic', label: 'ROMANTIC', icon: 'heart' },
  { id: 'adventure', label: 'ADVENTURE', icon: 'mountain' },
] as const;

export const cottages: Cottage[] = [
  {
    id: 'naini-lakeside-haven',
    name: 'Naini Lakeside Haven',
    description: 'A serene retreat overlooking the emerald waters of Naini Lake, with panoramic views of the surrounding Kumaon hills and misty mornings.',
    longDescription: 'Perched on a gentle slope above Naini Lake, this exquisite cottage offers an unparalleled lakeside experience in the heart of Nainital. Wake each morning to the sight of mist rising off the emerald waters, with the silhouette of Naina Devi temple in the distance. The interiors blend traditional Kumaoni woodwork with modern comforts, featuring handcrafted oak furniture, plush textiles, and a stone fireplace that fills the room with warmth on cool mountain evenings. Step onto your private balcony to watch the boats glide across the lake as the sun dips behind the hills.',
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    category: 'luxury',
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    area: '1,200 sq ft',
    pricePerNight: 8500,
    amenities: [
      { icon: 'mountain', label: 'Lake View' },
      { icon: 'flame', label: 'Fireplace' },
      { icon: 'wifi', label: 'High-Speed WiFi' },
      { icon: 'car', label: 'Private Parking' },
      { icon: 'coffee', label: 'Complimentary Breakfast' },
      { icon: 'wind', label: 'Room Heater' },
    ],
    highlights: [
      { title: 'Lakefront Location', description: 'Direct views of Naini Lake from your private balcony' },
      { title: 'Kumaoni Craftsmanship', description: 'Authentic oak and deodar wood interiors with local artistry' },
      { title: 'Evening Bonfires', description: 'Private bonfire setup on the cottage terrace under the stars' },
    ],
    location: 'Mallital, Naini Lake Shore',
  },
  {
    id: 'pine-ridge-retreat',
    name: 'Pine Ridge Retreat',
    description: 'Nestled deep within the tall pine forests above Nainital, this cozy mountain retreat offers complete privacy and crisp Himalayan air.',
    longDescription: 'Surrounded by towering Himalayan pines and ancient deodar trees, Pine Ridge Retreat is the quintessential mountain escape. Located on the quieter slopes above Snow View Point, this cottage is enveloped in birdsong and the fresh scent of pine needles. The open-plan living area features exposed stone walls, a crackling wood-burning fireplace, and large windows that frame the dense forest canopy. A wraparound wooden deck invites you to sit with a cup of Kumaoni chai and watch the mist weave through the treetops. The cottage is ideal for nature lovers and those seeking solitude amid the grandeur of the Kumaon hills.',
    image: 'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    category: 'adventure',
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    area: '1,500 sq ft',
    pricePerNight: 9200,
    amenities: [
      { icon: 'trees', label: 'Forest Surroundings' },
      { icon: 'flame', label: 'Wood-Burning Fireplace' },
      { icon: 'wifi', label: 'High-Speed WiFi' },
      { icon: 'utensils', label: 'Fully Equipped Kitchen' },
      { icon: 'car', label: 'Private Parking' },
      { icon: 'binoculars', label: 'Nature Trail Access' },
    ],
    highlights: [
      { title: 'Deep Forest Setting', description: 'Surrounded by pristine pine and deodar forests' },
      { title: 'Wraparound Deck', description: 'A spacious wooden deck overlooking the forest canopy' },
      { title: 'Trekking Routes', description: 'Direct access to Snow View and Tiffin Top trails' },
    ],
    location: 'Above Snow View Point, Nainital',
  },
  {
    id: 'kumaoni-garden-villa',
    name: 'Kumaoni Garden Villa',
    description: 'A charming hillside villa with terraced gardens bursting with rhododendrons, dahlias, and marigolds overlooking the valley.',
    longDescription: 'Set on a beautifully landscaped hillside, the Kumaoni Garden Villa is a floral paradise in the mountains. Terraced gardens cascade down the slope, alive with rhododendrons in spring, vibrant dahlias in summer, and golden marigolds through autumn. The villa itself is a graceful blend of colonial-era architecture and Kumaoni stone craft, with arched windows, high ceilings, and terracotta-tiled floors. Families will love the sprawling lawn, the garden gazebo perfect for evening tea, and the generous kitchen stocked for preparing local mountain delicacies. The valley views from the upper terrace are simply magnificent.',
    image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    category: 'family',
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    area: '2,000 sq ft',
    pricePerNight: 12000,
    amenities: [
      { icon: 'flower2', label: 'Terraced Gardens' },
      { icon: 'utensils', label: 'Fully Equipped Kitchen' },
      { icon: 'wifi', label: 'High-Speed WiFi' },
      { icon: 'car', label: 'Private Parking' },
      { icon: 'baby', label: 'Child-Friendly' },
      { icon: 'wind', label: 'Room Heater' },
    ],
    highlights: [
      { title: 'Terraced Flower Gardens', description: 'Seasonal blooms across multi-level garden terraces' },
      { title: 'Family-Sized Layout', description: 'Four bedrooms with ample space for families and groups' },
      { title: 'Valley Panorama', description: 'Sweeping views of the Kumaon valley from the upper deck' },
    ],
    location: 'Bhowali Road, Nainital',
  },
  {
    id: 'sunrise-peak-cottage',
    name: 'Sunrise Peak Cottage',
    description: 'Perched high on the eastern ridge, wake to golden sunrises painting the Himalayan snow peaks in shades of amber and rose.',
    longDescription: 'Located on the eastern ridge near Tiffin Top, Sunrise Peak Cottage offers what many consider the finest sunrise views in all of Nainital. Every morning, the first light of dawn paints the distant Himalayan snow peaks in breathtaking shades of amber, rose, and gold. The cottage is designed for romance and intimacy -- floor-to-ceiling windows ensure you never miss the spectacle, even from the warmth of your king-size bed. The interiors are modern and elegant, with warm walnut tones, soft ambient lighting, and a deep soaking tub positioned beside the window. As evening falls, the cottage terrace becomes a private observatory for stargazing.',
    image: 'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    category: 'romantic',
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    area: '800 sq ft',
    pricePerNight: 7500,
    amenities: [
      { icon: 'sunrise', label: 'Himalayan Sunrise View' },
      { icon: 'bath', label: 'Soaking Tub' },
      { icon: 'wifi', label: 'High-Speed WiFi' },
      { icon: 'coffee', label: 'Complimentary Breakfast' },
      { icon: 'wine', label: 'Welcome Wine' },
      { icon: 'star', label: 'Stargazing Deck' },
    ],
    highlights: [
      { title: 'Himalayan Sunrise', description: 'Unobstructed eastern views of snow-capped peaks at dawn' },
      { title: 'Romantic Interiors', description: 'Warm walnut finishes, ambient lighting, and a deep soaking tub' },
      { title: 'Stargazing Terrace', description: 'Private terrace perfect for clear mountain night skies' },
    ],
    location: 'Near Tiffin Top, Eastern Ridge',
  },
  {
    id: 'bhimtal-riverside-lodge',
    name: 'Bhimtal Riverside Lodge',
    description: 'A rustic-luxe lodge along a gentle mountain stream near Bhimtal, offering the sound of flowing water and lush green surroundings.',
    longDescription: 'Tucked along the banks of a crystal-clear mountain stream near Bhimtal Lake, this lodge combines rustic mountain charm with thoughtful luxury. The sound of flowing water is your constant companion, whether you are reading on the private stone-paved balcony or dining in the open-air veranda. Built with local Kumaoni stone and reclaimed timber, the lodge features handwoven rugs, copper accents, and a signature river-rock fireplace. The surrounding landscape is lush with ferns, wild orchids, and ancient oak trees. A short walk brings you to Bhimtal Lake for boating, or you can simply stay and let the river serenade you.',
    image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    category: 'adventure',
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    area: '1,100 sq ft',
    pricePerNight: 7800,
    amenities: [
      { icon: 'waves', label: 'Riverside Location' },
      { icon: 'flame', label: 'River-Rock Fireplace' },
      { icon: 'wifi', label: 'High-Speed WiFi' },
      { icon: 'utensils', label: 'Open-Air Veranda Dining' },
      { icon: 'car', label: 'Private Parking' },
      { icon: 'fish', label: 'Fishing Access' },
    ],
    highlights: [
      { title: 'Streamside Setting', description: 'Fall asleep to the sound of a mountain stream right outside' },
      { title: 'Kumaoni Stone Architecture', description: 'Traditional building techniques with local materials' },
      { title: 'Bhimtal Lake Proximity', description: 'A short walk to boating and lakeside activities' },
    ],
    location: 'Near Bhimtal Lake, Nainital District',
  },
  {
    id: 'snow-view-manor',
    name: 'Snow View Manor',
    description: 'An elegant hilltop manor offering sweeping views of the Himalayan snow range from Nanda Devi to Trisul peak.',
    longDescription: 'Elevated on one of Nainital\'s highest ridges near Snow View Point, this stately manor commands an extraordinary 180-degree panorama of the Himalayan snow range. On clear days, the peaks of Nanda Devi, Trisul, and Nanda Kot appear close enough to touch. The manor is a masterpiece of colonial hill station architecture, with high ceilings, polished wood floors, and a wraparound veranda furnished with cane chairs and wool throws. Inside, heritage furnishings sit alongside modern amenities, while the formal dining room sets the stage for memorable meals prepared by a private cook upon request. This is Nainital living at its most distinguished.',
    image: 'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029670/pexels-photo-2029670.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    category: 'luxury',
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    area: '2,200 sq ft',
    pricePerNight: 15000,
    amenities: [
      { icon: 'mountain', label: 'Snow Peak Views' },
      { icon: 'flame', label: 'Fireplace' },
      { icon: 'wifi', label: 'High-Speed WiFi' },
      { icon: 'chef-hat', label: 'Private Cook Available' },
      { icon: 'car', label: 'Private Parking' },
      { icon: 'wind', label: 'Central Heating' },
    ],
    highlights: [
      { title: 'Himalayan Panorama', description: '180-degree views of Nanda Devi, Trisul, and Nanda Kot' },
      { title: 'Colonial Heritage', description: 'Restored hill station manor with period furnishings' },
      { title: 'Private Cook Service', description: 'Authentic Kumaoni cuisine prepared on request' },
    ],
    location: 'Near Snow View Point, Nainital',
  },
  {
    id: 'sattal-orchard-cottage',
    name: 'Sattal Orchard Cottage',
    description: 'Set amidst a lush fruit orchard near the seven interconnected lakes of Sattal, a birdwatcher\'s and nature lover\'s paradise.',
    longDescription: 'Hidden in the verdant folds near Sattal -- the chain of seven pristine lakes -- this orchard cottage is a nature lover\'s dream. Apple, plum, and peach trees surround the property, their blossoms painting the landscape white and pink each spring, and their fruit ripe for the picking in summer. The cottage is built in traditional Kumaoni style with thick stone walls that keep the interiors naturally cool, while large wooden-framed windows fill every room with dappled sunlight and birdsong. Sattal is one of the finest birdwatching destinations in Uttarakhand, and the cottage provides binoculars and a bird guide for guests. Families will love the open lawn, the hammock strung between old oak trees, and the peaceful absence of urban noise.',
    image: 'https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3773570/pexels-photo-3773570.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    category: 'family',
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    area: '1,600 sq ft',
    pricePerNight: 8800,
    amenities: [
      { icon: 'apple', label: 'Fruit Orchard' },
      { icon: 'bird', label: 'Birdwatching Gear' },
      { icon: 'wifi', label: 'High-Speed WiFi' },
      { icon: 'utensils', label: 'Fully Equipped Kitchen' },
      { icon: 'car', label: 'Private Parking' },
      { icon: 'baby', label: 'Child-Friendly' },
    ],
    highlights: [
      { title: 'Seven Lakes of Sattal', description: 'Minutes from the pristine interconnected lakes' },
      { title: 'Fruit Orchard', description: 'Seasonal fruits to pluck straight from the trees' },
      { title: 'Birdwatcher\'s Haven', description: 'Over 500 bird species recorded in the Sattal region' },
    ],
    location: 'Sattal, Nainital District',
  },
  {
    id: 'moonlit-ridge-cabin',
    name: 'Moonlit Ridge Cabin',
    description: 'A romantic wooden cabin perched on a quiet ridge, designed for couples seeking intimacy, starlit skies, and mountain serenity.',
    longDescription: 'Perched on a secluded ridge above the Nainital valley, Moonlit Ridge Cabin is a romantic escape crafted for two. The cabin is entirely clad in warm deodar wood, filling the air with a natural fragrance that deepens with the evening chill. Inside, soft lighting, a plush king bed draped in handwoven Kumaoni wool, and a crackling fireplace create an atmosphere of absolute intimacy. The cabin\'s crowning glory is its private deck with a heated jacuzzi, positioned to face the open valley so you can soak under a canopy of stars that seem impossibly close at this altitude. A candlelit dinner can be arranged on the deck, complete with local wine and traditional Kumaoni cuisine.',
    image: 'https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    category: 'romantic',
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    area: '700 sq ft',
    pricePerNight: 9500,
    amenities: [
      { icon: 'star', label: 'Stargazing Deck' },
      { icon: 'bath', label: 'Private Jacuzzi' },
      { icon: 'flame', label: 'Fireplace' },
      { icon: 'wifi', label: 'High-Speed WiFi' },
      { icon: 'wine', label: 'Welcome Wine & Dinner' },
      { icon: 'music', label: 'Bluetooth Speaker' },
    ],
    highlights: [
      { title: 'Private Heated Jacuzzi', description: 'Soak under the stars on your secluded ridge deck' },
      { title: 'Deodar Wood Cabin', description: 'Natural fragrance and warmth from floor to ceiling' },
      { title: 'Candlelit Dinner', description: 'Private deck dining with Kumaoni cuisine and local wine' },
    ],
    location: 'Secluded Ridge, Above Nainital Valley',
  },
  {
    id: 'deodar-heights-chalet',
    name: 'Deodar Heights Chalet',
    description: 'A grand chalet crafted from aromatic deodar wood, nestled among ancient trees with a stone hearth and panoramic mountain views.',
    longDescription: 'Rising among centuries-old deodar trees on the upper slopes of Nainital, this grand chalet is a testament to mountain craftsmanship. Every beam, panel, and railing is hewn from locally sourced deodar cedar, whose aromatic oils naturally scent the interiors and repel insects. The centerpiece is a magnificent stone hearth in the double-height living room, where families and friends gather on chilly evenings. Upstairs, a loft bedroom offers treetop-level views through a skylight, while the ground floor bedrooms open directly onto a landscaped garden. The chalet sits at an elevation that provides uninterrupted views of both the lake below and the snow peaks beyond, making every season here unforgettable.',
    image: 'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    category: 'luxury',
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    area: '2,400 sq ft',
    pricePerNight: 18000,
    amenities: [
      { icon: 'trees', label: 'Ancient Deodar Forest' },
      { icon: 'flame', label: 'Grand Stone Hearth' },
      { icon: 'wifi', label: 'High-Speed WiFi' },
      { icon: 'utensils', label: 'Fully Equipped Kitchen' },
      { icon: 'car', label: 'Private Parking' },
      { icon: 'mountain', label: 'Dual Lake & Peak Views' },
    ],
    highlights: [
      { title: 'Double-Height Living Room', description: 'Grand stone hearth with soaring deodar-clad ceilings' },
      { title: 'Skylight Loft', description: 'Treetop bedroom with views through a glass skylight' },
      { title: 'Dual Panoramas', description: 'Views of both Naini Lake below and snow peaks above' },
    ],
    location: 'Upper Slopes, Nainital',
  },
  {
    id: 'kilbury-meadow-nest',
    name: 'Kilbury Meadow Nest',
    description: 'A peaceful cottage in a wildflower meadow near the famous Kilbury bird sanctuary, offering wide-open skies and mountain tranquility.',
    longDescription: 'In a sun-drenched meadow near the renowned Kilbury Bird Sanctuary, this cottage sits in splendid isolation amid wildflowers, tall grasses, and the songs of over 200 bird species. The design is warm and inviting -- whitewashed walls, deep-set windows with wooden shutters, and clay-tiled roofs that echo the traditional hill architecture of the Kumaon region. Inside, the open living area flows into a bright kitchen and a reading nook stacked with nature books. The meadow itself is the main attraction: spread a blanket under the open sky, watch eagles soar on thermals, or simply lie back as the clouds drift over the forested ridges. At night, the absence of light pollution reveals a sky blazing with stars.',
    image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3773570/pexels-photo-3773570.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    category: 'family',
    guests: 5,
    bedrooms: 2,
    bathrooms: 2,
    area: '1,300 sq ft',
    pricePerNight: 7200,
    amenities: [
      { icon: 'flower2', label: 'Wildflower Meadow' },
      { icon: 'bird', label: 'Bird Sanctuary Access' },
      { icon: 'wifi', label: 'High-Speed WiFi' },
      { icon: 'book-open', label: 'Nature Library' },
      { icon: 'car', label: 'Private Parking' },
      { icon: 'star', label: 'Stargazing' },
    ],
    highlights: [
      { title: 'Kilbury Bird Sanctuary', description: 'Steps from one of Uttarakhand\'s finest birding sites' },
      { title: 'Open Meadow Living', description: 'Acres of wildflowers and unobstructed mountain views' },
      { title: 'Dark Sky Haven', description: 'Zero light pollution for spectacular stargazing' },
    ],
    location: 'Near Kilbury Bird Sanctuary, Nainital',
  },
];
