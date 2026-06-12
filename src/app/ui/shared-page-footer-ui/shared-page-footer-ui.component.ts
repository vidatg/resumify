import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumePageConfig } from '../../core/models/resume.models';

@Component({
  selector: 'app-shared-page-footer-ui',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './shared-page-footer-ui.component.html',
})
export class SharedPageFooterUiComponent {
  @Input({ required: true }) pageConfig!: ResumePageConfig;
  @Input() theme: 'light' | 'dark' = 'light';
}
