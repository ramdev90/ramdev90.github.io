import { Routes } from '@angular/router';
import { TemplatesComponent } from './templates/templates.component';
import { GetLinkedinDataComponent } from './linkedin/get-linkedin-data/get-linkedin-data.component';
import { SelectedLinkedinDataComponent } from './linkedin/selected-linkedin-data/selected-linkedin-data.component';
import { MailComponent } from './mail/mail.component';

export const routes: Routes = [
  //   { path: '', component: HomeComponent }, // Default route
  { path: 'templates', component: TemplatesComponent },
  { path: 'home', component: GetLinkedinDataComponent },
  { path: 'linkedIn', component: GetLinkedinDataComponent },
  { path: 'linkedIn/selected', component: SelectedLinkedinDataComponent },
  { path: 'linkedIn/mail', component: MailComponent },
  //   { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route for handling invalid paths
];
