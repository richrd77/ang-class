import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  constructor() { }

  MyFunction(): Observable<string> {
    return of('first value from service common for both').pipe(
      map(s => {
      return s + ' from pipe';
    }), catchError((e, c) => {
      console.log(e);
      return EMPTY;
    }));
  }
}
