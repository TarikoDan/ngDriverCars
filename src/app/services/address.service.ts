import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Address} from '../models/Address';
import {Driver} from '../models/Driver';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  baseUrl = 'http://localhost:8080/addresses';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Address[]> {
    return this.httpClient.get<Address[]>(this.baseUrl);
  }
  getById(id: string): Observable<Address>{
    return this.httpClient.get<Address>(this.baseUrl.concat('/', id));
  }
  post(address: Address): Observable<Address> {
    return this.httpClient.post<Address>(this.baseUrl, address);
  }
  postWithDriver(address: Address, driverId: number): Observable<Address> {
    return this.httpClient.post<Address>(this.baseUrl.concat('/driver/', driverId.toString()), address);
  }

}
