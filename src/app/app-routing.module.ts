import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
];

export const FreelanceRouting = RouterModule.forRoot(APP_ROUTES);
