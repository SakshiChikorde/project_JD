import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CommonApiCallServicesService {
  journey!: string;
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  postApiCall(endpoint: string, formData: any) {
    let url = this.url + endpoint;
    return this.http.post(url, formData);
  }
}
