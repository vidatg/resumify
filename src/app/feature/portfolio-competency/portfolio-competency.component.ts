import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { PortfolioCompetencyUiComponent } from '../../ui/portfolio-competency-ui/portfolio-competency-ui.component';

@Component({
  selector: 'app-portfolio-competency',
  standalone: true,
  imports: [PortfolioCompetencyUiComponent],
  templateUrl: './portfolio-competency.component.html',
})
export class PortfolioCompetencyComponent {
  private readonly portfolioData = inject(PortfolioDataService);

  readonly introText = this.portfolioData.introText;
  readonly skillsList = this.portfolioData.skillsList;
  readonly toolsList = this.portfolioData.toolsList;
  readonly aiToolsList = this.portfolioData.aiToolsList;
  readonly metricsList = this.portfolioData.metricsList;
  readonly pageConfig = this.portfolioData.getPageConfig(2);
}
