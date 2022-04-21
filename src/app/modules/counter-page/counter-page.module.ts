import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { CounterService } from './services/counter.service';
import { CounterPageRoutingModule } from './counter-page-routing.module';
import { CounterPageComponent } from './components/counter-page/counter-page.component';

@NgModule({
  imports: [CommonModule, CounterPageRoutingModule],
  declarations: [CounterPageComponent, CounterComponent],
  providers: [],
})
export class CounterPageModule {}
