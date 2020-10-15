import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../models/Car';
import {CarReq} from '../models/CarReq';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseURL = 'http://localhost:8080/cars';

  constructor(private httpClient: HttpClient) { }
  post(id: string, car: CarReq): Observable<Car> {
    return this.httpClient.post<Car>(this.baseURL.concat('/driver/', id), car);
  }
  getAll(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.baseURL);
  }
  getById(id: string): Observable<Car> {
    return this.httpClient.get<Car>(this.baseURL.concat('/', id));
  }
  put(id: string, car: CarReq): Observable<Car> {
    return this.httpClient.put<Car>(this.baseURL.concat('/', id), car);
  }
}
