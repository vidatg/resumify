import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { WorkExperience } from '../../core/models/resume.models';

@Component({
  selector: 'app-resume-experience-ui',
  standalone: true,
  imports: [NgFor, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resume-experience-ui.component.html',
})
export class ResumeExperienceUiComponent {
  @Input({ required: true }) experience!: WorkExperience;
  /** Plain academic entry: role first, no bold, no highlight bar */
  @Input() plain = false;
}
