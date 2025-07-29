import { Routes } from '@angular/router';
import { MusicComponent } from './music/music.component';

export const routes: Routes = [
  { path: 'music', component: MusicComponent },  // ← your feature route
  { path: '', redirectTo: 'music', pathMatch: 'full' },  // default redirect
];

