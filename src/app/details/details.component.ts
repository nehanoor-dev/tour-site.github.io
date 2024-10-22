import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgIf, MatIconModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  selectedTab = 0; // Default to the first tab

  selectTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }
}
