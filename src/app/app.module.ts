import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { ChildComponent } from './components/child/child.component';
import { FormsModule } from '@angular/forms';
import { FirstDirective } from './directives/first.directive';

@NgModule({
  declarations: [
    RootComponent,
    FirstComponent,
    ChildComponent,
    FirstDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  exports:[],
  bootstrap: [RootComponent]
})
export class AppModule { }
