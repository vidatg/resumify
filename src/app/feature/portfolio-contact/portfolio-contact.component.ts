import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { PortfolioContactUiComponent } from '../../ui/portfolio-contact-ui/portfolio-contact-ui.component';

@Component({
  selector: 'app-portfolio-contact',
  standalone: true,
  imports: [PortfolioContactUiComponent],
  templateUrl: './portfolio-contact.component.html',
})
export class PortfolioContactComponent {
  private readonly portfolioData = inject(PortfolioDataService);
  readonly personalInfo = this.portfolioData.personalInfo;
}
