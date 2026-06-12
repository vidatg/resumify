import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { PersonalInfo } from '../../core/models/resume.models';

@Component({
  selector: 'app-section-hero-ui',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section-hero-ui.component.html',
})
export class SectionHeroUiComponent {
  @Input({ required: true }) personalInfo!: PersonalInfo;
}
