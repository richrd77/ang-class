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
import { HttpClientModule } from '@angular/common/http';
import { FakeComponent } from './components/fake/fake.component';

@NgModule({
  declarations: [
    RootComponent,
    FirstComponent,
    ChildComponent,
    FirstDirective,
    TestComponent,
    TempComponent,
    NewComponent,
    FakeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ChildComponent },
      { path: 'temp', component: TempComponent },
      { path: 'test', component: TestComponent },
      { path: 'new', component: NewComponent },
      { path: 'fake', component: FakeComponent },
    ]),
    FormsModule,
    HttpClientModule,
  ],
  providers: [apiService, EmployeeService],
  exports: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
