import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string = '';
  loading: boolean = true;
  error: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchMessage();
  }

  fetchMessage(): void {
    this.loading = true;
    this.error = null;
    
    this.apiService.getHello().subscribe({
      next: (response) => {
        this.message = response.message;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load message from server';
        this.loading = false;
        console.error('Error fetching message:', err);
      }
    });
  }
}