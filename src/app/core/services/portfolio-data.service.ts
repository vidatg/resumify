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
    jobTitle: 'Event & Experience Manager',
    heroImage: 'assets/hero_vida.jpg',
    contacts: [
      { id: 'phone', label: 'Direct Phone', value: '+46 73 852 98 33', href: 'tel:+46738529833', icon: 'phone' },
      { id: 'email', label: 'Email Address', value: 'vida.taghiyar@gmail.com', href: 'mailto:vida.taghiyar@gmail.com', icon: 'email' },
      { id: 'location', label: 'Location', value: 'Gothenburg, Sweden', icon: 'location' },
      { id: 'linkedin', label: 'LinkedIn', value: 'in/vidataghiyar', href: 'https://www.linkedin.com/in/vidataghiyar/', icon: 'linkedin' },
      { id: 'website', label: 'Portfolio / Website', value: 'vidatg.github.io', href: 'https://vidatg.github.io/', icon: 'website' },
      { id: 'availability', label: 'Standard Availability', value: 'Available immediately', icon: 'availability' }
    ]
  };

  readonly introText = `For more than five years at ChiyakoTravel I ran <strong>8-10 Iran tours a year</strong> for travelers from around the world. I arranged hotels, transfers, tour leaders, meals, and city tours, and I stayed with guests through customer support, interviews, branding, and the relationship after the trip. At AMarkets, based in Armenia, I was the <strong>bridge between partners and the marketing team</strong>. I hosted <strong>more than 30 partners</strong> and planned their Turkey program from Armenia: hotels, seminars, workshops, boat tours, and the materials around them. I am based in Gothenburg and authorized to work in Sweden.`;

  readonly skillsList: string[] = [
    'Tour & Event Operations', 'Hotel, Transfer & Tour Leader Booking',
    'Guest Care & Customer Support', 'Partnership Programs',
    'Seminars, Workshops & Hosting', 'Event Materials & Branding',
    'Team Communication', 'Leadership', 'Critical Thinking', 'Supplier Coordination'
  ];

  readonly toolsList: ToolCategory[] = [
    { key: 'Planning', values: 'Asana, Trello, Jira, Excel' },
    { key: 'Collaboration', values: 'Slack, Confluence, Google Workspace, Microsoft Office' },
    { key: 'Follow-Up', values: 'Salesforce, Zoho, Google Analytics (GA4), Looker Studio' },
    { key: 'Creative', values: 'Canva, PowerPoint, Figma' }
  ];

  readonly aiToolsList: string[] = [
    'ChatGPT', 'Midjourney', 'Google AI Studio', 'Google Antigravity', 'Claude', 'n8n'
  ];

  readonly achievementsText = `The two pieces of work I want a reader to see first are the Iran tours I ran for more than five years, and the AMarkets partnership program, where I hosted more than 30 partners and planned the Turkey trip from Armenia.`;

  readonly metricsList: Metric[] = [
    { label: 'Partners Hosted', value: '30+' },
    { label: 'Tours a Year', value: '8-10' },
    { label: 'Years on Tours', value: '5+' },
    { label: 'Years Delivering', value: '8+' }
  ];

  readonly achievementItems: AchievementItem[] = [
    { title: 'Running a partnership program', description: 'At AMarkets in Armenia I was the bridge between partners and the marketing team. I hosted more than 30 partners and planned the Turkey trip from Armenia: hotels, seminars, workshops, boat tours, brochures, banners, and a 30-minute presentation on loyalty and branding.', link: 'https://vidatg.github.io/#project/3', image: 'assets/project_a-markets_vida.jpg' },
    { title: 'Iran tours for travelers', description: 'For more than five years at ChiyakoTravel I ran 8-10 Iran tours a year for travelers from around the world. Each tour covered hotel bookings, transfers, tour leaders, meals, city tours, customer support, interviews, branding materials, and the relationship with guests.', link: 'https://drive.google.com/drive/folders/1TMXoTD9Jpqoq3D2Ks90w_ZCx36xUkBj1', image: 'assets/achievement_chiyako.jpg' },
    { title: 'Team communication', description: 'At Ai11 I kept marketing, sales, and operations on one message. That covered three service launches and the communication around industry events, so the internal team and outside partners were working from the same plan.', link: 'https://drive.google.com/file/d/1i6l6GDxjDMSJAAwExXEUuXgT6gK5MGBU/view', image: 'assets/achievement_ai11.jpg' }
  ];

  readonly projectsList: Project[] = [
    {
      id: 1,
      title: 'ChiyakoTravel',
      subtitle: 'Iran Tours for Travelers',
      date: 'September 2017 - November 2022',
      client: 'ChiyakoTravel Agency',
      description: 'For more than five years I ran <strong>8-10 Iran tours a year</strong> for travelers from around the world. I arranged what each group needed: <strong>hotel bookings, transfers, tour leaders, meals, and city tours</strong>. I also handled <strong>customer support, interviews, branding materials, social content</strong>, and the relationship with guests after the trip.',
      boldText: 'I ran the practical side of each Iran tour, from hotels and transfers to the guest relationship after the trip.',
      skills: ['Hotel Bookings', 'Transfers & Tour Leaders', 'Meals & City Tours', 'Customer Support', 'Branding Materials'],
      heroImage: 'assets/project_chiyako-travel.jpg',
      gallery: [
        { image: 'assets/achievement_chiyako.jpg', caption: 'From September 2017 to November 2022, ran 8-10 Iran tours a year, including hotels, meals, city tours, and tour leaders.', fit: 'cover', position: 'center top' },
        { image: 'assets/project_chiyako-travel_tailor-made-form.jpg', caption: 'Handled guest requests, interviews, and customer support, and kept the relationship going after the tour.' }
      ]
    },
    {
      id: 2,
      title: 'AMarkets',
      subtitle: 'Partnership Program, Planned from Armenia',
      date: 'December 2022 - September 2023',
      client: 'AMarkets, Yerevan',
      description: 'AMarkets is based in Armenia. I was the <strong>bridge between partners and the marketing team</strong> and hosted <strong>more than 30 partners</strong>. I planned the program from Armenia, including the trip in Turkey: <strong>hotels, seminars, workshops, boat tours</strong>, and other activities to train partners and host them. I prepared brochures, banners, and seminar materials, and gave a <strong>30-minute presentation on loyalty and branding</strong>.',
      boldText: 'I hosted the partnership program and planned the Turkey trip from Armenia, including hotels, training, and hosting.',
      skills: ['Partnership Program', 'Hotel & Program Planning', 'Seminars & Workshops', 'Boat Tours & Hosting', 'Partner Communication'],
      heroImage: 'assets/project_a-markets_vida.jpg',
      gallery: [
        { image: 'assets/project_a-markets_vida.jpg', caption: 'Gave a 30-minute presentation on loyalty and branding for partners in the partnership program.', fit: 'cover', position: 'center center' },
        { image: 'assets/project_a-markets_webinars.jpg', caption: 'Prepared seminar and workshop materials used to train partners on the program.' },
        { image: 'assets/project_a-markets_insta.jpg', caption: 'Produced brochures, banners, and branding for the partnership program.' }
      ]
    },
    {
      id: 3,
      title: 'Eiredigital',
      subtitle: 'Client Communication',
      date: 'August 2024 - November 2025',
      client: 'Eiredigital Marketing Agency',
      description: 'At Eiredigital I was the person between the client and the team doing the work. I helped decide how a project should be planned, who owned the next step, and how the client heard about progress.',
      boldText: 'I was the client\'s main contact and helped the team decide what to do next.',
      skills: ['Client Communication', 'Team Leadership', 'Critical Thinking', 'Project Planning', 'Clear Updates'],
      heroImage: 'assets/project_eiredigital_dermocare.jpg',
      gallery: [
        { image: 'assets/project_eiredigital_dermocare_meta-fb-ads.jpg', caption: 'From August 2024 to November 2025, I was the person clients spoke to, and I carried their brief back to the team.' },
        { image: 'assets/project_eiredigital_dermocare_fb-result.jpg', caption: 'Helped decide which part of a client project mattered first and who owned the next step.' },
        { image: 'assets/project_eiredigital_dermocare_email-campaign.jpg', caption: 'Kept clients updated on progress in plain language.' }
      ]
    },
    {
      id: 4,
      title: 'Ai11',
      subtitle: 'Communication Across Teams',
      date: 'January 2024 - November 2025',
      client: 'Ai11 Consulting GmbH',
      description: 'At Ai11 I kept marketing, sales, and operations on one message, including communication around industry events. I led planning for <strong>three service launches</strong> and made sure the internal team and outside partners were working from the same plan.',
      boldText: 'I kept three launches and the event communication on one plan for the whole team.',
      skills: ['Team Communication', 'Leadership', 'Industry Events', 'Shared Plans', 'Critical Thinking'],
      heroImage: 'assets/project_ai11.jpg',
      gallery: [
        { image: 'assets/achievement_ai11.jpg', caption: 'From January 2024 to November 2025, led planning for three service launches with marketing, sales, and outside partners.', fit: 'cover', position: 'center center' },
        { image: 'assets/project_ai11_traffic.jpg', caption: 'Kept the internal team and partners on one plan, including communication around industry events.' },
        { image: 'assets/project_ai11_linkedin.jpg', caption: 'Made sure marketing, sales, and operations were saying the same thing.' }
      ]
    },
    {
      id: 5,
      title: 'Bidygo',
      subtitle: 'Partners, Team, and Customers',
      date: 'September 2023 - November 2024',
      client: 'Bidygo Marketplace',
      description: 'At Bidygo I worked with product, design, and outside partners so each launch had one story and one timeline. I used what customers told us to decide what to communicate and what to change.',
      boldText: 'I kept partners and the internal team on one launch plan, and used customer feedback to decide what to say.',
      skills: ['Partner Communication', 'Team Coordination', 'Customer Listening', 'Launch Planning', 'Critical Thinking'],
      heroImage: 'assets/project_bidygo.jpg',
      gallery: [
        { image: 'assets/project_bidygo_insta.jpg', caption: 'From September 2023 to November 2024, worked with product and design so the story customers saw was the same one the team had agreed.', fit: 'cover', position: 'center top' },
        { image: 'assets/project_bidygo_01.jpg', caption: 'Coordinated outside partners against the launch timeline.' },
        { image: 'assets/project_bidygo_02.jpg', caption: 'Used customer feedback to decide what to communicate and what to change.' }
      ]
    },
    {
      id: 6,
      title: 'Substly',
      subtitle: 'Clear Communication in Gothenburg',
      date: 'February 2026 - June 2026',
      client: 'Substly, Gothenburg',
      description: 'At Substly I kept a Nordic client and the team clear on deadlines and what would be published next. When several pieces were moving at once, I decided what mattered first.',
      boldText: 'I kept the client and the team aligned on the next deadline.',
      skills: ['Client Communication', 'Priorities', 'Deadlines', 'Nordic Stakeholders', 'Critical Thinking'],
      heroImage: 'assets/project_substly_01.png',
      gallery: [
        { image: 'assets/project_substly_01.png', caption: 'From February to June 2026, kept a Nordic client and the team clear on what would be published next.' },
        { image: 'assets/project_substly_02.png', caption: 'Decided what to do first when several parts of the plan were moving at the same time.' }
      ]
    }
  ];

  getProjectsForPage(pageIndex: number): Project[] {
    const start = pageIndex;
    return this.projectsList.slice(start, start + 1);
  }
}
