import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  checkImg(img) {
    return this.http.post('/api/check', {img})
  }

  addToDb(type, img) {
    return this.http.post('/api/methods/' + type, {img})
  }

  m5updateEdges(blurRadius, trasholdL, trasholdU) {
    return this.http.post('/api/methods/5', {blurRadius, trasholdL, trasholdU})
  }

}
