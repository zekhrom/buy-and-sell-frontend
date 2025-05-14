import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../models/Listing.model';

@Component({
  selector: 'app-my-listings',
  imports: [RouterModule, CommonModule],
  templateUrl: './my-listings.component.html',
  styleUrl: './my-listings.component.scss',
})
export class MyListingsComponent implements OnInit {
  listings: Listing[] = [];
  isLoading = true;
  constructor(private listingService: ListingsService) {
    // Constructor logic here
  }

  ngOnInit() {
    this.listingService.getListingsByUserId().subscribe((listings) => {
      this.listings = listings;
      this.isLoading = false;
    });
  }

  deleteListing(id: number) {
    this.listingService.deleteListing(id).subscribe(() => {
      this.listings = this.listings.filter((listing) => listing.id !== id);
    });
  }
}
