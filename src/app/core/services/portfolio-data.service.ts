import { Injectable } from '@angular/core';
import {
  PersonalInfo, ToolCategory, Metric, AchievementItem, Project, ResumePageConfig
} from '../models/resume.models';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  readonly totalPages = 12;
  readonly footerName = 'Vida Taghiyar | Portfolio';

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
    heroImage: 'assets/hero_vida.jpg',
    website: 'https://vidatg.github.io/',
    linkedin: 'https://www.linkedin.com/in/zahrataghiyar/'
  };

  readonly introText = `My journey in digital marketing began in 2017 when an article I wrote about traveling to Kerman, one of Iran's historic cities, ranked #1 on Google and remained there for years. Since then, I have developed my expertise in <strong>SEO, SEM, content strategy, social media, and product marketing</strong> across diverse B2B tech, fintech, and e-commerce brands globally. Throughout my career, I have focused on <strong>aligning go-to-market strategies with business goals</strong>, <strong>translating technical features into customer-centric messaging</strong>, and managing cross-functional initiatives. After moving to Sweden, I adapted my skills to the <strong>Nordic market</strong> through my work at Substly. Now, I am excited to leverage my track record of <strong>multi-channel execution and growth</strong> to help drive engagement for purpose-driven brands.`;

  readonly skillsList: string[] = [
    'Digital & Technical Marketing', 'SEO & Content Strategy', 'GEO (Generative Engine Optimization)',
    'Brand Management', 'Customer Journey Optimization', 'Product Management', 'Data Analysis & Visualization',
    'Agile/Scrum (SDLC)', 'Multi-Channel Campaigns', 'Copywriting & Content Creation',
    'Client & Stakeholder Communication', 'Project Planning & Resource Allocation'
  ];

  readonly toolsList: ToolCategory[] = [
    { key: 'Marketing', values: 'Google Analytics (GA4), Google Data Studio, Looker Studio, Hotjar, Microsoft Clarity, LinkedIn Campaign Manager, Hootsuite, Canva' },
    { key: 'Microsoft Office Suite', values: 'Word, Excel, PowerPoint' },
    { key: 'Google Suite', values: 'Google Drive, Google Docs' },
    { key: 'Agile Project Management Tools', values: 'Jira, Asana, Trello' },
    { key: 'Collaboration Tools', values: 'Confluence, Slack, Bitbucket' },
    { key: 'Data Visualization Tools', values: 'Tableau, Figma' },
    { key: 'CRM Software', values: 'Salesforce, Zoho' }
  ];

  readonly aiToolsList: string[] = [
    'ChatGPT', 'Midjourney', 'Google AI Studio', 'Google Antigravity', 'Claude', 'N8N Low-Code Automation'
  ];

  readonly achievementsText = `I thrive on developing impactful strategies that drive brand excellence and user engagement. My work in creating comprehensive GTM plans and sharing knowledge on platforms like Preply has helped businesses scale their visibility and achieve reseller excellence. Additionally, my product management experience in the travel industry involved designing innovative tour packages, demonstrating my ability to combine market research with client-centric solutions.`;

  readonly metricsList: Metric[] = [
    { label: 'Average ROI', value: '420%' }, { label: 'ROAS Achieved', value: '6.5x' },
    { label: 'Conversion Rate', value: '8.7%' }, { label: 'Revenue Generated', value: '$250K+' }
  ];

  readonly achievementItems: AchievementItem[] = [
    { title: 'Tour and travel packages', description: 'Designed and launched 8–10 custom tour packages (cultural, adventure, and corporate) at ChiyakoTravel, driving a +30% annual revenue growth. Implemented a customer-centric feedback and tailor-made travel request system that achieved a 4.7/5 satisfaction rating, while coordinating operational execution.', link: 'https://drive.google.com/drive/folders/1TMXoTD9Jpqoq3D2Ks90w_ZCx36xUkBj1', image: 'assets/achievement_chiyako.jpg' },
    { title: 'Digital marketing masterclasses', description: 'Conducted high-impact masterclasses as a marketing tutor on Preply. Taught advanced digital marketing, SEO, and social media strategy to international students and business professionals, creating custom curricula to improve their businesses\' online presence.', link: 'https://preply.com/en/tutor/4086930', image: 'assets/achievement_preply.jpg' },
    { title: 'GTM strategy plan', description: 'Structured comprehensive go-to-market plans for Ai11 Consulting GmbH, a Salesforce partner agency. Developed targeted LinkedIn campaigns and content plans to position the agency as a trusted consultancy, while coordinating cross-functional teams to align messaging with key business goals.', link: 'https://drive.google.com/file/d/1i6l6GDxjDMSJAAwExXEUuXgT6gK5MGBU/view', image: 'assets/achievement_ai11.jpg' }
  ];

  readonly projectsList: Project[] = [
    { id: 1, title: 'Substly', subtitle: 'B2B SaaS Growth & LinkedIn Strategy', date: 'February 2026 - June 2026', client: 'Substly (Nordic B2B SaaS Startup)', description: 'Substly helps small and medium-sized businesses manage and optimize their SaaS environments. As a digital marketing intern, I developed a <strong>LinkedIn social selling strategy</strong> that <strong>significantly increased content impressions and B2B engagement</strong> with Nordic IT providers. Additionally, I led <strong>generative engine optimization (GEO) audits</strong> to <strong>elevate the brand\'s visibility</strong> on AI search platforms. This experience deepened my understanding of the Nordic market and demonstrated the power of building trust-based B2B relationships.', boldText: 'I built a LinkedIn social selling strategy to drive content impressions, and executed GEO audits to secure brand visibility on AI search platforms.', skills: ['GEO (Generative Engine Optimization)', 'LinkedIn Strategy', 'Social Selling', 'B2B SaaS', 'Nordic Market Branding'], heroImage: 'assets/project_substly_01.png', gallery: [{ image: 'assets/project_substly_01.png', caption: 'From February to June 2026, optimized the LinkedIn content strategy, which significantly increased content impressions and B2B engagement.' }, { image: 'assets/project_substly_02.png', caption: 'Between early 2026 and June 2026, conducted generative engine optimization (GEO) audits to improve visibility across AI search platforms.' }] },
    { id: 2, title: 'Eiredigital', subtitle: 'Marketing Communications Manager', date: 'August 2024 - November 2025', client: 'Eiredigital Marketing Agency', description: 'At Eiredigital, I managed multi-channel digital marketing campaigns for various agency clients, specializing in SEO, SEM, content strategy, and brand positioning. I served as a strategic bridge between client organizations and internal creative teams, managing stakeholders and planning seasonal and promotional <strong>GTM rollouts</strong>. By optimizing Meta Ads and designing retention-focused email flows, I drove high-conversion results, including a <strong>35% reduction in CPL</strong> and <strong>scaling client monthly revenues</strong>.', boldText: 'I served as a strategic link between clients and cross-functional teams, executing GTM campaigns that reduced cost per lead and drove revenue growth.', skills: ['SEO & SEM', 'Meta Ads', 'GTM Strategy', 'Email Marketing', 'Process Building'], heroImage: 'assets/project_eiredigital_dermocare.jpg', gallery: [{ image: 'assets/project_eiredigital_dermocare_meta-fb-ads.jpg', caption: 'From August 2024 to November 2025, optimized Meta Ads campaigns resulted in a 35% decrease in cost per lead (CPL) and achieved a 3.8x Return on Ad Spend (ROAS).' }, { image: 'assets/project_eiredigital_dermocare_fb-result.jpg', caption: 'Between late 2024 and 2025, scaled weekly bookings for DermoCare by 210%, driving their monthly revenue from €0 to over €15,000.' }, { image: 'assets/project_eiredigital_dermocare_email-campaign.jpg', caption: 'In 2025, developed customer retention and email marketing flows that increased patient lifetime value and repeat bookings by 30%.' }] },
    { id: 3, title: 'Ai11', subtitle: 'Marketing Communications Lead – B2B Tech', date: 'January 2024 - November 2025', client: 'Ai11 Consulting GmbH', description: 'For Ai11 Consulting, a B2B Salesforce partner, I led the organic content strategy and GTM campaigns. I created structured content calendars and thought-leadership articles on LinkedIn that <strong>doubled the engagement rate</strong>, positioning the brand as a trusted authority. Additionally, I implemented targeted SEO tactics that <strong>grew organic traffic by 75%</strong> and worked closely with marketing, sales, and external agencies to ensure message consistency across all touchpoints.', boldText: 'I established the company\'s thought leadership on LinkedIn, developed SEO-driven campaigns that boosted organic leads, and aligned marketing with sales objectives.', skills: ['B2B SEO', 'Content Strategy', 'LinkedIn Editorial Planning', 'Salesforce Marketing', 'Event Lead Gen'], heroImage: 'assets/project_ai11.jpg', gallery: [{ image: 'assets/project_ai11_traffic.jpg', caption: 'From January 2024 to November 2025, executed an SEO strategy that grew website organic traffic by 75% and increased monthly qualified B2B leads by 45%.' }, { image: 'assets/project_ai11_linkedin.jpg', caption: 'Between 2024 and 2025, doubled LinkedIn engagement rate by creating structured thought-leadership and Salesforce case study content.' }, { image: 'assets/achievement_ai11.jpg', caption: 'During this time, launched 3 successful go-to-market campaigns for major service lines (Sales Cloud, Service Cloud, CPQ) and increased brand visibility.', fit: 'cover', position: 'center center' }] },
    { id: 4, title: 'AMarkets', subtitle: 'Social Media Marketing Manager', date: 'December 2022 - September 2023', client: 'AMarkets Fintech', description: 'At AMarkets, a global fintech broker, I developed and executed social media strategies that supported product launches, brand positioning, and customer engagement. I translated complex financial concepts into benefit-focused copy, achieving a <strong>+15% CTR</strong> on product marketing links. I also launched a <strong>webinar-based lead generation program</strong> and collaborated with product, design, and sales teams to maintain consistent messaging across touchpoints.', boldText: 'I developed social media content that simplified financial products, grew the online community, and built brand trust.', skills: ['Social Media Marketing', 'Fintech Copywriting', 'Webinar Management', 'Audience Growth', 'CTR Optimization'], heroImage: 'assets/project_a-markets.jpg', gallery: [{ image: 'assets/project_a-markets_insta.jpg', caption: 'From December 2022 to September 2023, managed global and regional channels, resulting in a +25% follower growth and a +40% average engagement rate.' }, { image: 'assets/project_a-markets_webinars.jpg', caption: 'In early 2023, launched an educational webinar program that simplified complex financial concepts, boosting lead generation by 20%.' }, { image: 'assets/project_a-markets_vida.jpg', caption: 'During 2023, achieved a +15% Click-Through Rate (CTR) on product marketing links by using client-focused benefit copy.', fit: 'cover', position: 'center center' }] },
    { id: 5, title: 'Bidygo', subtitle: 'Strategic Social Media & Product Marketing Manager', date: 'September 2023 - November 2024', client: 'Bidygo Marketplace', description: 'At Bidygo, a negotiation-based online marketplace, I drove brand awareness and engagement by aligning social media campaigns with product launches and business goals. I conducted market research to understand customer insights, translating findings into a content strategy tailored for multiple platforms. By combining influencer marketing partnerships with interactive content, I grew user adoption and <strong>increased overall social engagement by 50%</strong>.', boldText: 'I aligned social media strategies with product launches, utilizing influencer marketing and customer insights to drive platform adoption.', skills: ['Influencer Campaigns', 'Meta Paid Ads', 'Marketplace Marketing', 'User Acquisition', 'Creative Storytelling'], heroImage: 'assets/project_bidygo.jpg', gallery: [{ image: 'assets/project_bidygo_insta.jpg', caption: 'From September 2023 to November 2024, grew social engagement by 50% across Instagram and LinkedIn by translating complex platform features into customer stories.', fit: 'cover', position: 'center top' }, { image: 'assets/project_bidygo_01.jpg', caption: 'In 2024, launched influencer marketing campaigns that led to a 20% increase in user adoption for the price-negotiation marketplace.' }, { image: 'assets/project_bidygo_02.jpg', caption: 'During late 2023 and 2024, doubled content reach by optimizing posting schedule and adopting interactive media formats.' }] },
    { id: 6, title: 'ChiyakoTravel', subtitle: 'Product Marketing Manager', date: 'September 2017 - November 2022', client: 'ChiyakoTravel Agency', description: 'At ChiyakoTravel, I led product marketing and GTM strategies for new travel lines. I conducted competitor and market trend analysis to design and launch <strong>8-10 custom tour packages</strong> targeting groups and corporate clients, driving a <strong>+30% annual revenue growth</strong>. I also coordinated closely with operations to ensure customer satisfaction and implemented a client feedback loop that achieved a <strong>4.7/5 rating</strong>.', boldText: 'I designed and launched custom tour lines and implemented a client feedback system to drive revenue and satisfaction.', skills: ['GTM Strategy', 'Travel Product Design', 'Sales Promotion', 'Operational Coordination', 'Customer Loyalty'], heroImage: 'assets/project_chiyako-travel.jpg', gallery: [{ image: 'assets/achievement_chiyako.jpg', caption: 'From September 2017 to November 2022, designed and launched 8-10 new custom tour packages, which drove a +30% annual revenue growth.', fit: 'cover', position: 'center top' }, { image: 'assets/project_chiyako-travel_tailor-made-form.jpg', caption: 'In 2021-2022, implemented a customer-centric feedback and tailor-made travel request system, achieving a 4.7/5 satisfaction rating.' }] }
  ];

  getProjectsForPage(pageIndex: number): Project[] {
    const start = pageIndex;
    return this.projectsList.slice(start, start + 1);
  }
}
