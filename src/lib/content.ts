import {
  Thermometer,
  Truck,
  ShieldCheck,
  Radio,
  Package,
  Globe2,
  Clock3,
  UserRound,
  Fingerprint,
  Route,
  ClipboardCheck,
  Headset,
} from "lucide-react";

export const site = {
  name: "Orvian Group Logistics",
  shortName: "Orvian Logistics",
  tagline: "Precision logistics · United Kingdom",
  phone: "+44 7903 471116",
  phoneHref: "tel:+447903471116",
  email: "info@orvian.co.uk",
  emailHref: "mailto:info@orvian.co.uk",
  whatsapp: "https://wa.me/447903471116",
  website: "www.orviangroup.co.uk",
  base: "London, United Kingdom",
  values: ["Discretion", "Precision", "Elevation"] as const,
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  {
    href: "/why-orvian",
    label: "Why Orvian",
    children: [
      { href: "/why-orvian#process", label: "Process" },
      { href: "/why-orvian#values", label: "Values" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    id: "01",
    title: "Temperature-Controlled Transport",
    description:
      "State-of-the-art refrigerated units and dual-zone climate fleets for pharmaceuticals, fine foods, and delicate luxury inventory, thermal thresholds held from dispatch to sign-off.",
    icon: Thermometer,
  },
  {
    id: "02",
    title: "Advanced Fleet Management",
    description:
      "Technology-driven routing, live vehicle oversight, and professionally maintained assets that keep every movement accountable and on schedule.",
    icon: Truck,
  },
  {
    id: "03",
    title: "High-Value Asset Handling",
    description:
      "Discreet chain-of-custody protocols for sensitive and high-value cargo, with security standards matching the calibre of what we carry.",
    icon: ShieldCheck,
  },
  {
    id: "04",
    title: "Real-Time Telemetry & Climate Sensors",
    description:
      "Automated climate sensing and continuous telemetry so every transit is monitored, logged, and recoverable, not estimated.",
    icon: Radio,
  },
  {
    id: "05",
    title: "Dedicated Freight Operations",
    description:
      "Flexible freight scheduling for domestic corridors and complex city centres, executed with a single standard of precision.",
    icon: Package,
  },
  {
    id: "06",
    title: "International Corridor Execution",
    description:
      "End-to-end supply chain support across international routes, compliance-aware, discreet, and built around your commercial rhythm.",
    icon: Globe2,
  },
];

export const whyPoints = [
  {
    id: "01",
    title: "Absolute Discretion",
    description:
      "Operational confidentiality is non-negotiable. What moves through Orvian stays with Orvian, client, cargo, and corridor alike.",
    icon: Fingerprint,
  },
  {
    id: "02",
    title: "24 / 7 Availability",
    description:
      "Logistics does not pause at business hours. Midnight handovers receive the same urgency and quality as midday dispatch.",
    icon: Clock3,
  },
  {
    id: "03",
    title: "One Point of Contact",
    description:
      "No switchboards. A dedicated contact owns the brief, the preferences, and every change until final sign-off.",
    icon: UserRound,
  },
  {
    id: "04",
    title: "Cold-Chain Integrity",
    description:
      "Dual-zone fleets, sensor-backed thresholds, and uninterrupted monitoring, temperature control as a discipline, not a feature.",
    icon: Thermometer,
  },
  {
    id: "05",
    title: "Bespoke by Default",
    description:
      "Nothing is off the shelf. Scheduling, routing, and handling are tailored to your freight profile and commercial standard.",
    icon: Route,
  },
];

export const processSteps = [
  {
    id: "01",
    title: "Initial Enquiry",
    description:
      "Reach us by phone, WhatsApp or email. Share cargo type, climate needs, corridors and timing. No queue, no friction.",
    icon: Headset,
  },
  {
    id: "02",
    title: "Needs Assessment",
    description:
      "Your dedicated contact reviews the brief and clarifies compliance, climate requirements and delivery cadence.",
    icon: ClipboardCheck,
  },
  {
    id: "03",
    title: "Seamless Execution",
    description:
      "Fleet, sensors and handlers align. Every arrangement is confirmed, monitored and adjustable via one contact.",
    icon: Truck,
  },
  {
    id: "04",
    title: "Ongoing Support",
    description:
      "Live transit visibility and last-minute changes stay covered through delivery and beyond the booking.",
    icon: Radio,
  },
];

export const stats = [
  { value: "24/7", label: "Always reachable" },
  { value: "1:1", label: "Dedicated contact" },
  { value: "±0°", label: "Climate discipline" },
  { value: "∞", label: "Bespoke by default" },
];
