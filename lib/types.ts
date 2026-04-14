export interface NavItem {
  label: string;
  href: string;
}

export interface ClassType {
  id: string;
  name: string;
  duration: string;
  level: string;
  description: string;
  image: string;
}

export interface Instructor {
  id: string;
  name: string;
  speciality: string;
  bio: string;
  image: string;
}

export interface ScheduleEntry {
  time: string;
  className: string;
  instructor: string;
}

export interface DaySchedule {
  day: string;
  entries: ScheduleEntry[];
}

export interface PricingPlan {
  id: string;
  name: string;
  label: string;
  price: number;
  period: string;
  features: string[];
  featured: boolean;
  badge?: string;
}

export interface WhyItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: boolean;
}

export interface Review {
  id: string;
  name: string;
  detail: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface ContactItem {
  icon: string;
  title: string;
  lines: string[];
}

export interface QuickReply {
  id: string;
  label: string;
  response: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

export interface ChatConfig {
  greeting: string;
  quickReplies: QuickReply[];
  fallbackResponse: string;
  whatsappNumber: string;
}

export interface Stat {
  value: string;
  label: string;
}
