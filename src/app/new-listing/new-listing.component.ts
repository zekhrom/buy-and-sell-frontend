import { Component, OnInit } from '@angular/core';
import { Listing } from '../models/Listing.model';
import { ListingsService } from '../listings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-listing',
  imports: [FormsModule],
  templateUrl: './new-listing.component.html',
  styleUrl: './new-listing.component.scss',
})
export class NewListingComponent implements OnInit {
  id: number = 0;
  name: string = '';
  description: string = '';
  price: number = 0;
  isLoading = true;
  constructor(
    private listingService: ListingsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = parseInt(id);
      this.listingService.getListing(this.id).subscribe((listing) => {
        this.name = listing.name;
        this.description = listing.description;
        this.price = listing.price;
        this.isLoading = false;
      });
    } else {
      this.isLoading = false;
    }
  }

  onSubmit() {
    if (this.id) {
      this.listingService
        .updateListing(this.id, this.name, this.description, this.price)
        .subscribe((listing) => {
          console.log('Listing updated', listing);
          this.router.navigateByUrl('/my-listings');
        });
    } else {
      this.listingService
        .createListing(this.name, this.description, this.price)
        .subscribe((listing) => {
          console.log('Listing created', listing);
          this.router.navigateByUrl('/my-listings');
        });
    }
  }

  cancelEdit() {
    this.router.navigateByUrl('/my-listings');
  }
}
