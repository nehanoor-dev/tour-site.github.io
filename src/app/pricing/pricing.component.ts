import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent {
  package1:any
  package2:any
  package3:any
  package4:any

  constructor(private dataService: DataService){
    this.package1 = this.dataService.getData().pricing[0];
    this.package2 = this.dataService.getData().pricing[1];
    this.package3 = this.dataService.getData().pricing[2];
    this.package4 = this.dataService.getData().pricing[3];

  }
  formatStatistical(statistical: string): string {
    return statistical.split(',').join('<br />');
  }
   
}
