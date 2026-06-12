import { Component, Input, inject, OnInit } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionProjectsUiComponent } from '../../ui/section-projects-ui/section-projects-ui.component';
import { Project, ResumePageConfig } from '../../core/models/resume.models';

@Component({
  selector: 'app-section-projects',
  standalone: true,
  imports: [SectionProjectsUiComponent],
  templateUrl: './section-projects.component.html',
})
export class SectionProjectsComponent implements OnInit {
  private readonly portfolioData = inject(PortfolioDataService);

  @Input({ required: true }) pageNumber!: number;
  @Input() isFirstPage = false;

  projects: Project[] = [];
  pageConfig!: ResumePageConfig;

  ngOnInit(): void {
    const pageIndex = this.pageNumber - 6;
    this.projects = this.portfolioData.getProjectsForPage(pageIndex);
    this.pageConfig = this.portfolioData.getPageConfig(this.pageNumber);
  }
}
