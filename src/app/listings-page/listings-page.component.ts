import { Component, OnInit } from '@angular/core';
import { Listing } from '../models/Listing.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listings-page',
  imports: [RouterModule, CommonModule],
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.scss',
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingService: ListingsService) {}

  ngOnInit() {
    this.listingService.getListings().subscribe((listings) => {
      this.listings = listings;
    });
  }
}
