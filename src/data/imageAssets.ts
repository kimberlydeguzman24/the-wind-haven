/**
 * CENTRALIZED PHOTOGRAPHY CONFIGURATION — THE WIND HAVEN
 *
 * How to replace temporary illustrative previews with actual property photography:
 * 1. Add the owner-authorized photos inside `src/assets/images/` (or use verified HTTPS URLs).
 * 2. Update the import / `src` below for the matching slot.
 * 3. Change `isActualPropertyPhoto` from `false` to `true` and update `statusLabel` / `caption`.
 *
 * Static ES imports ensure Vite optimizes, bundles, and hashes every image in production builds.
 */

import heroTagaytayImg from '../assets/images/wind_haven_hero_tagaytay_1794590875329.jpg';
import studioSuiteImg from '../assets/images/wind_haven_studio_suite_1794590875157.jpg';
import oneBedroomImg from '../assets/images/wind_haven_one_bedroom_1794590877752.jpg';
import twoBedroomImg from '../assets/images/wind_haven_two_bedroom_1794590877464.jpg';
import kitchenDiningImg from '../assets/images/wind_haven_kitchen_dining_1794590893097.jpg';
import bathroomSpaImg from '../assets/images/wind_haven_bathroom_spa_1794590893277.jpg';
import poolGardenImg from '../assets/images/wind_haven_pool_garden_1794590877967.jpg';
import taalLandscapeImg from '../assets/images/wind_haven_taal_landscape_1794590896257.jpg';

// Verified Tagaytay Destination Guide photography (stored locally for reliable rendering)
import skyRanchImg from '../assets/images/destinations/sky_ranch_tagaytay.jpg';
import museoOrlinaImg from '../assets/images/destinations/museo_orlina.png';
import bagOfBeansImg from '../assets/images/destinations/bag_of_beans_tagaytay.jpg';
import lesliesRestaurantImg from '../assets/images/destinations/leslies_restaurant_tagaytay.jpg';
import balayDakoImg from '../assets/images/destinations/balay_dako_tagaytay.webp';
import starbucksTagaytayImg from '../assets/images/destinations/starbucks_tagaytay.jpg';
import cafeVoiLaImg from '../assets/images/destinations/cafe_voi_la_tagaytay.jpg';
import ayalaSerinImg from '../assets/images/destinations/ayala_malls_serin.png';
import summitRidgeImg from '../assets/images/destinations/summit_ridge_promenade.jpg';
import taalLakeRealImg from '../assets/images/destinations/taal_lake_tagaytay.jpg';
import picnicGroveImg from '../assets/images/destinations/tagaytay_picnic_grove.jpg';
import peoplesParkImg from '../assets/images/destinations/peoples_park_in_the_sky.jpg';

export interface ImageAssetEntry {
  id: string;
  src: string;
  alt: string;
  caption: string;
  /**
   * false = Temporary illustrative hospitality preview (not actual unit photography)
   * true  = Owner-authorized photograph of The Wind Haven / SMDC Wind Residences
   */
  isActualPropertyPhoto: boolean;
  statusLabel: string;
  recommendedAspect: '16:9' | '4:3' | '16:10' | '21:9';
}

export const IMAGE_ASSETS = {
  heroTagaytay: {
    id: 'hero-tagaytay',
    src: heroTagaytayImg,
    alt: 'Illustrative Tagaytay high-rise lounge overlooking misty green ridges and Taal Lake',
    caption: 'Illustrative Tagaytay Concept — Replace with authorized unit or view photo',
    isActualPropertyPhoto: false,
    statusLabel: 'Illustrative Preview (Not Actual Unit)',
    recommendedAspect: '16:9',
  },
  studioSuite: {
    id: 'studio-suite',
    src: studioSuiteImg,
    alt: 'Illustrative preview of a serene minimalist studio suite interior',
    caption: 'Studio Concept Preview — Replace with authorized unit photography',
    isActualPropertyPhoto: false,
    statusLabel: 'Illustrative Preview',
    recommendedAspect: '4:3',
  },
  oneBedroomLiving: {
    id: 'one-bedroom-living',
    src: oneBedroomImg,
    alt: 'Illustrative preview of a bright one-bedroom apartment living and dining space',
    caption: 'One-Bedroom Concept Preview — Replace with authorized unit photography',
    isActualPropertyPhoto: false,
    statusLabel: 'Illustrative Preview',
    recommendedAspect: '4:3',
  },
  twoBedroomSuite: {
    id: 'two-bedroom-suite',
    src: twoBedroomImg,
    alt: 'Illustrative preview of a spacious family living area in a boutique apartment',
    caption: 'Two-Bedroom Concept Preview — Replace with authorized unit photography',
    isActualPropertyPhoto: false,
    statusLabel: 'Illustrative Preview',
    recommendedAspect: '4:3',
  },
  kitchenDining: {
    id: 'kitchen-dining',
    src: kitchenDiningImg,
    alt: 'Illustrative preview of a minimalist kitchenette and oak dining nook',
    caption: 'Kitchenette & Dining Concept — Replace with authorized unit photography',
    isActualPropertyPhoto: false,
    statusLabel: 'Illustrative Preview',
    recommendedAspect: '4:3',
  },
  bathroomSpa: {
    id: 'bathroom-spa',
    src: bathroomSpaImg,
    alt: 'Illustrative preview of a calm stone-tiled bathroom',
    caption: 'Bathroom Concept — Replace with authorized unit photography',
    isActualPropertyPhoto: false,
    statusLabel: 'Illustrative Preview',
    recommendedAspect: '4:3',
  },
  poolGarden: {
    id: 'pool-garden',
    src: poolGardenImg,
    alt: 'Illustrative preview of a resort-style condominium swimming pool and pine garden in Tagaytay',
    caption: 'Shared Grounds Concept — Replace with authorized condominium facility photo',
    isActualPropertyPhoto: false,
    statusLabel: 'Illustrative Preview',
    recommendedAspect: '4:3',
  },
  taalLandscape: {
    id: 'taal-landscape',
    src: taalLandscapeImg,
    alt: 'Illustrative Tagaytay ridge and Taal Lake landscape at golden morning mist',
    caption: 'Tagaytay Scenery Preview — Replace with authorized local photography',
    isActualPropertyPhoto: false,
    statusLabel: 'Illustrative Preview',
    recommendedAspect: '16:9',
  },
} as const satisfies Record<string, ImageAssetEntry>;

export type ImageAssetKey = keyof typeof IMAGE_ASSETS;

export interface DestinationImageEntry {
  src: string;
  alt: string;
  objectPosition?: string;
  sourceAttribution: string;
}

export const DESTINATION_IMAGE_ASSETS = {
  skyRanch: {
    src: skyRanchImg,
    alt: 'Sky Ranch Tagaytay leisure park featuring the Sky Eye Ferris wheel and outdoor rides',
    objectPosition: 'center 40%',
    sourceAttribution: 'Wikimedia Commons — File:Sky Ranch Tagaytay.jpg (CC BY-SA 3.0)',
  },
  museoOrlina: {
    src: museoOrlinaImg,
    alt: 'Museo Orlina contemporary museum facade in Tagaytay with signature exterior sculptural relief',
    objectPosition: 'center 35%',
    sourceAttribution: 'VisitMuseums.ph — Museo Orlina listing exterior photograph',
  },
  bagOfBeans: {
    src: bagOfBeansImg,
    alt: 'Bag of Beans Tagaytay restaurant exterior with illuminated signboard and lush garden trees',
    objectPosition: 'center 45%',
    sourceAttribution: 'Bag of Beans Official Website (bagofbeans.com)',
  },
  lesliesRestaurant: {
    src: lesliesRestaurantImg,
    alt: "Panoramic view of Taal Lake and Taal Volcano seen from Leslie's Restaurant in Tagaytay",
    objectPosition: 'center center',
    sourceAttribution:
      "Wikimedia Commons — File:Taal Volcano from Leslie's Tagaytay 2022-10-02.jpg (CC BY-SA 4.0)",
  },
  balayDako: {
    src: balayDakoImg,
    alt: 'Balay Dako heritage house dining exterior and garden entrance along Tagaytay Ridge',
    objectPosition: 'center 45%',
    sourceAttribution: "Antonio's Group Official Website — Balay Dako (antoniosrestaurant.ph)",
  },
  starbucksTagaytay: {
    src: starbucksTagaytayImg,
    alt: 'Starbucks Reserve Hiraya branch interior in Tagaytay featuring floor-to-ceiling windows facing Taal Lake',
    objectPosition: 'center center',
    sourceAttribution:
      'Wikimedia Commons — File:Starbucks Hiraya Interior, Tagaytay, Cavite, July 2025.jpg (CC BY-SA 4.0)',
  },
  cafeVoiLa: {
    src: cafeVoiLaImg,
    alt: 'Café Voi La Tagaytay garden porch and entrance sign surrounded by hanging flowers and pine foliage',
    objectPosition: 'center 35%',
    sourceAttribution: 'Ohmybuhay Travel Photo Archive — Café Voi La Crosswinds Tagaytay',
  },
  ayalaSerin: {
    src: ayalaSerinImg,
    alt: 'Ayala Malls Serin low-rise commercial building in Tagaytay with wooden slatted upper balconies and open parking',
    objectPosition: 'center 45%',
    sourceAttribution: 'LionUnion Property Archive — Ayala Malls Serin Tagaytay',
  },
  summitRidge: {
    src: summitRidgeImg,
    alt: 'Summit Ridge Tagaytay complex along Aguinaldo Highway with Taal Lake and Volcano in the background',
    objectPosition: 'center 45%',
    sourceAttribution: 'Summit Hotels Official Website — Summit Ridge Tagaytay (summithotels.ph)',
  },
  taalLake: {
    src: taalLakeRealImg,
    alt: 'Scenic overlook of Taal Lake caldera and Taal Volcano framed by green Tagaytay ridge slopes',
    objectPosition: 'center center',
    sourceAttribution:
      'Wikimedia Commons — File:Taal Lake & Volcano from Tagaytay, Jul 2025 (1).jpg (CC BY-SA 4.0)',
  },
  picnicGrove: {
    src: picnicGroveImg,
    alt: 'Tagaytay Picnic Grove open hillside lawns and shaded viewing cottages overlooking Taal Lake',
    objectPosition: 'center 55%',
    sourceAttribution:
      'Wikimedia Commons — File:Tagaytay Picnic Grove April 2022.jpg (CC BY-SA 4.0)',
  },
  peoplesPark: {
    src: peoplesParkImg,
    alt: "Stone terraces, shrine, and elevated ridge walkway at People's Park in the Sky in Tagaytay",
    objectPosition: 'center 45%',
    sourceAttribution:
      "Wikimedia Commons — File:Tagaytay People's Park in the Sky 2Nov2025 02.jpg (CC0)",
  },
} as const satisfies Record<string, DestinationImageEntry>;

