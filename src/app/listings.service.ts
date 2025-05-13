import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Listing } from './models/Listing.model';

const httpOptions = (token: string) => ({
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  httpOptions: { headers?: HttpHeaders | Record<string, string | string[]> } = {
    headers: { 'Content-Type': 'application/json' },
  };
  constructor(private client: HttpClient, private authService: AuthService) {
    this.authService.getAccessToken()?.then((token) => {
      this.httpOptions = {
        headers: {
          ...this.httpOptions.headers,
          Authorization: `Bearer ${token}`,
        },
      };
    });
  }

  getListings(): Observable<Listing[]> {
    // Simulate an API call to fetch listings
    return this.client.get<Listing[]>(`/api/listings`, this.httpOptions);
  }

  getListing(id: number): Observable<Listing> {
    // Simulate an API call to fetch a single listing by ID
    return this.client.get<Listing>(`/api/listings/${id}`, this.httpOptions);
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
