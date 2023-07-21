import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(public _http: HttpClient) { }

  getGooglesData() {
    return this._http.get('assets/json/googles.json');
  }
  
  
}
