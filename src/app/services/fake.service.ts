import { Injectable } from "@angular/core";
import { EMPTY, Observable, Observer } from "rxjs";
import { User } from "../models/user";
import { HttpClient } from '@angular/common/http';
import { catchError, map } from "rxjs/operators";

@Injectable()
export class FakeService {

    //HttpClient -> GET, POST, PUT, DELETE
    // Dependency Inject -> httpClient
    // HttpClientModule -> imported in appModule
    // SOLID -> Singular, Open Close, Liskov subsitution, Interface, DenendcyInverse

    constructor(private httpClient123: HttpClient) { }

    url = 'https://jsonplaceholder.typicode.com/users';

    GetUsers(): Observable<User[]> {
        return this.httpClient123.get<User[]>(this.url)
            .pipe(catchError(e => {
                alert('error occured');
                return EMPTY;
            }));
    }

    PostNewUser(newUser: User): Observable<number> {
        return this.httpClient123.post(this.url, newUser)
            .pipe(map((response: any) => response.id));
    }

    UpdateUser(newUser: User): Observable<User> {
        return this.httpClient123.patch<User>(this.url + '/' + newUser.id, newUser);
    }

    DeleteUser(id: number): Observable<any> {
        return this.httpClient123.delete(this.url + '/' + id);
    }
}