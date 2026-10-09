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
    jobTitle: 'Event & Experience Manager',
    heroImage: 'assets/th_vida.png',
    contacts: [
      { id: 'phone', label: 'Phone', value: '+46 73 852 98 33', href: 'tel:+46738529833', icon: 'phone' },
      { id: 'email', label: 'Email', value: 'vida.taghiyar@gmail.com', href: 'mailto:vida.taghiyar@gmail.com', icon: 'email' },
      { id: 'location', label: 'Location', value: 'Gothenburg, Sweden', icon: 'location' },
      { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/vidataghiyar', href: 'https://www.linkedin.com/in/vidataghiyar/', icon: 'linkedin' },
      { id: 'website', label: 'Website', value: 'https://vidatg.github.io/', href: 'https://vidatg.github.io/', icon: 'website' },
      { id: 'availability', label: 'Availability', value: 'Available immediately', icon: 'availability' }
    ]
  };

  readonly introText = `<strong>Experience and event manager</strong> based in Gothenburg. For more than five years at ChiyakoTravel I ran <strong>8–10 Iran tours a year</strong> for travelers from around the world: hotels, transfers, tour leaders, meals, city tours, customer support, interviews, and branding. At AMarkets in Armenia I was the bridge between partners and the marketing team. I hosted <strong>more than 30 partners</strong> and planned their Turkey program from Armenia, including hotels, seminars, workshops, and boat tours. Authorized to work in Sweden.`;

  readonly skillsList: string[] = [
    'Tour & Event Operations', 'Hotel, Transfer & Tour Leader Booking',
    'Guest Care & Customer Support', 'Partnership Programs',
    'Seminars, Workshops & Hosting', 'Event Materials & Branding',
    'Team Communication', 'Leadership', 'Critical Thinking', 'Supplier Coordination'
  ];

  readonly toolsList: ToolCategory[] = [
    { key: 'Planning & Coordination', values: 'Asana, Trello, Jira, Confluence, Slack' },
    { key: 'Documents & Budgets', values: 'Excel, PowerPoint, Word, Google Workspace' },
    { key: 'Guest & Commercial Follow-Up', values: 'Salesforce, Zoho, Google Analytics (GA4), Looker Studio' },
    { key: 'Creative Production', values: 'Canva, Figma' }
  ];

  readonly aiToolsList: string[] = [
    'ChatGPT', 'Midjourney', 'Google AI Studio', 'Google Antigravity', 'Claude', 'n8n'
  ];

  readonly workExperiences: WorkExperience[] = [
    {
      company: 'ChiyakoTravel',
      role: 'Experience Manager',
      location: 'Iran. Hybrid',
      date: 'Sep 2017 – Nov 2022',
      bullets: [
        '<strong>Iran tours:</strong> Ran <strong>8–10 tours a year</strong> for travelers from around the world, for more than five years.',
        '<strong>Trip arrangements:</strong> Booked hotels, transfers, tour leaders, meals, and city tours, and kept the group plan together from arrival to departure.',
        '<strong>Guests and brand:</strong> Handled customer support, interviews, branding materials, social content, and the relationship with guests after the tour.'
      ]
    },
    {
      company: 'AMarkets',
      role: 'Partnership Program Manager',
      location: 'Yerevan, Armenia',
      date: 'Dec 2022 – Sep 2023',
      bullets: [
        '<strong>Partnership program:</strong> Bridge between partners and the marketing team. Hosted <strong>more than 30 partners</strong>.',
        '<strong>Planned from Armenia:</strong> Arranged the Turkey trip from Armenia, including hotels, experiences, and the full program.',
        '<strong>On the program:</strong> Seminars, workshops, boat tours, and other activities to train partners and host them. Prepared brochures, banners, and seminar materials, and gave a <strong>30-minute presentation</strong> on loyalty and branding.'
      ]
    },
    {
      company: 'Ai11 Consulting GmbH',
      role: 'Marketing Communications Lead',
      location: 'Vienna, Austria. Remote',
      date: 'Jan 2024 – Nov 2025',
      bullets: [
        '<strong>Communication:</strong> Kept marketing, sales, and operations on one message, including activity around industry events.',
        '<strong>Leadership:</strong> Led planning for three service launches and made sure the internal team and outside partners were working from the same plan.'
      ]
    },
    {
      company: 'Eiredigital',
      role: 'Marketing Communications Manager',
      location: 'Dublin, Ireland. Remote',
      date: 'Aug 2024 – Nov 2025',
      bullets: [
        '<strong>Client communication:</strong> Main contact between clients and the team doing the work, from the brief through to what the client heard back.',
        '<strong>Critical thinking:</strong> Helped the agency decide how a project should be planned, who owned the next step, and what could wait.'
      ]
    },
    {
      company: 'Bidygo',
      role: 'Social Media & Product Marketing Manager',
      location: 'Los Angeles, California, US. Remote',
      date: 'Sep 2023 – Nov 2024',
      bullets: [
        '<strong>Partners and team:</strong> Worked with product, design, and outside partners so each launch had one story and one timeline.',
        '<strong>Listening:</strong> Used what customers said to decide what to communicate and what to change.'
      ]
    },
    {
      company: 'Substly',
      role: 'Digital Marketing Intern',
      location: 'Gothenburg, Sweden',
      date: 'Feb 2026 – Jun 2026',
      bullets: [
        '<strong>Communication:</strong> Kept a Nordic client and the team clear on deadlines and what would be published next.',
        '<strong>Judgment:</strong> Decided what to do first when several pieces of the plan were moving at the same time.'
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
    { name: 'French', proficiency: 'Limited working proficiency' },
    { name: 'Swedish', proficiency: 'Actively learning' }
  ];

  readonly achievementBullets: string[] = [
    '<strong>Partnership program:</strong> Hosted more than 30 AMarkets partners. Planned the Turkey trip from Armenia, including hotels, seminars, workshops, boat tours, materials, and a 30-minute presentation on loyalty and branding.',
    '<strong>Iran tours:</strong> For more than five years, ran 8–10 tours a year for travelers from around the world, covering hotels, transfers, tour leaders, meals, city tours, customer support, and branding.',
    '<strong>Team communication:</strong> At Ai11, kept marketing, sales, and operations on one plan for three service launches and for industry events.'
  ];
}
