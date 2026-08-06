import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Metric } from '../../../core/models/resume.models';

@Component({
  selector: 'app-metric-card-ui',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './metric-card-ui.component.html',
})
export class MetricCardUiComponent {
  @Input({ required: true }) metric!: Metric;
}
