import { Injectable } from '@angular/core';
import { HttpRequestOptions } from '../../models/http-request.options';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get(options: HttpRequestOptions) {
    let params = new HttpParams();
    for (const key in options.qs) {
      if (options.qs.hasOwnProperty(key)) {
        params = params.append(key, options.qs[key]);
      }
    }

    let headers = new HttpHeaders();
    for (const key in options.headers) {
      if (options.headers.hasOwnProperty(key)) {
        headers = headers.append(key, options.headers[key]);
      }
    }
    return this.http.get(options.host, { headers: headers, params: params }).pipe(catchError(this.handleError));
  }

  public post(options: HttpRequestOptions) {

    let params = new HttpParams();
    for (const key in options.qs) {
      if (options.qs.hasOwnProperty(key)) {
        params = params.append(key, options.qs[key]);
      }
    }

    let headers = new HttpHeaders();
    for (const key in options.headers) {
      if (options.headers.hasOwnProperty(key)) {
        headers = headers.append(key, options.headers[key]);
      }
    }

    return this.http.post(options.host, options.body, { headers: headers, params: params }).pipe(catchError(this.handleError));
  }


  private handleError(response) {

    const body = Object.create({});
    body.status = response.status;
    body.message = response.error.message;
    return throwError(body);
  }
}
