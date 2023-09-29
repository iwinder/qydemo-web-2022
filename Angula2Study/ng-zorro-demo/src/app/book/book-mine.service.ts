import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise'
import { Book } from 'app/book/book';
import 'rxjs/add/operator/map';
@Injectable()
export class BookMineService {
    private booksUrl = 'api/books';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { };

    getUname(uname: string): Observable<Book[]> {
        const url = `${this.booksUrl}`;
        const  params = {
            'uname': uname
        }
        return this.http.get(`${url}/?uname=${uname}`)
            .map(response => response.json().data as Book[]);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
}
