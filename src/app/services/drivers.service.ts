import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Driver} from '../models/Driver';
import {Observable} from 'rxjs';
import {Address} from '../models/Address';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  private baseURL = 'http://localhost:8080/drivers';

  constructor(private httpClient: HttpClient) { }
  post(driver: Driver): Observable<Driver> {
    return this.httpClient.post<Driver>(this.baseURL, driver);
  }
  postWithAddress(driver: Driver, addressId: string): Observable<Driver> {
    return this.httpClient.post<Driver>(this.baseURL.concat('/address/', addressId), driver);
  }
  getAll(): Observable<Driver[]> {
    return this.httpClient.get<Driver[]>(this.baseURL);
  }
  getByAddress(addressId: string): Observable<Driver[]> {
    return this.httpClient.get<Driver[]>(this.baseURL.concat('/address/', addressId));
  }
  getById(id: string): Observable<Driver> {
    return this.httpClient.get<Driver>(this.baseURL.concat('/', id));
  }
  put(id: string, driver: Driver): Observable<Driver> {
    return this.httpClient.put<Driver>(this.baseURL.concat('/', id), driver);
  }
  remove(id: string): void {
    this.httpClient.delete(this.baseURL.concat('/', id));
  }
  clear(): void {
    this.httpClient.delete(this.baseURL.concat('/clear'));
  }

}
