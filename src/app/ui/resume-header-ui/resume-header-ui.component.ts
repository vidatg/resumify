import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PersonalInfo } from '../../core/models/resume.models';

@Component({
  selector: 'app-resume-header-ui',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resume-header-ui.component.html',
})
export class ResumeHeaderUiComponent {
  @Input({ required: true }) personalInfo!: PersonalInfo;
}
