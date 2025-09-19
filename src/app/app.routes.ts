import { Routes } from '@angular/router';
import { Ejercicio1Component } from './pages/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './pages/ejercicio2/ejercicio2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirigir a home
  { path: 'ejercicio1', component: Ejercicio1Component },
  { path: 'ejercicio2', component: Ejercicio2Component },
];

