import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { PortfolioAchievementsUiComponent } from '../../ui/portfolio-achievements-ui/portfolio-achievements-ui.component';

@Component({
  selector: 'app-portfolio-achievements',
  standalone: true,
  imports: [PortfolioAchievementsUiComponent],
  templateUrl: './portfolio-achievements.component.html',
})
export class PortfolioAchievementsComponent {
  private readonly portfolioData = inject(PortfolioDataService);

  readonly achievementsText = this.portfolioData.achievementsText;
  readonly achievementItems = this.portfolioData.achievementItems;
  readonly pageConfig = this.portfolioData.getPageConfig(4);
}
