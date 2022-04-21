import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './modules/list-page/components/list-page/list-page.component';

import { ListComponent } from './modules/list-page/components/list/list.component';

const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () =>
      import('./modules/counter-page/counter-page.module').then(
        (m) => m.CounterPageModule
      ),
  },
  {
    path: 'list',
    component: ListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
