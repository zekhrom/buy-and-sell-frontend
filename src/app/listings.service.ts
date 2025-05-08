import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from './models/Listing.model';

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  baseUrl = 'http://localhost:3000/';
  constructor(private client: HttpClient) {}

  getListings(): Observable<Listing[]> {
    // Simulate an API call to fetch listings
    return this.client.get<Listing[]>(`${this.baseUrl}api/listings`);
  }
}
