import { Injectable } from '@angular/core';
import {
  PersonalInfo, ToolCategory, WorkExperience, Education, Language, Publication,
  ResearchProject, TeachingEntry, CourseItem, ResumePageConfig
} from '../models/resume.models';

@Injectable({ providedIn: 'root' })
export class ResumeDataService {

  readonly totalPages = 2;
  readonly footerName = 'Zahra Taghiyar | CV';

  getPageConfig(page: number): ResumePageConfig {
    return { currentPage: page, totalPages: this.totalPages, footerName: this.footerName };
  }

  readonly personalInfo: PersonalInfo = {
    name: 'Zahra Taghiyar',
    jobTitle: 'PhD Applicant',
    subtitle: 'Graduated with a Master of Science (M.Sc.) in Information Technology, with a specialization in Management Information Systems (MIS).',
    heroImage: 'assets/th_vida.png',
    contacts: [
      { id: 'game-insights', label: 'Game Insights Project', value: 'Game Insights Project', href: 'https://vidatg.github.io/game-insights/', icon: 'website', row: 'links' },
      { id: 'linkedin', label: 'LinkedIn', value: 'LinkedIn', href: 'https://www.linkedin.com/in/vidataghiyar/', icon: 'linkedin', row: 'links' },
      { id: 'website', label: 'Portfolio', value: 'Portfolio', href: 'https://vidatg.github.io/', icon: 'website', row: 'links' },
      { id: 'location', label: 'Location', value: 'Gothenburg, Sweden', icon: 'location', row: 'direct' },
      { id: 'phone', label: 'Phone', value: '+46 73 852 98 33', href: 'tel:+46738529833', icon: 'phone', row: 'direct' },
      { id: 'email', label: 'Email', value: 'zah.taghiyar@gmail.com', href: 'mailto:zah.taghiyar@gmail.com', icon: 'email', row: 'direct' }
    ]
  };

  readonly introText = `M.Sc. graduate in Information Technology with a specialization in Management Information Systems, combining an academic background in <strong>user behavior and interactive digital environments</strong> with over six years of professional experience developing and working with digital systems. My earlier research investigated how people perceive, interact with, and develop preferences toward digital environments; my recent work has led me to explore how <strong>artificial intelligence can model, interpret, and adapt to human behavior in interactive systems</strong>. I am now seeking to return to academic research and pursue these questions through <strong>AI, computational user and player modeling, adaptive systems, and computational creativity</strong>, particularly at the intersection of intelligent systems and human interaction.`;

  readonly skillsList: string[] = [
    'Artificial Intelligence', 'AI & Games', 'Computational Player/User Modeling',
    'Human-Centered AI', 'Adaptive Interactive Systems', 'Computational Creativity',
    'LLM/Agent-Based Systems'
  ];

  readonly education: Education[] = [
    {
      institution: 'Foolad Institute of Technology',
      location: 'Fooladshahr, Isfahan Province, IR',
      degree: 'Master of Science (M.Sc.) in Information Technology, Management Information Systems',
      field: 'Management Information Systems',
      date: '2014–2017',
      highlights: [
        {
          label: "Master's Thesis",
          html: '<strong>An Improved Model for Increasing User Loyalty in Business-to-Business Commercial Websites.</strong> Developed an empirical model of e-loyalty integrating website, service, information and communication quality with perceived value, satisfaction, organizational image, and loyalty. Designed and administered a questionnaire, assessed construct reliability, collected 150 responses, and evaluated the proposed relationships statistically. Supervisor: Dr. Naser Nematbakhsh. Advisor: Dr. Bahram Amini.'
        }
      ]
    },
    {
      institution: 'Payame Noor University',
      location: 'IR',
      degree: 'Bachelor of Science (B.Sc.) in Information Technology',
      field: 'Information Technology',
      date: '2007–2011',
      highlights: [
        {
          label: 'Undergraduate Project',
          html: 'Designed and developed an e-commerce website, applying web development and database concepts to build a functional online shopping system.'
        },
        {
          label: 'Industry Internship',
          html: 'Completed a three-month internship focused on practical web development, gaining hands-on experience in designing and implementing web applications in a professional environment.'
        }
      ]
    }
  ];

  readonly researchProjects: ResearchProject[] = [
    {
      title: 'Game Insights: AI-Based Player Modeling from Gameplay Traces',
      href: 'https://vidatg.github.io/game-insights/',
      description: 'Developed <strong>Game Insights</strong> to explore a question at the intersection of AI and games: <em>what can AI systems legitimately infer about players from gameplay traces?</em> Rather than allowing an LLM to freely interpret telemetry, I designed the prototype to separate observable behavioral evidence from higher-level interpretation. This work led me to broader research questions around <strong>computational player modeling, AI-assisted game analysis, and the limits of inference from interactive behavior</strong>.'
    }
  ];

  readonly teachingExperience: TeachingEntry[] = [
    {
      title: "Teaching Assistant, Bachelor's & Master's Level",
      description: 'Supported university-level teaching during both B.Sc. and M.Sc. studies, assisting students with course material, assignments, and academic learning activities.'
    },
    {
      title: 'Digital Marketing Tutor | Preply',
      href: 'https://preply.com/en/tutor/4086930',
      meta: 'Remote · Sep 2023–Present',
      description: 'Teach digital marketing and analytics in English to international learners through individualized online instruction, adapting course content and teaching methods to different backgrounds, learning objectives, and levels of experience.'
    },
    {
      title: 'English & IELTS Tutor | Independent',
      meta: 'International / Online · 6+ years',
      description: 'Provided individual English and IELTS instruction to students from diverse international backgrounds, developing substantial experience in explaining complex concepts, adapting instruction to individual learning needs, and working effectively across cultural and educational contexts.'
    }
  ];

  readonly researchExperience: WorkExperience[] = [
    {
      company: 'Foolad Institute of Technology',
      role: "Master's Researcher, IT / Management Information Systems",
      location: '',
      date: '2017',
      bullets: [
        'Reviewed and compared e-loyalty models and behavioral and attitudinal conceptualizations of loyalty in B2B electronic marketplaces.',
        'Developed a conceptual model addressing digital service quality, website quality, information quality, communication quality, perceived value, satisfaction, organizational image, and loyalty.',
        'Conducted questionnaire-based empirical research and reliability assessment, followed by statistical evaluation of research hypotheses.'
      ]
    }
  ];

  readonly publication: Publication = {
    citation: '',
    title: 'A Review of E-loyalty Models in Business-to-Business E-commerce Context',
    details: 'Poster Presentation, 11th International Conference on e-Commerce in Developing Countries (ECDC 2017), Isfahan, IR, 14–15 April 2017.'
  };

  readonly workExperiences: WorkExperience[] = [
    {
      company: 'Substly',
      role: 'SEO Specialist & B2B Content Manager',
      location: 'Gothenburg, Sweden',
      date: 'Feb 2026–Present',
      bullets: [
        'Analyze search and content performance in a B2B SaaS environment, with particular interest in how AI-mediated search and answer engines are changing information discovery and user interaction.'
      ]
    },
    {
      company: 'Eiredigital Marketing Agency',
      role: 'Digital Marketing Strategist',
      location: 'Dublin, Ireland (Remote)',
      date: 'Aug 2024–Nov 2025',
      bullets: [
        'Applied data-driven experimentation, A/B testing, conversion analysis, and performance measurement to investigate and improve user interaction with digital services.'
      ]
    },
    {
      company: 'Ai11 Consulting GmbH',
      role: 'Marketing Communications Lead',
      location: 'Vienna, Austria (Remote)',
      date: 'Jan 2024–Nov 2025',
      bullets: [
        'Worked within a technology consulting environment on digital strategy, user acquisition, behavioral metrics, and experimentation across digital channels.'
      ]
    },
    {
      company: 'Bidygo',
      role: 'Strategic Social Media & Product Marketing Manager',
      location: 'USA (Remote)',
      date: 'Sep 2023–Nov 2024',
      bullets: [
        'Worked on digital product adoption and user engagement, analyzing audience behavior and response to inform product positioning and communication strategies.'
      ]
    },
    {
      company: 'Axioma Digital Marketing Agency / AMarkets',
      role: 'Social Media Marketing Manager',
      location: 'Yerevan, Armenia',
      date: 'Dec 2022–Sep 2023',
      bullets: [
        'Analyzed digital audience behavior, engagement, and content performance while communicating complex information within an online financial-services environment.'
      ]
    },
    {
      company: 'Chiyakotravel',
      role: 'Product Marketing Manager',
      location: 'IR',
      date: 'Sep 2017–Nov 2022',
      bullets: [
        'Worked across digital product development, customer experience, and user behavior, using customer and market feedback to support product decisions and launching approximately 8–10 travel products annually.'
      ]
    }
  ];

  readonly toolsList: ToolCategory[] = [
    { key: 'Programming & Data', values: 'Python, SQL, data analysis, data preprocessing and visualization' },
    { key: 'AI & LLM Systems', values: 'LLM APIs, prompt engineering, agent-based workflows, structured AI outputs, AI-assisted data analysis' },
    { key: 'Web & Prototyping', values: 'JavaScript, HTML/CSS, web application development, API integration, rapid research prototyping' },
    { key: 'Analytics & Experimentation', values: 'Behavioral and interaction data analysis, A/B testing, experimental design, performance measurement' },
    { key: 'Research Methods', values: 'Quantitative analysis, survey design, statistical analysis, literature review, academic writing' },
    { key: 'Tools & Platforms', values: 'Git, GitHub, Jupyter Notebook, Google Analytics, GameAnalytics' }
  ];

  readonly courses: CourseItem[] = [
    {
      title: 'Crash Course on Python',
      href: 'https://www.coursera.org/account/accomplishments/verify/HJGAJ3K92BUN?'
    },
    {
      title: 'Machine Learning with Python: Foundations',
      detail: 'LinkedIn Learning, In Progress (Expected Oct 2026)'
    }
  ];

  readonly languages: Language[] = [
    { name: 'Persian', proficiency: 'Native' },
    { name: 'English', proficiency: 'Full professional proficiency' },
    { name: 'French', proficiency: 'Limited working proficiency' },
    { name: 'Swedish', proficiency: 'Conversational' }
  ];
}
