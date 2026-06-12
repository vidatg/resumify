import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'resume',
    loadComponent: () => import('./feature/resume-view/resume-view.component').then(m => m.ResumeViewComponent)
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./feature/portfolio-view/portfolio-view.component').then(m => m.PortfolioViewComponent)
  },
  { path: '', redirectTo: 'resume', pathMatch: 'full' },
  { path: '**', redirectTo: 'resume' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ],
};
