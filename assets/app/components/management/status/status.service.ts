import { Status } from "./status.model"
import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";

import {Observable} from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class StatusService {

    private status : Status[] = [];

    constructor(private http: Http){}

    createStatus(status : Status){

        const requestBody   = JSON.stringify(status);
        const headers       = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/getStatus', requestBody, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));

    }

    getStatus(){

        return this.http.get('http://localhost:3000/getStatus')
            .map((response: Response) => {
                return this.status = response.json().obj;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

}