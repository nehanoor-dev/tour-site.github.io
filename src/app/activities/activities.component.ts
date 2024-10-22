import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ], 
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent {
  // Define an array of activities
  activities = [
    {
      title: 'Créer avec vos amis, des sacs à mains qui vous ressemble 👜',
      image: './../../assets/images/activity.png',
      buttonText: 'Atelier',
      company: 'Entreprise',
      location: 'Lyon, France',
    },
    {
      title: 'Faites du VTT avec des guides reconnues',
      image: './../../assets/images/tab2.png',
      buttonText: 'Nature',
      company: 'Enterprise',
      location: 'Lyonn, France',
    },
    {
      title: 'Faites une soiree karaoke pour partager les talents!',
      image: './../../assets/images/activity.png',
      buttonText: 'Talent Cache',
      company: 'Enterprise',
      location: 'Lyonn, France',
    },
  ];

  // Index of the currently displayed activity
  currentIndex = 0;

  // Method to go to the previous activity
  nextActivity() {
    if (this.currentIndex < this.activities.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Optionally loop back to the first activity
    }
  }

  // Method to navigate to the previous activity
  previousActivity() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.activities.length - 1; // Optionally loop back to the last activity
    }
  }
}
