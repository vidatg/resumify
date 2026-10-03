import { Injectable } from '@angular/core';
import {
  PersonalInfo, ToolCategory, WorkExperience, Education, Language, Publication, ResumePageConfig
} from '../models/resume.models';

@Injectable({ providedIn: 'root' })
export class ResumeDataService {

  readonly totalPages = 2;
  readonly footerName = 'Zahra Taghiyar | Resume';

  getPageConfig(page: number): ResumePageConfig {
    return { currentPage: page, totalPages: this.totalPages, footerName: this.footerName };
  }

  readonly personalInfo: PersonalInfo = {
    name: 'Zahra Taghiyar',
    jobTitle: 'PhD Applicant | Information Technology & Management Information Systems',
    heroImage: 'assets/th_vida.png',
    contacts: [
      { id: 'location', label: 'Location', value: 'Gothenburg, Sweden', icon: 'location' },
      { id: 'email', label: 'Email', value: 'vida.taghiyar@gmail.com', href: 'mailto:vida.taghiyar@gmail.com', icon: 'email' },
      { id: 'website', label: 'Portfolio', value: 'Portfolio', href: 'https://vidatg.github.io/', icon: 'website' },
      { id: 'linkedin', label: 'LinkedIn', value: 'LinkedIn', href: 'https://linkedin.com/in/vidataghiyar', icon: 'linkedin' },
      { id: 'github', label: 'GitHub', value: 'GitHub', href: 'https://github.com/vidatg', icon: 'generic' }
    ]
  };

  readonly introText = `Information Technology graduate with an academic background in Management Information Systems and research experience in user behavior in digital environments, e-commerce, e-loyalty, and evaluation of interactive digital services. Master's research examined how characteristics of B2B digital environments relate to perceived value, satisfaction, organizational image, and user loyalty. Current research interests focus on human-centered AI, user and preference modeling, adaptive interactive systems, computational creativity, and AI-supported personalization.`;

  readonly skillsList: string[] = [
    'Human-Centered AI', 'User & Preference Modeling', 'Adaptive Interactive Systems',
    'Computational Creativity', 'Human–AI Interaction', 'User Behavior in Digital Environments',
    'AI-Driven Personalization'
  ];

  readonly toolsList: ToolCategory[] = [
    { key: 'Research', values: 'Literature review; conceptual model development; hypothesis formulation and testing; questionnaire design; survey research; empirical data collection; quantitative analysis; research presentation' },
    { key: 'Analytics & Experimentation', values: 'A/B testing; conversion optimization; user behavior analysis; Google Analytics (GA4); Looker Studio; Google Search Console; Hotjar; Microsoft Clarity; Tableau' },
    { key: 'Digital & Technical', values: 'SEO; technical SEO; information architecture; digital experimentation; API familiarity; B2B SaaS' },
    { key: 'AI Tool Familiarity', values: 'Google AI Studio; Firebase Studio; AI-assisted digital tools' }
  ];

  readonly publication: Publication = {
    citation: 'Taghiyar, Z.',
    title: 'A Review of E-loyalty Models in Business to Business E-commerce Context.',
    details: 'Poster presentation, 11th International Conference on e-Commerce in Developing Countries (ECDC 2017), Isfahan, Iran, 14–15 April 2017.'
  };

  readonly researchExperience: WorkExperience[] = [
    {
      company: 'Foolad Institute of Technology',
      role: "Master's Researcher — IT / Management Information Systems",
      location: 'Iran',
      date: '',
      bullets: [
        'Reviewed and compared e-loyalty models and behavioral and attitudinal conceptualizations of loyalty in B2B electronic marketplaces.',
        'Developed a conceptual model addressing digital service quality, website quality, information quality, communication quality, perceived value, satisfaction, organizational image, and loyalty.',
        'Conducted questionnaire-based empirical research and reliability assessment, followed by statistical evaluation of research hypotheses.'
      ]
    }
  ];

  readonly workExperiences: WorkExperience[] = [
    {
      company: 'Substly',
      role: 'SEO Specialist & B2B Content Manager',
      location: 'Gothenburg, Sweden',
      date: 'Feb 2026–Present',
      bullets: [
        'Develop SEO, SEM, content and positioning strategies for a B2B SaaS environment serving IT providers and Nordic technology markets.',
        'Use performance analytics to evaluate digital behavior and content effectiveness; work on Answer Engine Optimization and AI-mediated information discovery.'
      ]
    },
    {
      company: 'Eiredigital Marketing Agency',
      role: 'Digital Marketing Specialist',
      location: 'Dublin, Ireland, Remote',
      date: 'Aug 2024–Nov 2025',
      bullets: [
        'Worked with data-driven experimentation, SEO, conversion analysis, A/B testing, and digital performance measurement.'
      ]
    },
    {
      company: 'Ai11 Consulting GmbH',
      role: 'Marketing Communications Lead',
      location: 'Vienna, Austria, Remote',
      date: 'Jan 2024–Nov 2025',
      bullets: [
        'Worked in a B2B technology environment on digital strategy, user acquisition, conversion optimization, and experimentation.'
      ]
    },
    {
      company: 'Preply',
      role: 'Marketing Specialist Tutor',
      location: 'Remote',
      date: 'Sep 2023–Present',
      bullets: [
        'Develop and deliver individualized learning material in digital marketing and analytics, adapting instruction to different learning styles.'
      ]
    },
    {
      company: 'Bidygo',
      role: 'Strategic Social Media & Product Marketing Manager',
      location: 'Remote',
      date: 'Sep 2023–Nov 2024',
      bullets: [
        'Worked on product adoption, digital user engagement, content strategy, and analysis of audience response.'
      ]
    },
    {
      company: 'Axioma Digital Marketing Agency / AMarkets',
      role: 'Social Media Marketing Manager',
      location: 'Yerevan, Armenia',
      date: 'Dec 2022–Sep 2023',
      bullets: [
        'Worked with digital audience behavior, engagement analytics, content performance, and communication of complex financial information.'
      ]
    },
    {
      company: 'Chiyakotravel',
      role: 'Product Marketing Manager',
      location: 'Iran',
      date: 'Sep 2017–Nov 2022',
      bullets: [
        'Worked on digital products, customer experience, user behavior, and product development; launched approximately 8–10 travel products annually.'
      ]
    }
  ];

  readonly education: Education[] = [
    {
      institution: 'Foolad Institute of Technology',
      location: 'Fooladshahr, Isfahan Province, Iran',
      degree: 'Master of Science',
      field: 'Information Technology — Management Information Systems',
      date: '2017',
      thesisTitle: 'An Improved Model for Increasing User Loyalty in Business-to-Business Commercial Websites',
      thesisMeta: 'Supervisor: Dr. Naser Nematbakhsh | Advisor: Dr. Bahram Amini',
      details: [
        'Developed an empirical model of e-loyalty integrating website, service, information and communication quality with perceived value, satisfaction, organizational image, and loyalty.',
        'Designed and administered a questionnaire, assessed construct reliability, collected 150 responses, and evaluated the proposed relationships statistically.'
      ]
    }
  ];

  readonly languages: Language[] = [
    { name: 'Persian', proficiency: 'Native' },
    { name: 'English', proficiency: 'Full professional proficiency' },
    { name: 'French', proficiency: 'Limited working proficiency' },
    { name: 'Swedish', proficiency: 'Conversational' }
  ];
}
