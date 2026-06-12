import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ResumePageConfig } from '../../core/models/resume.models';
import { SharedPageFooterUiComponent } from '../shared-page-footer-ui/shared-page-footer-ui.component';
import { SectionProjectCardUiComponent } from './section-project-card-ui/section-project-card-ui.component';

@Component({
  selector: 'app-section-projects-ui',
  standalone: true,
  imports: [CommonModule, SharedPageFooterUiComponent, SectionProjectCardUiComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './section-projects-ui.component.html',
})
export class SectionProjectsUiComponent {
  @Input({ required: true }) projects!: Project[];
  @Input({ required: true }) pageConfig!: ResumePageConfig;
  @Input() isFirstPage = false;
}
