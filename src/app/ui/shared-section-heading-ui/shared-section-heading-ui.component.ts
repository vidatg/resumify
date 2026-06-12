import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-shared-section-heading-ui',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './shared-section-heading-ui.component.html',
})
export class SharedSectionHeadingUiComponent {
  @Input({ required: true }) title!: string;
}
