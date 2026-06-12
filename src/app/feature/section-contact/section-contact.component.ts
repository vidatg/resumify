import { Component, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SectionContactUiComponent } from '../../ui/section-contact-ui/section-contact-ui.component';

@Component({
  selector: 'app-section-contact',
  standalone: true,
  imports: [SectionContactUiComponent],
  templateUrl: './section-contact.component.html',
})
export class SectionContactComponent {
  private readonly portfolioData = inject(PortfolioDataService);
  readonly personalInfo = this.portfolioData.personalInfo;
}
