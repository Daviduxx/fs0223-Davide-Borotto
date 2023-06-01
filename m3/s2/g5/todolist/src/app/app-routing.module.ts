import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './pages/completed/completed.component';
import { TodosComponent } from './pages/todos/todos.component';

const routes: Routes = [

  {
    path: '',
    component: TodosComponent
  },
  {
    path: 'completed',
    component: CompletedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
