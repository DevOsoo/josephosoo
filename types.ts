export interface Project {
  id: number;
  title: string;
  link: string;
  image: string;
  description: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  university: string;
  years: string;
  honors: string;
}