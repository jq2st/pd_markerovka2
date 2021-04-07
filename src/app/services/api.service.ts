import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  prefx = 'http://localhost:5000/'

  constructor(private http: HttpClient) { }

  m5updateEdges(blurRadius, trasholdL, trasholdU) {
    return this.http.post('/api/methods/5', {blurRadius, trasholdL, trasholdU})
  }

}
