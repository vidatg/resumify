import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfo } from '../../core/models/resume.models';

@Component({
  selector: 'app-resume-header-ui',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resume-header-ui.component.html',
})
export class ResumeHeaderUiComponent {
  @Input({ required: true }) personalInfo!: PersonalInfo;

  isExternal(href: string): boolean {
    return href.startsWith('http://') || href.startsWith('https://');
  }
}
