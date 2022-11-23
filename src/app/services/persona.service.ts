import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) { }

  getPersonas() {
    let header = new HttpHeaders().set('Type-Content', 'aplication/json')

    return this.http.get(this.url, {
      headers: header
    });
  }
}
