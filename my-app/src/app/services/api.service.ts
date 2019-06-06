import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { items } from '/Users/Brendan/Desktop/express-server/routes/cart-items.js';

@Injectable()
export class Api {
apiUrl = items;
private detailSubject;
detail;
constructor(private http: HttpClient) {
    const initialSubject = window.localStorage.getItem('items');
    const parsedSubject = JSON.parse(initialSubject);
    this.detailSubject = new BehaviorSubject(parsedSubject);
    this.detail = this.detailSubject.asObservable();
}

getAllItems = () => this.http.get(this.apiUrl);
// getDetail = url => this.http.get(url);

// getFact = () => this.http.get('http:localhost:3000');

}

