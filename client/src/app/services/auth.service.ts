import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = null

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post<{token}>('/api/auth/login', user)
      .pipe(
        tap(({token}) => {
          localStorage.setItem('auth-token', token)
          this.setToken(token)
        })
      )
  }

  setToken(token) {
    this.token = token
  }

  getToken() {
    return this.token
  }

  isAuth() {
    return !!this.token
  }

  logout() {
    this.setToken(null)
    localStorage.clear()
  }

  reg(user) {
    return this.http.post('/api/auth/reg', user)
  }

}
