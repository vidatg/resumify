export interface PersonalInfo {
  name: string;
  jobTitle: string;
  phone: string;
  email: string;
  location: string;
  availability: string;
  heroImage: string;
  website: string;
  linkedin: string;
}

export interface ToolCategory {
  key: string;
  values: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface AchievementItem {
  title: string;
  description: string;
  link: string;
  image: string;
}

export interface ProjectGalleryItem {
  image: string;
  caption: string;
  /** 'contain' shows the full image; 'cover' fills the container (may crop). Default: 'contain' */
  fit?: 'cover' | 'contain';
  /** CSS object-position value when fit is 'cover', e.g. 'center top', '20% 50%'. Default: 'center center' */
  position?: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  client: string;
  description: string;
  boldText: string;
  skills: string[];
  heroImage: string;
  gallery: ProjectGalleryItem[];
}

export interface ResumePageConfig {
  currentPage: number;
  totalPages: number;
  footerName: string;
}

/** A condensed work-experience entry for the ATS resume */
export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  date: string;
  bullets: string[];
}

/** Education entry */
export interface Education {
  institution: string;
  location: string;
  degree: string;
  field: string;
  date: string;
}

/** Language proficiency */
export interface Language {
  name: string;
  proficiency: string;
}
