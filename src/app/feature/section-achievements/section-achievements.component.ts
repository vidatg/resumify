import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionAchievementsUiComponent } from '../../ui/section-achievements-ui/section-achievements-ui.component';

@Component({
  selector: 'app-section-achievements',
  standalone: true,
  imports: [SectionAchievementsUiComponent],
  templateUrl: './section-achievements.component.html',
})
export class SectionAchievementsComponent {
  private readonly portfolioData = inject(PortfolioDataService);

  readonly achievementsText = this.portfolioData.achievementsText;
  readonly achievementItems = this.portfolioData.achievementItems;
  readonly pageConfig = this.portfolioData.getPageConfig(4);
}
