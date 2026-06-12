import { Injectable } from '@angular/core';
import {
  PersonalInfo, ToolCategory, WorkExperience, Education, Language, ResumePageConfig
} from '../models/resume.models';

@Injectable({ providedIn: 'root' })
export class ResumeDataService {

  readonly totalPages = 2;
  readonly footerName = 'Vida Taghiyar | Resume';

  getPageConfig(page: number): ResumePageConfig {
    return { currentPage: page, totalPages: this.totalPages, footerName: this.footerName };
  }

  readonly personalInfo: PersonalInfo = {
    name: 'Vida Taghiyar',
    jobTitle: 'Digital Marketing Specialist and Product Manager',
    phone: '+46 73 852 98 33',
    email: 'vida.taghiyar@gmail.com',
    location: 'Gothenburg, Sweden',
    availability: 'Available immediately',
    heroImage: 'assets/th_vida.png',
    website: 'https://vidatg.github.io/',
    linkedin: 'https://www.linkedin.com/in/zahrataghiyar/'
  };

  readonly introText = `<strong>Digital Marketing Specialist and Product Manager</strong> with 8+ years of experience specializing in <strong>GTM strategy, product launches, and cross-functional collaboration</strong>. Proven track record of driving <strong>B2B growth and revenue</strong> across SaaS, fintech, and digital agency settings — achieving up to <strong>420% average ROI and 6.5x ROAS</strong>. Skilled in crafting clear, <strong>customer-focused messaging</strong>, leading multi-channel campaigns, and optimizing brand visibility via <strong>SEO and generative engine optimization (GEO)</strong>.`;

  readonly skillsList: string[] = [
    'Digital & Technical Marketing', 'SEO & Content Strategy', 'GEO (Generative Engine Optimization)',
    'Brand Management', 'Customer Journey Optimization', 'Product Management', 'Data Analysis & Visualization',
    'Agile/Scrum (SDLC)', 'Multi-Channel Campaigns', 'Copywriting & Content Creation',
    'Client & Stakeholder Communication', 'Project Planning & Resource Allocation'
  ];

  readonly toolsList: ToolCategory[] = [
    { key: 'Marketing', values: 'Google Analytics (GA4), Looker Studio, Hotjar, Microsoft Clarity, LinkedIn Campaign Manager, Hootsuite, Canva' },
    { key: 'Office & Productivity', values: 'Microsoft Office Suite, Google Workspace' },
    { key: 'Project Management', values: 'Jira, Asana, Trello, Confluence' },
    { key: 'Data & Design', values: 'Tableau, Figma' },
    { key: 'CRM', values: 'Salesforce, Zoho' }
  ];

  readonly aiToolsList: string[] = [
    'ChatGPT', 'Midjourney', 'Google AI Studio', 'Google Antigravity', 'Claude', 'N8N Low-Code Automation'
  ];

  readonly workExperiences: WorkExperience[] = [
    {
      company: 'Substly',
      role: 'Digital Marketing Intern',
      location: 'Gothenburg, Sweden',
      date: 'Feb 2026 – Jun 2026',
      bullets: [
        '<strong>Social Selling & LinkedIn Strategy:</strong> Developed and executed LinkedIn social selling strategy, significantly increasing content impressions and B2B engagement with Nordic IT providers.',
        '<strong>Generative Engine Optimization (GEO):</strong> Conducted GEO audits to improve brand visibility and organic search positioning across AI search platforms.'
      ]
    },
    {
      company: 'Eiredigital',
      role: 'Marketing Communications Manager',
      location: 'Dublin, Ireland. Remote',
      date: 'Aug 2024 – Nov 2025',
      bullets: [
        '<strong>Campaign & GTM Execution:</strong> Planned and led seasonal, promotional, and product launch GTM rollouts; optimized Meta Ads campaigns to achieve a <strong>35% reduction in CPL</strong> and <strong>3.8x ROAS</strong>.',
        '<strong>Content & Messaging Leadership:</strong> Directed content development and crafted benefit-driven messaging that scaled weekly bookings for a healthcare client by <strong>210%</strong> (growing monthly revenue from <strong>€0 to €15,000+</strong>).',
        '<strong>Client & Project Strategy:</strong> Served as a strategic bridge between clients and cross-functional teams, managing multi-stakeholder initiatives to ensure alignment across all project deliverables.'
      ]
    },
    {
      company: 'Ai11 Consulting GmbH',
      role: 'Marketing Communications Lead – B2B Tech',
      location: 'Vienna, Austria. Remote',
      date: 'Jan 2024 – Nov 2025',
      bullets: [
        '<strong>SEO & Lead Generation:</strong> Implemented SEO tactics to boost inbound visibility, growing website organic traffic by <strong>75%</strong> and increasing monthly qualified B2B leads by <strong>45%</strong>.',
        '<strong>Content & Brand Strategy:</strong> Developed LinkedIn and content plans to position Ai11 as a trusted B2B Salesforce consultancy, doubling LinkedIn engagement rate through structured thought-leadership and case study content.',
        '<strong>GTM & Campaign Execution:</strong> Led go-to-market strategies and launched <strong>3 successful campaigns</strong> for major service lines (Sales Cloud, Service Cloud, CPQ).'
      ]
    },
    {
      company: 'AMarkets',
      role: 'Social Media Marketing Manager',
      location: 'Yerevan, Armenia. Remote',
      date: 'Dec 2022 – Sep 2023',
      bullets: [
        '<strong>Social Media Strategy:</strong> Developed and executed social media strategies that supported product launches, brand positioning, and community growth for fintech brand (+25% follower growth, +40% engagement rate).',
        '<strong>Messaging & Campaigns:</strong> Translated complex product features into clear, benefit-focused messaging, achieving <strong>+15% CTR</strong> on product marketing links.',
        '<strong>Marketing Campaigns:</strong> Created compelling content campaigns and launched educational webinar programs, simplifying complex financial concepts and <strong>boosting lead generation by 20%</strong>.'
      ]
    },
    {
      company: 'Bidygo',
      role: 'Strategic Social Media & Product Marketing Manager',
      location: 'Los Angeles, California, US. Remote',
      date: 'Sep 2023 – Nov 2024',
      bullets: [
        '<strong>Social Media Strategy:</strong> Grew social engagement by <strong>50%</strong> across Instagram and LinkedIn by aligning social media efforts with product launches and business objectives.',
        '<strong>Content & Influencer Campaigns:</strong> Delivered consistent, high-impact campaign content and influencer marketing partnerships, resulting in a <strong>20% increase in user adoption</strong>.',
        '<strong>Cross-Functional Collaboration:</strong> Partnered with product and design teams to shape product roadmaps, conduct market research, and execute GTM strategies based on customer insights.'
      ]
    },
    {
      company: 'ChiyakoTravel',
      role: 'Product Marketing Manager',
      location: 'Iran. Hybrid',
      date: 'Sep 2017 – Nov 2022',
      bullets: [
        '<strong>Product Development:</strong> Designed, developed, and launched <strong>8–10 custom tour packages</strong> (cultural, adventure, corporate), driving <strong>+30% annual revenue growth</strong>.',
        '<strong>Customer-Centric Improvements:</strong> Reviewed customer feedback and implemented a tailor-made travel request system, achieving a <strong>4.7/5 satisfaction rating</strong>.'
      ]
    }
  ];

  readonly education: Education[] = [
    {
      institution: 'FOOLAD Institute of Technology',
      location: 'Fooladshahr, Isfahan Province, Iran',
      degree: 'Master of Science',
      field: 'Information Technology',
      date: '02/2017'
    }
  ];

  readonly languages: Language[] = [
    { name: 'Persian', proficiency: 'Native proficiency' },
    { name: 'English', proficiency: 'Full professional proficiency' },
    { name: 'French', proficiency: 'Limited working proficiency' }
  ];

  readonly achievementBullets: string[] = [
    '<strong>Preply Digital Marketing Tutoring:</strong> Conducted high-impact masterclasses and taught advanced digital marketing, SEO, and social media strategy to international professionals, designing custom curricula that helped students improve their businesses\' online presence.',
    '<strong>Salesforce Partner GTM Strategy:</strong> Formulated a comprehensive go-to-market plan for Ai11 Consulting GmbH, developing targeted LinkedIn campaigns to position the agency as a trusted B2B Salesforce partner and achieve reseller excellence.',
    '<strong>Tour and Travel Packages:</strong> Designed and launched a portfolio of 8–10 custom tour packages (cultural, adventure, corporate) at ChiyakoTravel, driving a <strong>+30% annual revenue growth</strong> and a <strong>4.7/5 customer satisfaction rating</strong>.'
  ];
}
