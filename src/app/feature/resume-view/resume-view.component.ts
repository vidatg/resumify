import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
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
  readonly toolsList = this.data.toolsList;
  readonly aiToolsList = this.data.aiToolsList;
  readonly workExperiences = this.data.workExperiences;
  readonly education = this.data.education;
  readonly languages = this.data.languages;
  readonly achievementBullets = this.data.achievementBullets;

  getPageConfig(page: number): ResumePageConfig {
    return this.data.getPageConfig(page);
  }
}

export default ResumeViewComponent;
