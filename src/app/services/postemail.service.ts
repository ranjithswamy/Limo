import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostemailService {

  baseUrl: string = "https://formsubmit.co/ajax/ranjithswamy@gmail.com";

  constructor(private http: HttpClient) { }

  sendEmail(data: any): Observable<any> {
    let body = {
      name : "FormSubmit",
      message : data
    }

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json')
              .set('Accept','application/json');

    return this.http.post(this.baseUrl, JSON.stringify(body), {headers: headers});
  }
}
