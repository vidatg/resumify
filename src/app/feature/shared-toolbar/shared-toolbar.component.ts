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
}
