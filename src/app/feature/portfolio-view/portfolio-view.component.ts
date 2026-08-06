import { Component } from '@angular/core';
import { PortfolioHeroComponent } from '../portfolio-hero/portfolio-hero.component';
import { PortfolioCompetencyComponent } from '../portfolio-competency/portfolio-competency.component';
import { PortfolioAchievementsComponent } from '../portfolio-achievements/portfolio-achievements.component';
import { PortfolioProjectsComponent } from '../portfolio-projects/portfolio-projects.component';
import { PortfolioContactComponent } from '../portfolio-contact/portfolio-contact.component';
import { SharedPageHeroComponent } from '../shared-page-hero/shared-page-hero.component';

@Component({
  selector: 'app-portfolio-view',
  standalone: true,
  imports: [
    PortfolioHeroComponent,
    PortfolioCompetencyComponent,
    PortfolioAchievementsComponent,
    PortfolioProjectsComponent,
    PortfolioContactComponent,
    SharedPageHeroComponent
  ],
  templateUrl: './portfolio-view.component.html',
})
export class PortfolioViewComponent {}
export default PortfolioViewComponent;
