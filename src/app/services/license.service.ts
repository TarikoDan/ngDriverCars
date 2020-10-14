import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {License} from '../models/License';
import {LicenseReq} from '../models/LicenseReq';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {
  private baseURL = 'http://localhost:8080/licenses';

  constructor(private httpClient: HttpClient) { }
  post(id: string, license: LicenseReq): Observable<License> {
    return this.httpClient.post<License>(this.baseURL.concat('/driver/', id), license);
  }
  getAll(): Observable<License[]> {
    return this.httpClient.get<License[]>(this.baseURL);
  }
  getById(id: string): Observable<License> {
    return this.httpClient.get<License>(this.baseURL.concat('/', id));
  }
  put(id: string, license: LicenseReq): Observable<License> {
    return this.httpClient.put<License>(this.baseURL.concat('/', id), license);
  }
}
