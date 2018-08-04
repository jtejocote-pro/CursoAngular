import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ServicePruebaService {
    
    constructor(private http: HttpClient){}

    public getCountriesCatalogue<T>(): Observable<T>{
        const headers = new HttpHeaders();
        const httpOptions = {
            headers: new HttpHeaders({
              'Access-Control-Allow-Origin' : '*',
            })
          };
        return this.http.get<T>('http://192.168.1.185/WebSite/Service.svc/GetUsers?name=Sergio', httpOptions);
    }
}