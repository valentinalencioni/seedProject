import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tareas-pendientes',
    loadComponent: () => import('./tareas-pendientes/tareas-pendientes.page').then( m => m.TareasPendientesPage)
  },
  {
    path: 'prioridad-tareas',
    loadComponent: () => import('./prioridad-tareas/prioridad-tareas.page').then( m => m.PrioridadTareasPage)
  },
  {
    path: 'preferencias-tareas',
    loadComponent: () => import('./preferenciasTareas/preferencias-tareas.page').then( m => m.TareasRealizadasPage)
  },
];
