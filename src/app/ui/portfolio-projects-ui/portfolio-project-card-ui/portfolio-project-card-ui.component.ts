import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/models/resume.models';
import { SharedSkillTagUiComponent } from '../../shared-skill-tag-ui/shared-skill-tag-ui.component';

@Component({
  selector: 'app-portfolio-project-card-ui',
  standalone: true,
  imports: [CommonModule, SharedSkillTagUiComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-project-card-ui.component.html',
  host: {
    'class': 'flex flex-col flex-1'
  }
})
export class PortfolioProjectCardUiComponent {
  @Input({ required: true }) project!: Project;
  @Input() isLast = false;

  getFormattedDescription(): string {
    return this.project.description;
  }
}
