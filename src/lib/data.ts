import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  hero: {
    name: 'Pritam Kumar Mani',
    tagline: 'Data Engineer & AI Enthusiast',
    introduction:
      "Motivated and Detail-oriented Data Engineer with experience in data warehouse support, ETL pipelines, and SQL optimization. Skilled in resolving production issues, improving data flow performance, and ensuring system reliability. Strong collaborator with a passion for building scalable and efficient data solutions.",
    profilePicture: '/profile.png',
    socialLinks: {
      github: 'https://github.com/Pritam991',
      linkedin: 'https://www.linkedin.com/in/pkumarmani24/',
      twitter: 'https://x.com/mani_click24',
    },
  },
  skills: {
    technicalSkills: {
      'Languages': ['Python', 'SQL', 'Scala(Beginner)', 'Shell Scripting (Bash)'],
      'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle SQL Developer'],
      'Cloud Services': ['AWS', 'Azure'],
      'Data Engineering Concept/Platforms': ['ETL Pipelines', 'Data Warehousing', 'Databricks', 'PySpark'],
      'Developer Tools': ['Git', 'Docker', 'JIRA', 'Linux', 'Github'],
      'Methodologies': ['Agile', 'Scrum', 'TDD', 'CI/CD']
    },
    softSkills: [
      'Problem Solving',
      'Team Collaboration',
      'Communication',
      'Agile Methodologies',
      'Project Management',
      'Critical Thinking',
    ],
  },
  experience: [
    {
      role: 'Application Developer',
      company: 'IBM',
      duration: 'June 2024 - Present',
      description:
        'Working on Business Intelligence, Data Warehouse Operations for a Global Retail Brand. ',
    },
    {
      role: 'Software Engineer Intern',
      company: 'Maukaa Solutions',
      duration: 'Nov 2022 - May 2023',
      description:
        'Learn new high-demanding technologies like NestJS, AWS, Docker, API Fixing',
    },
  
  ],
  education: [
    {
      degree: 'Master of Computer Applications [MCA]',
      institution: 'Maulana Abul Kalam Azad Universty of Technology',
      years: '2023 - 2025',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Midnapore College Autonomous',
      years: '2020 - 2023',
    },
  ],
  certificates: [
    {
      name: 'AWS Certified Cloud Practitioner',
      issuingOrganization: 'Amazon Web Services',
      date: 'Issued Aug 2025',
      url: 'https://www.credly.com/badges/27b8aac2-227e-4f47-941b-98362e5cb001/public_url',
    },
    {
      name: 'Microsoft Certified: Azure Data Fundamentals [DP 900]',
      issuingOrganization: 'Microsoft',
      date: 'Issued June 2024',
      url: 'https://learn.microsoft.com/api/credentials/share/en-us/PRITAMKUMARMANI-4943/4B2A8FBA72BBB48B?sharingId=FCB4F8E7E4C9893B',
    },
    {
      name: 'IBM Big Data Foundations - Level 1',
      issuingOrganization: 'IBM',
      date: 'Issued May 2025',
      url: 'https://www.credly.com/badges/0de0fc3a-4d4b-4f60-8d6c-2f777d918676',
    },
    {
      name: 'Get Started with Databricks for Data Engineering',
      issuingOrganization: 'Databricks',
      date: 'Issued May 2025',
      url: 'https://drive.google.com/file/d/1uyoi_9IWQJSsrWoYudiuYSDhFtSyt1e0/view',
    },
  ],
  blog: {
    mediumUsername: 'pritammanijoy2001', // IMPORTANT: Replace 'medium' with your actual Medium username
  },
  whatsAppChannel: {
    url: 'https://whatsapp.com/channel/0029Va9D0Ya89inrA3eBFR3O', // IMPORTANT: Replace this with your actual WhatsApp channel link
    title: 'Get Job & Internship Alerts',
    description: 'Join my WhatsApp channel for the latest job and internship opportunities for BCA, BSc, MCA, and B.Tech students.'
  }
};
