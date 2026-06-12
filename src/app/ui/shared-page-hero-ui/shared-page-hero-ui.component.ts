import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ResumePageConfig } from '../../core/models/resume.models';
import { SharedPageFooterUiComponent } from '../shared-page-footer-ui/shared-page-footer-ui.component';

@Component({
  selector: 'app-shared-page-hero-ui',
  standalone: true,
  imports: [SharedPageFooterUiComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './shared-page-hero-ui.component.html',
})
export class SharedPageHeroUiComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input({ required: true }) pageConfig!: ResumePageConfig;
}
