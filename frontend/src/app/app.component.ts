import { Component } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'starter-quiz';
  data: any = {};
  apiUrl = 'http://localhost:9428/api/';

  constructor(
    private http: HttpClient) {
  }
}
