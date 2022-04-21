import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageRoutingModule } from './list-page-routing.module';
import { ListPageComponent } from './components/list-page/list-page.component';
import { ListComponent } from './components/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppendSignPipe } from './pipes/append-sign.pipe';

@NgModule({
  imports: [CommonModule, ListPageRoutingModule, HttpClientModule],
  declarations: [ListPageComponent, ListComponent, AppendSignPipe],
})
export class ListPageModule {}
