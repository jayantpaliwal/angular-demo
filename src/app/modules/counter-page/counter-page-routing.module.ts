import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterPageComponent } from './components/counter-page/counter-page.component';

const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CounterPageRoutingModule {}
