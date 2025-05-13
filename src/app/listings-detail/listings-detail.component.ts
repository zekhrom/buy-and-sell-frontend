import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../models/Listing.model';
import { ListingsService } from '../listings.service';
import { log } from 'console';

@Component({
  selector: 'app-listings-detail',
  imports: [],
  templateUrl: './listings-detail.component.html',
  styleUrl: './listings-detail.component.scss',
})
export class ListingsDetailComponent implements OnInit {
  listing: Listing | null = null;
  isLoading = true;
  constructor(
    private route: ActivatedRoute,
    private listingService: ListingsService
  ) {
    // Constructor logic here
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.listingService.getListing(parseInt(id, 10)).subscribe((listing) => {
        this.listing = listing;
        this.isLoading = false;
      });
      this.listingService
        .addViewToListing(parseInt(id, 10))
        .subscribe((listing) => {
          console.log('View added', listing);
        });
    }
  }
}
