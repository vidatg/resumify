import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionCompetencyUiComponent } from '../../ui/section-competency-ui/section-competency-ui.component';

@Component({
  selector: 'app-section-competency',
  standalone: true,
  imports: [SectionCompetencyUiComponent],
  templateUrl: './section-competency.component.html',
})
export class SectionCompetencyComponent {
  private readonly portfolioData = inject(PortfolioDataService);

  readonly introText = this.portfolioData.introText;
  readonly skillsList = this.portfolioData.skillsList;
  readonly toolsList = this.portfolioData.toolsList;
  readonly aiToolsList = this.portfolioData.aiToolsList;
  readonly metricsList = this.portfolioData.metricsList;
  readonly pageConfig = this.portfolioData.getPageConfig(2);
}
