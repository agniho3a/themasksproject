import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Spreadsheet } from '../interfaces/spreadsheet';

@Injectable({
  providedIn: 'root'
})
export class JsonbinService {

  constructor(private http: HttpClient) { }

  getTestJSONBin() {
    return this.http.get('https://api.jsonbin.io/b/5ea2af382940c704e1ddc070/1');
  }


  getExportedOrders(): Observable<Spreadsheet> {
    const headers = new HttpHeaders().set('secret-key', '$2b$10$wYtUScsFoIL9TLUJbYisbOVzxYtfcqPw/avdcVo5agIISO4wS6e2C');

    return this.http.get<Spreadsheet>('https://api.jsonbin.io/b/5ea2518d98b3d53752338d40', { headers });

  }
}
