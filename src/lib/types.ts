export interface HeroData {
  name: string;
  tagline: string;
  introduction: string;
  profilePicture: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface SkillsData {
  technicalSkills: Record<string, string[]>;
  softSkills: string[];
}

export interface ExperienceData {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface EducationData {
  degree: string;
  institution: string;
  years: string;
}

export interface CertificateData {
  name: string;
  issuingOrganization: string;
  date: string;
  url: string;
}

export interface BlogData {
    mediumUsername: string;
}

export interface WhatsAppChannelData {
  url: string;
  title: string;
  description: string;
}

export interface MediumPost {
    title: string;
    link: string;
    guid: string;
    pubDate: string;
    thumbnail: string;
    categories: string[];
}

export interface PortfolioData {
  hero: HeroData;
  skills: SkillsData;
  experience: ExperienceData[];
  education: EducationData[];
  certificates: CertificateData[];
  blog?: BlogData;
  whatsAppChannel?: WhatsAppChannelData;
}
