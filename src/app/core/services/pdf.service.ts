import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PdfService {
  private readonly router = inject(Router);

  /**
   * Triggers the browser's native print dialog.
   * Sets the document title based on the active route so the
   * generated PDF filename matches the current view.
   */
  printDocument(): void {
    const isResume = this.router.url.includes('resume');
    document.title = isResume
      ? 'Vida Taghiyar - Resume'
      : 'Vida Taghiyar - Portfolio';
    window.print();
  }
}
