import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

interface Testimonial {
  name: string,
  keyfigures: number;
  image: string; // URL to the profile image
}

@Component({
  selector: 'app-keyfigures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keyfigures.component.html',
  styleUrls: ['./keyfigures.component.css'],
})
export class KeyfiguresComponent implements OnInit {
  data: any;
  testimonials: Testimonial[] = [];

  constructor(private dataService: DataService) {}

  // Use ngOnInit to ensure data is ready before initializing testimonials
  ngOnInit() {
    this.data = this.dataService.getData().keyfigures;
    console.log("data is ", this.data)
    // Now initialize testimonials after data is fetched
    this.testimonials = [
      {
        name: 'Nombre d’inscrit',
        keyfigures: this.data[0].registered,
        image: './../../assets/images/testinomial1.png',
      },
      {
        name: 'Nombre de sortie réussit',
        keyfigures: this.data[0].successfull_exist,
        image: './../../assets/images/keyfigures2.png',
      },
      {
        name: 'Nombre d’activités',
        keyfigures: this.data[0].activities,
        image: './../../assets/images/keyfigures3.png',
      },
    ];
  }
}
