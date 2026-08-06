import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ResumePageConfig } from '../../core/models/resume.models';
import { SharedPageFooterUiComponent } from '../shared-page-footer-ui/shared-page-footer-ui.component';
import { PortfolioProjectCardUiComponent } from './portfolio-project-card-ui/portfolio-project-card-ui.component';

@Component({
  selector: 'app-portfolio-projects-ui',
  standalone: true,
  imports: [CommonModule, SharedPageFooterUiComponent, PortfolioProjectCardUiComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-projects-ui.component.html',
})
export class PortfolioProjectsUiComponent {
  @Input({ required: true }) projects!: Project[];
  @Input({ required: true }) pageConfig!: ResumePageConfig;
  @Input() isFirstPage = false;
}
