import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Address} from '../models/Address';

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
}
