import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

// Define the Sponsor type
interface Sponsor {
  image: string;
}

@Component({
  selector: 'app-sponsers',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sponsers.component.html',
  styleUrls: ['./sponsers.component.css']
})
export class SponsersComponent {
  // Define the sponsors array type
  sponsors: Sponsor[] = [
    { image: './../../assets/images/sponsor1.png' },
    { image: './../../assets/images/sponsor2.png' },
    { image: './../../assets/images/sponsor3.png' },
    { image: './../../assets/images/sponsor4.png' },
    { image: './../../assets/images/sponsor5.png' },
    { image: './../../assets/images/sponsor1.png' },
    { image: './../../assets/images/sponsor2.png' }
  ];

  // Define visibleSponsors to have the same type as sponsors
  visibleSponsors: Sponsor[] = [];

  private currentIndex = 0;
  private maxVisible = 5;

  constructor() {
    this.updateVisibleSponsors();
  }

  // Update visible sponsors to show only maxVisible (5 at a time)
  updateVisibleSponsors() {
    this.visibleSponsors = this.sponsors.slice(this.currentIndex, this.currentIndex + this.maxVisible);
  }

  // Go to the next set of sponsors
  next() {
    if (this.currentIndex + this.maxVisible < this.sponsors.length) {
      this.currentIndex++;
      this.updateVisibleSponsors();
    }
  }

  // Go to the previous set of sponsors
  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleSponsors();
    }
  }
}
