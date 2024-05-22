import { FAQ, Package } from "./types";

export const tutorialSlides = [
  {
    name: "Mastering the Basics",
    coach: "Westend",
    img: "/img/tutorial1.jpg",
  },
  {
    name: "Track Breakdown",
    coach: "Ky Williams",
    img: "/img/tutorial2.jpg",
  },
  {
    name: "EQ & Compression",
    coach: "Westend",
    img: "/img/tutorial3.jpg",
  },
  {
    name: "Arrangement & Workflow",
    coach: "Westend",
    img: "/img/tutorial4.jpg",
  },
];

export const packages: Package[] = [
  {
    tier: "basic",
    price: 39,
    color: "softBlue",
    description:
      "Ideal for getting started or expanding your network. Access community support, weekly tutorials, and enjoy perks like discounts and regular track feedback.",
    features: [
      {
        title: "Kick & Bass Community",
        tiers: ["basic", "standard", "premium"],
      },
      {
        title: "Tutorial Library",
        tiers: ["basic", "standard", "premium"],
      },
      {
        title: "Community Discounts",
        tiers: ["basic", "standard", "premium"],
      },
      {
        title: "Coach Livestreams",
        tiers: ["basic", "standard", "premium"],
      },
      {
        title: "Weekly Giveaways",
        tiers: ["basic", "standard", "premium"],
      },
    ],
  },
  {
    tier: "standard",
    price: 65,
    color: "hardLime",
    description:
      "Builds on Basic with twice the track feedback and additional opportunities for growth. Great for producers ready to enhance their skills.",
    features: [
      {
        title: "Kick & Bass Community",
        tiers: ["standard", "premium"],
      },
      {
        title: "Tutorial Library",
        tiers: ["standard", "premium"],
      },
      {
        title: "Community Discounts",
        tiers: ["standard", "premium"],
      },
      {
        title: "Coach Livestreams",
        tiers: ["standard", "premium"],
      },
      {
        title: "Weekly Giveaways",
        tiers: ["standard", "premium"],
      },
      {
        title: "1-on-1 Coaching",
        tiers: ["standard", "premium"],
      },
      {
        title: "Track Feedback",
        tiers: ["standard", "premium"],
      },
    ],
  },
  {
    tier: "premium",
    price: 99,
    color: "softPink",
    description:
      "The full experience with five times the track feedback, exclusive sessions with guest coaches, and more. Designed for those aiming to maximize their potential.",
    features: [
      {
        title: "Kick & Bass Community",
        tiers: ["premium"],
      },
      {
        title: "Tutorial Library",
        tiers: ["premium"],
      },
    ],
  },
];

export const faqs: FAQ[] = [
  {
    question: "What genres of music do you help with?",
    answer:
      "We help with tech house, electro house, and progressive house, and techno.",
  },
  {
    question: "What genres of music do you help with?",
    answer:
      "We help with tech house, electro house, and progressive house, and techno.",
  },
  {
    question: "What genres of music do you help with?",
    answer:
      "We help with tech house, electro house, and progressive house, and techno.",
  },
  {
    question: "What genres of music do you help with?",
    answer:
      "We help with tech house, electro house, and progressive house, and techno.",
  },
  {
    question: "What genres of music do you help with?",
    answer:
      "We help with tech house, electro house, and progressive house, and techno.",
  },
  {
    question: "What genres of music do you help with?",
    answer:
      "We help with tech house, electro house, and progressive house, and techno.",
  },
];
