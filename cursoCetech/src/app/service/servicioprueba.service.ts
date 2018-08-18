import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { model } from "../model/model";

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

    /**
     * @method getUsersCatalogue servicio para obtener usuarios
     * @returns este metodo es de tipo void no regresa nada
     */
    getUsersCatalogue<T>(): Observable<T>{
        return this.http.get<T>('https://jsonplaceholder.typicode.com/posts');
    }



    postBBVACatalogue<T>(): Observable<T>{

        return this.http.post<T>('https://wqdkexujl4.execute-api.us-east-1.amazonaws.com/pro/cp/getmessage',
        {"header":{"idBlogLog":"","reservationNumber":""},"languagecode":"es","version":""} );
    }

    postBBVACatalogueWhitObj<T>(obj: model): Observable<T>{

        return this.http.post<T>('https://wqdkexujl4.execute-api.us-east-1.amazonaws.com/pro/cp/getmessage',obj );
    }    
}