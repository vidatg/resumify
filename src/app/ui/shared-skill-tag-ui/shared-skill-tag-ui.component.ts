import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shared-skill-tag-ui',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './shared-skill-tag-ui.component.html',
})
export class SharedSkillTagUiComponent {
  @Input({ required: true }) label!: string;
  @Input() variant: 'default' | 'ai' | 'compact' = 'default';
}
