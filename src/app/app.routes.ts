import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'tasks',
    loadComponent: () => loadRemoteModule('taskapp', './TaskListComponent').then((m) => m.TaskListComponent),

    // loadComponent: () => loadRemoteModule({
    //   remoteEntry: 'https://angular-mfa-taskapp.vercel.app/remoteEntry.json',
    //   exposedModule: './TaskListComponent',
    //   remoteName: 'taskapp'
    // }).then((m) => m.TaskListComponent),
  },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
];
