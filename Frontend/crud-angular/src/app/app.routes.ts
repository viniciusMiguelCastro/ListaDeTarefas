import { Routes } from '@angular/router';
import { TarefasListComponent } from './components/tarefas-list/tarefas-list.component';
import { TarefasEditComponent } from './components/tarefas-edit/tarefas-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tarefas', pathMatch: 'full' },
  { path: 'tarefas', component: TarefasListComponent },
  { path: 'tarefas/edit/:id', component: TarefasEditComponent }
];
