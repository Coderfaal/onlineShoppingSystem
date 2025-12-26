import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API = 'http://localhost:9090';

  constructor(private http: HttpClient) {}

  getProfile() {
    return this.http.get(`${this.API}/users/me`);
  }
}
