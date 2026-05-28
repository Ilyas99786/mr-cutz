/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Stat, Feature, Testimonial, WorkingHour } from "./types";

// Import images so the bundler (Vite) resolves them reliably at build/runtime
import heroBg from "./assets/images/user_hero_bg_1779897726785.png";
import barberChair from "./assets/images/barber_chair_lounge_1779896734317.png";
import tools from "./assets/images/luxury_barber_tools_1779896749724.png";
import closeup from "./assets/images/barber_style_closeup_1779896769493.png";
import interior from "./assets/images/barber_interior_lounge_1779896791141.png";

export const BRAND_NAME = "MR. CUTZ";
export const PHONE_NUMBER = "+91 98279 76556";
export const PHONE_NUMBER_URL = "tel:+919827976556";
export const WHATSAPP_URL = "https://wa.me/919827976556?text=Hello%20MR.%20CUTZ,%20I'd%20like%20to%20book%20a%20grooming%20session.";
export const PHYSICAL_ADDRESS = "Kadrabad Mahadev, Salt Rd, Mahadev, Kadrabad, Balasore, Kesi, Odisha 756002";
export const GOOGLE_MAPS_LINK = "https://www.google.com/maps?q=Golei+Rd,+Balasore,+Odisha+756001";

// Image references
export const IMAGES = {
  heroBg,
  barberChair,
  tools,
  closeup,
  interior,
};

export const SERVICES: Service[] = [
  {
    id: "signature-haircut",
    title: "Signature Haircut",
    description: "Standard luxury scissor & clipper cut, standard hot towel neck compress, invigorating wash, and blowout style matching.",
    price: "₹500",
    duration: "45 Mins",
    image: IMAGES.closeup
  },
  {
    id: "beard-sculpting",
    title: "Beard Sculpting",
    description: "Precision razor cheek outlining, deep beard trim & taper, and organic warm sandalwood oil beard massage.",
    price: "₹300",
    duration: "30 Mins",
    image: IMAGES.heroBg
  },
  {
    id: "royal-shave",
    title: "Royal Shave",
    description: "Traditional straight razor hot shave, steam facial preparation, double lather, and a cooling aftershave mist.",
    price: "₹450",
    duration: "40 Mins",
    image: IMAGES.tools
  },
  {
    id: "hair-styling",
    title: "Hair Styling",
    description: "Premium pomade texturizing blow-dry, premium wax finish, detailed consultation, and basic hair trim touch-up.",
    price: "₹250",
    duration: "20 Mins",
    image: IMAGES.interior
  },
  {
    id: "facial-treatment",
    title: "Facial Treatment",
    description: "Deep charcoal mask peeling, soothing high-pressure steam, natural cooling face compress, and revitalized jade roller session.",
    price: "₹600",
    duration: "45 Mins",
    image: IMAGES.barberChair
  },
  {
    id: "premium-grooming",
    title: "Premium Grooming",
    description: "The complete luxury lounge experience: Custom Signature Haircut, Beard Sculpting, charcoal facial treatment, and premium stress-relief shoulder massage.",
    price: "₹1,500",
    duration: "100 Mins",
    image: IMAGES.interior
  }
];

export const STATS: Stat[] = [
  {
    id: "happy-clients",
    value: "700+",
    label: "LOYAL CLIENTS"
  },
  {
    id: "rating",
    value: "5.0",
    label: "GOOGLE RATING"
  }
];

export const FEATURES: Feature[] = [
  {
    id: "hygiene",
    iconName: "ShieldCheck",
    title: "Hygienic Environment",
    description: "Medical-grade sterilization for all blades and shearing tools, keeping your grooming safe and pristine."
  },
  {
    id: "barbers",
    iconName: "Scissors",
    title: "Professional Barbers",
    description: "Master level hand techniques designed by Pintu and executed by our highly-trained elite team."
  },
  {
    id: "trends",
    iconName: "Flame",
    title: "Trendy Hairstyles",
    description: "Constantly at the absolute forefront of global grooming style guides, fade profiles, and texturizing."
  },
  {
    id: "equipment",
    iconName: "Gem",
    title: "Premium Equipment",
    description: "Utilizing only the finest global barbering brands, imported straight razors, and luxury organic products."
  },
  {
    id: "comfort",
    iconName: "Armchair",
    title: "Comfortable Experience",
    description: "Thrive in our ultra-luxurious, fully air-conditioned, high-comfort acoustic lounge retreat."
  },
  {
    id: "satisfaction",
    iconName: "Sparkles",
    title: "Customer Satisfaction",
    description: "An uncompromised 5.0 Google review profile built upon precision, active listening, and exquisite client care."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    text: "The best salon experience in Balasore. Pintu's attention to detail is unmatched. I've been coming here for 2 years and every club is a ritual of luxury.",
    author: "Sheikh Ilyas Quadri",
    role: "PREMIUM MEMBER",
    rating: 5
  },
  {
    id: "testimonial-2",
    text: "Luxurious atmosphere and highly professional staff. They really know their craft. The hot towel shave is a sensory journey that must be experienced.",
    author: "DEV ANAND",
    role: "LOCAL RESIDENT",
    rating: 5
  }
];

export const WORKING_HOURS: WorkingHour[] = [
  {
    id: "morning",
    label: "MORNING RITUALS",
    timeRange: "9:00 AM - 2:00 PM"
  },
  {
    id: "evening",
    label: "EVENING EXCELLENCE",
    timeRange: "4:00 PM - 10:00 PM"
  },
  {
    id: "sunday",
    label: "SUNDAY",
    timeRange: "CLOSED",
    isClosed: true
  }
];
