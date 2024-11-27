import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tasks',
    loadComponent: () => loadRemoteModule('taskapp', './TaskListComponent').then((m) => m.TaskListComponent),
  },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
];
