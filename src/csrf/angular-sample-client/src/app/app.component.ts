import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as Cookies from 'js-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3000';
  }
  title = 'app';

  ngOnInit() {
    this.http
      .get(`${this.apiUrl}/csrftoken`)
      .toPromise()
      .then((data: any) => {
        console.log('data: ', data);
        return data.csrfToken;
      })
      .then(csrfToken => {
        // const csrfToken = Cookies.get('XSRF-TOKEN') || '';
        this.http
          .post(
            `${this.apiUrl}/api/user`,
            {},
            {
              withCredentials: true,
              headers: {
                'X-CSRF-Token': csrfToken
              }
            }
          )
          .subscribe(data => {
            console.log('user: ', data);
          });
      });
  }
}
