import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListPageModule } from './modules/list-page/list-page.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ListPageModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
