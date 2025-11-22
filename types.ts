import { LucideIcon } from 'lucide-react';

export interface SyllabusItem {
  title: string;
  duration: string;
  description: string;
  topics: string[];
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  image: string;
}