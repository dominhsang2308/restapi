import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENVIROMENT } from './enviroment';
import { MockApi } from './mockapi.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpclient: HttpClient) {}
  // getHeroes() {
  //   return HEROES;
  // }
  // getApi() {
  //   return 'vaoday';
  // }
  // getNumber() {
  //   return 1234;
  // }
  // getChu() {
  //   return 'Sang';
  // }

  getMockApi(): Observable<MockApi[]> {
    console.log(ENVIROMENT.apiURL);
    return this.httpclient.get<MockApi[]>(ENVIROMENT.apiURL);
  }
  // getPosts(){
  //   console.log(ENVIROMENT.apiURL+ "/posts");
  //   return this.httpclient.get(ENVIROMENT.apiURL + "/posts");
  // }
}
