import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactIcon, ContactItem, PersonalInfo } from '../../core/models/resume.models';

@Component({
  selector: 'app-portfolio-contact-ui',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-contact-ui.component.html',
})
export class PortfolioContactUiComponent {
  @Input({ required: true }) personalInfo!: PersonalInfo;

  iconOf(contact: ContactItem): ContactIcon {
    return contact.icon ?? 'generic';
  }

  isExternal(href: string): boolean {
    return href.startsWith('http://') || href.startsWith('https://');
  }
}
