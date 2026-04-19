import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css',
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  trips!: Trip[];
  message: string = '';

  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) {}

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  private getStuff(): void {
    this.tripDataService.getTrips().subscribe({
      next: (value: any) => {
        this.trips = value;
        this.message = value.length > 0
          ? `There are ${value.length} trips available.`
          : 'There were no trips retrieved from the database';
        console.log(this.message);
      },
      error: (error: any) => console.log('Error: ' + error)
    });
  }

  ngOnInit(): void {
    this.getStuff();
  }
}
