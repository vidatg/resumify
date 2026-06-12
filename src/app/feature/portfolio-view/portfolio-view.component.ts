import { Component } from '@angular/core';
import { SectionHeroComponent } from '../section-hero/section-hero.component';
import { SectionCompetencyComponent } from '../section-competency/section-competency.component';
import { SectionAchievementsComponent } from '../section-achievements/section-achievements.component';
import { SectionProjectsComponent } from '../section-projects/section-projects.component';
import { SectionContactComponent } from '../section-contact/section-contact.component';
import { SharedPageHeroComponent } from '../shared-page-hero/shared-page-hero.component';

@Component({
  selector: 'app-portfolio-view',
  standalone: true,
  imports: [
    SectionHeroComponent,
    SectionCompetencyComponent,
    SectionAchievementsComponent,
    SectionProjectsComponent,
    SectionContactComponent,
    SharedPageHeroComponent
  ],
  templateUrl: './portfolio-view.component.html',
})
export class PortfolioViewComponent {}
export default PortfolioViewComponent;
