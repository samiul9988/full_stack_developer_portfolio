export interface Skill {
  name: string;
  category: string;
  years: number;
  level: number;
  description: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  stack: string[];
  challenges: string[];
  metrics: { label: string; value: string }[];
  github?: string;
  demo?: string;
  image: string;
  featured: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}
