import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PersonalInfo } from '../../core/models/resume.models';

@Component({
  selector: 'app-section-contact-ui',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section-contact-ui.component.html',
})
export class SectionContactUiComponent {
  @Input({ required: true }) personalInfo!: PersonalInfo;
}
