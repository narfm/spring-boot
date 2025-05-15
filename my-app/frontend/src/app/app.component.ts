import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular + Spring Boot App';
  greeting: string = '';
  loading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchGreeting();
  }

  fetchGreeting() {
    this.loading = true;
    this.http.get<any>(`${environment.apiUrl}/greeting`)
      .subscribe({
        next: (data) => {
          this.greeting = data.message;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error fetching greeting', error);
          this.greeting = 'Error connecting to backend service.';
          this.loading = false;
        }
      });
  }
}