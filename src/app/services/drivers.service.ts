import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Driver} from '../models/Driver';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  private baseURL = 'http://localhost:8080/drivers';

  constructor(private httpClient: HttpClient) { }
  post(driver: Driver): Observable<Driver> {
    return this.httpClient.post<Driver>(this.baseURL, driver);
  }
  getAll(): Observable<Driver[]> {
    return this.httpClient.get<Driver[]>(this.baseURL);
  }
  getById(id: string): Observable<Driver> {
    return this.httpClient.get<Driver>(this.baseURL.concat('/', id));
  }
  put(id: string, driver: Driver): Observable<Driver> {
    return this.httpClient.put<Driver>(this.baseURL.concat('/', id), driver);
  }

}
