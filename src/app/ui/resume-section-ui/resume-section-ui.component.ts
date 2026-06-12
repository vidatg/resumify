import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-resume-section-ui',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resume-section-ui.component.html',
})
export class ResumeSectionUiComponent {
  @Input({ required: true }) title!: string;
}
