import { Component, Input, OnInit, inject } from '@angular/core';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { SharedPageHeroUiComponent } from '../../ui/shared-page-hero-ui/shared-page-hero-ui.component';
import { ResumePageConfig } from '../../core/models/resume.models';

@Component({
  selector: 'app-shared-page-hero',
  standalone: true,
  imports: [SharedPageHeroUiComponent],
  templateUrl: './shared-page-hero.component.html',
})
export class SharedPageHeroComponent implements OnInit {
  private readonly portfolioData = inject(PortfolioDataService);

  @Input({ required: true }) pageNumber!: number;
  @Input() title?: string;
  @Input() subtitle?: string;

  pageConfig!: ResumePageConfig;

  ngOnInit(): void {
    this.pageConfig = this.portfolioData.getPageConfig(this.pageNumber);
  }
}
