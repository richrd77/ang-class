import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { ChildComponent } from './components/child/child.component';
import { FormsModule } from '@angular/forms';
import { FirstDirective } from './directives/first.directive';
import { TestComponent } from './components/test/test.component';
import { RouterModule } from '@angular/router';
import { TempComponent } from './components/temp/temp.component';

@NgModule({
  declarations: [
    RootComponent,
    FirstComponent,
    ChildComponent,
    FirstDirective,
    TestComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ChildComponent },
      { path: 'temp', component: TempComponent },
      { path: 'test', component: TestComponent }
    ]),
    FormsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
