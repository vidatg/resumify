import { Injectable } from '@angular/core';
import { ResumePageConfig, StatementMaterial, StatementReference } from '../models/resume.models';

@Injectable({ providedIn: 'root' })
export class StatementDataService {
  readonly totalPages = 2;
  readonly footerName = 'Zahra Taghiyar, Doctoral Application';
  readonly applicant = 'Zahra Taghiyar';
  readonly position = 'Application for the Doctoral Student Position in Artificial Intelligence';
  readonly institution = 'Chalmers University of Technology';
  readonly department = 'Department of Computer Science and Engineering';
  readonly date = '6 October 2026';
  readonly salutation = 'Dear Members of the Selection Committee,';
  readonly closing = 'I am applying for doctoral study because I want to return fully to research and develop the theoretical and technical depth required to investigate intelligent interactive systems at an advanced level. I would be excited to pursue this development at Chalmers and to contribute to a research environment that values technical rigor, unconventional questions, and interdisciplinary thinking.';
  readonly thanks = 'Thank you for considering my application.';

  getPageConfig(page: number): ResumePageConfig {
    return { currentPage: page, totalPages: this.totalPages, footerName: this.footerName };
  }

  readonly pageOne: string[] = [
    'I am applying for the Doctoral Student position in Artificial Intelligence at Chalmers University of Technology. I hold an M.Sc. in Information Technology with a specialization in Management Information Systems (MIS), and my academic and professional trajectory has consistently been shaped by an interest in how people interact with digital systems, how their behavior can be represented through data, and how computational systems can interpret and respond to patterns of human interaction. I am particularly motivated by the opportunity to pursue these questions within Professor Julian Togelius\'s research environment, where artificial intelligence is investigated in connection with games, creativity, and broader conceptual questions.',
    'My academic research began with the study of user behavior in digital environments. During my master\'s studies, I investigated relationships between characteristics of B2B digital environments and constructs including perceived value, satisfaction, organizational image, and user loyalty. This research provided experience in developing research questions, conducting literature reviews, working with behavioral constructs and empirical data, and communicating research findings. I also presented research on e-loyalty models at the 11th International Conference on e-Commerce in Developing Countries (ECDC 2017). Although this work originated in information systems, the underlying problem, how observable interaction can be used to understand human behavior in digital environments, has continued to shape my research interests.',
    'Following my graduate studies, I gained more than six years of professional experience working with digital products, analytics, experimentation, user engagement, and technology-oriented organizations. Working with behavioral and interaction data outside an academic setting strengthened my interest in questions that cannot be addressed through conventional analytics alone. In particular, I became increasingly interested in how intelligent systems construct models of users, what those models actually represent, and how we can distinguish evidence supported by observed behavior from interpretations introduced by the computational system.',
    'This interest led me to develop Game Insights, a research-oriented proof of concept for AI-assisted player modeling from gameplay telemetry. The project investigates a central question: What can an AI system legitimately infer about players from gameplay traces? The system analyzes event-level gameplay data to identify evidence related to exploration, risk-taking, experimentation, and play patterns. Its design deliberately separates four stages: raw gameplay events, behavioral measurement, evidence-supported interpretation, and human verification. Rather than allowing an AI model to freely assign psychological meaning to player behavior, conclusions must be traceable to observable evidence, and the system withholds conclusions when the required evidence is insufficient.',
    'Developing Game Insights has moved my research interests toward computational player and user modeling, AI-assisted analysis of interactive behavior, adaptive systems, agent-based AI workflows, and the limits of inference from behavioral data. At doctoral level, I would like to investigate how AI systems can construct useful models from sequential interaction data while explicitly representing uncertainty and preserving the distinction between measurement and interpretation. Games provide an especially compelling environment for this research because they combine rich behavioral data, sequential decision-making, adaptation, creativity, and complex human interaction.'
  ];

  readonly pageTwo: string[] = [
    'I am particularly attracted to this doctoral position because it encourages both technical and conceptual investigation rather than prescribing a narrowly defined research problem. I would like to contribute to research that combines implementation and empirical evaluation with deeper questions about what AI models learn about human behavior, how such models should be validated, and how they can support adaptive interactive systems or AI-assisted game design. I believe my interdisciplinary background in information technology, behavioral research, real-world digital experimentation, teaching, and my more recent AI-focused development work provides a useful foundation from which to pursue these questions.',
    'I also bring substantial experience communicating and teaching across different backgrounds. I worked as a teaching assistant during both my bachelor\'s and master\'s studies, have taught digital marketing and analytics to international learners in English, and have more than six years of experience teaching English and IELTS. These experiences have strengthened my ability to explain complex material, work independently with students, and adapt communication to different levels of knowledge. I would therefore welcome the teaching and collaborative responsibilities associated with doctoral education at Chalmers.'
  ];

  readonly materialsIntro = 'My application includes my CV and supporting academic materials.';

  readonly materials: StatementMaterial[] = [
    {
      label: 'Game Insights',
      title: 'AI-Assisted Player Modeling from Gameplay Telemetry',
      detail: 'Live project',
      href: 'https://vidatg.github.io/game-insights/'
    },
    {
      label: 'Master\'s Thesis',
      title: 'An Improved Model for Increasing User Loyalty in Business-to-Business Commercial Websites',
      detail: '',
      href: 'https://drive.google.com/file/d/1jrE5zx9wregn9z6V4Nhw4Zmsv39xpGPg/view',
      linkTitle: true
    },
    {
      label: 'Conference Work',
      title: 'A Review of E-loyalty Models in Business to Business E-commerce Context',
      detail: 'Poster presentation, 11th International Conference on e-Commerce in Developing Countries (ECDC 2017), Isfahan, IR',
      href: 'https://drive.google.com/file/d/1IdLshnpsXBZjwUzmU-fG_ECJZAWh5LJA/view',
      linkTitle: true
    }
  ];

  readonly references: StatementReference[] = [
    {
      name: 'Mohammad Davarpanah Jazi',
      affiliation: 'Faculty Member and Vice Chancellor for Student Affairs, Foulad Institute of Technology, Isfahan University of Technology',
      email: 'mdjazi@cc.iut.ac.ir',
      relationship: 'Master\'s thesis supervisor'
    },
    {
      name: 'Dr. Naser Nematbakhsh',
      affiliation: 'Assistant Professor, Department of Computer Science, Shahid Ashrafi Esfahani University, Esfahan, IR',
      email: 'n.neemat@yahoo.com',
      relationship: 'Master\'s thesis professor'
    },
    {
      name: 'Dr. Bahram Amini',
      affiliation: 'PhD, Managing Director, University of Technology Malaysia, Department of Information Systems',
      email: 'bahamini@yahoo.com',
      relationship: 'Master\'s thesis advisor'
    }
  ];
}
