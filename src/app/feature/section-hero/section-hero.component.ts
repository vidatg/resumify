import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionHeroUiComponent } from '../../ui/section-hero-ui/section-hero-ui.component';

@Component({
  selector: 'app-section-hero',
  standalone: true,
  imports: [SectionHeroUiComponent],
  templateUrl: './section-hero.component.html',
})
export class SectionHeroComponent {
  private readonly portfolioData = inject(PortfolioDataService);

  readonly personalInfo = this.portfolioData.personalInfo;
}
