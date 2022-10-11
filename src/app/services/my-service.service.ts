import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MyService {
    display() {
        alert('from service');
    }

    GetTwo() {
        let numberTwo = 'pradeep';
        return numberTwo;
    }
}