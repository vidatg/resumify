import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { WorkExperience } from '../../core/models/resume.models';

@Component({
  selector: 'app-resume-experience-ui',
  standalone: true,
  imports: [NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resume-experience-ui.component.html',
})
export class ResumeExperienceUiComponent {
  @Input({ required: true }) experience!: WorkExperience;
}
