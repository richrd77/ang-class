import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { apiService } from "./api.service";

@Injectable()
export class EmployeeService {

    constructor(private apiService: apiService) { }

    ModifyData() {
        return this.apiService.GetEmployee().pipe(
            map((stringData) => {
                return stringData + ' from Employee also';
            })
        );
    }
}