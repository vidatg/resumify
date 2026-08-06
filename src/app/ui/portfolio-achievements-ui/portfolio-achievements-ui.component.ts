import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementItem, ResumePageConfig } from '../../core/models/resume.models';
import { SharedPageFooterUiComponent } from '../shared-page-footer-ui/shared-page-footer-ui.component';
import { SharedSectionHeadingUiComponent } from '../shared-section-heading-ui/shared-section-heading-ui.component';

@Component({
  selector: 'app-portfolio-achievements-ui',
  standalone: true,
  imports: [CommonModule, SharedPageFooterUiComponent, SharedSectionHeadingUiComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-achievements-ui.component.html',
})
export class PortfolioAchievementsUiComponent {
  @Input({ required: true }) achievementsText!: string;
  @Input({ required: true }) achievementItems!: AchievementItem[];
  @Input({ required: true }) pageConfig!: ResumePageConfig;
}
