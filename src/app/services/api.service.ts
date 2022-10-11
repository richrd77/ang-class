import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable()
export class apiService {
    GetEmployee() {
        return of('From api service');
    }
}