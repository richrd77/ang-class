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
import { NewComponent } from './components/new/new.component';
import { apiService } from './services/api.service';
import { EmployeeService } from './services/employee.service';

@NgModule({
  declarations: [
    RootComponent,
    FirstComponent,
    ChildComponent,
    FirstDirective,
    TestComponent,
    TempComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ChildComponent },
      { path: 'temp', component: TempComponent },
      { path: 'test', component: TestComponent },
      { path: 'new', component: NewComponent },
    ]),
    FormsModule
  ],
  providers: [apiService, EmployeeService],
  exports: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
