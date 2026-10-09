import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PdfService } from '../../core/services/pdf.service';

@Component({
  selector: 'app-shared-toolbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './shared-toolbar.component.html',
})
export class SharedToolbarComponent {
  private readonly pdfService = inject(PdfService);
  readonly router = inject(Router);

  printDocument(): void {
    this.pdfService.printDocument();
  }

  get documentLabel(): string {
    const url = this.router.url;
    if (url.includes('statement')) return 'Doctoral Statement';
    if (url.includes('resume')) return 'Academic CV';
    return '12 Page Visual Portfolio';
  }

  get printLabel(): string {
    const url = this.router.url;
    if (url.includes('statement')) return 'Print Statement';
    if (url.includes('resume')) return 'Print CV';
    return 'Print Portfolio';
  }
}
