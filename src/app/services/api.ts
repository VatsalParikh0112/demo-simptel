import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private url = 'https://jsonplaceholder.typicode.com/users?_limit=3';
  private http = inject(HttpClient);


  getUser() {
    return this.http.get(this.url);
  }

  getUserById(id: number): Observable<users[]> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<users[]>(this.url, { params });
  }

  addUser(user: users[]): Observable<any> {
    return this.http.post(this.url, user);
  }

  deleteUser(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<users[]>(this.url, { params });
  }
}