import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { PortfolioHeroUiComponent } from '../../ui/portfolio-hero-ui/portfolio-hero-ui.component';

@Component({
  selector: 'app-portfolio-hero',
  standalone: true,
  imports: [PortfolioHeroUiComponent],
  templateUrl: './portfolio-hero.component.html',
})
export class PortfolioHeroComponent {
  private readonly portfolioData = inject(PortfolioDataService);

  readonly personalInfo = this.portfolioData.personalInfo;
}
