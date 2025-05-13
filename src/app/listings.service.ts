import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Listing } from './models/Listing.model';

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  baseUrl = environment.apiUrl || 'http://localhost:3000/api';
  httpOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  constructor(private client: HttpClient) {}

  getListings(): Observable<Listing[]> {
    // Simulate an API call to fetch listings
    return this.client.get<Listing[]>(`/api/listings`);
  }

  getListing(id: number): Observable<Listing> {
    // Simulate an API call to fetch a single listing by ID
    return this.client.get<Listing>(`/api/listings/${id}`);
  }

  addViewToListing(id: number): Observable<Listing> {
    // Simulate an API call to add a view to a listing
    return this.client.post<Listing>(
      `/api/listings/${id}/view`,
      {},
      this.httpOptions
    );
  }

  getListingsByUserId(userId: number): Observable<Listing[]> {
    // Simulate an API call to fetch listings by user ID
    return this.client.get<Listing[]>(`/api/user/${userId}/listings`);
  }

  createListing(
    name: string,
    description: string,
    price: number
  ): Observable<Listing> {
    // Simulate an API call to create a new listing
    return this.client.post<Listing>(
      `/api/listings`,
      { name, description, price },
      this.httpOptions
    );
  }

  updateListing(
    id: number,
    name: string,
    description: string,
    price: number
  ): Observable<Listing> {
    // Simulate an API call to update an existing listing
    return this.client.put<Listing>(
      `/api/listings/${id}`,
      { name, description, price },
      this.httpOptions
    );
  }
  deleteListing(id: number): Observable<void> {
    // Simulate an API call to delete a listing
    return this.client.delete<void>(`/api/listings/${id}`);
  }
}
