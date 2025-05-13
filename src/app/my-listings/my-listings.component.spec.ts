import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsService } from '../listings.service';
import { Listing } from '../models/Listing.model';
import { MyListingsComponent } from './my-listings.component';

describe('MyListingsComponent', () => {
  let component: MyListingsComponent;
  let fixture: ComponentFixture<MyListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyListingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('MyListingsComponent', () => {
    let component: MyListingsComponent;
    let fixture: ComponentFixture<MyListingsComponent>;
    let mockListingsService: jasmine.SpyObj<ListingsService>;

    const mockListings: Listing[] = [
      { id: 1, name: 'Listing 1', description: 'Description 1', price: 100 },
      { id: 2, name: 'Listing 2', description: 'Description 2', price: 200 },
    ];

    beforeEach(async () => {
      mockListingsService = jasmine.createSpyObj('ListingsService', [
        'getListingsByUserId',
        'deleteListing',
      ]);

      await TestBed.configureTestingModule({
        imports: [MyListingsComponent],
        providers: [
          { provide: ListingsService, useValue: mockListingsService },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(MyListingsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
