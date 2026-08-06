import { Component, Input, inject, OnInit } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { PortfolioProjectsUiComponent } from '../../ui/portfolio-projects-ui/portfolio-projects-ui.component';
import { Project, ResumePageConfig } from '../../core/models/resume.models';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [PortfolioProjectsUiComponent],
  templateUrl: './portfolio-projects.component.html',
})
export class PortfolioProjectsComponent implements OnInit {
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
