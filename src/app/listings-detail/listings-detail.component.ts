import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../models/Listing.model';

@Component({
  selector: 'app-listings-detail',
  imports: [],
  templateUrl: './listings-detail.component.html',
  styleUrl: './listings-detail.component.scss',
})
export class ListingsDetailComponent implements OnInit {
  listing: Listing | null = null;
  constructor(private route: ActivatedRoute) {
    // Constructor logic here
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Fetch the listing details using the id
      console.log('Listing ID:', id);
      // You can use this ID to fetch data from a service or API
      this.listing = {
        id: parseInt(id, 10),
        name: 'Listing ' + id,
        description: 'Description for listing ' + id,
        price: 100 * parseInt(id, 10),
        views: 10 * parseInt(id, 10),
      };
    }
  }
}
