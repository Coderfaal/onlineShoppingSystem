import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = 'http://localhost:9090';

  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post(`${this.API}/auth/register`, data);
  }

  verifyOtp(data: any) {
  return this.http.post(`${this.API}/auth/verify-otp`, data);
}

login(data: any) {
  return this.http.post(`${this.API}/auth/login`, data);
}

saveToken(token: string) {
  localStorage.setItem('token', token);
}

getToken() {
  return localStorage.getItem('token');
}

logout() {
  localStorage.removeItem('token');
}



}

