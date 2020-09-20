import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { components } from './components';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [AppComponent, ...components],
  imports: [BrowserModule, AppRoutingModule, FormsModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
