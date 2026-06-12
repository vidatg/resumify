import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolCategory, Metric, ResumePageConfig } from '../../core/models/resume.models';
import { SharedPageFooterUiComponent } from '../shared-page-footer-ui/shared-page-footer-ui.component';
import { SharedSectionHeadingUiComponent } from '../shared-section-heading-ui/shared-section-heading-ui.component';
import { SharedSkillTagUiComponent } from '../shared-skill-tag-ui/shared-skill-tag-ui.component';
import { MetricCardUiComponent } from '../section-achievements-ui/metric-card-ui/metric-card-ui.component';

@Component({
  selector: 'app-section-competency-ui',
  standalone: true,
  imports: [CommonModule, SharedPageFooterUiComponent, SharedSectionHeadingUiComponent, SharedSkillTagUiComponent, MetricCardUiComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section-competency-ui.component.html',
})
export class SectionCompetencyUiComponent {
  @Input({ required: true }) introText!: string;
  @Input({ required: true }) skillsList!: string[];
  @Input({ required: true }) toolsList!: ToolCategory[];
  @Input({ required: true }) aiToolsList!: string[];
  @Input({ required: true }) metricsList!: Metric[];
  @Input({ required: true }) pageConfig!: ResumePageConfig;
}
