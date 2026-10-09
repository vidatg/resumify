import { Component, inject } from '@angular/core';
import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ResumeDataService } from '../../core/services/resume-data.service';
import { ResumeHeaderUiComponent } from '../../ui/resume-header-ui/resume-header-ui.component';
import { ResumeExperienceUiComponent } from '../../ui/resume-experience-ui/resume-experience-ui.component';
import { ResumeSectionUiComponent } from '../../ui/resume-section-ui/resume-section-ui.component';
import { SharedPageFooterUiComponent } from '../../ui/shared-page-footer-ui/shared-page-footer-ui.component';
import { ResumePageConfig } from '../../core/models/resume.models';

@Component({
  selector: 'app-resume-view',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgTemplateOutlet,
    ResumeHeaderUiComponent,
    ResumeExperienceUiComponent,
    ResumeSectionUiComponent,
    SharedPageFooterUiComponent,
  ],
  templateUrl: './resume-view.component.html',
})
export class ResumeViewComponent {
  private readonly data = inject(ResumeDataService);

  readonly personalInfo = this.data.personalInfo;
  readonly introText = this.data.introText;
  readonly skillsList = this.data.skillsList;
  readonly education = this.data.education;
  readonly researchProjects = this.data.researchProjects;
  readonly teachingExperience = this.data.teachingExperience;
  readonly researchExperience = this.data.researchExperience;
  readonly publication = this.data.publication;
  readonly workExperiences = this.data.workExperiences;
  readonly toolsList = this.data.toolsList;
  readonly courses = this.data.courses;
  readonly languages = this.data.languages;

  getPageConfig(page: number): ResumePageConfig {
    return this.data.getPageConfig(page);
  }
}

export default ResumeViewComponent;
