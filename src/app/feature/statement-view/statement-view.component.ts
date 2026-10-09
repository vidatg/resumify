import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { StatementDataService } from '../../core/services/statement-data.service';
import { SharedPageFooterUiComponent } from '../../ui/shared-page-footer-ui/shared-page-footer-ui.component';
import { ResumePageConfig } from '../../core/models/resume.models';

@Component({
  selector: 'app-statement-view',
  standalone: true,
  imports: [NgFor, NgIf, SharedPageFooterUiComponent],
  templateUrl: './statement-view.component.html',
})
export class StatementViewComponent {
  private readonly data = inject(StatementDataService);

  readonly applicant = this.data.applicant;
  readonly position = this.data.position;
  readonly institution = this.data.institution;
  readonly department = this.data.department;
  readonly date = this.data.date;
  readonly salutation = this.data.salutation;
  readonly pageOne = this.data.pageOne;
  readonly pageTwo = this.data.pageTwo;
  readonly materialsIntro = this.data.materialsIntro;
  readonly materials = this.data.materials;
  readonly references = this.data.references;
  readonly closing = this.data.closing;
  readonly thanks = this.data.thanks;

  getPageConfig(page: number): ResumePageConfig {
    return this.data.getPageConfig(page);
  }
}

export default StatementViewComponent;
